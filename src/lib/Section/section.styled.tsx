import styled from 'styled-components';
import backgroundImageX2 from '../../img/AATempWebsiteBackgrPhoto@2x.png';

interface SectionInterface {
    color?: string;
    backgroundImage?: string;
 };

const StyledSection = styled.section<SectionInterface>`
    color: #e113da;
    background-color: ${props => props.theme.color || "palevioletred"};
    background-image: ${props => props.theme.backgroundImage || `url(${backgroundImageX2})`};
    width: ${ props => props.theme.width || "100vw" };
    height: ${ props => props.theme.height || "100vh" };
    background-size: cover;
`;

export { StyledSection };