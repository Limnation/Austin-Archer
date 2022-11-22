import styled from 'styled-components';

interface SectionInterface { 
    color?: string;
    background?: string;
    textTransform?: string;
};

const StyledSection = styled.div<SectionInterface>`
    color: ${props => props.color || "#ffffff"};
    background: ${props => props.background || "transparent "};
    text-transform: ${props => props.textTransform || "upercase"};
`;

export { StyledSection };