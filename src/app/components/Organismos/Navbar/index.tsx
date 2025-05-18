import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Index = () => {
    return (
            <nav className='flex flex-row justify-between items-center'>
                <div >
                 <button>
                    <Icon icon="mdi:home-circle" width='40' height='40' color='#4CDA95'style={{ stroke: 'black', strokeWidth: 1 }}  />
                 </button>
                </div>
                <div >
                    
                </div>
                <div  >
                    <a href="/Delete" >
                        <Icon icon="lsicon:user-portrayal-outline" width="40" height="40" color='#4CDA95'   /> 
                    </a>
                </div>
            </nav>
        
    )
}

export default Index