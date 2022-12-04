import styled from 'styled-components';

interface ButtonInterface { 
    width?: string;
    height?: string;
    display?: string;
    justifyContent?: string;
    alignContent?: string;
    color?: string;
    background?: string;
    textTransform?: string;
    border?: string;
    opacity?: string;
    cursor?: string;
};

const StyledButton = styled.div<ButtonInterface>`
    width:  ${props => props.theme.width || "137px"};
    height: ${props => props.theme.height || "53px"};
    display: ${props => props.theme.display || "flex"};
    justify-content: ${props => props.theme.justifyContent || "center"};
    align-items: ${props => props.theme.alignContent || "center"};
    color: ${props => props.theme.color || "#000000"};
    background: ${props => props.theme.background || "#FFFFFFB3 0% 0% no-repeat padding-box"};
    text-transform: ${props => props.theme.textTransform || "upercase"};
    border:${props => props.theme.border || " 1px solid #707070"};
    opacity: ${props => props.theme.opacity || "1"};
    cursor: ${props => props.theme.cursor || "pointer"};
`;

export { StyledButton };