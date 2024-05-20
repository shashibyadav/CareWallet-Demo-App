import React, {useState} from "react";
import {Image, Pressable, Text, View} from "react-native";
import {confettiBtn, confettiBtnText} from "@/styles/commonStyles/appWideStyles";
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


const Content = withContentWrapper(() => {
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
                <Text style={{width: "100%", color: "white", fontWeight: "bold"}}>2023-04-01</Text>
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
                height: 70,
                width: "100%",
                padding: 15,
                flexDirection: "row",
            }}>
                <View style={{width: "10%"}}>
                    <TabBarIcon name={'checkmark-circle'} color={"#545971"} />
                </View>
                <View style={{width:'90%'}}>
                    <Text style={{color: "#545971", fontWeight: "bold", fontSize: 20}}>Congratulations!</Text>
                    <Text style={{color: "#545971", fontSize: 20}}>Your policy has been renewed</Text>
                </View>
            </View>
            <View style={{width: "100%", padding: 10, paddingBottom: 0}}>
                <View style={{backgroundColor: "#EAEEF7", borderRadius: 5, flexDirection: "row", width: "100%", height: 40, paddingLeft: 5, paddingRight: 5}}>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <TabBarIcon name={'diamond'} color={"#545971"} />
                    </View>
                    <View style={{width: "80%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <Text style={{color: "#545971", fontWeight: "bold", fontSize: 16}}>Plan costs</Text>
                    </View>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                        <TabBarIcon name={'chevron-forward-outline'} color={"#545971"} />
                    </View>
                </View>
            </View>
            <View style={{width: "100%", padding: 10, paddingBottom: 0}}>
                <View style={{backgroundColor: "#EAEEF7", borderRadius: 5, flexDirection: "row", width: "100%", height: 40, paddingLeft: 5, paddingRight: 5}}>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <TabBarIcon name={'information-circle'} color={"#545971"} />
                    </View>
                    <View style={{width: "80%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <Text style={{color: "#545971", fontWeight: "bold", fontSize: 16}}>Doctor visits</Text>
                    </View>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                        <TabBarIcon name={'chevron-forward-outline'} color={"#545971"} />
                    </View>
                </View>
            </View>
            <View style={{width: "100%", padding: 10, paddingBottom: 0}}>
                <View style={{backgroundColor: "#EAEEF7", borderRadius: 5, flexDirection: "row", width: "100%", height: 40, paddingLeft: 5, paddingRight: 5}}>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <TabBarIcon name={'menu'} color={"#545971"} />
                    </View>
                    <View style={{width: "80%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <Text style={{color: "#545971", fontWeight: "bold", fontSize: 16}}>Labs & imaging</Text>
                    </View>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                        <TabBarIcon name={'chevron-forward-outline'} color={"#545971"} />
                    </View>
                </View>
            </View>
            <View style={{width: "100%", padding: 10, paddingBottom: 0}}>
                <View style={{backgroundColor: "#EAEEF7", borderRadius: 5, flexDirection: "row", width: "100%", height: 40, paddingLeft: 5, paddingRight: 5}}>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <TabBarIcon name={'medical'} color={"#545971"} />
                    </View>
                    <View style={{width: "80%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <Text style={{color: "#545971", fontWeight: "bold", fontSize: 16}}>Preferred pharmacy</Text>
                    </View>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                        <TabBarIcon name={'chevron-forward-outline'} color={"#545971"} />
                    </View>
                </View>
            </View>
            <View style={{width: "100%", padding: 10, paddingBottom: 0}}>
                <View style={{backgroundColor: "#EAEEF7", borderRadius: 5, flexDirection: "row", width: "100%", height: 40, paddingLeft: 5, paddingRight: 5}}>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <TabBarIcon name={'medkit-sharp'} color={"#545971"} />
                    </View>
                    <View style={{width: "80%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <Text style={{color: "#545971", fontWeight: "bold", fontSize: 16}}>Preferred labs</Text>
                    </View>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                        <TabBarIcon name={'chevron-forward-outline'} color={"#545971"} />
                    </View>
                </View>
            </View>
            <View style={{width: "100%", padding: 10, paddingBottom: 0}}>
                <View style={{backgroundColor: "#EAEEF7", borderRadius: 5, flexDirection: "row", width: "100%", height: 40, paddingLeft: 5, paddingRight: 5}}>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <TabBarIcon name={'chatbox'} color={"#545971"} />
                    </View>
                    <View style={{width: "80%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <Text style={{color: "#545971", fontWeight: "bold", fontSize: 16}}>Hospital & emergency</Text>
                    </View>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                        <TabBarIcon name={'chevron-forward-outline'} color={"#545971"} />
                    </View>
                </View>
            </View>
            <View style={{width: "100%", padding: 10, paddingBottom: 0}}>
                <View style={{backgroundColor: "#EAEEF7", borderRadius: 5, flexDirection: "row", width: "100%", height: 40, paddingLeft: 5, paddingRight: 5}}>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <TabBarIcon name={'document-attach'} color={"#545971"} />
                    </View>
                    <View style={{width: "80%", height: "100%", flexDirection: "column", justifyContent: "center"}}>
                        <Text style={{color: "#545971", fontWeight: "bold", fontSize: 16}}>Benefits</Text>
                    </View>
                    <View style={{width: "10%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                        <TabBarIcon name={'chevron-forward-outline'} color={"#545971"} />
                    </View>
                </View>
            </View>
        </View>
    </View>;
});

const Appointment: React.FC = ({}) => {
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

export default Appointment;