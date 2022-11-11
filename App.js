import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, []);

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
