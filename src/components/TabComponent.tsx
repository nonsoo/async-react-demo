import {
  Activity,
  type ReactNode,
  useState,
  startTransition,
  useOptimistic,
} from "react";

import cx from "clsx";
import { Grid3X3Icon, ArchiveIcon } from "lucide-react";

import styles from "../styles/demo.module.css";

interface TabComponentProps {
  children: ReactNode[];
}
const TabComponent = ({ children }: TabComponentProps) => {
  const [tab, setTab] = useState<"feed" | "archive">("feed");

  const [optimisticTab, setOptimisticTab] = useOptimistic(tab);

  const onSwitchTab = (tab: "feed" | "archive") => {
    setOptimisticTab(tab);
    startTransition(() => {
      setTab(tab);
    });
  };

  const isPending = optimisticTab !== tab;

  return (
    <section className={styles.tabComponent}>
      <article className={styles.tabButtonGroups}>
        <button
          className={cx([
            styles.tabButton,
            {
              [styles.activeLink]: optimisticTab === "feed",
              [styles.navigationLoading]: optimisticTab === "feed" && isPending,
            },
          ])}
          onClick={() => startTransition(() => onSwitchTab("feed"))}
          aria-label="feed"
          title="feed"
        >
          <Grid3X3Icon />
          <span>Feed</span>
        </button>
        <button
          className={cx([
            styles.tabButton,
            {
              [styles.activeLink]: optimisticTab === "archive",
              [styles.navigationLoading]:
                optimisticTab === "archive" && isPending,
            },
          ])}
          onClick={() => startTransition(() => onSwitchTab("archive"))}
          aria-label="archive"
          title="archive"
        >
          <ArchiveIcon />
          <span>Archive</span>
        </button>
      </article>

      <article className={styles.TabContentWrapper}>
        <Activity mode={tab === "feed" ? "visible" : "hidden"}>
          <section
            key="instagram-tab"
            className={styles.TabContentChildWrapper}
          >
            {children[0]}
          </section>
        </Activity>
        <Activity mode={tab === "archive" ? "visible" : "hidden"}>
          <section
            key="instagram-tab"
            className={styles.TabContentChildWrapper}
          >
            {children[1]}
          </section>
        </Activity>
      </article>
      <div className={styles.linkBubble} />
    </section>
  );
};

export default TabComponent;
