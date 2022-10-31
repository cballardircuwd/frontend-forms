import { Text, View } from 'react-native';
import Playground from './components/Playground';
import styles from './styles';

import Poop from './components/poop';

export default function App() {
  return (
    <View>
      <View>
        <Text style={styles.Header}>Forms Page</Text>
      </View>        
      <br/>
      {/* <Poop/> */}
      <Playground/>
    </View>
  );
}



