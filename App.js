import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Alumno from './Alumno';

export default function App() {
  return (
    <PaperProvider>
      <Alumno />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}