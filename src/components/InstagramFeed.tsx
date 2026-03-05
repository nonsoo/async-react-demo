import type { InstagramPost as InstagramPostType } from "../utils/InstagramPost.type";

import { use, type Dispatch, type SetStateAction } from "react";

import { ClipboardCheckIcon } from "lucide-react";

import InstagramPost from "./InstagramPost";

import styles from "../styles/demo.module.css";

interface InstagramFeedProps {
  data: Promise<Array<InstagramPostType>>;
  setters: Dispatch<
    SetStateAction<[Promise<InstagramPostType[]>, Promise<InstagramPostType[]>]>
  >;
}
const InstagramFeed = ({ data, setters }: InstagramFeedProps) => {
  const feedPosts = use(data);

  if (feedPosts.length === 0) {
    return (
      <section className={styles.emptyState}>
        <p>
          <ClipboardCheckIcon /> <span>No items here</span>
        </p>
      </section>
    );
  }

  return feedPosts.map((post) => (
    <InstagramPost post={post} key={post.id} setters={setters} />
  ));
};

export default InstagramFeed;
