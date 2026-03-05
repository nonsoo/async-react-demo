import type { InstagramPost as InstagramPostType } from "../utils/InstagramPost.type";

import {
  useOptimistic,
  type Dispatch,
  type SetStateAction,
  useTransition,
} from "react";

import { CircleUserRound, Heart, Archive, ArchiveRestore } from "lucide-react";

import {
  fetchInstagramFeedPosts,
  fetchInstagramArchivePosts,
  toggleArchiveInstagramPost,
  toggleLikeInstagramPost,
} from "../utils/actions";
import { formatDate, formatNumberStandard } from "../utils/helpers";

import styles from "../styles/demo.module.css";

interface InstagramPostProps {
  post: InstagramPostType;
  setters: Dispatch<
    SetStateAction<[Promise<InstagramPostType[]>, Promise<InstagramPostType[]>]>
  >;
}

const InstagramPost = ({ post, setters }: InstagramPostProps) => {
  const [fetchInstagramFeedPending, fetchInstagramFeedTransition] =
    useTransition();
  const [processActionPending, processActionTransition] = useTransition();

  const [optimisticPost, setOptimisticPost] = useOptimistic<
    InstagramPostType,
    { type: "like-post" | "archive-post" }
  >(post, (post, action) => {
    switch (action.type) {
      case "like-post":
        return {
          ...post,
          likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1,
          isLiked: !post.isLiked,
        };

      case "archive-post":
        return {
          ...post,
          isArchived: !post.isArchived,
        };
    }
  });

  const onToggleLikePost = () => {
    fetchInstagramFeedTransition(() => {
      setOptimisticPost({ type: "like-post" });

      processActionTransition(async () => {
        await toggleLikeInstagramPost(post.id);
      });

      const newFeedPosts = fetchInstagramFeedPosts();
      const newArchivePosts = fetchInstagramArchivePosts();

      setters([newFeedPosts, newArchivePosts]);
    });
  };

  const onToggleArchivePost = () => {
    fetchInstagramFeedTransition(() => {
      setOptimisticPost({ type: "archive-post" });

      processActionTransition(async () => {
        await toggleArchiveInstagramPost(post.id);
      });

      const newFeedPosts = fetchInstagramFeedPosts();
      const newArchivePosts = fetchInstagramArchivePosts();

      setters([newFeedPosts, newArchivePosts]);
    });
  };

  const isPendingTransitions =
    processActionPending && fetchInstagramFeedPending;

  return (
    <section className={styles.InstagramWrapper}>
      <article className={styles.Header}>
        <CircleUserRound className={styles.Header__Icon} size={38} />
        <div className={styles.HeaderText}>
          <p className={styles.Header__Name}>{post.userName}</p>
          <p className={styles.Header__Date}>
            {formatDate({
              dateString: post.postDate,
              formatType: "MMMM do, yyyy",
            })}
          </p>
        </div>
      </article>

      <article className={styles.Content}></article>

      <article className={styles.Footer}>
        <section className={styles.FooterActions}>
          <button
            className={styles.FooterActions_Button}
            onClick={onToggleLikePost}
            disabled={isPendingTransitions || post.isArchived}
          >
            <Heart
              size={20}
              className={styles.likeButtonIcon}
              {...(optimisticPost.isLiked ? { color: "red", fill: "red" } : {})}
            />
          </button>
          <p>
            {formatNumberStandard(optimisticPost.likeCount)}

            {isPendingTransitions && (
              <span className={styles.transactionPending}>updating</span>
            )}
          </p>
          <button
            className={styles.FooterActions_Button}
            onClick={onToggleArchivePost}
          >
            {post.isArchived ? (
              <ArchiveRestore size={20} />
            ) : (
              <Archive size={20} />
            )}
          </button>
        </section>
        <p className={styles.FooterText}>
          <span>{post.userName}</span>
          <span>{post.details}</span>
        </p>
      </article>
    </section>
  );
};

export default InstagramPost;
