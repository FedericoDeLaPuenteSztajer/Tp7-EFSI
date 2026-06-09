import { View, ImageBackground, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const Form = (props) => {

    return (
        <>
            <View style={{ flex: 2 }}>
                <Text>Join the Castle Crashers Group today!</Text>
                <Image
                    source={require('../assets/bannerCastleCrashers.png')}
                    style={styles.BannerImg} />
            </View>

            <View style={{
                flex: 1,
            }}>
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
            </View>

            <View style={{ flex: 1 }}>

                <Button
                    title='Join'
                    onPress={() => props.ChargeUser()}
                />
            </View>
        </>)
};

const styles = StyleSheet.create({
    Title: {

    },
    BigButton: {

    },
    BannerImg: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    }

});

export default Form;