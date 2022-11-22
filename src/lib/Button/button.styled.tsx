import styled from 'styled-components';

interface HeaderInterface { };

const StyledHeader = styled.div<HeaderInterface>`
    color: #e113da;
    background-color: ${props => props.color || "palevioletred"};
`;

export { StyledHeader };