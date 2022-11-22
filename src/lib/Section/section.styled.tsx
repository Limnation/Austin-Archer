import styled from 'styled-components';

interface SectionInterface { };

const StyledSection = styled.section<SectionInterface>`
    color: #e113da;
    background-color: ${props => props.color || "palevioletred"};
`;

export { StyledSection };