import { useProgress } from "./use-progress";

import styles from "./progress-bar.module.css";
import classNames from "classnames";

export const ProgressBar = ({ viewVariant = "default" }) => {
  const progress = useProgress();

  return (
    <div
      className={classNames(styles.progressBar, {
        [styles.default]: viewVariant === "default",
        [styles.accent]: viewVariant === "accent",
      })}
      style={{
        width: progress,
      }}
    />
  );
};
