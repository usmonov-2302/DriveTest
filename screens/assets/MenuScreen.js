import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DriveTest</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Knigi')}
>
        <MaterialCommunityIcons name="book-open-page-variant" size={32} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Книги</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}
>
        <MaterialCommunityIcons name="clipboard-list" size={32} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Тесты</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Mistakes')}
        >
        <Feather name="bar-chart-2" size={32} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Результаты</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <FontAwesome5 name="info-circle" size={32} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>О нас</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 32,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(90deg,#1996D2,#30c2ff)', // Expo/React Native-da gradient uchun oddiy rang ishlating yoki `expo-linear-gradient`dan foydalaning
    backgroundColor: '#1996D2',
    borderRadius: 26,
    paddingVertical: 18,
    paddingHorizontal: 34,
    marginBottom: 22,
    minWidth: 270,
    shadowColor: "#30c2ff",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    marginRight: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
});