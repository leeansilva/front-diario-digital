'use client'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { Box, HStack, Stack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function Noticia({ id }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

    const consultarNoticia = async () => {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/backend/registros/registros/" + id, {
            method: "GET",
            headers: {
                'accept': 'application/json',
            }
        })
        if (response.ok) {
            if (response.status === 200) {
                const resJSON = await response.json();
                console.log(resJSON)
                setData(resJSON)
                setLoading(false)
            }
        }
        else if (response.status === 422) {
            const resJSON = await response.json();
            setLoading(false)
        }
        setLoading(false)
    };

    useEffect(() => {
        consultarNoticia();
    }, []);

    return (
        <HStack mt={5} w='100%' justifyContent={'center'}>
            {
                data != null &&

                <Box w={'800px'}>

                    <Heading mb={10} as='h1' size='2xl' >{data.titulo}</Heading>
                    <Box>
                        {
                            JSON.parse(data.componentes).map((componente) => (
                                <>

                                    <Heading mt={5} mb={5} size='lg' >{componente.subtitulo}</Heading>

                                    <Text fontSize='xl'>
                                        {parse(String(componente.descripcion)) != 'undefined' && parse(String(componente.descripcion))}
                                    </Text>
                                </>
                            ))
                        }
                    </Box>
                    <Text mb={5} mt={5} fontSize={'lg'}>{data.fuente}</Text>
                </Box>

            }
            {
                loading && <h1>cargando..</h1>
            }
        </HStack>
    )
}
