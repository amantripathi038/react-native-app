import { SafeAreaView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const windowWidth = Dimensions.get('window').width;

const textfield = (props) => {
    const handleTextChange = (value) => props.setValue(value)
    const styles = { width: windowWidth * (props.width || 80 / 100) }

    return (
        <SafeAreaView style={{ margin: 10 }}>
            <TextInput mode='outlined' label={props.text} value={props.value} secureTextEntry={props.secureTextEntry} onChangeText={handleTextChange} style={styles} />
        </SafeAreaView>
    )
}

export default textfield