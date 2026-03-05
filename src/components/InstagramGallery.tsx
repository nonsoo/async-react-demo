"use client";
import type { InstagramPost } from "../utils/InstagramPost.type";

import { Suspense, useState } from "react";

import {
  fetchInstagramArchivePosts,
  fetchInstagramFeedPosts,
} from "../utils/actions";
import InstagramFeed from "./InstagramFeed";
import InstagramPostSkeleton from "./InstagramPostSkeleton";
import TabComponent from "./TabComponent";

const InstagramDemo = () => {
  const [feedPromise, setFeedPromise] = useState<
    [Promise<Array<InstagramPost>>, Promise<Array<InstagramPost>>]
  >([fetchInstagramFeedPosts(), fetchInstagramArchivePosts()]);

  return (
    <TabComponent>
      <Suspense fallback={<InstagramPostSkeleton />}>
        <InstagramFeed data={feedPromise[0]} setters={setFeedPromise} />
      </Suspense>

      <Suspense fallback={<InstagramPostSkeleton />}>
        <InstagramFeed data={feedPromise[1]} setters={setFeedPromise} />
      </Suspense>
    </TabComponent>
  );
};

export default InstagramDemo;
