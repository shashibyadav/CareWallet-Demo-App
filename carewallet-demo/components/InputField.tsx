import React, {useState} from "react";
import {Text, TextInput, View} from "react-native";
import {inputContainer, inputStyle, inputStyleWithLabel, labelStyle} from "@/styles/inputField/inputFieldStyles";

interface InputFieldType {
    placeHolder: string,
    onChange?: (value: string) => void,
    value?: string,
    withLabel?: boolean,
};

const InputField: React.FC<InputFieldType> = ({
    placeHolder,
    onChange,
    value,
    withLabel
                                              }) => {
    const [localValue, setLocalValue] = useState(value || ``);


    return (<>
        <View style={inputContainer}>
            {withLabel && value && <Text style={labelStyle}>{placeHolder}</Text>}
            <TextInput
                style={withLabel && value ? inputStyleWithLabel : inputStyle}
                placeholder={placeHolder}
                value={localValue}
                onChangeText={(text) => {
                    setLocalValue(text);
                    onChange && onChange(text);
                }}
            />
        </View>
    </>);
};

export default InputField;