import React from "react";
import { Article } from "../articles";
import ArticleRow from "./ArticleRow";

interface ArticleProps {
  articles: Article[];
}

const Articles: React.FC<ArticleProps> = ({ articles }) => {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            return (
              <tr data-testid="article" key={article.id}>
                <ArticleRow article={article} key={article.id} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
