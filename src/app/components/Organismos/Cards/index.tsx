import React from 'react'
import Navbar from '@/app/components/Organismos/Navbar/index'


interface CardProps {
  children: React.ReactNode;
}

const Page = ({children }: CardProps) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-6 bg-white">
      <Navbar />
      <div className="flex flex-col gap-4">
    
        {children}
      </div>
    </div>
  )
}

export default Page