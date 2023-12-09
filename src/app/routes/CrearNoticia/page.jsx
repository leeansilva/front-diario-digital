'use client'
import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, Text, VStack, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


console.warn = () => { };

export default function CrearNoticia() {

  const [loading, setLoading] = useState(false);
  const [cantidad, setCantidad] = useState(1); // Inicializar en 1
  //valores del react quill
  const [values, setValues] = useState(Array(cantidad).fill(''));
  const toast = useToast();

  const handleChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const handleDelete = () => {
    //para que elimine el valor de reactquill
    setValues((prevValues) => prevValues.slice(0, -1));
    setCantidad(cantidad - 1);
  };

  const crearNoticia = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const objeto = Object.fromEntries(form.entries());
    console.log(objeto, values)
    let componentes = [];

    // Agregar el primer subtitulo por separado
    const primerSubtitulo = objeto.subtitulo;
    componentes.push({ subtitulo: primerSubtitulo });

    //seteamos los componentes correctamente
    values.forEach((descripcion, index) => {
      const subtitulo = objeto[`subtitulo${index + 1}`];
      const componenteSubtitulo = { subtitulo };

      const componenteDescripcion = { descripcion: descripcion };
      componentes.push(componenteDescripcion);
      subtitulo != undefined && componentes.push(componenteSubtitulo);

    });

    setLoading(true);
    const response = await fetch("http://127.0.0.1:8000/backend/registros/registros", {
      method: "POST",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "titulo": objeto.titulo,
        "componentes": JSON.stringify(componentes),
        "imagen": objeto.imagen,
        "fuente": objeto.fuente
      })
    })
    console.log(response)
    if (response.ok) {
      if (response.status === 200) {
        const resJSON = await response.json();
        setLoading(false)
        toast({
          title: 'Registro creado correctamente.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    }
    else if (response.status === 422) {
      const resJSON = await response.json();

      toast({
        title: 'Error.',
        description: resJSON?.detail,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
    }
    setLoading(false)
  };

  return (
    <>
      <Flex pb={'32px'} gap={'20px'} pt={'32px'} width={'80%'} margin={'0 auto'} justifyContent={'center'} flexDirection={'column'} >


        <form id='crear_noticia' onSubmit={crearNoticia}>
          <FormControl>
            <FormLabel>Título</FormLabel>
            <Input name='titulo' form='crear_noticia' placeholder='Título' />
          </FormControl>


          {
            Array.from({ length: cantidad }).map((_, index) => (
              <React.Fragment key={index}>
                <Box mt={5} border={'1px solid #e2e8f0'} p={5} borderRadius={5}>
                  <FormControl>
                    <FormLabel>Subtítulo</FormLabel>
                    <Input required name={index == 0 ? 'subtitulo' : `subtitulo${index}`} form='crear_noticia' placeholder='Subtítulo' />
                  </FormControl>
                  <FormControl mt={5}>
                    <FormLabel>Descripción</FormLabel>
                    <ReactQuill
                      name={`descripcion_${index}`} // Asegúrate de que cada instancia tenga un nombre único
                      theme="snow"
                      value={values[index]}
                      onChange={(newValue) => handleChange(index, newValue)}
                    />
                  </FormControl>
                  <Button mt={5} colorScheme={'red'} onClick={() => handleDelete()}>Borrar sección</Button>
                </Box>
              </React.Fragment>
            ))
          }
        </form>

        <Button colorScheme={'green'} onClick={() => setCantidad(cantidad + 1)}>Agregar Subtitulo y Descripción</Button>
          <FormControl>
            <FormLabel>Imagen</FormLabel>
            <Input name='imagen' form='crear_noticia' placeholder='https://4.bp.blogspot.com/-1pSmeh_hBvQ/VDApFyw5tVI/AAAAAAAAC8c/oE-EX5dol5I/s1600/EL%2BPERIODICODEMORENO.150A%C3%91OSMORENO.jpg' />
          </FormControl>

        <FormControl>
          <FormLabel>Fuente</FormLabel>
          <Input name='fuente' form='crear_noticia' placeholder='Fuente' />
        </FormControl>

        <Button isLoading={loading} form='crear_noticia' type='submit'>Subir historia</Button>
        <Button>Vista previa</Button>



      </Flex>
    </>
  )
}
