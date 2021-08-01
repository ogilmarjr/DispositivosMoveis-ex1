import React from 'react';
import { Button } from 'react-native';

import { useActionSheet } from '@expo/react-native-action-sheet';


export default function MyComponentsHome(props){
    
    const { showActionSheetWithOptions } = useActionSheet();
    
    const options = ['Sobre', 'LogOut'];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    return(
        <Button title='Open' onPress={() => showActionSheetWithOptions(
            {
              options,
              cancelButtonIndex,
              destructiveButtonIndex,
            },
            buttonIndex => {
                
            },
          )}></Button>
    );
}