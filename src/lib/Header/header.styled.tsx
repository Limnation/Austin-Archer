import styled from 'styled-components';

interface HeaderInterface { };

const StyledHeader = styled.div<HeaderInterface>`
    color: ${props => props.theme.color || "#ffffff"};
    background: ${props => props.theme.background || "transparent "};
    text-transform: ${props => props.theme.textTransform || "upercase"};
    font-size: ${props => props.theme.fontSize || "18px"};
    z-index: ${props => props.theme.zIndex || "1"};
`;

export { StyledHeader };