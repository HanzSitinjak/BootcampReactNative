// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Bapak lhu</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Telegram from './Tugas-08/Telegram';

export default function App(){
  return(
    <Telegram/>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    color:'white',
    alignItems: 'center',
    justifyContent:'center'
  }
})
