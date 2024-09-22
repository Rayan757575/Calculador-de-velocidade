import { Title } from "~/components/atoms";
import {ButtonContainer } from './styles'


export const Button = ({ onPress, color, children, ...props }) => {
    return (
        <ButtonContainer {...props} onPress={onPress}>
            <Title size={14} color={color}>{children}</Title>
        </ButtonContainer>
    )
}