import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const testData = [
{
    question: "Какие транспортные средства имеют преимущество?",
    options: ["Те, что справа", "Те, что на главной дороге", "Пешеходы"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Разрешено ли обгонять на пешеходном переходе?",
    options: ["Да", "Нет", "Только при наличии регулировщика"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Что означает мигающий жёлтый сигнал светофора?",
    options: ["Разрешение на проезд", "Внимание, пересечение", "Движение запрещено"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Что означает этот знак: 🔺?",
    options: ["Главная дорога", "Уступите дорогу", "Движение запрещено"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Какой документ обязателен при управлении автомобилем?",
    options: ["Паспорт", "Свидетельство о браке", "Водительское удостоверение"],
    correctIndex: 2,
    image: null,
  },
  {
    question: "Какой знак указывает на автомагистраль?",
    options: ["🚗", "🛣️", "🚧"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Что означает знак с красным кругом и белой серединой?",
    options: ["Движение запрещено", "Стоянка запрещена", "Уступите дорогу"],
    correctIndex: 0,
    image: null,
  },
  {
    question: "Разрешена ли остановка на мосту?",
    options: ["Да", "Нет", "Если коротко"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Что обязан сделать водитель при аварии?",
    options: ["Уехать", "Сообщить в ГАИ", "Убрать машину"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Когда включаются габаритные огни?",
    options: ["При тумане", "Вечером и ночью", "При езде по трассе"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Какая минимальная скорость на автомагистрали?",
    options: ["30 км/ч", "60 км/ч", "50 км/ч"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Что означает знак 🅿️?",
    options: ["Проезд запрещен", "Место для парковки", "Стоянка запрещена"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Разрешено ли пересекать сплошную линию?",
    options: ["Нет", "Да", "Если никого нет"],
    correctIndex: 0,
    image: null,
  },
  {
    question: "С какой стороны обгон разрешен в РФ?",
    options: ["С любой", "Слева", "Справа"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Что означает знак 'пешеходная зона'?",
    options: ["Движение только для машин", "Движение запрещено", "Движение только для пешеходов"],
    correctIndex: 2,
    image: null,
  },
  {
    question: "Можно ли разговаривать по телефону за рулем?",
    options: ["Да", "Нет", "Можно с гарнитурой"],
    correctIndex: 2,
    image: null,
  },
  {
    question: "Что означает мигающий красный сигнал светофора?",
    options: ["Стоп, опасность", "Можно ехать", "Поворот налево"],
    correctIndex: 0,
    image: null,
  },
  {
    question: "Что обязан сделать водитель перед началом движения?",
    options: ["Включить музыку", "Убедиться в безопасности", "Закрыть окна"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Какой знак запрещает обгон?",
    options: ["Синий с машиной", "Красный круг с двумя машинами", "Желтый круг"],
    correctIndex: 1,
    image: null,
  },
  {
    question: "Когда нужно включать ближний свет фар?",
    options: ["Только ночью", "В любое время суток", "При видимости менее 300 м"],
    correctIndex: 2,
    image: null,
  },
];


export default function TestScreen({ navigation, route }) {
  // Variant raqami QuizScreen’dan keladi, agar yo‘q bo‘lsa 1 deb oling
  const variant = route?.params?.variant || 1;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null); // tanlangan variant
  const [answered, setAnswered] = useState(Array(testData.length).fill(null)); // har bir savol uchun tanlangan variant

  const currentQ = testData[current];

  function handleSelect(idx) {
    if (selected !== null) return;
    setSelected(idx);

    const copy = [...answered];
    copy[current] = idx;
    setAnswered(copy);
  }

  function next() {
    if (current < testData.length - 1) {
      setCurrent(current + 1);
      setSelected(answered[current + 1]);
    }
  }

  function prev() {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(answered[current - 1]);
    }
  }

  function getOptionStyle(idx) {
    if (selected === null) return styles.option;
    if (idx === currentQ.correctIndex) return [styles.option, styles.correct];
    return [styles.option, styles.wrong];
  }

  return (
    <View style={styles.container}>
      {/* Yuqori panel */}
      <View style={styles.header}>
        <TouchableOpacity onPress={prev} disabled={current === 0}>
          <Feather name="arrow-left" size={32} color={current === 0 ? '#aaa' : '#1996D2'} />
        </TouchableOpacity>
        <Text style={styles.counter}>
          Вариант {variant} | Вопрос {current + 1} из {testData.length}
        </Text>
        <TouchableOpacity onPress={next} disabled={current === testData.length - 1}>
          <Feather name="arrow-right" size={32} color={current === testData.length - 1 ? '#aaa' : '#1996D2'} />
        </TouchableOpacity>
      </View>

      {/* Rasm */}
      <Image source={currentQ.image} style={styles.image} />

      {/* Savol matni */}
      <Text style={styles.question}>{currentQ.question}</Text>

      {/* Variantlar */}
      <View style={{ width: '100%', marginTop: 16 }}>
        {currentQ.options.map((text, idx) => (
          <TouchableOpacity
            key={idx}
            style={getOptionStyle(idx)}
            onPress={() => handleSelect(idx)}
            disabled={selected !== null}
            activeOpacity={0.8}
          >
            <Text style={styles.letter}>{String.fromCharCode(65 + idx)}</Text>
            <Text style={styles.optionText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* === QO'SHIMCHA: Oxirgi savolda va javob tanlanganda "Результаты" tugmasi chiqadi === */}
      {current === testData.length - 1 && selected !== null && (
        <TouchableOpacity
          style={{...styles.option, backgroundColor:'#20c933', marginTop: 18}}
          onPress={() => navigation.replace('Result', { answers: answered, testData })}
        >
          <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Результаты</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 42,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  counter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
  },
  image: {
    width: 220,
    height: 120,
    marginBottom: 15,
    borderRadius: 12,
    resizeMode: 'contain',
    backgroundColor: '#eef5fa',
  },
  question: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7fbfe',
    borderRadius: 17,
    paddingVertical: 17,
    paddingHorizontal: 18,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#1996D2',
  },
  letter: {
    fontWeight: 'bold',
    color: '#1996D2',
    fontSize: 22,
    marginRight: 14,
    width: 24,
    textAlign: 'center',
  },
  optionText: {
    fontSize: 17,
    color: '#222',
  },
  correct: {
    backgroundColor: '#c7f4d7',
    borderColor: '#20c933',
  },
  wrong: {
    backgroundColor: '#ffdbdb',
    borderColor: '#f54d4d',
  },
});
