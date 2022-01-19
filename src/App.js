import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
const items = [
  {
    title: "What is React?",
    content: "React is a front-end Javascript framework.",
  },
  {
    title: "Why ure React",
    content: "React is favourite Js library among engineers",
  },
  {
    title: "How do you use react?",
    content: "You use React by creating components.",
  },
];
const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "Green",
  },
  {
    label: "A shade of Blue",
    value: "Blue",
  },
];

export default () => {

  return (
    <div>
      <Translate />
    </div>
  );
};
