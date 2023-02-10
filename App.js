import * as React from 'react';
import { Button, View, StyleSheet,  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Elso from './Elso'
import Buli from './Buli'
import Kereses from './Kereses'
import Kiallitas from './Kiallitas'

function HomeScreen({ navigation }) {
  return (
 
    <View style={style.Button} >
      <Button
        onPress={() => navigation.navigate('Események')}
        title="Események "
      />
      <View style={{height:20}}></View>
      <Button
        onPress={() => navigation.navigate('Keresés')}
        title="Buli Keresés "
      />
      <View style={{height:20}}></View>
      <Button
        onPress={() => navigation.navigate('Kiállítás')}
        title="Kiállítás "
      />
      <View style={{height:20}}></View>
      <Button
        onPress={() => navigation.navigate('Rólunk')}
        title="Rólunk "
      />
    </View>
    
  );
}

function Elso_lap({ navigation }) {
  return (
    <Elso/>
  );
}
function Buli_lap({ navigation }) {
  return (
    <Buli/>
  );
}
function Kereses_lap({ navigation }) {
  return (
    <Kereses/>
  );
}
function Kiallitas_lap({ navigation }) {
  return (
    <Kiallitas/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Kezdőlap" component={HomeScreen} />
        <Drawer.Screen name="Események" component={Buli_lap} />
        <Drawer.Screen name="Keresés" component={Kereses_lap} />
        <Drawer.Screen name="Kiállítás" component={Kiallitas_lap} />
        <Drawer.Screen name="Rólunk" component={Elso_lap} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create( { 
  Button: {
    aligItems:'center',
    justifyContent:'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation:5,
    
    
  }
})
