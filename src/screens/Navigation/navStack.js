import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {LocalesScreens} from "../Usuario/Locales";
import { screen } from "../../utils";

const Stack = createNativeStackNavigator();

export function DirectorioStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.mydirectorio.locals}
            component={LocalesScreens}
            options={{title:"Locales"}}
            />
        </Stack.Navigator>
    )
}