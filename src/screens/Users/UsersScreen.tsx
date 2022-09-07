import React from 'react';
import {NestedStack} from '../types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './Main/Main';
import {MainDetailsScreen} from './MainDetails/MainDetails';

const Stack = createNativeStackNavigator<NestedStack>()

export function UsersScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Main'} component={MainScreen}/>
            <Stack.Screen name={'MainDetails'} component={MainDetailsScreen}/>

        </Stack.Navigator>
    )
}


// export function UsersScreen({route}: UsersPropsType) {
// export function UsersScreen() {
//     const navigation = useAppNavigation()
//     // const param = route.params
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Users Screen</Text>
//             <Button title={'Jump to Home screen'} onPress={() => {
//                 navigation.navigate('Home')
//             }}/>
{/*{param && <>*/
}
{/*    <Text>{param.id}</Text>*/
}
{/*    <Text>{param.name}</Text>*/
}
{/*    <Text>{param.isDone ? 'true' : 'false'}</Text>*/
}
{/*</>}*/
}
//         </View>
//     );
// }
