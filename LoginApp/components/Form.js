import { ImageBackground, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Form = (props) => {

    return (
        <>
            <Text>Join the Castle Crashers Group today!</Text>
            <Image source={require('../assets/bannerCastleCrashers.png')} />
            <TextInput

                numberOfLines={1}
                maxLength={40}
                onChangeText={props.setUserName}
                value={props.userName}
            />
            <TextInput
                editable
                numberOfLines={1}
                maxLength={40}
                onChangeText={props.setPassword}
                value={props.password}
            />

            <Button
                title='Join'
                onPress={() => props.ChargeUser()}
            />
        </>)
};

export default Form;