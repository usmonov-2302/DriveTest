import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';

export default function AboutScreen() {
  // Havolalarni o'zingizga moslang
  const telegramBotUrl = 'https://t.me/usmonov_2302';
  const telegramChannelUrl = 'https://t.me/YOUR_CHANNEL';
  const instagramUrl = 'https://instagram.com/YOUR_INSTAGRAM';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>О нас</Text>
      <Text style={styles.desc}>
        DriveTest — это приложение для подготовки к экзамену на водительские права.
        Здесь вы найдете тесты, книги и полезную информацию.
      </Text>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => Linking.openURL(telegramBotUrl)}
      >
        <FontAwesome5 name="telegram-plane" size={32} color="#fff" style={styles.icon} />
        <Text style={styles.cardText}>Задать вопрос в Telegram</Text>
        <Feather name="arrow-right" size={28} color="#fff" style={styles.arrow} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => Linking.openURL(telegramChannelUrl)}
      >
        <FontAwesome5 name="telegram-plane" size={32} color="#fff" style={styles.icon} />
        <Text style={styles.cardText}>Наш Telegram канал</Text>
        <Feather name="arrow-right" size={28} color="#fff" style={styles.arrow} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => Linking.openURL(instagramUrl)}
      >
        <FontAwesome5 name="instagram" size={32} color="#fff" style={styles.icon} />
        <Text style={styles.cardText}>Наш Instagram</Text>
        <Feather name="arrow-right" size={28} color="#fff" style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 52,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a2731',
    marginBottom: 18,
    letterSpacing: 0.5,
  },
  desc: {
    fontSize: 17,
    color: '#222',
    textAlign: 'left',
    marginBottom: 35,
    lineHeight: 24,
    alignSelf: 'stretch',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1996D2',
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 22,
    marginBottom: 18,
    width: '100%',
    minHeight: 70,
    shadowColor: '#30c2ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
    position: 'relative',
  },
  icon: {
    marginRight: 18,
  },
  cardText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  arrow: {
    marginLeft: 8,
  },
});
