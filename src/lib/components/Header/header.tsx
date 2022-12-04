import { StyledHeader } from './header.styled';

interface HeaderProp { 
    text?: string;
    theme?: object;
}

const defaultTheme = {
    color: "#ffffff"
 };

const Header = ({ text, theme }: HeaderProp) => {
    return (
        <StyledHeader theme={ theme ? theme : defaultTheme }>{text}</StyledHeader>
    );
} 

export { Header };