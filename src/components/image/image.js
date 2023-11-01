import { Image, StyleSheet } from 'react-native'
import React from 'react'

const image = (props) => {
    return (
        <Image style={styles.image} source={props.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        resizeMode: 'contain'
    }
})

export default image