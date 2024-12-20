import React from 'react';
import Screen from '../components/Screen';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from '../components/forms/index';
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Email"
          icon="email"
          name="email"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <AppFormField
          placeholder="Password"
          icon="lock"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          name="password"
        />
        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
