import { StyledHeader } from './header.styled';

interface HeaderProp { }

const Header = ({ }: HeaderProp) => {
    return (
        <StyledHeader>Cats are Cool</StyledHeader>
    );
} 

export { Header };