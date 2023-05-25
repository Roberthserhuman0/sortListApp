import Animated, { SharedValue } from "react-native-reanimated";
import { Card, CardProps } from "../Card";
import {GestureDetector, Gesture} from 'react-native-gesture-handler'
import { useState } from "react";

type Props = {
    data: CardProps;
    cardsPosition: SharedValue<number[]>;
    scrollY:SharedValue<number>;
    cardsCount: number;
}

export function MovableCard({data}: Props){
    const [moving, setMoving] = useState(false);

    const longPressGesture = Gesture
    .LongPress()
    .onStart(()=> {
        setMoving(true);
    })
    .minDuration(200);

    return(
        <Animated.View>
            <GestureDetector gesture={}>
                <Card data={data}/>
            </GestureDetector>
        </Animated.View>
    )
}