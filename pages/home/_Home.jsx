import { Button, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.search_cont}>
        <TextInput placeholder="Search movies ..." style={styles.search_input} />
      </View>
      <View style={styles.list_cont}>
          {[1,2,3,4,5].map((item, i) => <TouchableOpacity key={i} style={styles.list_item} onPress={() => navigation.navigate('search')}><Text>List item</Text></TouchableOpacity>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  search_cont: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  search_input: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  list_cont: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  list_item: {
    marginTop: 10,
    width: '90%',
    height: 50,
    backgroundColor: '#eee',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 20,
  },
});


