import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
function SearchPage({ results }) {
  return (
    <ScrollView style={styles.main_cont}>
      <View style={styles.container}>
        <View style={styles.image_cont}>
          <Image
            style={styles.image}
            source={{ uri: results?.Poster }}
            resizeMode='cover'
          />
        </View>
        <View style={styles.main}>
          <View style={styles.info_cont}>
            <View style={styles.info_item}>
              <Text style={styles.title}>Genre: </Text>
              <Text style={styles.title1}>{results?.Genre}</Text>
            </View>
            <View style={styles.info_item}>
              <Text style={styles.title}>Director: </Text>
              <Text style={styles.title1}>{results?.Director}</Text>
            </View>
            <View style={styles.info_item}>
              <Text style={styles.title}>Cast: </Text>
              <Text style={styles.title1}>{results?.Actors}</Text>
            </View>
            <View style={styles.info_item}>
              <Text style={styles.title}>Plot: </Text>
              <Text
                style={styles.title1}
                numberOfLines={6}
                ellipsizeMode='tail'
              >
                {results?.Plot}
              </Text>
            </View>
            <View style={styles.info_item1}>
              <Text style={styles.title}>Ratings: </Text>
              {results?.Ratings?.map(rat => <Text
                style={styles.title1}
                numberOfLines={6}
                ellipsizeMode='tail'
              >
                {rat?.Source} : {rat?.Value}
              </Text>)}
            </View>
            {console.log(results?.Ratings)}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main_cont: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  image_cont: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    height: 245,
    padding: 10,
    width: '95%',
    borderRadius: 20,
  },
  main: {
    flex: 1,
    alignItems: 'center',
  },
  info_cont: {
    flex: 1,
    width: '90%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  title1: {
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
  },
  info_item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  info_item1: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
});

const mapStateToProps = (state) => {
  const { results } = state.Search;
  return { results };
};
export default connect(mapStateToProps)(SearchPage);
