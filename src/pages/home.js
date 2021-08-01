import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { connectActionSheet } from '@expo/react-native-action-sheet'

import pets from '../services/pets'
import MyComponentsHome from '../components/MyComponentsHome';


const Item = ({item}) =>(
  <View style = {styles.item}>
    <Text>Nome: {item.nome}</Text>
    <Text>Raça: {item.raca}</Text>
  </View>
)

function Home() {
  return (
    <ActionSheetProvider>
      <MyComponentsHome/>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={pets}
          keyExtractor={(item) => item.nome}
          renderItem={({item}) => <Item item={item}/>}
          renderSectionHeader={({section: {type}}) => (
          <Text style={styles.header}>{type}</Text>
          )}
        />
    </SafeAreaView>
    
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(Home)

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  item: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'lightgrey',
    margin: 4
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});