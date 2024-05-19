import React, {ComponentType} from "react";
import {View} from "react-native";
import {contentWrapper} from "@/styles/commonStyles/appWideStyles";

const withContentWrapper = <P,>(WrappedComponent: ComponentType<any>) => {
    return (props: P) => {
        return (
            <View style={contentWrapper}>
                <WrappedComponent {...props} />
            </View>
        );
    };
};

export default withContentWrapper;