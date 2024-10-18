import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session?.user) {
    return redirect("/account/info");
  } else return redirect("/login");
}
