/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react'
import { Text, View } from 'react-native'
import SampleComponent from './components/SampleComponent'
import constant from './variables/string'
import styles from './app.style'

const App = () => (
  <View style={styles.container}>
    <SampleComponent onPress={() => {}} label={constant.sampleButtonText} />
    <Text style={styles.welcome}>{constant.sampleText}</Text>
  </View>
)

export default App
