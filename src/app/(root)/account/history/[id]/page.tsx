import { auth } from "@/lib/auth";
import { GetTransactionsByUserId } from "@/lib/services_api";
import { paramsProps } from "@/types/Param";
import { DaumTransactions } from "@/types/Transactions";
import { formatMoney } from "@/utils/utils";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import Image from "next/image";
import { redirect } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import React from "react";

export const revalidate = 0;

export default async function page({ params }: { params: paramsProps }) {
  const { id } = params;
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const { data: transactions } = await GetTransactionsByUserId(session.user.id);

  const groupedByTime: {
    time_transaction: string;
    transactions: DaumTransactions[];
  }[] = Object.values(
    transactions.reduce((acc: any, transaction) => {
      const time = transaction.time_transaction;

      // If the time_transaction already exists, push the transaction into that group
      if (!acc[time]) {
        acc[time] = { time_transaction: time, transactions: [] };
      }

      acc[time].transactions.push(transaction);
      return acc;
    }, {})
  );

  const data = groupedByTime.find(
    (gr) =>
      `${session.user.id}${new Date(gr.time_transaction).getTime()}` ===
      decodeURIComponent(id)
  );

  if (!data) throw new Error("No found data!");

  const totalAmount = data.transactions.reduce(
    (total, cur) => (total += cur.total_amount),
    0
  );

  return (
    <section className="text-sm flex items-start justify-center">
      <div className="p-4 bg-gray-100 border-t-8 border-orange-500 rounded-md min-w-[300px] max-w-[500px] w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <Image
            alt=""
            src={`${data.transactions[0].movie.thumbnail}`}
            width={300}
            height={400}
            className="aspect-[2/3] w-32"
          />
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-lg">
              {data.transactions[0].movie.name}
            </h4>
            <div className="rounded-sm font-bold text-sm text-white p-1 bg-orange-400">
              T{data.transactions[0].movie.old}
            </div>
          </div>
        </div>
        <p className="text-sm mb-2">
          <span>{data.transactions[0].cinema.name}</span> -{" "}
          <span className="font-medium">
            {data.transactions[0].sreenroom.name}
          </span>
        </p>
        <p className="text-sm">
          <span className="font-bold">
            {format(data.transactions[0].showtime.time_start, "HH:mm")}
          </span>
          {" - "}
          <span>
            {format(data.transactions[0].showtime.time_start, "eeee", {
              locale: vi,
            })}
          </span>
          {", "}
          <span className="font-bold">
            {format(data.transactions[0].showtime.time_start, "dd/MM/yyyy", {
              locale: vi,
            })}
          </span>
        </p>
        <QRCodeSVG value={id} className="mx-auto" />
        <div className="border-y-2 border-dotted border-gray-300 py-2">
          <p className="text-sm mb-2 truncate w-full">
            {data.transactions.map((t) =>
              t.foods_drinks
                .map((fd) => `${fd.quantity}x ${fd.name}`)
                .join(", ")
            )}
          </p>
          <p>
            Ghế -{" "}
            {data.transactions
              .map((t) =>
                t.ticket.genre_seats !== "Ghế đôi"
                  ? `${t.ticket.number_of_row}${t.ticket.number_of_column}`
                  : `${t.ticket.number_of_row}${t.ticket.number_of_column}` +
                    ", " +
                    `${t.ticket.number_of_row}${t.ticket.number_of_column + 1}`
              )
              .join(", ")}
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <span>Mã vé</span>
            <br />
            <span className="font-semibold">{id}</span>
          </p>
          <p>
            <span>Stars</span>
            <br />
            <span className="font-semibold">
              {data.transactions[0].movie.star}
            </span>
          </p>
          <p>
            <span>Đã thanh toán</span>
            <br />
            <span className="font-semibold">{formatMoney(totalAmount)}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
