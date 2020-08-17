import React, {useState} from 'react';
import { Dimensions  } from 'react-native';
import { LineChart} from "react-native-chart-kit";
import moment from "moment";
import 'moment-timezone';
import 'moment/locale/pt-br';

import { Container, Title, Back, BackTexto, ContainerGraph } from './styles';


export default function Graph({route, navigation}) {
  const { data } = route.params;
  const [ horaFinal, setHoraFinal] = useState(moment().format('LT'))
  const [ numeroFinal, setNumeroFinal] = useState(moment().format('L'))
  const [ horaInicio, setHoraInicio] = useState(moment().subtract(300, 'seconds').format('LT'))
  const [ numeroInicio, setNumeroInicio] = useState(moment().subtract(1, 'days').format('L'))

  function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i+=300) {
        ans.push(moment(i * 1000).format('LT'));
    }
    return ans;
}

  
  var times = range(moment().unix()-86400, moment().unix()-300);
  const data2 = {
    labels: [numeroInicio + ' ' + horaInicio, times[30],  times[90], times[130], times[160], times[200], times[240], times[280], numeroFinal + ' ' + horaFinal],
    
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
        color: () => `rgba(0, 255, 0)`, 
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
        color: () => `rgba(0, 0, 255)`, 
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
      xLabelsOffset={1}
      chartConfig={{
        backgroundColor: "#f1f8ff",
        backgroundGradientFrom: "#f1f8ff",
        backgroundGradientTo: "#f1f8ff",
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