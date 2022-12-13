import styled from 'styled-components';

interface TextInterface { 
    color?: string;
    background?: string;
    textTransform?: string;
};

const StyledText = styled.p<TextInterface>`
    color: ${props => props.color || "#ffffff"};
    background: ${props => props.background || "transparent "};
    text-transform: ${props => props.textTransform || "upercase"};
`;

export { StyledText };