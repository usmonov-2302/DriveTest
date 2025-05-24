import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DriveTest</Text>

      {/* Logo uchun vaqtincha rasm (masalan, 'logo.png' ni 'assets' papkaga joylashtiring) */}
      <Image
        source={require('../assets/DriveTest.png')} // Siz rasm yuklagach manzilini shu yerga yozasiz
        style={styles.logo}
      />

      <Text style={styles.welcome}>Добро пожаловать !</Text>
      <Text style={styles.desc}>
        Подготовитесь к экзамену{'\n'}
        для получения водительских прав
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
>
        <Text style={styles.buttonText}>Начать</Text>
        </TouchableOpacity>


      <View style={styles.languageRow}>
        <Text style={styles.language}>Русский</Text>
        <Text style={styles.language}>    O'zbek</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  logo: {
    width: 180,
    height: 180,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  desc: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1996D2',
    paddingVertical: 16,
    paddingHorizontal: 44,
    borderRadius: 16,
    marginBottom: 38,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  language: {
    fontSize: 18,
    color: '#333',
    marginHorizontal: 12,
  },
});
