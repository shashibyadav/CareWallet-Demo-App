import React, {ComponentType} from "react";
import {View} from "react-native";
import {contentWrapper, contextBackColorWrapper} from "@/styles/commonStyles/appWideStyles";

const withContentWrapper = <P,>(WrappedComponent: ComponentType<any>) => {
    return (props: any) => {
        const {backColor = false} = props;
        return (
            <View style={backColor ? contextBackColorWrapper : contentWrapper}>
                <WrappedComponent {...props} />
            </View>
        );
    };
};

export default withContentWrapper;