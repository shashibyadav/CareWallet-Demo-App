import { StyleSheet } from "react-native";
import {Colors} from "@/constants/Colors";

const style = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 60,
        borderBottomWidth: 1,
        borderColor: Colors["light"].tint,
        marginTop: 35,
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "white"
    },
    leftIconContainer: {
        width: '15%',
        height: '100%',
        padding: 16,
    },
    middleIconContainer: {
        width: '70%',
        height: '100%',
        padding: 16,
        paddingLeft: 0,
    },
    middleHeaderText: {
        fontSize: 24,
        color: Colors["light"].tint,
        fontWeight: 'bold',
        width: '100%',
    },
    whiteCard: {
        backgroundColor: "white",
        width: "100%",
        height: 200,
        borderRadius: 8,
        shadowColor: '#ccc', // Shadow color
        shadowOffset: { width: 2, height: 2 }, // Adjust shadow offset
        shadowOpacity: 1, // Adjust shadow opacity
        shadowRadius: 4,
        overflow: "hidden",
        flex: 1,
    },
})

export const {
    headerContainer ,
    leftIconContainer,
    middleIconContainer,
    middleHeaderText,
    whiteCard,
} = style;