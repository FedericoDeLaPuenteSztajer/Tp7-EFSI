import { ImageBackground, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

//const image = require('./assets/wrongLogIn.png');

const Message = (props) => {
    let text, img;

    if (props.loginState == 'completed') {
        text = "Welcome to the Castle Crashers Group!";
        img = require("../assets/completedLogIn.png");
    } else {
        text = "WRONG! Login again."
        img = require("../assets/wrongLogIn.png");
    }

    return (
        <>
            <Text>{text}</Text>
            {<Image source={img} />}

            {props.loginState == 'wrong' && <Button
                title='Go back'
                onPress={() => props.setUserState('logging')}
            />}
        </>
    )
};

export default Message;
