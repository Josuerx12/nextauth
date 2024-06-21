import React from "react";
import ButtonSignUp from "./ButtonSignUp";
import Input from "@/components/Input/Input";
import { signIn } from "@/libs/auth";

const FormSignUp = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
      method="POST"
      className="w-full flex flex-col gap-4"
    >
      <Input label="Nome" type="text" name="firstName" required />

      <Input label="Sobrenome" type="text" name="lastName" required />

      <Input label="Email" type="email" name="email" required />

      <Input label="Senha" type="password" name="password" required />

      <ButtonSignUp />
    </form>
  );
};

export default FormSignUp;
