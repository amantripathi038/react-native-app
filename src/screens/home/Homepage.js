import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Image from '../../components/image/image'
import { Button } from 'react-native-paper'

const HomePage = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image image={require('./../../assets/images/Home.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 28, fontWeight: '800', left: 5 }}> WELCOME TO </Text>
                <Text style={{ fontSize: 40, fontWeight: '900', color: '#F6AE2D' }}> DOMESTICA </Text>
                <Text style={{ fontSize: 14, fontWeight: '100', color: '#000000', left: 11 }}> THE HOME SERVICE APP </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button onPress={() => props.navigation.navigate('Login')} buttonColor={'black'} textColor={'white'} style={styles.button} labelStyle={styles.buttonText}>{'Login'}</Button>
                <Button buttonColor={'black'} textColor={'white'} style={styles.button} labelStyle={styles.buttonText}>{'Signup'}</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    imageContainer: {
        flex: 5
    },
    textContainer: {
        flex: 3,
        marginLeft: 10,
        justifyContent: 'center'
    },
    buttonsContainer: {
        flex: 3,
        marginLeft: 70,
        marginRight: 70,
    },
    button: {
        margin: 10,
        borderRadius: 30
    },
    buttonText: {
        fontSize: 20,
        padding: 10
    }
})

export default HomePage