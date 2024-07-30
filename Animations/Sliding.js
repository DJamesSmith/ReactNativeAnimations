import React, { useRef, useEffect } from 'react'
import { View, Animated, Button, StyleSheet } from 'react-native'

const Sliding = () => {
    const slideAnim = useRef(new Animated.Value(-100)).current;

    const startAnimation = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.viewStyle, transform: [{ translateY: slideAnim }] }} />
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
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50, // Adjust this value to position the button
    },
})

export default Sliding