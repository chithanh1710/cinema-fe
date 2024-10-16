import { MiddlewareConfig } from "next/server";
import { auth } from "./lib/auth";

export const middleware = auth;

export const config: MiddlewareConfig = {
  matcher: ["/account", "/booking/step(2|3|4|5)"],
};
