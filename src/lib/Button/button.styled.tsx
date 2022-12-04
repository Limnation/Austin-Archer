import styled from 'styled-components';

interface ButtonInterface { 
    color?: string;
    background?: string;
    textTransform?: string;
    display?: string;
    justifyContent?: string;
    alignContent?: string;
};

const StyledButton = styled.div<ButtonInterface>`
    color: ${props => props.theme.color || "#000000"};
    background: ${props => props.theme.background || "#FFFFFFB3 0% 0% no-repeat padding-box"};
    text-transform: ${props => props.theme.textTransform || "upercase"};
    display: ${props => props.theme.display || "flex"};
    justify-content: ${props => props.theme.justifyContent || "center"};
    align-items: ${props => props.theme.alignContent || "center"};
    width:  ${props => props.theme.alignContent || "137px"};
    height: 53px;
    border: 1px solid #707070;
    opacity: 1;
    cursor: pointer;
    font: normal normal 900 19px/25px Futura Hv;
`;

export { StyledButton };