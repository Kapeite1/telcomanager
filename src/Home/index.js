import React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import moment from "moment";
import 'moment-timezone';
import 'moment/locale/pt-br';

import {List, Container, Timer, Hora, Data} from './styles';

import Alarme from '../components/alarme';

moment.tz.setDefault('America/Sao_Paulo');
moment.locale('pt-BR');

export default function Home() {    

    const objetos = [
        {  
            id_alarm: 1, //numerico
            id_object: 1, //numerico
            start: 1578823800, //Unix timestamp 10/10/1900 @ 5:05am (UTC)
            end: 1578823920, //Unix timestamp A propriedade end só estará preenchida caso um objeto esteja desalarmado. 10/10/1900 @ 5:10am (UTC)
            id_priority: 0, //O campo id_priority é numérico e faz referência a outro array
            alarm_name: 'Trabalho', //textuais e representam os nomes do alarm e do objeto.
            object_name: 'Trabalho', //textuais e representam os nomes do alarm e do objeto.
            type: 'Dispositivo' //poderá ter os seguintes valores: Dispositivo e Interface
        },
        {  
            id_alarm: 2,
            id_object: 2,
            start: 1578871800, // 10/10/1901 @ 5:05am (UTC)
            end: 1578871920,
            id_priority: 1,
            alarm_name: 'Estudo',
            object_name: 'Estudo',
            type: 'Interface'
        },
        {  
            id_alarm: 3,
            id_object: 3,
            start: 1578843000, // 10/10/1901 @ 5:05am (UTC)
            end: '',
            id_priority: 2,
            alarm_name: 'Almoço',
            object_name: 'Almoço',
            type: 'Interface'
        },
        {  
            id_alarm: 4,
            id_object: 4,
            start: 1578878400, // 10/10/1901 @ 5:05am (UTC)
            end: '',
            id_priority: 3,
            alarm_name: 'Estudo',
            object_name: 'Estudo',
            type: 'Interface'
        },
        {  
            id_alarm: 5,
            id_object: 5,
            start: 1578842400, // 10/10/1901 @ 5:05am (UTC)
            end: '',
            id_priority: 4,
            alarm_name: 'Lanche',
            object_name: 'Lanche',
            type: 'Interface'
        },
        {  
            id_alarm: 6,
            id_object: 6,
            start: 1578878400, // 10/10/1901 @ 5:05am (UTC)
            end: '',
            id_priority: 5,
            alarm_name: 'Janta',
            object_name: 'Janta',
            type: 'Interface'
        }
      ];
      
      const [time, setTime] = useState(moment().format('LTS'));
      const [date, setDate] = useState(moment().format('LL'))

      setInterval(() => {
        setTimeout(() => {
            setTime(moment().format("LTS"))
            setDate(moment().format("LL"))
            });
        }, 1000);
      
 return (

   <Container>
       <Timer>
            <Hora> {time}</Hora>
            <Data> {date}</Data>
       </Timer>
        
        <List
        showsVerticalScrollIndicator={false}
        data={objetos.sort((a, b) => (a.start < b.start) ? 1 : -1)}
        keyExtractor={ item => item.id_alarm }
        renderItem={ ({item}) => ( <Alarme data={item} /> ) }
        />

   </Container>
  );
}