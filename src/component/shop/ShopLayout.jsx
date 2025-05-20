import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Card from '../Card'


export default function ShopLayout() {
  return (
    <Card>
      <h1>หมวดหมู่สินค้า</h1>
      <div>
        <NavLink to ='/shop/electronics'> Electronics |</NavLink>
        <NavLink to ='/shop/clothing'> Clothing |</NavLink>
        <NavLink to ='/shop/furniture'> Furniture </NavLink>
      </div>
      <Outlet />
    </Card>
  )
}
