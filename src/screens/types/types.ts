import {NavigationProp, NavigatorScreenParams, useNavigation, CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined
    Details: undefined
    Users: NavigatorScreenParams<NestedStack>
    //     id: number
    //     name: string
    //     isDone: boolean
    // } | undefined
}

export type NestedStack = {
    Main: undefined
    MainDetails: {
        id: number
    }
}


export type MainDetailsPropsType = NativeStackScreenProps<NestedStack, 'MainDetails'>

export type MainDetailsPropsType_ = CompositeScreenProps<        //                               3
    BottomTabScreenProps<NestedStack, 'MainDetails'>,           //то, что мы достаём              2
    StackScreenProps<RootStackParamList>>                       //то,откуда мы пришли             1

// export type UsersPropsType = NativeStackScreenProps<RootStackParamList, 'Users'>

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()
