import { View, Text } from 'react-native'
import React from 'react'
import FadeInView from './Animations/Animator'
import Sliding from './Animations/Sliding'
import Parallel from './Animations/Parallel'
import Sequence from './Animations/Sequence'
import MorphingComponent from './Animations/Morphing'
import SwipeableCard from './Animations/Interactive'
import LoadingSpinner from './Animations/Loader'
import NavigationScreen from './Animations/Navigation'
import NavigationLoader from './Animations/NavigationLoader'

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* <FadeInView /> */}
            {/* <Sliding /> */}
            {/* <Parallel /> */}
            {/* <Sequence /> */}
            {/* <MorphingComponent /> */}
            {/* <SwipeableCard /> */}
            {/* <LoadingSpinner /> */}
            {/* <NavigationScreen /> */}
            <NavigationLoader />
        </View>
    )
}

export default App