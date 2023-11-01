import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/home/Homepage';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login/Login';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Domestica'>
                <Stack.Screen name="Domestica" component={HomePage} options={styles.header} />
                <Stack.Screen name="Login" component={Login} options={styles.header} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    header: {
        headerShown: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: 'black'
        }
    }
});

module.exports = MyStack;