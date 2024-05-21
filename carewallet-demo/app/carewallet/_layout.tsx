import React, {useEffect, useState} from "react";
import {View, Image, Dimensions, Text, Animated, StyleSheet, LayoutAnimation, Modal} from "react-native";
import {router, useFocusEffect} from "expo-router";
import {setGHideConfetti, setGShowConfetti} from "@/components/store/reducers/globalStore";
import {useAppDispatch} from "@/components/store/hooks";
import Confetti from "@/components/confetti/Confetti";

const CareWalletCard = ({}) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        const temp_width = Dimensions.get("window").width;
        const w_h_ratio = 1074 / 1146;
        setWidth((temp_width * 0.9));
        setHeight((temp_width * 0.9) / w_h_ratio);
    }, []);
    return <>
        <View style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
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

interface LeaderRowProps {
    leftTextLine1: string;
    leftTextLine2: string;
    iconImage: any;
    dummy?: boolean;
    finished?: boolean;
}

const LoaderRow: React.FC<LeaderRowProps> = ({
    leftTextLine1,
    leftTextLine2,
    iconImage,
    dummy,
    finished,
                                             }) => {

    return <>
        <View style={{ width: "100%", flexDirection: "row", height: "33.33333%"}}>
            <View style={{ width: "40%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {!dummy && <>
                    <Text style={{color: "#5CB23C", fontWeight: "bold"}}>{leftTextLine1}</Text>
                    <Text style={{color: "#5CB23C", fontWeight: "bold"}}>{leftTextLine2}</Text>
                </>}
            </View>
            <View  style={{ width: "20%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {!dummy && <>
                    <View style={{backgroundColor: "#5CB23C", height: 20, width: 20, borderRadius: 80 }}/>
                </>}
            </View>
            <View  style={{ width: "40%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {!dummy && <>
                    <Image style={{width: 40, height: 40}} source={iconImage} />
                </>}
            </View>
            {/*<View  style={{ width: "40%", height: "100%", borderWidth: 1, }}>*/}

            {/*</View>*/}
        </View>
    </>;
};

const iconHealthImage = require("@/assets/images/thumbnail_healthbird-logo.png");
const iconDocImage = require("@/assets/images/Health-Insurance-Icon.png");
const iconCareImage = require("@/assets/images/thumbnail_CareWallet-Logo-Transparent.png");

const duration = 3000;
const duration2 = 500;
const setAnimation = () => {
    LayoutAnimation.configureNext({
        duration: duration,
        create: {type: 'linear', property: 'opacity'},
        update: {type: 'linear', springDamping: 0.4},
        delete: {type: 'linear', property: 'opacity'},
    });
};
const resetAnimation = () => {
    LayoutAnimation.configureNext({
        duration: LayoutAnimation.Presets.easeInEaseOut.duration, // Default duration
        create: LayoutAnimation.Presets.easeInEaseOut.create,   // Default create animation
        update: LayoutAnimation.Presets.easeInEaseOut.update,   // Default update animation
        delete: LayoutAnimation.Presets.easeInEaseOut.delete,   // Default delete animation
    });
};

const CareWallet: React.FC = ({}) => {
    const [firstRowStarted, setFirstRowStarted] = useState(false);
    const [firstVisibility, setFirstVisibility] = useState(new Animated.Value(firstRowStarted ? 1 : 0));
    const [showSuccess, setShowSuccess] = useState(false);
    const [successVisibility, setSuccessVisibility] = useState(new Animated.Value(showSuccess ? 1 : 0));
    const [firstRowFinished, setFirstRowFinished] = useState(false);
    const [secondRowStarted, setSecondRowStarted] = useState(false);
    const [secondVisibility, setSecondVisibility] = useState(new Animated.Value(secondRowStarted ? 1 : 0));
    const [secondRowFinished, setSecondRowFinished] = useState(false);
    const [thirdRowStarted, setThirdRowStarted] = useState(false);
    const [thirdVisibility, setThirdVisibility] = useState(new Animated.Value(secondRowStarted ? 1 : 0));
    const [thirdRowFinished, setThirdRowFinished] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const targetHeight = 33;
    const cleanUp = () => {
        setFirstRowStarted(false);
        setShowSuccess(false);
        setFirstVisibility(new Animated.Value(0));
        setFirstRowFinished(false);
        setSecondRowStarted(false);
        setSecondVisibility(new Animated.Value(0));
        setSecondRowFinished(false);
        setThirdRowStarted(false);
        setThirdVisibility(new Animated.Value(0));
        setThirdRowFinished(false);
        setShowSuccess(false);
        resetAnimation();
        if (router.canGoBack()) {
            router.back();
        }
    };
    useEffect(() => {
        // LayoutAnimation.configureNext({
        //     duration: duration,
        //     create: {type: 'linear', property: 'opacity'},
        //     update: {type: 'linear', springDamping: 0.4},
        //     delete: {type: 'linear', property: 'opacity'},
        // });
        if (firstVisibility) {
            Animated.parallel([
                Animated.timing(firstVisibility, {
                    toValue: firstVisibility ? 1 : 0,
                    duration: duration2,
                    useNativeDriver: true, // Improve performance (optional)
                })
            ]).start();
        }
        if (secondRowStarted) {
            Animated.parallel([
                Animated.timing(secondVisibility, {
                    toValue: secondVisibility ? 1 : 0,
                    duration: duration2,
                    useNativeDriver: true, // Improve performance (optional)
                })
            ]).start();
        }
        if (thirdRowStarted) {
            Animated.timing(thirdVisibility, {
                toValue: thirdVisibility ? 1 : 0,
                duration: duration2,
                useNativeDriver: true, // Improve performance (optional)
            }).start();
        }
        if (showSuccess) {
            Animated.timing(successVisibility, {
                toValue: 1,
                duration: duration2,
                useNativeDriver: true,
            }).start();
        }
    }, [firstRowStarted, secondRowStarted, thirdRowStarted, showSuccess]);
    const dispatch = useAppDispatch();
    const showGlobalConfetti = () => {
        dispatch(setGShowConfetti());
        setTimeout(() => {
            dispatch(setGHideConfetti());
        }, 6000);
    };
    useEffect(() => {
        setTimeout(() => {
            setFirstRowStarted(true);
            setTimeout(() => {
                // First finished
                setAnimation();
                setFirstRowFinished(true);
                setSecondRowStarted(true);
                setTimeout(() => {
                    // Second finished
                    setAnimation();
                    setSecondRowFinished(true);
                    setThirdRowStarted(true);
                    setTimeout(() => {
                        // Third finished
                        setThirdRowFinished(true);
                        setTimeout(() => {
                            // show success
                            setShowSuccess(true);
                            setTimeout(() => {
                                // show modal
                                setShowModal(true);
                                setTimeout(() => {
                                    // Clean up
                                    cleanUp();
                                }, duration);
                            }, duration);
                        }, duration);
                    }, duration);
                }, duration);
            }, duration);
        }, 200);
    }, []);

    return <>
        <View style={{
            flex: 1,
            backgroundColor: "white",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: "5%",
        }}>
            {!showSuccess && <View style={{
                width: "50%",
                height: 400,
            }}>
                <Animated.View style={{ opacity: firstVisibility }}>
                    <LoaderRow finished={firstRowFinished} leftTextLine1={"User"} leftTextLine2={"Profile"} iconImage={iconHealthImage} />
                </Animated.View>
                <Animated.View style={{ opacity: secondVisibility }}>
                    <LoaderRow finished={secondRowFinished} leftTextLine1={"Insurance"} leftTextLine2={"Eligibility"} iconImage={iconDocImage} />
                </Animated.View>
                <Animated.View style={{ opacity: thirdVisibility }}>
                    <LoaderRow finished={thirdRowFinished} leftTextLine1={"Account"} leftTextLine2={"Verification"} iconImage={iconCareImage} />
                </Animated.View>
                <View style={[styles.view, !secondRowStarted ? null : {height: `${targetHeight}%`}]}></View>
                <View style={[styles.view2, !thirdRowStarted ? null : {height: `${targetHeight}%`}]}></View>
            </View>}
            {showSuccess && <Animated.View style={{flex: 1, width: "100%", height: "100%", alignItems: "center", flexDirection: "column", justifyContent: "center", opacity: successVisibility }}>
                    <Image style={{width: 100, height: 100}} source={require("@/assets/images/check-mark-11-512.png")} />
            </Animated.View>}
            {showModal && <>
                <View style={{position: "absolute", flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showModal}
                        onRequestClose={() => {
                            setShowModal(false);
                        }}
                    >
                        <CareWalletCard />
                        <Confetti />
                    </Modal>
                </View>
            </>}
        </View>
        {/*<CareWalletCard />*/}
    </>;
};

const styles = StyleSheet.create({
    view: {
        width: 5,
        backgroundColor: "#5CB23C",
        position: "absolute",
        top: "6%",
        left: "48.5%",
        zIndex: 9999,
        height: "0%",
    },
    view2: {
        width: 5,
        backgroundColor: "#5CB23C",
        position: "absolute",
        top: "39%",
        left: "48.5%",
        zIndex: 9999,
        height: "0%",
    },
});

export default CareWallet;