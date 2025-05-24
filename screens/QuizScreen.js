import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Alert } from 'react-native';


export default function QuizScreen({ navigation }) {
  // 50 ta variant massivini yaratamiz
  const variants = Array.from({ length: 50 }, (_, i) => ({
    number: i + 1,
  }));

  return (
    <View style={styles.container}>
  <Text style={styles.header}>Тесты</Text>
  <ScrollView contentContainerStyle={styles.scroll}>
    {variants.map((variant, idx) => (
      <TouchableOpacity
  key={variant.number}
  style={styles.card}
  activeOpacity={variant.number === 1 ? 0.85 : 1}
  onPress={() => {
    if (variant.number === 1) {
      navigation.navigate('Test', { variant: variant.number });
    } else {
      // optional: siz bu yerga alert qo‘yishingiz mumkin
       Alert.alert('Упс!', 'Этот вариант пока недоступен.');
      console.log("Faqat 1-variant hozircha faollashtirilgan.");
    }
  }}
>
  <View style={styles.iconBox}>
    <MaterialCommunityIcons name="clipboard-list" size={36} color="#fff" />
  </View>
  <View>
    <Text style={styles.cardTitle}>{`Вариант ${variant.number}`}</Text>
    <Text style={styles.cardSubtitle}>20 тестов</Text>
  </View>
  <MaterialCommunityIcons name="chevron-right" size={28} color="#fff" style={styles.arrow} />
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
    marginBottom: 18,
    letterSpacing: 0.5,
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 24,
    paddingTop: 5,
  },
  card: {
    width: 340,
    minHeight: 72,
    backgroundColor: '#1996D2',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 18,
    shadowColor: '#30c2ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.17,
    shadowRadius: 10,
    elevation: 3,
    position: 'relative',
  },
  iconBox: {
    marginRight: 18,
    width: 42,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#e6f7fa',
    fontSize: 15,
    marginTop: 3,
  },
  arrow: {
    marginLeft: 'auto',
  },
});
