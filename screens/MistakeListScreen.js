import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function MistakeListScreen() {
  const [mistakes, setMistakes] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('mistakeQuestions').then(data => {
      if (data) setMistakes(JSON.parse(data));
    });
  }, []);

  return (
    <ScrollView style={{padding: 20}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 16}}>Ваши ошибки:</Text>
      {mistakes.length === 0 && <Text>Ошибок пока нет!</Text>}
      {mistakes.map((item, idx) => (
        <View key={idx} style={{marginBottom: 16, backgroundColor:'#ffebee', borderRadius:8, padding:12}}>
          <Text style={{fontWeight:'bold', marginBottom:4}}>Вопрос {item.num}</Text>
          <Text>❓ {item.question}</Text>
          <Text style={{color:'#d32f2f'}}>Ваш ответ: {item.options[item.userAnswer]}</Text>
          <Text style={{color:'#388e3c'}}>Правильный ответ: {item.options[item.correctIndex]}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
