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
    color: ${props => props.color || "#ffffff"};
    background: ${props => props.background || "#FFFFFFB3 0% 0% no-repeat padding-box"};
    text-transform: ${props => props.textTransform || "upercase"};
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignContent || "center"};
    width:  ${props => props.alignContent || "137px"};
    height: 53px;
    border: 1px solid #707070;
    opacity: 1;
    cursor: pointer;
    font: normal normal 900 19px/25px Futura Hv;
`;

export { StyledButton };