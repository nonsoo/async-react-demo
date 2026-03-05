import type { InstagramPost } from "./InstagramPost.type";

import { v4 as uuid } from "uuid";

export const instagramPosts: Array<InstagramPost> = [
  {
    id: uuid(),
    userName: "alex.codes",
    postDate: "2026-01-12",
    likeCount: 124,
    isLiked: true,
    isArchived: false,
    details: "Shipped a new feature today 🚀",
  },
  {
    id: uuid(),
    userName: "design.daily",
    postDate: "2026-01-10",
    likeCount: 982,
    isLiked: false,
    isArchived: false,
    details: "Minimal UI is a mindset, not a style.",
  },
  {
    id: uuid(),
    userName: "react.wizard",
    postDate: "2026-01-08",
    likeCount: 421,
    isLiked: true,
    isArchived: false,
    details: "Suspense is less magic once you understand Fiber.",
  },
  {
    id: uuid(),
    userName: "travel.frames",
    postDate: "2026-01-05",
    likeCount: 2301,
    isLiked: false,
    isArchived: true,
    details: "Golden hour hits different in Lisbon 🌅",
  },
  {
    id: uuid(),
    userName: "coffee.and.code",
    postDate: "2026-01-03",
    likeCount: 311,
    isLiked: true,
    isArchived: false,
    details: "Debugging is just problem-solving with caffeine ☕",
  },
];
