import React, { useRef } from 'react'
import { View, Animated, Button, StyleSheet } from 'react-native'

const Parallel = () => {
    const slideAnim = useRef(new Animated.Value(-100)).current
    const opacityAnim = useRef(new Animated.Value(0)).current
    const scaleAnim = useRef(new Animated.Value(1)).current

    const startAnimation = () => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1.5,
                duration: 2000,
                useNativeDriver: true,
            })
        ]).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.viewStyle,
                    transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
                    opacity: opacityAnim
                }}
            />
            <View style={styles.buttonContainer}>
                <Button title="Start Animation" onPress={startAnimation} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewStyle: {
        width: 200,
        height: 200,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
    },
})

export default Parallel