import React from 'react';
import {ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';

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
      password: '',
    };
  }

  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>{'Вход'}</Text>
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  title: {
    fontFamily: 'sans-serif-medium',
    fontSize: 25,
    marginTop: 10,
  },
  input: {
    backgroundColor: 'red',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'pink',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'pink',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'pink',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    backgroundColor: 'pink',
    width: '100%',
    height: 70,
  },
});
