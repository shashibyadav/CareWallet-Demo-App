import React, {useState} from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {
    careWalletLogo,
    headerBackgroundColor, submitBtn, submitBtnText
} from "@/styles/commonStyles/appWideStyles";
import {Image, Linking, Pressable, Text, View} from "react-native";
import {headerText, headerTitle} from "@/styles/careWalletStyles";
import {Link} from "expo-router";
import withContentWrapper from "@/components/ContentWrapper";
import InputField from "@/components/InputField";
import {router} from "expo-router";

const CareWalletForm = withContentWrapper(({}) => {
    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [email, setEmail] = useState(``);
    const [memberId, setMemberId] = useState(``);

    const onSubmitPress = async () => {
        const payload = {
            "enrollment":{
                "first_name":firstName || "",
                "last_name":lastName || "",
                "email":email || "",
                "phone":"",
                "postal_code":"",
                "terms":"1",
                "custom_signup_toggle":false,
                "toggle_hide":false,
                "referrer_url":null,
                "date_of_birth":null,
                "custom_fields":{
                    "Member iD": memberId || ""
                },
                "browser_metadata":{
                    "platform_type":"desktop",
                    "browser":"Opera",
                    "operating_system":"macOS"
                }
            }
        };
        try {
            const response = await fetch('https://app.demo.prontocx.com/pass_types/911/sign_up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Important for JSON data
                    // Add any other required headers (e.g., Authorization)
                },
                body: JSON.stringify(payload), // Convert data to JSON string
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            Linking.openURL(data.apple_url);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors gracefully (e.g., display error message to user)
        }
        router.back();
    };

    return <>
        <InputField
            placeHolder={"First name"}
            onChange={(value) => {
                setFirstName(value);
            }}
        />
        <InputField
            placeHolder={"Last name"}
            onChange={(value) => {
                setLastName(value);
            }}
        />
        <InputField
            placeHolder={"Email"}
            onChange={(value) => {
                setEmail(value);
            }}
        />
        <InputField
            placeHolder={"Member iD"}
            onChange={(value) => {
                setMemberId(value);
            }}
        />
        <Pressable style={submitBtn} onPress={onSubmitPress}>
            <Text style={submitBtnText}>Submit</Text>
        </Pressable>
    </>;
})

const CareWalletContainer = ({}) => {
    return (<>
        <ParallaxScrollView
            headerBackgroundColor={headerBackgroundColor}

            headerImage={
                <Image
                    source={require(`@/assets/images/CareWallet-Business-Card-Front.png`)}
                    style = {careWalletLogo}
                />
            }
        >
            <>
                <View style={headerTitle}>
                    <Text style={headerText}>Enter details to sign up</Text>
                </View>
                <CareWalletForm />
            </>
        </ParallaxScrollView>
    </>);
};

export default CareWalletContainer;