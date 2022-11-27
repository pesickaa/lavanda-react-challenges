import React, { useState } from "react";
import "./App.css";

import { Article } from "./articles";
import Articles from "./components/Articles";

const title = "Sorting Articles";

type SortKeys = "title" | "upvotes" | "date";
type SortOrder = 'asc' | 'desc';

function sortData (tableData: Article[], sortKey: SortKeys, reverse: boolean) {
  if (!sortKey) return tableData;

  const sortedData = tableData.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1
  })

  if(reverse) {
      return sortedData.reverse();
  }
  return sortedData;
};

const App: React.FC<{ articles: Article[] }> = ({ articles }) => {

  const [sortKey, setSortKey] = useState<SortKeys>('upvotes');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [query, setQuery] = useState('');

  function SortBy(key: string) {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    setSortKey(key as SortKeys);
  }

  const sortedData = sortData(articles, sortKey, sortOrder === 'desc');

  return (
    <div className="App">
      <div className="headerbar">{title}</div>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button data-testid="most-upvoted-link" className="small" onClick={() => SortBy("upvotes")}>
          Most Upvoted
        </button>
        <button data-testid="most-recent-link" className="small" onClick={() => SortBy("date")} >
          Most Recent
        </button>
      </div>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Filter By
        </label>
        <form>
          <input data-testid="filtered-title" className="small" placeholder="Title" name="title"  type="search" value={query} onChange={event => setQuery(event.target.value)} />
        </form>
      </div>
        <Articles articles={sortedData.filter(article => article.title.includes(query) || query === '')} />
    </div>
  );
};

export default App;
