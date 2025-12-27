declare type CreateArticleInput = {
  title: string;
  content: string;
  authorId: string;
  imageUrl?: string;
};

declare type UpdateArticleInput = {
  title?: string;
  content?: string;
  imageUrl?: string;
};
