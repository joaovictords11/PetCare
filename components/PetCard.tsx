import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowRedoOutline } from "react-icons/io5";

type PetCardProps = {
  image: StaticImageData;
  name: string;
};

const PetCard = ({ image, name }: PetCardProps) => {
  return (
    <article className="bg-yellow-400 rounded-md">
      <Image
        className="w-[260px] h-[220px] object-cover rounded-t-md"
        src={image}
        alt="Imagem cachorro"
      />
      <div className="flex items-center justify-between py-2 px-4">
        <p className="text-2xl text-sky-700 font-bold">{name}</p>
        <Link href="/">
          <IoMdArrowRoundForward
            size={27}
            color="#305492"
            className="hover:opacity-80"
          />
        </Link>
      </div>
    </article>
  );
};

export default PetCard;
