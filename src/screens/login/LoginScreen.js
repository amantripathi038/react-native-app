import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Image from '../../components/image/image'
import TextField from '../../components/textfield/textfield'
import { Button } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import validator from 'validator'
import Snackbar from '../../components/snackbar/snackbar'

const windowWidth = Dimensions.get('window').width;

const LoginScreen = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [snackbar, setSnackbar] = useState({ visible: false, text: "" });

    const handleSubmit = () => {
        if (!validator.isEmail(email)) {
            setSnackbar({ visible: true, text: "Invalid email!" })
            return;
        }
        if (!password.length) {
            setSnackbar({ visible: true, text: "Please enter password!" })
            return;
        }

    }

    return (
        <KeyboardAwareScrollView style={styles.container} onKeyboardDidShow={() => props.setShowPagination(false)} onKeyboardDidHide={() => props.setShowPagination(true)}>
            <View style={styles.imageContainer} >
                <Image image={props.image} />
            </View>
            <View style={styles.bottomHalfContainer} >
                <Text style={styles.textStyle}> {props.title} </Text>
                <View style={styles.inputContainer}>
                    <TextField text={'Email'} value={email} setValue={setEmail} />
                    <TextField text={'Password'} secureTextEntry={true} value={password} setValue={setPassword} />
                </View>
                <View style={{ marginLeft: 70, marginRight: 70 }}>
                    <Button onPress={handleSubmit} buttonColor={'black'} textColor={'white'} style={styles.button} labelStyle={styles.buttonText}>{'Login'}</Button>
                </View>
            </View>
            {snackbar.visible && <Snackbar snackbar={snackbar} setSnackbar={setSnackbar} />}
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    imageContainer: {
        height: windowWidth * 9 / 10,
        justifyContent: 'center'
    },
    bottomHalfContainer: {
        flex: windowWidth * 1 / 10
    },
    textStyle: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '800'
    },
    inputContainer: {
        alignItems: 'center',
        paddingTop: 20
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

export default LoginScreen