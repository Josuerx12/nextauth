import { db } from "@/providers/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";

export default async function POST(req: Request) {
  try {
    const credentials = await req.json();

    const valResult = z
      .object({
        firstName: z.string({ message: "Nome é obrigatorio!" }),
        lastName: z.string({ message: "Sobrenome é obrigatorio!" }),
        email: z
          .string({ message: "E-mail é obrigatorio!" })
          .email({ message: "E-mail deve ser valido para continuar!" }),
        password: z
          .string()
          .min(6, { message: "Senha deve conter pelo menos 6 caracteres!" }),
      })
      .safeParse(credentials);

    if (!valResult.success) {
      return NextResponse.json(
        { errors: valResult.error.format() },
        { status: 401 }
      );
    }

    const { name, lastName, email, password } = credentials;

    const existsUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existsUser) {
      return NextResponse.json(
        { errors: { err: "Já existe cadastrado para o e-mail informado!" } },
        {
          status: 401,
        }
      );
    }

    const passwordHash = await hash(password, 10);

    await db.user.create({
      data: {
        email,
        firstName: name,
        lastName,
        password: passwordHash,
      },
    });

    return new NextResponse("Usuário cadastrado com sucesso!!", {
      status: 201,
    });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ errors: { err: e.message } }, { status: 501 });
  }
}
