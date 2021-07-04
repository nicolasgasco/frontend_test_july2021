import { nanoid } from "nanoid";

export const products = [
  {
    _id: nanoid(),
    name: "product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eaque numquam alias provident.",
    color: "gray",
    picture:
      "https://res.cloudinary.com/ngasco/image/upload/v1625403793/lorem_interview/iphone-silver_asanon.png",
  },
  {
    _id: nanoid(),
    name: "product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eaque numquam alias provident.",
    color: "pink",
    picture:
      "https://res.cloudinary.com/ngasco/image/upload/v1625403793/lorem_interview/iphone8-gold_gzmulx.png",
  },
];
