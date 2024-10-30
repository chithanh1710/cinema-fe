import { ButtonReloadPage } from "@/components/Button/ButtonReloadPage";
import { ResetFoodDrinkButton } from "@/components/shared/SelectFoodAndDrink";
import { auth } from "@/lib/auth";
import {
  GetSeatsByShowtime,
  GetCustomer,
  GetTransactionDetailsByCustomerId,
} from "@/lib/services_api";
import { searchParamsProps } from "@/types/Param";
import { formatMoney } from "@/utils/utils";
import { redirect } from "next/navigation";

export const revalidate = 0;

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { QRCodeComponent } from "@/components/shared/QRCode";

export default async function page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  const id = searchParams.idShowTime;
  if (!id) return redirect("/booking/step1");
  const showtimeId = Number(id);
  const seats = await GetSeatsByShowtime(showtimeId);
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { user } = session;

  const selectedSeat = seats.filter(
    (s) => s.status === "ĐANG GIỮ" && s.reservedBy === user.id
  );

  const selectedSeatId = selectedSeat.map((s) => s.id_seat)[0];

  const data = await GetTransactionDetailsByCustomerId(user.id);

  const foodItems = data.data.filter((d) => d.FoodDrinkQuantity != null);
  const seatItems = Object.values(
    data.data.reduce((acc: any, item) => {
      // Kiểm tra xem TransactionId đã tồn tại trong acc chưa
      if (!acc[item.TransactionId]) {
        acc[item.TransactionId] = item; // Nếu chưa, thêm item vào acc
      }
      return acc;
    }, {})
  );

  // Gộp các đối tượng theo GenreSeat
  const groupedData = seatItems.reduce((acc: any[], item: any) => {
    const genre = item.GenreSeat;

    // Tìm nhóm đã tồn tại dựa trên GenreSeat
    const existingGroup = acc.find((group: any) => group.GenreSeat === genre);

    if (existingGroup) {
      existingGroup.SeatCount += 1;
    } else {
      // Nếu chưa tồn tại, tạo một nhóm mới
      acc.push({
        GenreSeat: genre,
        SeatCount: 1,
        SeatPrice: item.SeatPrice,
      });
    }

    return acc;
  }, []);

  const totalAmountFoodItems = foodItems.reduce(
    (total, f) => (total += f.FoodDrinkPrice * f.FoodDrinkQuantity),
    0
  );
  const totalAmountSeatItems = groupedData.reduce(
    (total: number, s: any) => (total += s.SeatCount * s.SeatPrice),
    0
  );

  const totalAmount = totalAmountFoodItems + totalAmountSeatItems;
  return (
    <section className="container_custom mt-4 relative">
      <div className="flex gap-10 max-lg:flex-col">
        <div className="w-full flex flex-col gap-2">
          <div className="flex lg:flex-row-reverse gap-4 lg:self-start self-end">
            <ButtonReloadPage />
            <ResetFoodDrinkButton
              customerId={user.id}
              selectedSeatId={selectedSeatId}
            />
          </div>
          <Table>
            <TableCaption>Chi tiết hoá đơn</TableCaption>
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead>Hoá đơn</TableHead>
                <TableHead>Số lượng</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead className="text-right">Thành tiền</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groupedData.map((s: any) => (
                <TableRow key={s.SeatId}>
                  <TableCell className="font-medium">{s.GenreSeat}</TableCell>
                  <TableCell>{s.SeatCount}</TableCell>
                  <TableCell>{formatMoney(s.SeatPrice)} </TableCell>
                  <TableCell className="text-right">
                    {formatMoney(s.SeatCount * s.SeatPrice)}
                  </TableCell>
                </TableRow>
              ))}
              {foodItems.map((f: any) => (
                <TableRow key={f.FoodDrinkName}>
                  <TableCell className="font-medium">
                    {f.FoodDrinkName}
                  </TableCell>
                  <TableCell> {f.FoodDrinkQuantity} </TableCell>
                  <TableCell> {formatMoney(f.FoodDrinkPrice)}</TableCell>
                  <TableCell className="text-right">
                    {formatMoney(f.FoodDrinkPrice * f.FoodDrinkQuantity)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className="bg-gray-300">
              <TableRow>
                <TableCell colSpan={3}>Tổng cộng</TableCell>
                <TableCell className="text-right">
                  {formatMoney(totalAmount)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <div className="w-full">
          <QRCodeComponent
            selectedSeatId={selectedSeatId}
            customerId={user.id}
          />
        </div>
      </div>
    </section>
  );
}
