import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";

import {Container, Titulo, Hora, Desalarmado  } from './styles'

const propriedades = {
  0:
    {
      name: 'Normal',
      text_color: '#fff',
      background_color: '#0f0',
      priority: 0
    },
  1:
    {
      name: 'Level 1',
      text_color: '#fff',
      background_color: '#c00',
      priority: 1
    },
  2:
    {
      name: 'Level 2',
      text_color: '#fff',
      background_color: '#a0a000',
      priority: 2
    },
  3:
    {
      name: 'Level 3',
      text_color: '#fff',
      background_color: '#d7d700',
      priority: 3
    },
};


export default function Alarme({data}) {

    const navigation = useNavigation();

    let fundo = '';
    let color = '';
    let startTime = moment(new Date(data.start * 1000 )).format('LT');
    
    

    function handleProperties(el) {
      fundo = propriedades[el].background_color;
      color= propriedades[el].text_color;

    }
    
    let renderProperties = Object.keys(propriedades).map(el => {
      propriedades[el].priority === data.id_priority ?  handleProperties(el) : ''});

 return (
   <Container onPress={() => navigation.push('Graph', {data})}  background={fundo}  >

       <Titulo textcolor={color} >{data.object_name}</Titulo>
       <Hora textcolor={color} >{startTime}</Hora>
       {data.end == ''? null : <Desalarmado textcolor={color} >desalarmado em: {moment(new Date(data.end * 1000)).format('LT')}</Desalarmado> }
       

   </Container>
  );
}