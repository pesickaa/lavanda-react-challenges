import React from "react";
import { Article } from "../articles";

interface ArticleProps {
  articles?: Article[];
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
        { /* Articles here */ }
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
