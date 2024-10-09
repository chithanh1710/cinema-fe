import { RootMovieDetails, RootMovies } from "@/types/DatabaseType";
import { RootMovieShowtimes } from "@/types/RootMovieShowtimes";

const URL_API = "http://localhost:44366/api";

export async function GetAllMovie(
  query?: string,
  page: number = 1,
  pageSize: number = 10,
  q: string = ""
): Promise<RootMovies> {
  try {
    const filterByType = query ? "&type=" + query : "";
    const search = q ? "&q=" + q : "";
    const res = await fetch(
      `${URL_API}/movies?page=${page}&pageSize=${pageSize}${search}${filterByType}`,
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
