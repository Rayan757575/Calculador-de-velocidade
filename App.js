import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens'
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from '~/styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
