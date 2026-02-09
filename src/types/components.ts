export interface SiteConfig {
  title: string;
  description: string;
  siteUrl: string;
  author: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  draft?: boolean;
}

export interface PostEntry {
  id: string;
  data: PostFrontmatter;
}

export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  articleDate?: string;
}

export interface PostCardProps {
  title: string;
  href: string;
  date: Date;
}

export interface PostListProps {
  posts: PostEntry[];
}

export const SITE: SiteConfig = {
  title: 'burnedthoughts',
  description: 'Anonymous thoughts, reduced to embers.',
  siteUrl: 'https://burnedthoughts.github.io',
  author: 'burnedthoughts',
};
