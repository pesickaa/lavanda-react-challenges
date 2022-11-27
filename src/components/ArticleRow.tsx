import React from "react";
import { Article } from "../articles";

interface ArticleProps {
    article: Article;
    key: number
  }

const ArticleRow: React.FC<ArticleProps> = ({article}) => {
  return (
    <>
        <td data-testid="title">{article.title}</td>
        <td data-testid="upvotes">{article.upvotes}</td>
        <td data-testid="date">{article.date}</td>
    </>
  );
};

export default ArticleRow;
