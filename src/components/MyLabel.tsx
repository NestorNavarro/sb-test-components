import "./mylabel.css";
type size = "normal" | "h1" | "h2" | "h3"
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
   color ?: "primary" | "secondary" | "tertiary",
    /**
    * is Label capitalized?
    */
   allCaps ?: boolean;
   /**
   * custom color
   */
    fontColor ?: string;
   /**
   * custom backgroundColor
   */
   backgroundColor ?: string;
}

export const MyLabel = ({
    label,
    fontColor,
    allCaps = false,
    color = "primary",
    size = "normal",
    backgroundColor = "transparent",
}: MyLabelProps) => {
    return (
        <span 
            className={`label ${size} text-${color} `} 
            style={{ 
                color : fontColor,
                backgroundColor,
            }}
        >
            {allCaps ? label.toLocaleUpperCase() : label}
        </span>
    );
};

export default MyLabel