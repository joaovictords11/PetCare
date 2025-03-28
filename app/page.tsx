import DogImg from "../public/dog.jpg"
import Dog2Img from "../public/dog2.jpg"
import Dog3Img from "../public/dog3.jpg"
import PetCard from '@/components/PetCard'
import Link from 'next/link'
import React from 'react'
import { IoMdAdd } from 'react-icons/io'

const Home = () => {
  return (
    <>
      <section className='px-6'>
        <div className='flex items-center justify-between mt-8'>
          <h4 className='text-2xl'>Pets disponíveis</h4> 
          <Link href="/register" className='bg-yellow-400 flex items-center gap-1 p-2 rounded-md hover:bg-yellow-500 duration-300' >Adicionar Pet <IoMdAdd /></Link>
        </div>
        <div className='mt-6 flex flex-wrap gap-5'>
          <PetCard image={DogImg}/>
          <PetCard image={Dog2Img}/>
          <PetCard image={Dog3Img}/>
        </div>
      </section>
    </>
  )
}

export default Home