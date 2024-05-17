import {Image} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {chickenLogo, headerBackgroundColor, reactLogo, stepContainer} from "@/styles/commonStyles/appWideStyles";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
export default ({}) => {
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
            <ThemedView style={stepContainer}>
                <ThemedText type={"title"}>Test</ThemedText>
            </ThemedView>
            
        </ParallaxScrollView>
    );
};