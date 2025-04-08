"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import FormImage from "../../public/formLogin.jpg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      senha,
    };

    try {
      await axios.post("http://localhost:8080/clientes/login", data);
      toast.success("Login realizado com sucesso!");

      setEmail("");
      setSenha("");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro no login. Tente novamente.");
    }
  };

  return (
    <section className="flex items-center">
      <Image
        src={FormImage}
        className="relative w-2/5 h-[calc(100vh-80px)] object-cover"
        alt="Imagem de um cachorro"
        priority
      />
      <div className="px-6 flex flex-col flex-grow items-center">
        <h2 className="mt-8 text-center text-3xl font-semibold text-sky-700">
          Login
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-yellow-400 w-2/5 p-4 mt-6 flex flex-col gap-5 rounded-md"
        >
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="bg-white rounded-md py-1 px-2 outline-none"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="password">
              Senha
            </label>
            <input
              className="bg-white rounded-md py-1 px-2 outline-none"
              type="password"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              placeholder="Digite sua senha"
            />
          </div>
          <input
            type="submit"
            value="Entrar"
            className="cursor-pointer bg-sky-700 text-white p-1.5 rounded-md font-semibold hover:opacity-85 duration-300"
          />
        </form>
        <p className="text-black mt-3 font-semibold">
          Não tem cadastro?
          <Link
            href="/register"
            className="text-sky-700 hover:opacity-80 duration-300"
          >
            {" "}
            Criar conta
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
