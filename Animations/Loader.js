import React from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'

const LoadingSpinner = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 20 }}>
                <ActivityIndicator size="large" color="green" />
                <Text>Large</Text>
            </View>
            <View>
                <ActivityIndicator size="small" color="#0000ff" />
                <Text>Small</Text>
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
})

export default LoadingSpinner