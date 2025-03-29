import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/logo.png";

const Header = () => {
  return (
    <header className="bg-yellow-400 flex items-center px-6 py-5 justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={Logo}
          alt="Logo do petshop"
          className="h-10 w-10"
          quality={100}
          priority
        />
        <Link
          href="/"
          className="text-2xl text-sky-700 font-bold hover:tracking-widest duration-300"
        >
          PetCare
        </Link>
      </div>
      <nav className="flex gap-8 text-sky-700">
        <Link
          className="text-lg font-semibold hover:text-white hover:bg-sky-700 px-3 py-1 rounded-md duration-300"
          href="/register"
        >
          Cadastrar
        </Link>
        <Link
          className="text-lg font-semibold hover:text-white hover:bg-sky-700 px-3 py-1 rounded-md duration-300"
          href="/login"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
