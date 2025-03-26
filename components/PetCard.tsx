import Image, { StaticImageData } from "next/image"

type PetCardProps = {
    image: StaticImageData
}

const PetCard = ({ image } : PetCardProps) => {
  return (
    <article className="bg-yellow-400 rounded-md">
        <Image className="w-[260px] h-[220px] object-cover rounded-t-md" src={image} alt="Imagem cachorro"/>
        <div className="p-2">
            <p className="font-bold">Cachorro</p>
        </div>
    </article>
  )
}

export default PetCard