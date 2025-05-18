import React from 'react'
import Buttons from '@/app/components/Atoms/Buttons/page'
import Cards from '@/app/components/Organismos/Cards/page'


const Page = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-screen w-screen bg-gray-100'>
        <Cards>
          <div className=' flex flex-row gap-4 p-2 w-full max-w-2xl min-h-64'>

            <div className=' flex justify-center items-start'>
              <img src="/festival2.avif" alt="concierto" className='rounded-2xl'/>
            </div>

            <div className='flex justify-center items-start border-black'>
              <p className=' text-black' >Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='border-2 border-black rounde-x1 p-4'>
            <input type="text" placeholder='Escribe tu comentario' className='w-full h-20 bg-gray-300 text-black rounded-full '/>
          </div>

          <div className=' flex flex-row gap-7'>
            <Buttons title='Enviar' link='/Make' color='bg-green-500' />
            <Buttons title='Cancelar' link='/' color='bg-black' />
          </div>
        </Cards>
      </div>
    </div>
  )
}

export default Page