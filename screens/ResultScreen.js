import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Prop sifatida natijalarni TestScreen'dan uzatiladi
export default function ResultScreen({ route, navigation }) {
  // route.params => { answers: [...], testData: [...] }
  const { answers, testData } = route.params;

  const total = testData.length;
  const correct = answers.reduce((acc, item, idx) => (
    item === testData[idx].correctIndex ? acc + 1 : acc
  ), 0);

  React.useEffect(() => {
  // Xato qilgan savollarni topamiz
  const mistakes = testData
    .map((q, idx) => (answers[idx] !== q.correctIndex ? { ...q, userAnswer: answers[idx], num: idx + 1 } : null))
    .filter(Boolean);

  if (mistakes.length > 0) {
    // Avvalgi xatolar ro‘yxatini olib, yangi xatolarni qo‘shamiz
    AsyncStorage.getItem('mistakeQuestions')
      .then(data => {
        let arr = [];
        if (data) arr = JSON.parse(data);
        // Yangi xatolarni ro‘yxatga qo‘shamiz
        arr = [...arr, ...mistakes];
        AsyncStorage.setItem('mistakeQuestions', JSON.stringify(arr));
      });
  }
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Результаты теста</Text>
      <Text style={styles.score}>{correct} из {total} верно!</Text>
      <ScrollView style={{width: '100%', marginTop: 14}}>
        {testData.map((q, idx) => {
          const isCorrect = answers[idx] === q.correctIndex;
          return (
            <View key={idx} style={styles.row}>
              <Text style={styles.qnum}>{idx + 1}.</Text>
              <Text style={styles.qtext} numberOfLines={1}>{q.question}</Text>
              <Feather name={isCorrect ? "check-circle" : "x-circle"} size={22} color={isCorrect ? "#20c933" : "#f54d4d"} />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.btnRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Test')}
        >
          <Text style={styles.btnText}>Заново пройти тест</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor:'#1996D2'}]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.btnText}>На главную</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:'#fff', alignItems:'center', paddingTop:40, paddingHorizontal:12},
  header: {fontSize:30, fontWeight:'bold', color:'#1a2731', marginBottom:12},
  score: {fontSize:22, color:'#222', marginBottom:10, fontWeight:'600'},
  row: {flexDirection:'row', alignItems:'center', backgroundColor:'#f6fafd', borderRadius:10, marginBottom:7, paddingVertical:8, paddingHorizontal:14, width:'100%'},
  qnum: {fontWeight:'bold', fontSize:16, width:28, color:'#1996D2'},
  qtext: {flex:1, fontSize:16, color:'#222', marginRight:7},
  btnRow: {flexDirection:'row', marginTop:16, justifyContent:'space-between', width:'100%'},
  button: {flex:1, backgroundColor:'#20c933', marginHorizontal:4, borderRadius:14, paddingVertical:12, alignItems:'center'},
  btnText: {color:'#fff', fontSize:17, fontWeight:'bold'}
});
