import styled from 'styled-components';

interface ArticleInterface { 
    width?: string;
    height?: string;
    color?: string;
    margin?: string | number;
    padding?: string | number;
    backgroundColor?: string;
    backgroundImage?: any;
    backgroundSize?: string;
};

const StyledArticle = styled.article<ArticleInterface>`
    width: ${ props => props.theme.width || "100vw" };
    height: ${ props => props.theme.height || "100vh" };
    color: ${props => props.theme.color};
    margin: ${props => props.theme.margin || "0px"};
    padding: ${props => props.theme.padding || "0px"};
    background-color: ${props => props.theme.backgroundColor};
    background-image: ${props => props.theme.backgroundImage};
    background-size: ${ props => props.theme.backgroundSize};
`;

export { StyledArticle };