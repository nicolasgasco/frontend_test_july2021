import { nanoid } from "nanoid";

export const PRODUCTS = [
  {
    _id: nanoid(),
    name: "product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eaque numquam alias provident.",
    available_colors: ["gray", "pink"],
    color: "gray",
    picture: {
      uri: "https://res.cloudinary.com/ngasco/image/upload/v1625403793/lorem_interview/iphone-silver_asanon.png",
      alt: "Back and front view of Product 1",
    },
  },
  {
    _id: nanoid(),
    name: "product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eaque numquam alias provident.",
    available_colors: ["gray", "pink"],
    color: "pink",
    picture: {
      uri: "https://res.cloudinary.com/ngasco/image/upload/v1625403793/lorem_interview/iphone8-gold_gzmulx.png",
      alt: "Back and front view of Product 2",
    },
  },
];
