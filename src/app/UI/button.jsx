import Link from "next/link";

export function SignInBttn({ href }) {
  return (
    <Link href={href}>
      <div className="h-10 w-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center text-center">
        <p>Sign In</p>
      </div>
    </Link>
  );
}

export function SignUpBttn({ href }) {
  return (
    <Link href={href}>
      <div className="h-10 w-28 bg-[#BEE702] rounded-full flex items-center justify-center text-center text-[#141414]">
        <p>Sign Up</p>
      </div>
    </Link>
  );
}
