const questionsNoRandom = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
  {
    title: "Что такое TS?",
    variants: ["Это язык программирования", "Это функция", "Это тот же JS-код"],
    correct: 0,
  },
  {
    title: "Что такое компоненты высшего порядка (HOC) в React?",
    variants: [
      "Выше других",
      "С более высоким приоритетом",
      "Функции, оборачивающие компоненты",
    ],
    correct: 2,
  },
  {
    title: "Что такое хуки (hooks) в React?",
    variants: [
      "Функции для использования состояния и других возможностей",
      "Функции для создания анимаций",
      "Функции для доступа к низкоуровневым операциям",
    ],
    correct: 0,
  },
  {
    title: "Что такое контекст (context) в React?",
    variants: [
      "Механизм передачи данных через дерево компонентов",
      "Тип компонента для отображения списка элементов",
      "Функция для изменения состояния компонента",
    ],
    correct: 0,
  },
  {
    title: "Что такое виртуальный DOM (virtual DOM) в React?",
    variants: [
      "Специальный тип DOM-элементов для рендеринга компонентов",
      "Механизм обновления только измененных частей DOM",
      "Режим работы для использования DOM-методов напрямую",
    ],
    correct: 1,
  },
]

interface questionsNoRandom {
  title: string
  variants: string[]
  correct: number
}

function shuffleArray(array: questionsNoRandom[]) {
  return array.sort(() => Math.random() - 0.5)
}

// Пример использования

const questions = shuffleArray(questionsNoRandom)

export default questions
