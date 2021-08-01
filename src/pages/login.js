import React from 'react';
import { SafeAreaView, StyleSheet, Image, TextInput, StatusBar, Button, Text } from 'react-native';

export default function Login(props) {

  const [usernameValue, onChangeText] = React.useState('Username')
  const [password, onChangePass] = React.useState('****')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>

      <Image style={styles.image} source={require('../../assets/images/bolota.jpeg')}/>

      <TextInput style={styles.inputText}
        onChangeText={username => onChangeText(username)}
        value={usernameValue}
      />

      <TextInput style={styles.inputText}
        onChangeText={password => onChangePass(password)}
        value={password}
      />

      <Button
        
            title = "Login"
            onPress = {()=>{props.navigation.navigate('Pet safe')}}
        
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image:{
      
    },

    inputText:{
      height: 40,
      width: 250,
      borderWidth: 1,
      marginTop: 30,
    },

    button:{
      
    }
  });