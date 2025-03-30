import React from "react";

const Register = () => {
  const colors = ["Branco", "Preto", "Mesclado", "Marrom", "Caramelo"];

  return (
    <section className="px-6 flex flex-col items-center">
      <h2 className="mt-8 text-center text-3xl font-semibold text-sky-700">
        Adicionar pet
      </h2>
      <form className="bg-yellow-400 w-2/5 p-4 mt-6 flex flex-col gap-5 rounded-md">
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="name">
            Nome
          </label>
          <input
            className="bg-white rounded-md py-1 px-2 outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="race">
            Raça
          </label>
          <input
            className="bg-white rounded-md py-1 px-2 outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="color">
            Cor
          </label>
          <select
            name="color"
            className="bg-white rounded-md py-1 px-2 outline-none"
            required
          >
            <option value="">Selecione uma cor</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="photo">
            Foto
          </label>
          <input
            className="bg-white rounded-md py-1 px-2 outline-none"
            type="file"
          />
        </div>
        <input
          type="submit"
          value="Adicionar"
          className="cursor-pointer bg-sky-700 text-white p-1.5 rounded-md font-semibold hover:opacity-85 duration-300"
        />
      </form>
    </section>
  );
};

export default Register;
