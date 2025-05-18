import React from 'react'

interface Indexprops{
  title: string
  link:string
  color: string

}

const Page = ({title, link, color}:Indexprops) => {
  return (
    <div className={ `flex justify-center items-center rounded-full text-white font-bold w-50 h-10 cursor-pointer hover:scale-120 transition-all duration-300 ${color}`}>
       <a href={link}>
        <button >{title}</button>
        </a> 
    </div>
  )
}

export default Page