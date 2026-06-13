import Image from "next/image";
import SignInFormClient from "@/modules/auth/components/sign-in-form-client";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
      <Image
        src="/login.svg"
        alt="Login Image"
        width={300}
        height={300}
        className="object-contain"
      />

      <SignInFormClient />
    </div>
  );
};

export default Page;