import {Image, Pressable, Text} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {
    careWalletBtn, careWalletBtnText,
    chickenLogo,
    headerBackgroundColor,
    reactLogo,
    stepContainer
} from "@/styles/commonStyles/appWideStyles";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import { Link } from "expo-router";
import withContentWrapper from "@/components/ContentWrapper";
import InputField from "@/components/InputField";

const MyAccountForm = withContentWrapper(({}) => {
    return (<>
        <InputField
            placeHolder={"First name"}
            value={"Evan"}
            withLabel={true}
        />
        <InputField
            placeHolder={"Email"}
            value={"esmith718@hotmail.com"}
            withLabel={true}
        />
        <InputField
            placeHolder={"Street Address"}
            withLabel={true}
        />
        <InputField
            placeHolder={"Phone"}
            value={"(732) 477-4149"}
            withLabel={true}
        />
        <Link href="/webview" asChild>
            <Pressable style={careWalletBtn}>
                <Text style={careWalletBtnText}>Join CareWallet</Text>
            </Pressable>
        </Link>
    </>);
});
const Appointment = ({}) => {
    return (
        <ParallaxScrollView
            headerBackgroundColor={headerBackgroundColor}
            headerImage={
                <Image
                    source={require('@/assets/images/chicken-coming-out-cropped-resized.jpeg')}
                    style={chickenLogo}
                />
            }
        >
           <MyAccountForm

           />
        </ParallaxScrollView>
    );
};

export default Appointment;