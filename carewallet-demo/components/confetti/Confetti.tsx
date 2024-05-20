import React, {useEffect, useState} from "react"
import {Dimensions, View} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";


const Confetti: React.FC = () => {
    const [centerX, setCenterX] = useState(0);
    const [centerY, setCenterY] = useState(0);
    useEffect(() => {
        const x = Dimensions.get("window").width / 2;
        setCenterX(x);
    }, []);
    return (<>
        <ConfettiCannon count={300} explosionSpeed={350} autoStart fadeOut fallSpeed={4000} origin={{x: centerX, y: -50} } />
    </>);
};

export default Confetti;