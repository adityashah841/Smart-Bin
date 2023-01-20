import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dimensions, StatusBar } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const vw = (amount) => {
    return wp(amount + "%");
};

export const vh = (amount) => {
    return hp(amount + "%");
};

export const Margin = {
    xxs: vw(1),
    xs: vw(1.5),
    small: vw(2.5),
    medium: vw(5),
    large: vw(7.5),
    xl: vw(15),
    xxl: vw(30),
};

export const Fonts = {
    reg: "Roboto-Regular",
    bold: "Roboto-Bold",
    pop: "Poppins-Regular",
    popSemi: "Poppins-SemiBold",
    popBold: "Poppins-ExtraBold",
    italic: "SemiBoldItalic",
    h1: vw(7),
    h2: vw(6),
    h3: vw(4),
    h4: vw(3),
    h5: vw(2),
    h6: vw(1),
};

export const Poppins = {
    reg: "Poppins-Regular",
    semi: "Poppins-SemiBold",
    bold: "Poppins-ExtraBold",
    h1: vw(7),
    h2: vw(6),
    h3: vw(4),
    h4: vw(3),
    h5: vw(2),
    h6: vw(1),
};

export const Radius = {
    xs: vw(1.5),
    small: vw(2),
    medium: vw(3.5),
    large: vw(5),
    xl: vw(7.5),
};

export const Colors = {
    gray: "#C5C5C5",
    primary: "#2A41CB",
    darkPurple: "#2E3A59",
    lightPurple: "#7887E0",
    white: "#fff",
    black: "#000",
    blue: "#7E9FFC",
    bg: "#F7FAFC",
    bgLight: "#F2F2F2",
    font: "#30365E",
    light: "#F7FAFC",
    dark: "#30365E",
    accent: "#38B2AC",
    fill: "#ECF0F3",
    errorbg: "#FFE0E0",
    borderLight: "#BDBDBD",
    error: "#EC3C3C",
    border: "#D3D3D3",
    modal: "rgba(0,0,0,0.75)",
    darkmode: "#001726",
    input: "rgba(242,242,242,0.4)",
    disable: "#BDBDBD",
    yellow: "#FFA726",
    success: "#009006",
};