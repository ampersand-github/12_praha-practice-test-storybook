import React from "react";
import { Board } from "../components/board";

export default {
  title: "StoryBook/Board",
  component: Board,
};
const Template = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: ["", "", "", "", "", "", "", "", ""],
  onClick: () => {
    console.log("- - - -");
  },
};

export const Triangle = Template.bind({});
Triangle.args = {
  squares: ["▲", "▲", "▲", "▲", "▲", "▲", "▲", "▲", "▲"],
  onClick: () => {
    console.log("- - - -");
  },
};
