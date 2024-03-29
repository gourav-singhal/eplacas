import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SearchResult from '../screens/SearchResult';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{ headerShown: true, title: 'Resultado' }}
                    name="SearchResult"
                    component={SearchResult}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
