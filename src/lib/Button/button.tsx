import { StyledButton } from './button.styled';

interface ButtonProp { }

const Button = ({ }: ButtonProp) => {
    return (
        <StyledButton>Shop</StyledButton>
    );
} 

export { Button };