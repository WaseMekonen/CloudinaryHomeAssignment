import React, { useContext } from "react";
import Context from "../contex/Contex";

import styles from "../styles/UserTags.module.css";

const UserTags = () => {
  const { userTags } = useContext(Context);
  return (
    <article className={styles.tagsCont}>
      <div className={styles.tags}>
        {userTags
          ? userTags.map((tag, i) => {
              return (
                <div>
                  <span>{tag.tagName}</span>
                </div>
              );
            })
          : ""}
      </div>
    </article>
  );
};

export default UserTags;
