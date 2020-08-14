import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions  } from 'react-native';
import { LineChart} from "react-native-chart-kit";
import moment from "moment";
import 'moment-timezone';
import 'moment/locale/pt-br';

import { Container, Title, Back, BackTexto, ContainerGraph } from './styles';


export default function Graph({route, navigation}) {

  const { data } = route.params;
  const [ horaFinal, setHoraFinal] = useState(moment().format('LT'))
  const [ numeroFinal, setNumeroFinal] = useState(moment().format('L'))
  const [ horaInicio, setHoraInicio] = useState(moment().subtract(24.08, 'hours').format('LT'))
  const [ numeroInicio, setNumeroInicio] = useState(moment().subtract(1, 'days').format('L'))

  var randoms = [...Array(288)].map(() => '');

  const data2 = {
    labels: [numeroInicio + ' ' + horaInicio, '', '', '', '', '', numeroFinal + ' ' + horaFinal],
    
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100],
        color: (opacity = 1) => `rgba(0, 255, 0)`, // optional
      },
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ],
        color: (opacity = 1) => `rgba(0, 0, 255)`, // optional
      }
    ]
  };
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height*0.6;


 return (
   <Container>
    <Title>{data.object_name}</Title>

    <ContainerGraph>
    <LineChart
      data={data2}
      width={screenWidth}
      height={screenHeight}
      withShadow={false}
      fromZero={true}
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: () => `rgba(0, 0, 0)`,
        labelColor: () => `rgba(0, 0, 0)`,
        
      }}
      bezier
    />

    </ContainerGraph>
    
       
       
       <Back onPress={() => navigation.popToTop()}>
         <BackTexto>Voltar</BackTexto>
       </Back>
   </Container>
  );
}