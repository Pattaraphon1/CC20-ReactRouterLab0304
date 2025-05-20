import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router'
import Card from '../Card'


export default function ShopLayout() {
  const {lang} = useParams();
  return (
    <Card>
      <h1>หมวดหมู่สินค้า</h1>
      <div>
        <NavLink to ={`/${lang}/shop/electronics`}> Electronics |</NavLink>
        <NavLink to ={`/${lang}/shop/clothing`}> Clothing |</NavLink>
        <NavLink to ={`/${lang}/shop/furniture`}> Furniture </NavLink>
      </div>
      <Outlet />
    </Card>
  )
}
