import styled from 'styled-components';
import backgroundImageX2 from '../../../assets/img/AATempWebsiteBackgrPhoto@2x.png';

interface SectionInterface {
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundSize?: string;
 };

const StyledSection = styled.section<SectionInterface>`
    width: ${ props => props.theme.width || "100vw" };
    height: ${ props => props.theme.height || "100vh" };
    color: ${props => props.theme.color || "#ffffff"};
    background-color: ${props => props.theme.backgroundColor || "transparent"};
    background-image: ${props => props.theme.backgroundImage || `url(${backgroundImageX2})`};
    background-size: ${ props => props.theme.backgroundSize || "cover"};
`;

export { StyledSection };