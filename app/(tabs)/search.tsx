import { StyleSheet, Platform } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from '@/components/Themed';

export default function SearchLayout()
{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0C0E12"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
