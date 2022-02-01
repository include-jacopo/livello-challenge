import {View, Text} from 'react-native'
import {connect} from 'react-redux'
function SearchPage() {
  return <View><Text>Saerch</Text></View>;
}


const mapStateToProps = (state) => {
    console.log('state', state);
    return state;
}
export default connect(mapStateToProps)(SearchPage);