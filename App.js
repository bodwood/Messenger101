import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {

  const [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number + 1);
  };

    const subtractOne = () => {
      setNumber(number - 1);
    };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Button title='Add' onPress={() => addOne()} />
        <Text>{number}</Text>
        <Button title='Subtract' onPress={() => subtractOne()} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
