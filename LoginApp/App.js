import { ImageBackground, StyleSheet, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

import Form from './components/Form.js'
import Message from './components/Message.js'

const App = () => {
  const [userName, setUserName] = useState("username");
  const [password, setPassword] = useState("password");
  const [rightUser, setRightUser] = useState({ userName: 'JohnyJoestar', password: 'JesusChrist' });
  const [loginState, setUserState] = useState("logging");

  const ChargeUser = () => {
    if (rightUser.userName == userName && rightUser.password == password) {
      setUserState("completed");
    } else {
      setUserState("wrong");
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {loginState == "logging" && <Form ChargeUser={ChargeUser} userName={userName} setUserName={setUserName} password={password} setPassword={setPassword} />}
        {(loginState == "completed" || loginState == "wrong") && <Message loginState={loginState} setUserState={setUserState} />} 
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({

});

export default App;
