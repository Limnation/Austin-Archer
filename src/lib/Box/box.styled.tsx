import styled from 'styled-components';

interface BoxInterface { 
    color?: string;
    background?: string;
};

const StyledBox = styled.div<BoxInterface>`
    width: ${ props => props.theme.width || "100vw" };
    height: ${ props => props.theme.height || "100vh" };
    color: ${props => props.theme.color || "#ffffff"};
    background-color: ${props => props.theme.backgroundColor};
    background-image: ${props => props.theme.backgroundImage};
    background-size: ${ props => props.theme.backgroundSize};
`;

export { StyledBox };