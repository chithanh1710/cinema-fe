"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Seat } from "@/types/GetSeatsByShowtime";
import { redirect } from "next/navigation";

const URL_API = process.env.NEXT_PUBLIC_API_URL;

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

const holdSeats = async (
  ShowtimeId: number,
  SeatId: number,
  CustomerId: number
) => {
  try {
    const res = await fetch(`${URL_API}HoldSeat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ShowtimeId,
        SeatId,
        CustomerId,
      }),
    });

    if (!res.ok) throw new Error("Giữ ghế thất bại");

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const unholdSeats = async (
  ShowtimeId: number,
  SeatId: number,
  CustomerId: number
) => {
  try {
    const res = await fetch(`${URL_API}UnHoldSeat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ShowtimeId,
        SeatId,
        CustomerId,
      }),
    });

    if (!res.ok) throw new Error("Hủy giữ ghế thất bại");

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export async function seatAction(
  showTimeId: number,
  userId: number,
  seats: Seat[],
  formData: FormData
) {
  console.log(showTimeId, Number(formData.get("seatId")), userId);
  try {
    const ShowtimeId = showTimeId;
    const SeatId = Number(formData.get("seatId"));
    const UserId = userId;

    const curSeat = seats.find((s) => s.id_seat === SeatId);

    if (!curSeat) {
      throw new Error(`Ghế với ID ${SeatId} không tồn tại.`);
    }

    if (curSeat.status === "ĐANG TRỐNG") {
      await holdSeats(ShowtimeId, SeatId, UserId);
    } else if (curSeat.status === "ĐANG GIỮ" && curSeat.reservedBy === UserId) {
      await unholdSeats(ShowtimeId, SeatId, UserId);
    } else {
      throw new Error(`Ghế ${SeatId} không thể thao tác.`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    revalidatePath("/booking/step2");
  }
}

export const bookSeatsAction = async (
  ShowtimeId: number,
  CustomerId: number,
  SeatId: number[],
  formData: FormData
) => {
  try {
    const res = await fetch(`${URL_API}/BookSeats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ShowtimeId,
        SeatId,
        CustomerId,
      }),
    });

    if (!res.ok) throw new Error("Hủy giữ ghế thất bại");

    redirect("booking/step3");
  } catch (error) {
    throw error;
  }
};
