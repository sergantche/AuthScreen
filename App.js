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
import IconAntDesign from 'react-native-vector-icons/AntDesign';

// Constants
const correctPassword = '1234';
const menuItems = [
  ['home', 'Главная'],
  ['search1', 'Поиск'],
  ['shoppingcart', 'Корзина'],
  ['user', 'Профиль'],
  ['ellipsis1', 'Еще'],
];

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 3,
    };
  }

  render() {
    return (
      <View style={styles.footer}>
        {menuItems.map((item, index) => {
          const color = this.state.activeSection == index ? '#01c0ad' : 'gray';
          return (
            <TouchableOpacity
              key={index}
              style={styles.footerItem}
              onPress={() => {
                this.setState({activeSection: index});
              }}>
              <IconAntDesign
                color={color}
                name={item[0]}
                size={30}></IconAntDesign>
              <Text style={[styles.footerText, {color}]}>{item[1]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

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
    backgroundColor: '#fcfcfc',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
  },
  footerItem: {
    width: '19%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'sans-serif',
    fontSize: 14,
  },
});
