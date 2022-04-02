import React from "react";
import { tagPhoto } from "../utils/utils";
import { useContext } from "react";
import Context from "./../contex/Contex";

import styles from "../styles/Picture.module.css";

const Picture = ({ photo }) => {
  const { setShow, show, photos, setPhotos, userTags } = useContext(Context);

  console.log(userTags);

  return (
    <section className={styles.photoContainer}>
      <div className={styles.picture}>
        <img src={photo.download_url} alt="" key={photo.id} />
        <button
          className={styles.tagButton}
          onClick={() => {
            setShow(true);
          }}
        >
          tag
        </button>
      </div>
      <div className={styles.pictureDetails}>
        <span>{photo.author}</span>
      </div>

      {/* <div className={styles.tagsDialog}>
        {userTags
          ? userTags.map((tag, j) => (
              <section style={{ background: `${tag.color}` }} key={j}>
                <h5
                  onClick={() => {
                    tagPhoto(photos, photo.tags, setPhotos, tag.tagName);
                  }}
                >
                  {tag.tagName}
                </h5>
              </section>
            ))
          : ""}
        <button>Apply</button>
      </div> */}
    </section>
  );
};

export default Picture;
