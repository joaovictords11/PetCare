import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-yellow-400 flex p-6 justify-between'>
        <Link href="/" className='text-2xl font-bold hover:tracking-widest duration-300'>PetCare</Link>
        <nav className='flex gap-8'>
            <Link className='text-lg' href="/about">Sobre Nós</Link>
            <Link className='text-lg' href="/register">Cadastrar</Link>
            <Link className='text-lg' href="/about">Login</Link>
        </nav>
    </header>
  )
}

export default Header