"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      return toast.error("As senhas não coincidem.");
    }

    const data = {
      nome,
      email,
      senha,
    };

    try {
      await axios.post("http://localhost:8080/clientes", data);
      toast.success("Cadastro realizado com sucesso!");

      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      toast.error("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <section className="px-6 flex flex-col items-center">
      <h2 className="mt-8 text-center text-3xl font-semibold text-sky-700">
        Cadastre-se
      </h2>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="bg-yellow-400 w-2/5 p-4 mt-6 flex flex-col gap-5 rounded-md"
      >
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="name">
            Nome
          </label>
          <input
            className="bg-white rounded-md py-1 px-2 outline-none"
            type="text"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            placeholder="Digite seu nome"
          />
        </div>
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
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="confirmPassword">
            Confirmar senha
          </label>
          <input
            className="bg-white rounded-md py-1 px-2 outline-none"
            type="password"
            onChange={(e) => setConfirmarSenha(e.target.value)}
            value={confirmarSenha}
            placeholder="Confirme sua senha"
          />
        </div>
        <input
          type="submit"
          value="Cadastrar"
          className="cursor-pointer bg-sky-700 text-white p-1.5 rounded-md font-semibold hover:opacity-85 duration-300"
        />
      </form>
    </section>
  );
};

export default Register;
