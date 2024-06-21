import Button from "@/components/Button/Button";
import { auth, signIn } from "@/libs/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center pt-10">
      <h1>Olá Mundão</h1>
      {session?.user ? (
        <p>{JSON.stringify(session?.user)}</p>
      ) : (
        <>
          <Button>
            <Link href={"/signIn"}>Login</Link>
          </Button>
          <Button>
            <Link href={"/signUp"}>Registrar-se</Link>
          </Button>
        </>
      )}
    </main>
  );
}
