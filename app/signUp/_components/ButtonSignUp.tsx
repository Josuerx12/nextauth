"use client";
import Button from "@/components/Button/Button";
import { RefreshCcw } from "lucide-react";
import { useFormStatus } from "react-dom";

const ButtonSignUp = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <div className="flex gap-1">
          Registrando <RefreshCcw className="animate-spin" />
        </div>
      ) : (
        <>Registrar-se</>
      )}
    </Button>
  );
};

export default ButtonSignUp;
