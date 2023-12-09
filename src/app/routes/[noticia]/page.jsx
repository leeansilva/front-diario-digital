"use client"
import Noticia from '@/app/components/Noticias/Noticia/Noticia'
import TopNoticias from '@/app/components/Noticias/TopNoticias/TopNoticias'
import React from 'react'

export default function Registro({params}) {
  return (
    <>
      <Noticia id={params.noticia} />
   
    </>
  )
}
