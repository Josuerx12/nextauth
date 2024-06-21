import React from "react";
import FormSignUp from "./_components/FormSignUp";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }
  return (
    <section className="min-h-screen  flex items-center">
      <div className="md:max-w-screen-sm p-4 flex flex-col gap-4 justify-center w-full items-center rounded shadow-lg mx-auto bg-neutral-50">
        <h3 className="font-bold text-xl">
          Seja muito bem vindo a nossa plataforma
        </h3>
        <h4>Crie sua conta para continuar</h4>

        <FormSignUp />
      </div>
    </section>
  );
};

export default SignUpPage;
