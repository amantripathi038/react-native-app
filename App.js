import { StyleSheet, View, StatusBar } from 'react-native';
import StackNavigation from './src/navigation/stackNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <StackNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
