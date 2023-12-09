'use client'
import Image from 'next/image'
import { Box, Button, HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import Noticia from './components/Noticias/Noticia/Noticia';
import CardNoticia from './components/Noticias/CardNoticia/CardNoticia';
import TopNoticias from './components/Noticias/TopNoticias/TopNoticias';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [noticias, setNoticias] = useState(null)

  const get_noticicas = async () => {

    setLoading(true);
    const response = await fetch("http://127.0.0.1:8000/backend/registros/registros/all", {
      method: "GET",
      headers: {
        'accept': 'application/json'
      },
    })

    if (response.ok) {
      if (response.status === 200) {
        const resJSON = await response.json();
        setNoticias(resJSON)
        console.log(resJSON)
        setLoading(false)
      }
    }
    else {
      const resJSON = await response.json();
      setLoading(false)
    }
    setLoading(false)
  };

  useEffect(() => {
    get_noticicas()
  }, []);


  return (
    <HStack justifyContent={'center'} spacing='24px'>
      {/* <Noticia data={noticias} /> */}
      <CardNoticia data={noticias} />
    </HStack>
  )
}
