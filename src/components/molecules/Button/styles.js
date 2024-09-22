import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${({ theme, w }) =>  theme.metrics.px(w || 200)}px; 
    height: ${({ theme, h }) =>  theme.metrics.px(h || 60)}px;
    background-color: ${({ theme, bg }) => theme.colors[bg || 'black']};
    border-radius: ${({theme, radius}) => theme.metrics.px(radius || 50)}px;
    margin-top: ${({theme, mTop}) => theme.metrics.px(mTop || 0)}px;
    margin-right: ${({theme, mRight}) => theme.metrics.px(mRight || 0)}px;
    margin-bottom: ${({theme, mBottom}) => theme.metrics.px(mBottom || 0)}px;
    margin-left: ${({theme, mLeft}) => theme.metrics.px(mLeft || 0)}px;
`;