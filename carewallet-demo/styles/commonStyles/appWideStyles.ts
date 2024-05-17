import {StyleSheet} from "react-native";

export const headerBackgroundColor = {
    light: "#A1CEDC",
    dark: "#1D3D47"
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    chickenLogo: {
        width: "100%",
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer2: {
        flexDirection: 'row',
        gap: 8,
    },
});

export const reactLogo = styles.reactLogo;
export const titleContainer = styles.titleContainer;
export const stepContainer = styles.stepContainer;
export const headerImage = styles.headerImage;
export const titleContainer2 = styles.titleContainer2;
export const chickenLogo = styles.chickenLogo;