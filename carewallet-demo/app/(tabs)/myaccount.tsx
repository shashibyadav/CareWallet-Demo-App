import React, {useEffect, useState} from "react";
import {Image, Pressable, Text, View} from "react-native";
// import {tempPassImageStr} from "@/styles/commonStyles/appWideStyles";
import Confetti from "@/components/confetti/Confetti";
import {
    headerContainer,
    leftIconContainer,
    middleHeaderText,
    middleIconContainer, whiteCard
} from "@/styles/appointment/appointmentStyles";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {Colors} from "@/constants/Colors";
import withContentWrapper from "@/components/ContentWrapper";
import AppleWalletBtn from "@/components/AppleWalletBtn";
import {setGHideConfetti, setGShowConfetti, showGlobalConfetti} from "@/components/store/reducers/globalStore";
import {useAppDispatch} from "@/components/store/hooks";
import {Link, router} from "expo-router";


interface GreyLineProps {
    leftIconName: string,
    rightIconName: string,
    middleText: string,
};

const GreyLine: React.FC<GreyLineProps> = ({
    leftIconName,
    rightIconName,
    middleText
                  }) => {
    return <>
        <View style={{width: "100%", padding: 5, paddingBottom: 0}}>
            <View style={{backgroundColor: "#EAEEF7", borderRadius: 5, flexDirection: "row", width: "100%", height: 30, paddingLeft: 5, paddingRight: 5}}>
                <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                    <TabBarIcon style={{fontSize: 16, paddingBottom: 2}} name={leftIconName} color={"#545971"} />
                </View>
                <View style={{width: "80%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                    <Text style={{color: "#545971", fontWeight: "bold", fontSize: 16}}>{middleText}</Text>
                </View>
                <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                    <TabBarIcon style={{fontSize: 16}} name={'chevron-forward-outline'} color={"#545971"} />
                </View>
            </View>
        </View>
    </>;
};

const Content = withContentWrapper(() => {

    const dispatch = useAppDispatch();
    const showGlobalConfetti = () => {
        dispatch(setGShowConfetti());
        setTimeout(() => {
            dispatch(setGHideConfetti());
        }, 6000);
    };

    return <View style={{
        flex: 1,
        width: "100%",
        height: 500,
    }}>
        <View style={{
            width: "100%",
            height: 60,
            flexDirection: "row"
        }}>
            <View style={{ width: "50%", height: 60, }}>
                <Image
                    source={require('@/assets/images/ambetter-icon.png')}
                />
            </View>
            <View style={{ width: "50%", height: 60, flexDirection:"row-reverse"}}>
                <TabBarIcon name={'hand-right'} color={"white"} />
            </View>
        </View>
        <View style={{ width: "100%", height: 60, padding: 15 }}>
            <Text style={{width: "100%", color: "white"}}>Plan</Text>
            <View style={{width: "100%", flexDirection:"row"}}>
                <Text style={{color: "white", fontWeight:"bold"}}>Standard Expanded Bronze</Text>
                <Text style={{color: "white"}}> - EPO</Text>
            </View>
        </View>
        <View style={{width: "100%", height: 60, paddingLeft: 15, paddingTop: 0, paddingRight: 15, flexDirection: "row"}}>
            <View style={{width: "33.3333333%", height: 60}}>
                <Text style={{width: "100%", color: "white"}}>Member Name</Text>
                <Text style={{width: "100%", color: "white", fontWeight: "bold"}}>JOHN SMITH</Text>
            </View>
            <View style={{width: "33.3333333%", height: 60}}>
                <Text style={{width: "100%", color: "white"}}>Member ID</Text>
                <Text style={{width: "100%", color: "white", fontWeight: "bold"}}>U97000583582</Text>
            </View>
            <View style={{width: "33.3333333%", height: 60}}>
                <Text style={{width: "100%", color: "white"}}>Effective Date</Text>
                <Text style={{width: "100%", color: "white", fontWeight: "bold"}}>2024-03-01</Text>
            </View>
        </View>
        <View style={{width: "100%", height: 60, paddingLeft: 15, paddingTop: 0, paddingRight: 15, flexDirection: "row"}}>
            <View style={{width: "33.3333333%", height: 60}}>
                <Text style={{width: "100%", color: "white"}}>PCP</Text>
                <View style={{width: "100%", flexDirection:"row"}}>
                    <Text style={{color: "white", fontWeight: "bold"}}>$35</Text>
                    <Text style={{color: "white"}}> Copay</Text>
                </View>
            </View>
            <View style={{width: "33.3333333%", height: 60}}>
                <Text style={{width: "100%", color: "white"}}>Specialist</Text>
                <View style={{width: "100%", flexDirection:"row"}}>
                    <Text style={{color: "white", fontWeight: "bold"}}>$35</Text>
                    <Text style={{color: "white"}}> Copay</Text>
                </View>
            </View>
            <View style={{width: "33.3333333%", height: 60}}>
                <Text style={{width: "100%", color: "white"}}>ER</Text>
                <View style={{width: "100%", flexDirection:"row"}}>
                    <Text style={{color: "white", fontWeight: "bold"}}>35%</Text>
                    <Text style={{color: "white"}}> Coinsurance</Text>
                </View>
            </View>
        </View>
        <View style={whiteCard}>
            <View style={{
                backgroundColor: "#CDEEE7",
                height: 60,
                width: "100%",
                padding: 15,
                flexDirection: "row",
            }}>
                <View style={{width: "10%"}}>
                    <TabBarIcon name={'checkmark-circle'} color={"#545971"} />
                </View>
                <View style={{width:'90%'}}>
                    <Text style={{color: "#545971", fontWeight: "bold", fontSize: 18}}>Congratulations!</Text>
                    <Text style={{color: "#545971", fontSize: 18}}>Your policy has been renewed</Text>
                </View>
            </View>
            <GreyLine leftIconName={"diamond"} middleText={"Plan costs"} />
            <GreyLine leftIconName={"information-circle"} middleText={"Doctor visits"} />
            <GreyLine leftIconName={"menu"} middleText={"Labs & imaging"} />
            <GreyLine leftIconName={"medical"} middleText={"Preferred pharmacy"} />
            <GreyLine leftIconName={"medkit-sharp"} middleText={"Preferred labs"} />
            <GreyLine leftIconName={"chatbox"} middleText={"Hospital & emergency"} />
            <GreyLine leftIconName={"document-attach"} middleText={"Benefits"} />
            <View style={{position: 'absolute', bottom: 5, left: 5}}>
                <Pressable onPress={() => {
                    router.push("/carewallet");
                    // showGlobalConfetti();
                }}>
                    <Image
                        source={require("@/assets/images/Apple_Wallet.png")}
                        style={{
                            width: 111,
                            height: 35,
                        }}
                    />
                </Pressable>
                {/*<AppleWalletBtn*/}
                {/*    width={222}*/}
                {/*    height={70}*/}
                {/*/>*/}
            </View>
        </View>
    </View>;
});

const Myaccount: React.FC = ({}) => {
    const [showConfetti, setShowConfetti] = useState(false);
    const onClickConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 6000);
    };

    return <View style={{
        flex: 1,
        backgroundColor: "white",
    }}>
        <View style={headerContainer}>
            <View style={leftIconContainer}>
                <TabBarIcon name={'chevron-back-outline'} color={Colors["light"].tint} />
            </View>
            <View style={middleIconContainer}>
                <Text style={middleHeaderText}>My Health Insurance Policy</Text>
            </View>
        </View>
        <Content backColor={true} />
        {showConfetti && <Confetti />}
    </View>;
};

export default Myaccount;