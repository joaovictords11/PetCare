import DogImg from "../public/dog.jpg";
import Dog2Img from "../public/dog2.jpg";
import Dog3Img from "../public/dog3.jpg";
import Dog4Img from "../public/dog4.jpg";
import PetCard from "@/components/PetCard";
import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
  return (
    <main className="px-6">
      <section className="my-8">
        <div className="flex items-center justify-between">
          <h4 className="text-3xl text-sky-700 font-semibold">
            Pets disponíveis
          </h4>
          <Link
            href="/add"
            className="bg-sky-700 text-white font-semibold border-2 border-sky-700 flex items-center gap-1 py-2 px-3 rounded-md hover:bg-white hover:text-sky-700 duration-300"
          >
            Adicionar Pet <IoMdAdd />
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-7">
          <PetCard image={DogImg} name="Golden" />
          <PetCard image={Dog2Img} name="Pug" />
          <PetCard image={Dog3Img} name="Rottweiler" />
          <PetCard image={Dog4Img} name="Pitbull" />
        </div>
      </section>
    </main>
  );
};

export default Home;
