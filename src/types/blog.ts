export interface BlogPost {
  technology: string;
  title: string;
  introduction: string;
  id: string;
  date_published: string;
  time_to_read: string;
}

export interface BlogPostFull extends BlogPost {
  content: string;
}