import React, { useRef } from 'react'
import { View, Animated, Button, StyleSheet } from 'react-native'

const MorphingComponent = () => {
    const scaleX = useRef(new Animated.Value(1)).current;
    const rotate = useRef(new Animated.Value(0)).current;

    const morph = () => {
        Animated.sequence([
            Animated.timing(scaleX, {
                toValue: 0.25, // Scaling down to 25% of original width (50 / 200)
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.loop(
                Animated.timing(rotate, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                })
            ),
        ]).start()
    }

    const rotateInterpolate = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    })

    return (
        <View style={styles.container}>
            <Animated.View 
                style={{ 
                    ...styles.viewStyle, 
                    transform: [{ scaleX: scaleX }, { rotate: rotateInterpolate }] 
                }} 
            />
            <View style={styles.buttonContainer}>
                <Button title="Start Morph" onPress={morph} />
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
        borderRadius: 20
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
    },
})

export default MorphingComponent