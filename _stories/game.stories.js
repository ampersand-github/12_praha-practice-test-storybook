import React from "react";
import {Game} from "../components/game";

export default {
    title: 'StoryBook/Game',
    component: Game,
};


const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
};
