import { jsx as _jsx } from "react/jsx-runtime";
import "./mylabel.css";
export const MyLabel = ({ label, fontColor, allCaps = false, color = "primary", size = "normal", backgroundColor = "transparent", }) => {
    return (_jsx("span", { className: `label ${size} text-${color} `, style: {
            color: fontColor,
            backgroundColor,
        }, children: allCaps ? label.toLocaleUpperCase() : label }));
};
export default MyLabel;
