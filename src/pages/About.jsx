import React from 'react'
import Card from '../component/Card'

export default function About() {
  return (
    <Card>
         <div>
           <img className='mb-6' src="https://feelman.info/html/anri/img/about-me.jpg" alt="" />
           <p className='text-2xl font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo ullamcorper.</p>
           <p className='text-center font-thin text-sm'>from About me</p>
         </div>
       </Card>
  )
}
