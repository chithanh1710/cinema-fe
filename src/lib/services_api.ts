import page from "@/app/(root)/page";
import { RootCinema } from "@/types/RootCinemas";
import { Movie, RootMovieDetails, RootMovies } from "@/types/RootMovies";
import { RootMovieShowtimes } from "@/types/RootMovieShowtimes";

const URL_API = "http://localhost:44366/api";

/************************* MOVIE *************************/

export async function GetAllMovie({
  cinemaName,
  q,
  query,
  page,
  pageSize,
}: {
  cinemaName?: string;
  query?: string;
  page: number;
  pageSize: number;
  q?: string;
}): Promise<RootMovies> {
  try {
    const filterByType = query ? "&type=" + query : "";
    const filterByCinemaName = cinemaName ? "&cinemaName=" + cinemaName : "";
    const filterBySearch = q ? "&q=" + q : "";
    const res = await fetch(
      `${URL_API}/movies?page=${page}&pageSize=${pageSize}${filterBySearch}${filterByType}${filterByCinemaName}`,
      { next: { revalidate: 0 } }
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

export async function GetMovieByType(): Promise<Movie[]> {
  try {
    const res = await fetch(`${URL_API}/GetMoviesByType`, {
      next: { revalidate: 0 },
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
    const res = await fetch(`${URL_API}/movies/${id}`, {
      next: { revalidate: 0 },
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
    const cinemaQuery = cinemaName ? `&cinemaName=${cinemaName}` : "";
    const cityQuery = cityName ? `&cityName=${cityName}` : "";
    const res = await fetch(
      `${URL_API}/GetMovieShowtimes?movieId=${movieId}${cinemaQuery}${cityQuery}`,
      {
        next: { revalidate: 0 },
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
    const res = await fetch(`${URL_API}/cinemas?${search}`, {
      next: { revalidate: 0 },
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
