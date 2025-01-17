type QuestionsSection = {
  type: string;
  title: string;
  contents: Array<{
    question: string;
    answer: string;
  }>
};

const SECTIONS: QuestionsSection[] = [
  {
    type: 'common',
    title: 'Ответы на частые вопросы',
    contents: [
      {
        question: 'Как записаться на игру или мероприятие',
        answer: 'Просто дай денег лол',
      },
      {
        question: 'У меня не получается прийти или я опаздываю',
        answer: 'Просто дай денег лол',
      },
      {
        question: 'Записался и не пришёл без предупреждения, отменился за три часа до мероприятия',
        answer: 'Просто дай денег лол',
      },
      {
        question: 'Хочу прийти с другом',
        answer: 'Просто дай денег лол',
      },
    ],
  },
  {
    type: 'DND',
    title: 'Вопросы по DND',
    contents: [
      {
        question: 'Как записаться на игру или мероприятие',
        answer: 'Просто дай денег лол',
      },
      {
        question: 'У меня не получается прийти или я опаздываю',
        answer: 'Просто дай денег лол',
      },
      {
        question: 'Записался и не пришёл без предупреждения, отменился за три часа до мероприятия',
        answer: 'Просто дай денег лол',
      },
      {
        question: 'Хочу прийти с другом',
        answer: 'Просто дай денег лол',
      },
    ],
  },
];


export { SECTIONS };
