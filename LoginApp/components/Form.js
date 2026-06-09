import { View, ImageBackground, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const Form = (props) => {

    return (
        <>
            <View style={styles.Banner}>
                <Text style={styles.Title}>Join the Castle Crashers Group today!</Text>
                <Image
                    source={require('../assets/bannerCastleCrashers.png')}
                    style={styles.BannerImg} />
            </View>

            <View style={styles.InsertData}>
                <TextInput
                    style={styles.DataInput}
                    numberOfLines={1}
                    maxLength={40}
                    onChangeText={props.setUserName}
                    value={props.userName}
                />
                <TextInput
                    style={styles.DataInput}
                    editable
                    numberOfLines={1}
                    maxLength={40}
                    onChangeText={props.setPassword}
                    value={props.password}
                />
            </View>

            <View>
                <Button
                    title='Join'
                    onPress={() => props.ChargeUser()}
                />
            </View>
        </>)
};

const styles = StyleSheet.create({
    Banner: {
        marginTop: 20,
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    BigButton: {

    },
    BannerImg: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginTop: 10,
    },
    InsertData: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    DataInput: {
        width: '75%',
    },
});

export default Form;