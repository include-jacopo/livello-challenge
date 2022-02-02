import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go to search" onPress={() => navigation.navigate('search')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',

  },
});


