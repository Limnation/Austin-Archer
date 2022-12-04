import styled from 'styled-components';

interface BoxInterface { 
    color?: string;
    background?: string;
    textTransform?: string;
};

const StyledBox = styled.div<BoxInterface>`
    color: ${props => props.theme.color || "#ffffff"};
    background: ${props => props.theme.background || "transparent "};
    text-transform: ${props => props.theme.textTransform || "upercase"};
`;

export { StyledBox };