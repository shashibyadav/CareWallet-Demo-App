import React, {useEffect, useState} from "react";
import {View, Image, Dimensions} from "react-native";
import {router, useFocusEffect} from "expo-router";

const CareWallet = ({}) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        const temp_width = Dimensions.get("window").width;
        const w_h_ratio = 1074 / 1146;
        setWidth((temp_width * 0.9));
        setHeight((temp_width * 0.9) / w_h_ratio);
    }, []);
    useFocusEffect(() => {
        setTimeout(() => {
            router.back();
        }, 6000);
    });
    return <>
        <View style={{
            backgroundColor: "black",
            flex: 1,
            padding: "5%",
            overflow: "hidden",
            paddingTop: "30%",
        }}>
            <View style={{
                width: "100%",
                shadowColor: 'white', // Shadow color
                shadowOffset: { width: 2, height: 2 }, // Adjust shadow offset
                shadowOpacity: 1, // Adjust shadow opacity
                shadowRadius: 9,
            }}>
                <Image
                    source={require("@/assets/images/carewallet-card.jpeg")}
                    style={{
                        width,
                        height,
                        borderRadius: 10,
                    }}
                />
            </View>
        </View>
    </>;
};

export default CareWallet;