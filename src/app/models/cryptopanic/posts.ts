export interface NewsCatcherResult {
  count: number;
  next: string;
  previous: string;
  results: Posts[];
}

export interface Posts {
  kind: string;
  domain: string;
  votes: Votes;
  source: Source;
  title: string;
  published_at: Date;
  slug: string;
  id: number;
  url: string;
  created_at: Date;
  currencies?: Currencies[];
}

export interface Votes {
  negative: number;
  positive: number;
  important: number;
  liked: number;
  disliked: number;
  lol: number;
  toxic: number;
  saved: number;
  comments: number;
}

export interface Source {
  title: string;
  region: string;
  domain: string;
  path?: string;
}

export interface Currencies {
  code: string;
  title: string;
  slug: string;
  url: string;
}
