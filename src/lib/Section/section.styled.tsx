import styled from 'styled-components';

interface SectionInterface {
    color?: string;
    backgroundImage?: string;
 };

const StyledSection = styled.section<SectionInterface>`
    color: #e113da;
    background-color: ${props => props.theme.color || "palevioletred"};
    background-image: ${props => props.theme.backgroundImage || "url(/img/image.png)" };
    width: ${ props => props.theme.width || "100vw" };
    height: ${ props => props.theme.height || "100vh" };
`;

export { StyledSection };