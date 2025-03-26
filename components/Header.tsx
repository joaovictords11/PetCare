import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-yellow-400 flex p-6 justify-between'>
        <h2 className='text-2xl font-bold'>PetCare</h2>
        <nav className='flex gap-8'>
            <Link className='text-lg' href="/about">Sobre Nós</Link>
            <Link className='text-lg' href="/about">Cadastrar</Link>
            <Link className='text-lg' href="/about">Login</Link>
        </nav>
    </header>
  )
}

export default Header