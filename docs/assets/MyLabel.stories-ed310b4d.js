var d=Object.defineProperty;var n=(e,r)=>d(e,"name",{value:r,configurable:!0});import{j as a}from"./jsx-runtime-82e0d3de.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const l=n(({label:e,fontColor:r,allCaps:s=!1,color:c="primary",size:i="normal"})=>a("span",{className:`label ${i} text-${c} `,style:{color:r},children:s?e.toLocaleUpperCase():e}),"MyLabel"),t=l;try{l.displayName="MyLabel",l.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Label to show",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:{value:"primary"},description:"Wich color shold be showded?",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},allCaps:{defaultValue:{value:"false"},description:"is Label capitalized?",name:"allCaps",required:!1,type:{name:"boolean"}},fontColor:{defaultValue:null,description:"custom color",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:l.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}const M={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import MyLabel from "../../components/MyLabel";\r
\r
export default {\r
    title : "UI/Etiquetas/Mylabel",\r
    component : MyLabel,\r
    argTypes : {\r
        size : { control : "select" },\r
        color : { control : "select" },\r
        fontColor: { control: "color" },\r
    }\r
} as ComponentMeta<typeof MyLabel>;\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />\r
\r
export const Basic = Template.bind({});\r
\r
Basic.args = {\r
    label: "Basic",\r
    size : "normal",\r
    allCaps : false,\r
};\r
\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
    label : "AllCaps",\r
    size : "normal",\r
    allCaps : true,\r
}\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
    label : "Secondary",\r
    size : "normal",\r
    color : "secondary",\r
}\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
    label : "Tertiary",\r
    size : "normal",\r
    color : "tertiary",\r
}\r
export const CustomFontColor = Template.bind({});\r
CustomFontColor.args = {\r
    label : "CustomFontColorH1",\r
    size : "h1",\r
    fontColor : "#000",\r
}`,locationsMap:{basic:{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}},"all-caps":{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}},secondary:{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}},tertiary:{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}},"custom-font-color":{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}}}}},title:"UI/Etiquetas/Mylabel",component:t,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},o=n(e=>a(t,{...e}),"Template"),p=o.bind({});p.args={label:"Basic",size:"normal",allCaps:!1};const y=o.bind({});y.args={label:"AllCaps",size:"normal",allCaps:!0};const m=o.bind({});m.args={label:"Secondary",size:"normal",color:"secondary"};const u=o.bind({});u.args={label:"Tertiary",size:"normal",color:"tertiary"};const b=o.bind({});b.args={label:"CustomFontColorH1",size:"h1",fontColor:"#000"};const T=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{y as AllCaps,p as Basic,b as CustomFontColor,m as Secondary,u as Tertiary,T as __namedExportsOrder,M as default};
//# sourceMappingURL=MyLabel.stories-ed310b4d.js.map
