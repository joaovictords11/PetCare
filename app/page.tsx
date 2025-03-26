import Header from '@/components/Header'
import PetCard from '@/components/PetCard'
import Link from 'next/link'
import React from 'react'
import { IoMdAdd } from 'react-icons/io'

const Home = () => {
  return (
    <>
      <Header/>
      <section className='px-6'>
        <div className='flex items-center justify-between mt-8'>
          <h4 className='text-2xl'>Pets disponíveis</h4> 
          <Link className='bg-yellow-400 flex items-center gap-1 p-2 rounded-md hover:bg-yellow-500 duration-300' href="/add">Adicionar Pet <IoMdAdd /></Link>
        </div>
        <div className='mt-4 flex flex-wrap gap-5'>
          <PetCard/>
          <PetCard/>
          <PetCard/>
        </div>
      </section>
    </>
  )
}

export default Home