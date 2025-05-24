import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const books = [
  {
    title: 'Правила дорожного движения',
    icon: <MaterialCommunityIcons name="book-open-page-variant" size={32} color="#fff" />,
  },
  {
    title: 'Дорожные знаки',
    icon: <MaterialCommunityIcons name="traffic-light" size={32} color="#fff" />,
  },
  {
    title: 'Безопасность на дороге',
    icon: <FontAwesome5 name="car" size={32} color="#fff" />,
  },
  {
    title: 'Первая медицинская помощь',
    icon: <MaterialCommunityIcons name="medical-bag" size={32} color="#fff" />,
  },
  {
    title: 'Экзаменационные вопросы',
    icon: <MaterialCommunityIcons name="help-circle-outline" size={32} color="#fff" />,
  },
];

export default function KnigiScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Книги</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {books.map((book, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => {/* TODO: kerakli kitob sahifasiga o‘ting */}}
            activeOpacity={0.7}
          >
            <View style={styles.iconBox}>{book.icon}</View>
            <Text style={styles.cardText}>{book.title}</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={28}
              color="#fff"
              style={{ position: 'absolute', right: 20 }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1a2731',
    marginBottom: 28,
    letterSpacing: 0.5,
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  card: {
    width: 340,
    minHeight: 70,
    backgroundColor: 'linear-gradient(90deg,#1996D2,#30c2ff)', // Expo LinearGradient uchun alohida komponent ishlatiladi
    backgroundColor: '#1996D2', // fallback
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    paddingVertical: 12,
    paddingLeft: 18,
    paddingRight: 50,
    shadowColor: '#30c2ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.17,
    shadowRadius: 10,
    elevation: 4,
    position: 'relative',
  },
  iconBox: {
    marginRight: 16,
    width: 36,
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
});
