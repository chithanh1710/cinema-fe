import { signInAction } from "@/lib/actions";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border rounded-lg border-orange-500 px-10 py-4 font-medium">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height={24}
          width={24}
        />
        <span>Tiếp tục với Google</span>
      </button>
    </form>
  );
}
