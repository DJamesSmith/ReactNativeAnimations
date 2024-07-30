import React, { useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler'

const SwipeableCard = () => {
    const translateX = useRef(new Animated.Value(0)).current

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: true }
    )

    const onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: true,
            }).start()
        }
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}>
                <Animated.View style={[styles.card, { transform: [{ translateX }] }]}>
                    <CardComponent />
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    )
}

const CardComponent = () => {
    return (
        <View style={styles.cardContent}>
            <Text style={{ fontSize: 30, color: 'black',  }}> Swipeable Card </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: 200,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        alignSelf: 'center',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SwipeableCard