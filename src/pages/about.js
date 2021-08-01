import React from 'react';
import { SafeAreaView, StyleSheet, Text, Linking } from 'react-native';

import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { connectActionSheet } from '@expo/react-native-action-sheet'
import MyComponentsAbout from '../components/MyComponentsAbout';


export default function About(props) {
  return (
    <ActionSheetProvider>
    <SafeAreaView style={styles.container}>
      <MyComponentsAbout style={styles.options}/>
      <Text style={styles.nameApp}>Pet safe</Text>
      <Text style={styles.version}>Versão 1.0</Text>
      
      <Text style={styles.developer}>Desenvolvido por:</Text>
      
      <Text style={styles.name}>Gilmar Freitas Ribeiro Junior</Text>
      <Text style={styles.github}
      onPress={() => Linking.openURL("https://github.com/ogilmarjr/DispositivosMoveis-ex1")}> Link do GitHub
      </Text>
    </SafeAreaView>
    
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    options: {
      alignItems: 'flex-start',
      justifyContent: 'flex-end'
    },

    nameApp: {
      fontSize: 50,
      fontWeight: "bold",
      marginTop: 24,
    },

    version: {
      fontSize: 25,
    },

    developer: {
      fontSize: 25,
      marginTop: 50,
    },

    name: {
      fontSize: 25,
      fontWeight: "bold"
    },

    github:{
      color: 'blue',
      fontSize: 25,
    }
    
  });