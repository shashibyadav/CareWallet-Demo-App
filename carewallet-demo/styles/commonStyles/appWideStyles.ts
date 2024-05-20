import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

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
    careWalletLogo: {
        height: "100%",
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
    pageContainer: {
        flex: 1,
    },
    webViewStyles: {
        flex: 1,
    },
    contentWrapper: {
        padding: 15,
    },
    contextBackColorWrapper: {
        padding: 15,
        backgroundColor: Colors["light"].tint,
        flex: 1,
    },
    careWalletBtn: {
        backgroundColor: Colors["light"].tint,
        borderRadius: 8, // Adjust border radius for desired shadow effect
        shadowColor: '#ccc', // Shadow color
        shadowOffset: { width: 2, height: 2 }, // Adjust shadow offset
        shadowOpacity: 1, // Adjust shadow opacity
        shadowRadius: 9,
        marginBottom: 15,
        height: 40,
        padding: 10,
        width: "40%",
        alignItems: "center",
    },
    careWalletBtnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    submitBtn: {
        backgroundColor: Colors["light"].tint,
        borderRadius: 8, // Adjust border radius for desired shadow effect
        shadowColor: '#ccc', // Shadow color
        shadowOffset: { width: 2, height: 2 }, // Adjust shadow offset
        shadowOpacity: 1, // Adjust shadow opacity
        shadowRadius: 9,
        marginBottom: 15,
        height: 50,
        padding: 15,
        width: "100%",
        alignItems: "center",
    },
    submitBtnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    confettiBtn: {
        backgroundColor: Colors["light"].tint,
        borderRadius: 8, // Adjust border radius for desired shadow effect
        shadowColor: '#ccc', // Shadow color
        shadowOffset: { width: 2, height: 2 }, // Adjust shadow offset
        shadowOpacity: 1, // Adjust shadow opacity
        shadowRadius: 9,
        marginBottom: 15,
        height: 40,
        padding: 10,
        width: "40%",
        alignItems: "center",
        marginTop: 200,
    },
    confettiBtnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export const reactLogo = styles.reactLogo;
export const titleContainer = styles.titleContainer;
export const stepContainer = styles.stepContainer;
export const headerImage = styles.headerImage;
export const titleContainer2 = styles.titleContainer2;
export const chickenLogo = styles.chickenLogo;
export const pageContainer = styles.pageContainer;
export const webViewStyles = styles.webViewStyles;
export const careWalletLogo = styles.careWalletLogo;
export const contentWrapper = styles.contentWrapper;
export const careWalletBtn = styles.careWalletBtn;
export const careWalletBtnText = styles.careWalletBtnText;
export const submitBtn = styles.submitBtn;
export const submitBtnText = styles.submitBtnText;
export const confettiBtn = styles.confettiBtn;
export const confettiBtnText = styles.confettiBtnText;
export const { contextBackColorWrapper } = styles;