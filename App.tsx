
import {  SafeAreaView, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    //@ts-ignore
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </TailwindProvider>
  );
}

