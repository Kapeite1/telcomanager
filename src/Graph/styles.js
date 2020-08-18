import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    background-color: #f1f8ff;
    padding-bottom: 10px;
   

`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #53a0fb;
    
`;

export const Back = styled.TouchableOpacity`
    border-radius: 8px;
    background-color: #53a0fb;
    justify-content: center;
    align-items: center;
    elevation: 5px;
    height: 40px;
    width: 200px;
    
`;

export const BackTexto = styled.Text`
    font-size: 22px;
    color: white;
`;



export const ContainerGraph = styled.View`    
    background-color: red;
    
    
`;