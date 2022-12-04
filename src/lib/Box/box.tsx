import { StyledBox } from './box.styled';

interface BoxProp { 
    children?: React.ReactNode;
    theme?: object;
}

const defaultTheme = {};

const Box = ({ children, theme }: BoxProp) => {
    return (
        <StyledBox theme={ theme ? theme : defaultTheme }>{children}</StyledBox>
    );
} 

export { Box };