export type Author = {
  id: string;
  name: string;
};

export type Publisher = {
  id: string;
  name: string;
};

export type News = {
  id: string;
  title: string;
  body: string;
  image: string;
  created_at: string;
  author: Author;
  publisher: Publisher;
};

export type Magazine = {
  id: string;
  title: string;
  image: string;
  isFollowing: boolean;
};

export type Team = {
  name: string;
  score: string;
  flag: string;
};

export type SportData = {
  sportType: string;
  date: string;
  status: string;
  sportIcon: string;
  teams: Team[];
  series: string;
  venue: string;
  result: string;
};
