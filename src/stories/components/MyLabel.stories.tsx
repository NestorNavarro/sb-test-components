import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

export default {
    title : "UI/Etiquetas/Mylabel",
    component : MyLabel,
    argTypes : {
        size : { control : "select" },
        color : { control : "select" },
        fontColor: { control: "color" },
        backgroundColor: { control: "color" },
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});

Basic.args = {
    label: "Basic",
    size : "normal",
    allCaps : false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    label : "AllCaps",
    size : "normal",
    allCaps : true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    label : "Secondary",
    size : "normal",
    color : "secondary",
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label : "Tertiary",
    size : "normal",
    color : "tertiary",
}
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label : "CustomFontColorH1",
    size : "h1",
    fontColor : "#000",
}

export const CustomFontBackgroundColor = Template.bind({});
CustomFontBackgroundColor.args = {
    label : "CustomFontColorH1",
    size : "h1",
    fontColor : "#fff",
    backgroundColor : "#000",
}