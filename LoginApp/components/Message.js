import { View, ImageBackground, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
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
            <View style={styles.BannerSection}>
                <Text style={styles.Title}>{text}</Text>
                {<Image source={img} style={styles.BannerImg} />}
            </View>

            {props.loginState == 'wrong' &&
                <View>
                    <Button
                        title='Go back'
                        color='#b81212'
                        onPress={() => props.setUserState('logging')}
                    />
                </View >
            }
        </>
    )
};

const styles = StyleSheet.create({
    BannerSection: {
        marginTop: 20,
        marginBottom: 20,
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    BannerImg: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginTop: 10,
    },
});

export default Message;
