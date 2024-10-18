import { auth } from "@/lib/auth";
import {
  GetTransactionDetailsByCustomerId,
  GetTransactionsByUserId,
} from "@/lib/services_api";
import { DaumTransactions } from "@/types/Transactions";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page() {
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

  groupedByTime.sort(
    (a, b) =>
      new Date(b.time_transaction).getTime() -
      new Date(a.time_transaction).getTime()
  );

  const length = groupedByTime.length;
  return length <= 0 ? (
    <section>
      <h1 className="text-3xl font-bold mb-4">Lịch sử thanh toán</h1>
      <p>
        Bạn chưa có lịch sử thanh toán nào{" "}
        <span>
          <Link className="underline text-blue-default" href="/">
            Nhấn vào đây
          </Link>{" "}
          để về trang chủ và chọn phim
        </span>
      </p>
    </section>
  ) : (
    <section>
      <h1 className="text-3xl font-bold mb-4">Lịch sử xem</h1>
      <p className="text-sm text-gray-400 mb-8">Tổng lịch sử xem: {length}</p>
      <div className="space-y-4">
        {groupedByTime.map((gr) => (
          <div
            key={gr.time_transaction}
            className="rounded-md bg-gray-200 p-2 shadow flex gap-4 w-full"
          >
            <Image
              alt=""
              src={`/${gr.transactions[0].movie.thumbnail}`}
              width={300}
              height={400}
              className="aspect-[2/3] object-cover w-20 rounded-md"
            />
            <div className="w-full">
              <div className="flex gap-2 font-bold text-lg mb-2">
                <p>{gr.transactions[0].movie.name}</p>
                <div className="rounded-sm font-bold text-sm text-white p-1 bg-orange-400">
                  T{gr.transactions[0].movie.old}
                </div>
              </div>
              <p className="text-sm mb-2 truncate w-[60%]">
                {gr.transactions.map((t) =>
                  t.foods_drinks
                    .map((fd) => `${fd.quantity}x ${fd.name}`)
                    .join(", ")
                )}
              </p>
              <p className="text-sm mb-2">
                <span>{gr.transactions[0].cinema.name}</span> -{" "}
                <span className="font-medium">
                  {gr.transactions[0].sreenroom.name}
                </span>
              </p>
              <p className="text-sm">
                <span className="font-bold">
                  {format(gr.transactions[0].showtime.time_start, "HH:mm")}
                </span>
                {" - "}
                <span>
                  {format(gr.transactions[0].showtime.time_start, "eeee", {
                    locale: vi,
                  })}
                </span>
                {", "}
                <span className="font-bold">
                  {format(
                    gr.transactions[0].showtime.time_start,
                    "dd/MM/yyyy",
                    {
                      locale: vi,
                    }
                  )}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
