import React from "react";
import { useState } from "react";
import CreateTags from "./components/CreateTags";
import Unassigned from "./components/Unassigned";
import Context from "./contex/Contex";

import styles from "./styles/App.module.css";

const App = () => {
  const [userTags, setUserTags] = useState([]);
  const [tagName, setTagName] = useState("");
  const [tagColor, setTagColor] = useState("");

  return (
    <Context.Provider
      value={
        (userTags, setUserTags, tagName, setTagName, tagColor, setTagColor)
      }
    >
      <div className={styles.App}>
        <main>
          <CreateTags />
          <Unassigned />
          {/* <UserTags /> */}
        </main>
      </div>
      {/* <section>
        {photos.map((photo) => (
          <Picture key={photo.id} photo={photo} />
        ))}
      </section> */}
    </Context.Provider>
  );
};

export default App;
