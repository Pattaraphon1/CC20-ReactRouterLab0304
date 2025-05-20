import React from 'react'
import Card from '../component/Card'
import { useParams } from 'react-router'
import {langs} from "../i18n/lang"

export default function Home() {
  const {lang} = useParams();
  return (
    <Card>
      <div>
        <img className='mb-6' src="https://feelman.info/html/anri/img/img1.jpg" alt="" />
        <p className='text-2xl font-light text-center'>Cup of Coffee On The Window Sill</p>
        <p className='text-center font-thin text-sm'>from Home</p>
    </div>
    <div className='text-center'>
      <p>{lang}</p>
      <p>{langs[lang].welcome}</p>
      <p>{langs[lang].login}</p>
      <p>{langs[lang].logout}</p>
    </div>

    </Card>
  )
}

