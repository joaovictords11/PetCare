import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="px-6 flex flex-col items-center">
      <h2 className="mt-8 text-center text-3xl font-semibold text-sky-700">
        Cadastre-se
      </h2>
      <form
        onSubmit={handleSubmit(() => onSubmit)}
        className="bg-yellow-400 w-2/5 p-4 mt-6 flex flex-col gap-5 rounded-md"
      >
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="name">
            Nome
          </label>
          <input
            className="bg-white rounded-md py-1 px-2 outline-none"
            type="text"
            {...register("nome")}
            placeholder="Nome completo"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="bg-white rounded-md py-1 px-2 outline-none"
            type="email"
            {...register("email")}
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
            {...register("senha")}
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
            {...register("confirmarSenha")}
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
