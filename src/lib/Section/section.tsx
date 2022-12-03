import { StyledSection } from './section.styled';

interface HeaderProp { 
    children?: React.ReactNode;
    theme?: object;
}

const defaultTheme = {
  };

const Section = ({ children, theme }: HeaderProp) => {
    return (
        <StyledSection theme={ theme ? theme : defaultTheme }>{children}</StyledSection>
    );
} 

export { Section };