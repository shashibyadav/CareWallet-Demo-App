import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#ffffff', // Adjust background color as needed
        borderRadius: 8, // Adjust border radius for desired shadow effect
        shadowColor: '#ccc', // Shadow color
        shadowOffset: { width: 2, height: 2 }, // Adjust shadow offset
        shadowOpacity: 1, // Adjust shadow opacity
        shadowRadius: 9,
        marginBottom: 15,
    },
    labelStyle: {
        color: "grey",
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0,
    },
    inputStyle: {
        height: 60,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        color: Colors["light"].tint,
    },
    inputStyleWithLabel: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        color: Colors["light"].tint,
    }
});

export const inputContainer = styles.inputContainer;

export const inputStyle = styles.inputStyle;
export const labelStyle = styles.labelStyle;
export const inputStyleWithLabel = styles.inputStyleWithLabel;