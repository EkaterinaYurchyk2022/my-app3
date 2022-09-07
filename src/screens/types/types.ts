import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined
    Details: undefined
    Users: {
        id:number
        name:string
        isDone:boolean
    } | undefined
}

export type UsersPropsType = NativeStackScreenProps<RootStackParamList, 'Users'>

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()
