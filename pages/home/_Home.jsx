import { useState } from 'react';
import { Button, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { BASE_URL } from '../../utils';
import { connect } from 'react-redux';
import { setSearchResults } from '../../redux/ActionCreators';

function Home({ navigation, setSearch, results }) {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const searchHandler = async (val) => {
    setLoading(true);
    setSearchText(val);
    try {
      if (val.length > 2) {
        const res = await fetch(`${BASE_URL}&t=${val}`);
        const data = await res.json();
        setLoading(false);
        if (data) {
          setSearch(data);
        }
      }
    } catch (error) {
      alert('Error fetching movie');
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.search_cont}>
        <TextInput
          placeholder='Search movies ...'
          style={styles.search_input}
          onChangeText={(val) => searchHandler(val)}
        />
      </View>
      <View style={styles.list_cont}>
        {!results && searchText.length > 2 && (
          <Text>No movie or show found.</Text>
        )}
        {loading && <ActivityIndicator />}

        {[results].map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.list_item}
            onPress={() =>
              navigation.navigate('search', { movie_name: item?.Title })
            }
          >
            <Text>{item?.Title}</Text>
          </TouchableOpacity>
        ))}
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

const mapStateToProps = (state) => {
  const { results } = state.Search;
  return { results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (data) => dispatch(setSearchResults(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
