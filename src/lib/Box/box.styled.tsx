import styled from 'styled-components';

interface BoxInterface { 
    color?: string;
    background?: string;
    textTransform?: string;
};

const StyledBox = styled.div<BoxInterface>`
    color: ${props => props.color || "#ffffff"};
    background: ${props => props.background || "transparent "};
    text-transform: ${props => props.textTransform || "upercase"};
`;

export { StyledBox };