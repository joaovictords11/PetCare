import Image from "next/image"
import DogImg from "../../petcare/public/dog.jpg"

const PetCard = () => {
  return (
    <article>
        <Image className="w-[260px]" src={DogImg} alt="Imagem cachorro"/>
        <div>
            <p>Cachorro</p>
        </div>
    </article>
  )
}

export default PetCard