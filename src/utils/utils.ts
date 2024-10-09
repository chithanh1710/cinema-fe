import { ReadonlyURLSearchParams } from "next/navigation";

export function createQueryString(
  name: string,
  value: string,
  searchParams: ReadonlyURLSearchParams
) {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  if (value === "") params.delete(name);
  return params.toString();
}

export function getYouTubeEmbedLink(youtubeUrl: string) {
  // Regular expression to extract the video ID
  const videoIdMatch = youtubeUrl.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  );

  if (videoIdMatch && videoIdMatch[1]) {
    const videoId = videoIdMatch[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  return "";
}

export function getRandomInRange(x: number = 100, y: number = 100000) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}
