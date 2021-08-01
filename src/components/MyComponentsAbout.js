import React from 'react';
import { Button } from 'react-native';

import { useActionSheet } from '@expo/react-native-action-sheet';


export default function MyComponentsAbout(props){
    
    const { showActionSheetWithOptions } = useActionSheet();
    
    const options = ['LogOut'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

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