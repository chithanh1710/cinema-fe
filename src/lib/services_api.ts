import { DaumActors, RootActors } from "@/types/Actors";
import { Customer } from "@/types/Customer";
import { DaumDirectors, RootDirectors } from "@/types/Directors";
import { RootFoodDrink } from "@/types/FoodAndDrink";
import { DaumGenres, RootGenres } from "@/types/Genres";
import { RootGetAvailableDates } from "@/types/GetAvailableDates";
import { RootGetAvailableMovies } from "@/types/GetAvailableMovies";
import { RootGetAvailableShowtimes } from "@/types/GetAvailableShowtimes";
import { RootGetCinemasByMovie } from "@/types/GetCinemasByMovie";
import { RootGetSeatsByShowtime, Seat } from "@/types/GetSeatsByShowtime";
import { RootGetTransactionDetailsByCustomerId } from "@/types/GetTransactionDetailsByCustomerId";
import { MessageApi } from "@/types/MessgeApi";
import { RootCinema } from "@/types/RootCinemas";
import { Movie, RootMovieDetails, RootMovies } from "@/types/RootMovies";
import { RootMovieShowtimes } from "@/types/RootMovieShowtimes";
import { RootTransactions } from "@/types/Transactions";

const URL_API = process.env.NEXT_PUBLIC_API_URL;

/************************* Actors *************************/
export async function GetActors({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): Promise<RootActors> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(
      `${URL_API}actors?page=${page}&pageSize=${pageSize}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetActorsById({
  id,
}: {
  id: number;
}): Promise<DaumActors> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(`${URL_API}actors/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data.data[0];
  } catch (error) {
    throw error;
  }
}

/************************* GENRES *************************/
export async function GetGenres({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): Promise<RootGenres> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(
      `${URL_API}genres?page=${page}&pageSize=${pageSize}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetGenresById({
  id,
}: {
  id: number;
}): Promise<DaumGenres> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(`${URL_API}genres/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data.data[0];
  } catch (error) {
    throw error;
  }
}

/************************* Directors *************************/
export async function GetDirectors({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): Promise<RootDirectors> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(
      `${URL_API}directors?page=${page}&pageSize=${pageSize}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetDirectorById({
  id,
}: {
  id: number;
}): Promise<DaumDirectors> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(`${URL_API}directors/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data.data[0];
  } catch (error) {
    throw error;
  }
}

/************************* MOVIE *************************/

export async function GetAllMovie({
  cinemaName,
  q,
  query,
  page,
  pageSize,
  directorId,
  genreId,
  actorId,
}: {
  cinemaName?: string;
  directorId?: number;
  genreId?: number;
  actorId?: number;
  query?: string;
  page: number;
  pageSize: number;
  q?: string;
}): Promise<RootMovies> {
  try {
    const filterByType = query ? "&type=" + query : "";
    const filterByCinemaName = cinemaName ? "&cinemaName=" + cinemaName : "";
    const filterByDirector = directorId ? "&directorId=" + directorId : "";
    const filterByActor = actorId ? "&actorId=" + actorId : "";
    const filterByGenre = genreId ? "&genreId=" + genreId : "";
    const filterBySearch = q ? "&q=" + q : "";
    const res = await fetch(
      `${URL_API}movies?page=${page}&pageSize=${pageSize}${filterBySearch}${filterByType}${filterByCinemaName}${filterByDirector}${filterByActor}${filterByGenre}`,
      { next: { revalidate: 200 } }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: RootMovies = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetMoviesByType(): Promise<Movie[]> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(`${URL_API}GetMoviesByType`, {
      next: { revalidate: 200 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data.data;
  } catch (error) {
    throw error;
  }
}

export async function GetMovieById(id: number): Promise<RootMovieDetails> {
  try {
    const res = await fetch(`${URL_API}movies/${id}`, {
      next: { revalidate: 200 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: RootMovieDetails = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetMovieShowtimes(
  movieId: number,
  cinemaName?: string,
  cityName?: string
): Promise<RootMovieShowtimes> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const cinemaQuery = cinemaName ? `&cinemaName=${cinemaName}` : "";
    const cityQuery = cityName ? `&cityName=${cityName}` : "";
    const res = await fetch(
      `${URL_API}GetMovieShowtimes?movieId=${movieId}${cinemaQuery}${cityQuery}`,
      {
        next: { revalidate: 200 },
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: RootMovieShowtimes = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

/************************* CINEMA *************************/
export async function GetAllCinema(q: string = ""): Promise<RootCinema> {
  try {
    const search = q ? "&q=" + q : "";
    const res = await fetch(`${URL_API}cinemas?${search}`, {
      next: { revalidate: 200 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: RootCinema = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

/************************* CUSTOMER *************************/
export async function GetCustomer(email: string): Promise<Customer | null> {
  try {
    const res = await fetch(`${URL_API}customers?email=${email}`, {
      next: { revalidate: 200 },
    });

    const data = await res.json();
    return data?.data[0] || null;
  } catch (error) {
    console.error("Error fetching customer:", error);
    return null;
  }
}

export async function CreateCustomer(
  name: string,
  email: string
): Promise<MessageApi> {
  const body = {
    name,
    email,
  };
  try {
    const res = await fetch(`${URL_API}customers`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to create customer. Status code: ${res.status}`);
    }

    const data: MessageApi = await res.json();
    if (!data) throw new Error("Create failed!");

    return data;
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
}

/************************* FOOD AND DRINKS *************************/
export async function GetFoodAndDrink(): Promise<RootFoodDrink> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(`${URL_API}FoodsDrinks`, {
      next: { revalidate: 200 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: RootFoodDrink = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

/************************* TRANSACTIONS *************************/
export async function GetTransactionsByUserId(
  userId: number
): Promise<RootTransactions> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(`${URL_API}transactions/${userId}`, {
      next: { revalidate: 200 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}
/************************* SEATS *************************/

export async function GetSeatsByShowtime(
  showtimeId: number
): Promise<RootGetSeatsByShowtime> {
  try {
    const res = await fetch(
      `${URL_API}GetSeatsByShowtime?showtimeId=${showtimeId}`,
      {
        next: { revalidate: 0 },
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: Seat[] = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

/************************* FUNCTION *************************/
export async function GetAvailableMovies(): Promise<RootGetAvailableMovies> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(`${URL_API}GetAvailableMovies`, {
      next: { revalidate: 200 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetCinemasByMovie(
  movieId: number
): Promise<RootGetCinemasByMovie> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(`${URL_API}GetCinemasByMovie?movieId=${movieId}`, {
      next: { revalidate: 200 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetAvailableDates(
  movieId: number,
  cinemaId: number
): Promise<RootGetAvailableDates> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(
      `${URL_API}GetAvailableDates?movieId=${movieId}&cinemaId=${cinemaId}`,
      {
        next: { revalidate: 200 },
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetAvailableShowtimes(
  movieId: number,
  cinemaId: number,
  date: string
): Promise<RootGetAvailableShowtimes> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(
      `${URL_API}GetAvailableShowtimes?movieId=${movieId}&cinemaId=${cinemaId}&showDate=${date}`,
      {
        next: { revalidate: 200 },
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetTransactionDetailsByCustomerId(
  customerId: number
): Promise<RootGetTransactionDetailsByCustomerId> {
  try {
    await new Promise((res) => setTimeout(() => res(""), 600));
    const res = await fetch(
      `${URL_API}GetTransactionDetailsByCustomerId?customerId=${customerId}`,
      {
        next: { revalidate: 200 },
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data === null) throw new Error("No data found.");

    return data;
  } catch (error) {
    throw error;
  }
}
