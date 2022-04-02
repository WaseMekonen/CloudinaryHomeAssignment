import React, { useContext, useState } from "react";
import AvailableTags from "./AvailableTags";
import Context from "../contex/Contex";

import styles from "../styles/CreateTags.module.css";

const CreateTags = () => {
  const [userTags, setUserTags] = useState([]);
  const [tagName, setTagName] = useState("");
  const [tagColor, setTagColor] = useState("");

  // const { userTags, setUserTags, tagName, setTagName, tagColor, setTagColor } =
  //   useContext(Context);

  const submitHandler = (tagName, tagColor) => {
    const tag = { tagName, tagColor, pictures: [] };
    const tags = [...userTags];
    tags.push(tag);
    for (let i = 0; i < userTags.length; i++) {
      const element = userTags[i].tagName;
      if (element === tag.tagName) {
        alert(`${tag.tagName} already exist!`);
        return;
      }
    }
    if (tag.tagName === "") {
      alert("fiil a tag name");
      return;
    } else if (tag.tagColor === "") {
      alert("fiil a tag color");
      return;
    } else if (tag.tagName.length < 4) {
      alert("name to short");
      console.log(tag.tagName.length);
      return;
    } else {
      setUserTags(tags);
      setTagName("");
      setTagColor("");
    }
  };

  return (
    <aside>
      <form
        className={styles.asideForm}
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(tagName, tagColor);
        }}
      >
        <section className={styles.inputsWrapper}>
          <input
            className={styles.createTagsInput}
            type="text"
            value={tagName}
            placeholder="New tag.."
            onChange={(e) => {
              setTagName(e.target.value);
              e.target.value = "";
            }}
          />
          <input
            className={styles.createTagsColor}
            value={tagColor}
            type="color"
            onChange={(e) => {
              setTagColor(e.target.value);
              e.target.value = "";
            }}
          />
        </section>
        <section className={styles.buttonWrapper}>
          <input
            required
            className={styles.createTagsButton}
            type="submit"
            value="Save"
          />
        </section>
      </form>
      <section className={styles.userTags}>
        <h4>Available tags</h4>
        {userTags
          ? userTags.map((tag, i) => (
              <AvailableTags
                className={styles.userTag}
                tag={tag}
                i={i}
                key={i}
                userTags={userTags}
                setUserTags={setUserTags}
              />
            ))
          : ""}
      </section>
    </aside>
  );
};

export default CreateTags;
