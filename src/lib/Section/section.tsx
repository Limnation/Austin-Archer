import { StyledSection } from './section.styled';

interface HeaderProp { }

const Section = ({ }: HeaderProp) => {
    return (
        <StyledSection>Cats are Cool</StyledSection>
    );
} 

export { Section };