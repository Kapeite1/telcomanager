import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
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
    padding: 2px 25px;
    elevation: 5px;
`;

export const BackTexto = styled.Text`
    font-size: 18px;
    color: white;
`;



export const ContainerGraph = styled.View`    
    width: 100%;
    margin: 10px 0;
`;