import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import LoginScreen from './LoginScreen';

const Login = () => {

    const [showPagination, setShowPagination] = useState(true);

    return (
        <Swiper style={styles.wrapper} loop={false} showsPagination={showPagination}>
            <View style={styles.slide}>
                <LoginScreen title='Customer Login' image={require('./../../assets/images/CustomerLogin.png')} setShowPagination={setShowPagination} />
            </View>
            <View style={styles.slide}>
                <LoginScreen title='Worker Login' image={require('./../../assets/images/WorkerLogin.png')} setShowPagination={setShowPagination} />
            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {

    },
    slide: {
        flex: 1,
    },
});

export default Login;
