"use client";
import { seatAction } from "@/lib/actions";
import { GetSeatsByShowtime } from "@/lib/services_api";
import { Customer } from "@/types/Customer";
import { Seat } from "@/types/GetSeatsByShowtime";
import { useEffect, useState } from "react";

const groupSeatsByRow = (seats: Seat[]) => {
  return seats.reduce((acc: any, seat) => {
    if (!acc[seat.number_of_row]) {
      acc[seat.number_of_row] = [];
    }
    acc[seat.number_of_row].push(seat);
    return acc;
  }, {});
};

export const SeatMap = ({
  user,
  showTimeId,
  dataSeats,
}: {
  user: Customer;
  showTimeId: number;
  dataSeats: Seat[];
}) => {
  const [seats, setSeats] = useState<Seat[]>(dataSeats);

  useEffect(() => {
    const fetchSeats = async () => {
      const updatedSeats = await GetSeatsByShowtime(showTimeId);
      setSeats(updatedSeats);
    };

    const intervalId = setInterval(() => {
      fetchSeats();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [showTimeId]);
  const groupedSeats = groupSeatsByRow(seats);
  const seatActionWithData = seatAction.bind(null, showTimeId, user.id, seats);

  return (
    <div className="w-full">
      {Object.keys(groupedSeats).map((row) => (
        <div key={row} className="mb-4">
          <div className="flex items-center justify-center">
            <span className="mr-4 text-lg font-bold size-10 justify-self-start max-sm:size-5 max-sm:text-sm flex items-center">
              {row}
            </span>{" "}
            <form
              action={seatActionWithData}
              className="grid grid-cols-10 gap-4"
            >
              {groupedSeats[row].map((seat: Seat) =>
                seat.genre_seats === "Ghế đôi" ? (
                  <div
                    className="col-span-2 flex max-sm:border max-sm:p-0.5 max-sm:gap-0.5 border-2 rounded-xl border-gray-300 p-1 gap-1"
                    key={seat.id_seat}
                  >
                    <button
                      name="seatId"
                      value={seat.id_seat}
                      className={`size-10 max-sm:size-6 max-sm:text-sm border text-white rounded-lg bg-pink-500
                       ${
                         seat.status === "ĐANG TRỐNG"
                           ? ""
                           : seat.status === "ĐANG GIỮ" &&
                             seat.reservedBy != user.id
                           ? "cursor-not-allowed bg-red-500 opacity-30"
                           : seat.status === "ĐÃ ĐẶT"
                           ? "cursor-not-allowed !bg-gray-300 text-transparent"
                           : "bg-red-500 opacity-80"
                       } `}
                      disabled={
                        seat.status === "ĐANG TRỐNG"
                          ? false
                          : seat.status === "ĐÃ ĐẶT" ||
                            !(
                              seat.status === "ĐANG GIỮ" &&
                              seat.reservedBy === user.id
                            )
                      }
                    >
                      {seat.number_of_column + seat.number_of_column - 1}
                    </button>
                    <button
                      name="seatId"
                      value={seat.id_seat}
                      className={`col-span-1 size-10 max-sm:size-6 max-sm:text-sm border text-white rounded-lg bg-pink-500
                       ${
                         seat.status === "ĐANG TRỐNG"
                           ? ""
                           : seat.status === "ĐANG GIỮ" &&
                             seat.reservedBy != user.id
                           ? "cursor-not-allowed bg-red-500 opacity-30"
                           : seat.status === "ĐÃ ĐẶT"
                           ? "cursor-not-allowed !bg-gray-300 text-transparent"
                           : "bg-red-500 opacity-80"
                       } `}
                      disabled={
                        seat.status === "ĐANG TRỐNG"
                          ? false
                          : seat.status === "ĐÃ ĐẶT" ||
                            !(
                              seat.status === "ĐANG GIỮ" &&
                              seat.reservedBy === user.id
                            )
                      }
                    >
                      {seat.number_of_column + seat.number_of_column}
                    </button>
                  </div>
                ) : (
                  <button
                    key={seat.id_seat}
                    name="seatId"
                    value={seat.id_seat}
                    className={`size-10 max-sm:size-6 max-sm:text-sm border text-white rounded-lg ${
                      seat.genre_seats === "VIP"
                        ? "bg-yellow-500"
                        : seat.genre_seats === "Ghế đôi"
                        ? "bg-pink-500"
                        : "bg-green-500"
                    } ${
                      seat.status === "ĐANG TRỐNG"
                        ? ""
                        : seat.status === "ĐANG GIỮ" &&
                          seat.reservedBy != user.id
                        ? "cursor-not-allowed bg-red-500 opacity-30"
                        : seat.status === "ĐÃ ĐẶT"
                        ? "cursor-not-allowed !bg-gray-300 text-transparent"
                        : "!bg-red-500 opacity-80"
                    } `}
                    disabled={
                      seat.status === "ĐANG TRỐNG"
                        ? false
                        : seat.status === "ĐÃ ĐẶT" ||
                          !(
                            seat.status === "ĐANG GIỮ" &&
                            seat.reservedBy === user.id
                          )
                    }
                  >
                    {seat.number_of_column}
                  </button>
                )
              )}
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};
