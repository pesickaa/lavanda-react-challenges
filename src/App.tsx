import React from "react";
import "./App.css";

import { Article } from "./articles";
import Articles from "./components/Articles";

const title = "Sorting Articles";

const App: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="App">
      <div className="headerbar">{title}</div>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button data-testid="most-upvoted-link" className="small">
          Most Upvoted
        </button>
        <button data-testid="most-recent-link" className="small">
          Most Recent
        </button>
      </div>
      <Articles />
    </div>
  );
};

export default App;
