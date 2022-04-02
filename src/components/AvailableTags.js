import React from "react";

import styles from "../styles/AvailableTags.module.css";

const AvailableTags = ({ tag, i, setUserTags, userTags }) => {
  const deleteTag = (arr, setUserTags) => {
    const newArr = [...arr];
    let newTagsArr = newArr.filter((obj) => obj.tagName !== tag.tagName);
    setUserTags(newTagsArr);
    console.log(newTagsArr);
  };

  return (
    <article className={styles.userTag}>
      <div style={{ backgroundColor: `${tag.tagColor}`, height: "30%" }}></div>
      <h5> {tag.tagName}</h5>
      <button
        onClick={() => {
          deleteTag(userTags, setUserTags);
        }}
      >
        Delete
      </button>
    </article>
  );
};
export default AvailableTags;
