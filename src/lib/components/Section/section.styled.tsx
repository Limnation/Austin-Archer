import styled from 'styled-components';
import backgroundImageX2 from '../../img/AATempWebsiteBackgrPhoto@2x.png';

interface SectionInterface {
    color?: string;
    backgroundImage?: string;
 };

const StyledSection = styled.section<SectionInterface>`
    color: ${props => props.theme.color || "#ffffff"};
    background-color: ${props => props.theme.backgroundColor || "transparent"};
    background-image: ${props => props.theme.backgroundImage || `url(${backgroundImageX2})`};
    width: ${ props => props.theme.width || "100vw" };
    height: ${ props => props.theme.height || "100vh" };
    background-size: ${ props => props.theme.backgroundSize || "cover"};
`;

export { StyledSection };