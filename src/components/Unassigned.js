import React, { useContext, useEffect, useState } from "react";
import Context from "../contex/Contex";
import Picture from "./Picture";
import UserTags from "../components/UserTags";

import { tagPhoto, handleClick, getPhotos } from "../utils/utils";

import styles from "../styles/Unassigned.module.css";

const Unassigned = () => {
  // const { photos, setPhotos } = useContext(Context);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos(setPhotos);
    console.log("hello");
  }, []);
  return (
    <section className={styles.right}>
      <h4>Unassigned</h4>
      <article className={styles.unassigned}>
        <section className={styles.gallery}>
          {photos
            ? photos.map((photo) => <Picture key={photo.id} photo={photo} />)
            : ""}
        </section>

        {/* {photos.map((photo, i) => {
        return (
          <>
            <section
              className={styles.photo}
              key={i}
              onClick={() => {
                handleClick(photo.author);
              }}
            >
              <img src={photo.download_url} alt="" />
              <span>{photo.author}</span>
              <button
                      className={styles.tagButton}
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      tag
                    </button>
                    <div
                      className={styles.tagsDialog}
                      style={show ? { display: "flex" } : { display: "none" }}
                    >
                      {userTags.map((tag, j) => (
                        <section style={{ background: `${tag.color}` }} key={j}>
                          <h5
                            onClick={() => {
                              tagPhoto(
                                photos,
                                photo.tags,
                                setPhotos,
                                tag.tagName
                              );
                            }}
                          >
                            {tag.tagName}
                          </h5>
                        </section>
                      ))}
                      <button>Apply</button>
                    </div>
              {userTags.map((tag, j) => (
                <div
                  className={styles.tagsDialog}
                  // style={show ? { display: "flex" } : { display: "none" }}
                  style={{ display: "flex" }}
                  key={j}
                >
                  <section style={{ background: `${tag.color}` }} key={j}>
                    <h5
                      onClick={() => {
                        tagPhoto(photos, photo.tags, setPhotos, tag.tagName);
                      }}
                    >
                      {tag.tagName}
                    </h5>
                  </section>
                  <button>Apply</button>
                </div>
              ))}
            </section>
          </>
        );
      })} */}
      </article>
      <UserTags />
    </section>
  );
};

export default Unassigned;
