import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

// Constants
const correctPassword = '1234';

const Footer = props => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  );
};

export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      showPassword: false,
      showModalWindow: false,
      authSuccess: false,
    };
  }

  // Callback for 'Enter' button
  checkPassword = () => {
    if (this.state.password == correctPassword) {
      this.setState({showModalWindow: true, authSuccess: true});
    } else {
      this.setState({showModalWindow: true});
    }
  };

  // Callback for 'Forget password' button
  forgetPassword = () => {
    console.log('Forget password button was pushed');
  };

  // Callback for 'Sign Up' button
  signUp = () => {
    console.log('Sign Up button was pushed');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <ScrollView>
            <Text style={styles.title}>{'Вход'}</Text>

            {/* AUTH FORM */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>{'Телефон *'}</Text>
              <TextInput
                style={styles.input}
                value={this.state.password}
                onChangeText={phone => this.setState({phone})}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>{'Пароль *'}</Text>
              <TextInput
                style={styles.input}
                value={this.state.password}
                onChangeText={password => this.setState({password})}
              />
            </View>

            {/* 'ENTER' AND 'FORGET PASSWORD' BUTTONS */}
            <TouchableOpacity
              style={styles.enterBtn}
              onPress={this.checkPassword}>
              <Text style={styles.enterText}>{'Войти'}</Text>
            </TouchableOpacity>
            <View style={styles.forgetPasswordContainer}>
              <TouchableOpacity
                style={styles.forgetPasswordBtn}
                onPress={this.forgetPassword}>
                <Text style={styles.forgetPasswordText}>
                  {'Забыл пароль или поменял телефон!'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* SIGN UP DISCLAIMER */}
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>{'Eще нет аккаунта?'}</Text>
              <TouchableOpacity onPress={this.signUp}>
                <Text style={[styles.signUpText, {color: '#01c0ad'}]}>
                  {'Зарегистрируйтесь'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'sans-serif-medium',
    fontSize: 25,
    marginVertical: 10,
  },
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dedede',
  },
  inputTitle: {
    fontFamily: 'sans-serif-light',
    color: '#b0b0b0',
    backgroundColor: 'white',
    position: 'absolute',
    left: 18,
    top: -12,
    zIndex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  enterBtn: {
    height: 60,
    backgroundColor: '#01c0ad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  enterText: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: 'white',
  },
  forgetPasswordContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  forgetPasswordBtn: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 35,
  },
  forgetPasswordText: {
    fontFamily: 'sans-serif',
    color: '#01c0ad',
  },
  signUpContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  signUpText: {
    fontFamily: 'sans-serif',
    fontSize: 16,
  },
  footer: {
    backgroundColor: 'pink',
    width: '100%',
    height: 70,
  },
});
