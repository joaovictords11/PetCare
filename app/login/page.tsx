import Image from "next/image";
import React from "react";
import FormImage from "../../public/formLogin.jpg";

const Register = () => {
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
        <form className="bg-yellow-400 w-2/5 p-4 mt-6 flex flex-col gap-5 rounded-md">
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="bg-white rounded-md py-1 px-2 outline-none"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="password">
              Senha
            </label>
            <input
              className="bg-white rounded-md py-1 px-2 outline-none"
              type="password"
            />
          </div>
          <input
            type="submit"
            value="Entrar"
            className="cursor-pointer bg-sky-700 text-white p-1.5 rounded-md font-semibold hover:opacity-85 duration-300"
          />
        </form>
      </div>
    </section>
  );
};

export default Register;
