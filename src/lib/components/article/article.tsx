import { StyledArticle } from './article.styled';

interface ArticleProp { 
    children?: React.ReactNode;
    theme?: object;
}

const defaultTheme = {};

const Article = ({ children, theme }: ArticleProp) => {
    return (
        <StyledArticle theme={ theme ? theme : defaultTheme }>{children}</StyledArticle>
    );
} 

export { Article };