import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAppNavigation, UsersPropsType} from '../types/types';

export function UsersScreen({route}: UsersPropsType) {
    const navigation = useAppNavigation()
    const param = route.params
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
            <Button title={'Jump to Home screen'} onPress={() => {
                navigation.navigate('Home')
            }}/>
            {param && <>
                <Text>{param.id}</Text>
                <Text>{param.name}</Text>
                <Text>{param.isDone ? 'true' : 'false'}</Text>
            </>}
        </View>
    );
}
