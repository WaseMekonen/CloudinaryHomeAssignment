import axios from "axios";

export const getPhotos = (setArr) => {
  const url = "https://picsum.photos/v2/list?page=2&limit=9";

  axios
    .get(url)
    .then((response) => {
      response.data.forEach((obj) => {
        obj.tags = [];
      });
      setArr(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const inputHandler = (event, setEvent) => {
  setEvent(event);
};

export const submitHandler = (tag, userTags, setUserTags) => {
  const tagsArr = [...userTags];
  tagsArr.push(tag);
  setUserTags(tagsArr);
};



export const tagPhoto = (photosArray, targedArray, setTargedArray, tagName) => {
  const arr = [...photosArray];
  targedArray.push(tagName);
  setTargedArray(arr);
};

export const handleClick = (item) => {
  console.log(`${item} is clicked`);
};
