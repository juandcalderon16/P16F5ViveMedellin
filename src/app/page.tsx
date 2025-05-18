import React from 'react'
import Buttons from '@/app/components/Atoms/Buttons/page'
import Cards from '@/app/components/Organismos/Cards/page'
import Desplegable from '@/app/components/Organismos/Desplegable/page'
import { MediumTitle } from '@/app/components/Atoms/Titles/page'
import { HeroTitle } from '@/app/components/Atoms/Titles/page'
const Page = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-screen w-screen bg-gray-100'>
        <Cards>
          <div className='flex'>  <HeroTitle /> </div>
          <div className="flex justify-center">
            <MediumTitle />
            <Desplegable />
          </div>
          

          <div className='flex flex-row gap-4 mt-4 w-full max-w-2xl'>
            <img
              src="/festival2.avif"
              alt="concierto"
              className='rounded-2xl w-[183px] h-[141px] object-cover border-2' style={{ borderColor: '#043D74' }}
            />
            <p className='text-black'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className='mt-4'>
            <textarea
              placeholder='Escribe tu comentario'
              className='w-full h-30  text-black rounded-md px-2 py-2 border-2 resize-none ' style={{ borderColor: '#043D74' }}
            />
          </div>

          <div className='flex flex-row gap-7 mt-4'>
            <Buttons title='Enviar' link='/Make' color='bg-orange-500' />
            <Buttons title='Cancelar' link='/' color='bg-orange-500' />
          </div>
          
        </Cards>
      </div>
    </div>
  )
}

export default Page