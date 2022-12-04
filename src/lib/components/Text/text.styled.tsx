import styled from 'styled-components';

interface TextInterface { 
    color?: string;
    background?: string;
    textTransform?: string;
};

const StyledText = styled.p<TextInterface>`
    color: ${props => props.theme.color || "#ffffff"};
    background: ${props => props.theme.background || "transparent "};
    text-transform: ${props => props.theme.textTransform || "upercase"};
    font-size: ${props => props.theme.fontSize || "18px"}; 
`;

export { StyledText };