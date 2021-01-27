import React from "react";
import {Square} from "../functions/squares";

export default {
    title: "StoryBook/Square",
    component: Square,
};

const Template = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: "○",
    onClick: () => {
        console.log("- - - -");
    },
};
