import React, { useRef, useEffect } from 'react'
import { View, Animated, Button } from 'react-native'

const FadeInView = () => {
    const fadeAnim1 = useRef(new Animated.Value(0)).current
    const fadeAnim2 = useRef(new Animated.Value(1)).current

    const fadeIn = () => {
        Animated.timing(fadeAnim1, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start()
    }

    const fadeOut = () => {
        Animated.timing(fadeAnim2, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start()
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{ opacity: fadeAnim1 }}>
                <View style={{ width: 100, height: 100, backgroundColor: 'blue', borderRadius: 12, marginBottom: 20 }} />
            </Animated.View>
            <Button title="Fade In" onPress={fadeIn} />


            <Animated.View style={{ opacity: fadeAnim2 }}>
                <View style={{ width: 100, height: 100, backgroundColor: 'blue', borderRadius: 12, marginVertical: 40 }} />
            </Animated.View>
            <Button title="Fade Out" onPress={fadeOut} />
        </View>
    )
}

export default FadeInView