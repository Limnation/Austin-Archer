import styled from 'styled-components';

interface ButtonInterface { 
    color?: string;
    background?: string;
    textTransform?: string;
};

const StyledButton = styled.button<ButtonInterface>`
    color: ${props => props.color || "#ffffff"};
    background: ${props => props.background || "transparent "};
    text-transform: ${props => props.textTransform || "upercase"};
`;

export { StyledButton };