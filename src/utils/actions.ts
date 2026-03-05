import type { InstagramPost } from "./InstagramPost.type";

import { instagramPosts } from "./constants";

export const fetchInstagramFeedPosts = async (): Promise<
  Array<InstagramPost>
> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(instagramPosts.filter((post) => !post.isArchived));
    }, 3000)
  );
};

export const fetchInstagramArchivePosts = async (): Promise<
  Array<InstagramPost>
> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(instagramPosts.filter((post) => post.isArchived));
    }, 3000)
  );
};

export const toggleLikeInstagramPost = async (id: string) => {
  const index = instagramPosts.findIndex((post) => id === post.id);
  const oldPosts = instagramPosts[index];

  instagramPosts.splice(index, 1, {
    ...oldPosts,
    likeCount: oldPosts.isLiked
      ? oldPosts.likeCount - 1
      : oldPosts.likeCount + 1,
    isLiked: !oldPosts.isLiked,
  });

  return new Promise((resolve) => setTimeout(resolve, 3000));
};

export const toggleArchiveInstagramPost = async (id: string) => {
  const index = instagramPosts.findIndex((post) => id === post.id);
  const oldPosts = instagramPosts[index];

  instagramPosts.splice(index, 1, {
    ...oldPosts,
    isArchived: !oldPosts.isArchived,
  });

  return new Promise((resolve) => setTimeout(resolve, 3000));
};
