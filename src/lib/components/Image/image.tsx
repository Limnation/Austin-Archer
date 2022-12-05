import { StyledImage } from './image.styled';

interface ImageProp { 
    children?: React.ReactNode;
    theme?: object;
    image?: string;
    altText?: string | number;
}

const defaultTheme = {};

const Image = ({ image, altText, theme }: ImageProp) => {
    return (
        <StyledImage theme={theme ? theme : defaultTheme} src={image} alt={altText} />
    );
} 

export { Image };