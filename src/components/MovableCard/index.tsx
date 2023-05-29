import Animated, { SharedValue, runOnJS, useSharedValue } from "react-native-reanimated";
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
    const top = useSharedValue():

    const longPressGesture = Gesture
        .LongPress()
        .onStart(()=> {
            runOnJS(setMoving)(true);
        })
        .minDuration(200);

    const panGesture = Gesture
    .Pan()
    .manualActivation(true)
    .onTouchesDown((_,state) =>{
        moving ? state.activate() : state.fail()
    })
    .onUpdate((event) => {

    })

    return(
        <Animated.View>
            <GestureDetector gesture={Gesture.Race(panGesture, longPressGesture)}>
                <Card data={data}/>
            </GestureDetector>
        </Animated.View>
    )
}