/// <reference types="react" />
import "./mylabel.css?inline";
type size = "normal" | "h1" | "h2" | "h3";
export interface MyLabelProps {
    /**
    * Label to show
    */
    label: string;
    /**
    * How large should the button be?
    */
    size?: size;
    /**
    * Wich color shold be showded?
    */
    color?: "primary" | "secondary" | "tertiary";
    /**
    * is Label capitalized?
    */
    allCaps?: boolean;
    /**
    * custom color
    */
    fontColor?: string;
    /**
    * custom backgroundColor
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, fontColor, allCaps, color, size, backgroundColor, }: MyLabelProps) => JSX.Element;
export default MyLabel;
