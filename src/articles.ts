export interface Article {
  id: number;
  title: string;
  upvotes: number;
  date: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    id: 2,
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    id: 3,
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    id: 4,
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    id: 5,
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    id: 6,
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    id: 7,
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];
