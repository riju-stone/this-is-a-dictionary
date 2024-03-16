import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';

export default function HomeLayout()
{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#24243D"
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
