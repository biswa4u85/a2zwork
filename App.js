import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <WebView
        style={styles.container}
        source={{ uri: 'http://a2zwork.in' }}
      />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
