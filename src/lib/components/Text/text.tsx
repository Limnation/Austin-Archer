import { StyledText } from './text.styled';

interface TextProp { 
    onClick?: any;
    theme?: object;
    text?: string;
}

const defaultTheme = {
    color: "#ffffff"
 };

const Text = ({ text, theme }: TextProp) => {
    return (
        <StyledText theme={ theme ? theme : defaultTheme }>{text}</StyledText>
    );
} 

export { Text };