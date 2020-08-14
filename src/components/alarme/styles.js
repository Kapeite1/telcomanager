import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    border-radius: 8px;
    margin: 10px 20px;
    background-color: ${props => props.background || '#fff' } ;
    padding: 10px;
    justify-content: center;
    border: 1px;
    border-color: gray;
`;

export const Hora = styled.Text`
    color: ${props => props.textcolor || '#53a0fb' } ;
    font-weight: bold;
    font-size: 22px;
`;

export const Titulo = styled.Text`
    color: ${props => props.textcolor || '#53a0fb' } ;
    font-weight: bold;
    font-size: 18px;
`;

export const Desalarmado = styled.Text`
    color: ${props => props.textcolor || '#53a0fb' } ;
    font-weight: bold;
    font-size: 17px;
`;