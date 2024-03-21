import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import ContainerNavigation from './src/components/ContainerNavigation';

const App = () => {
  return (
    <SafeAreaProvider style={{backgroundColor: 'black'}}>
      <StatusBar barStyle={'dark-content'} />
      <ContainerNavigation />
    </SafeAreaProvider>
  );
};


export default App;
