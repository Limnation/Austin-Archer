import styled from 'styled-components';

interface ImageInterface { 
    width?: string;
    height?: string;
    color?: string;
    margin?: string | number;
    padding?: string | number;
    backgroundColor?: string;
    backgroundImage?: any;
    backgroundSize?: string;
    src?: string;
    alt?: string | number;
};

const StyledImage = styled.div<ImageInterface>`
    width: ${ props => props.theme.width || "100vw" };
    height: ${ props => props.theme.height || "100vh" };
    color: ${props => props.theme.color};
    margin: ${props => props.theme.margin};
    padding: ${props => props.theme.padding};
    background-color: ${props => props.theme.backgroundColor};
    background-image: ${props => props.theme.backgroundImage};
    background-size: ${ props => props.theme.backgroundSize};
`;

export { StyledImage };