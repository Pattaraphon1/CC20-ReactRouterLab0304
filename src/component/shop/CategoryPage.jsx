import React from 'react'
import { useParams } from 'react-router'

export default function CategoryPage() {
  const {category} = useParams();
  return (
    <div>
      <h2>หมวดหมู่: {category}</h2>
    </div>
  )
}

