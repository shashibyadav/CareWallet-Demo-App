import {Tabs} from 'expo-router';
import React, {useEffect, useRef, useState} from "react";

import {View} from "react-native";
import {pageContainer, webViewStyles} from "@/styles/commonStyles/appWideStyles";
import {useAppDispatch, useAppSelector} from "@/components/store/hooks";
import {WebView} from "react-native-webview";
import {selectGlobalState} from "@/components/store/reducers/globalStore";
import {Linking, Alert} from "react-native";

const WebViewContainer = ({}) => {
    const dispatch = useAppDispatch();
    const webViewRef = useRef(null);
    const [webViewUrl, setWebViewUrl] = useState(`https://app.demo.prontocx.com/pass_types/5zeS03/sign_up#form`);
    const [globalState, setGlobalState] = useState(useAppSelector(selectGlobalState));
    const webSource = {
        uri: webViewUrl
    };
    const handleOpenUrl = async (event: any) => {
        const url = event.url;
        if (url.include('pass_downloads')) {
            try {
                await Linking.openURL(url);
            } catch (e) {
                Alert.alert('Error', `Failed to open Apple Wallet url: ${url}`);
            }
        }
    };
    const handleNavigation = () => {

    };
    useEffect(() => {
        Linking.addEventListener(`url`, handleOpenUrl);
        return () => {
            Linking.removeAllListeners(`url`);
        };
    }, []);
    return (<>
        <View style={pageContainer}>
            <WebView
                ref={webViewRef}
                styles={webViewStyles}
                source={webSource}
                onNavigationStateChange={handleNavigation}
                onShouldStartLoadWithRequest={(request) => {
                    const url = request.url || ``;
                    if (url.includes(`pass_downloads`) && url.includes(`apple`)) {
                        Linking.openURL(url);
                        return false;
                    }
                    return true;
                }}
            />
        </View>
    </>);
};

export default WebViewContainer;