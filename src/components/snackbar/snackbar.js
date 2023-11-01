import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper'

const snackbar = (props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            props.setSnackbar(false);
        }, 2000); // 2 seconds in milliseconds

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <View>
            <Snackbar visible={props.snackbar.visible}>{props.snackbar.text}</Snackbar>
        </View>
    );
}

export default snackbar;
