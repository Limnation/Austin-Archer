import { StyledButton } from './button.styled';

interface ButtonProp { 
    onClick?: any;
    theme?: object;
}

const defaultTheme = {};

const Button = ({ onClick, theme }: ButtonProp) => {
    return (
        <StyledButton onClick={onClick} theme={ theme ? theme : defaultTheme }>Shop</StyledButton>
    );
} 

export { Button };