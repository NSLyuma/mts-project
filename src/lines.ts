type Line = {
  line: string;
  stations: string[];
};

export const lines: Line[] = [
  {
    line: 'Сокольническая линия',
    stations: [
      'Улица Подбельского',
      'Черкизовская',
      'Преображенская площадь',
      'Сокольники',
      'Красносельская',
      'Комсомольская',
      'Красные ворота',
      'Чистые пруды',
      'Лубянка',
      'Охотный ряд',
      'Библиотека имени Ленина',
      'Кропоткинская',
      'Парк культуры',
      'Фрунзенская',
      'Спортивная',
      'Воробьёвы горы',
      'Университет',
      'Проспект Вернадского',
      'Юго-Западная',
    ],
  },
  {
    line: 'Замоскворецкая линия',
    stations: [
      'Красногвардейская',
      'Домодедовская',
      'Орехово',
      'Царицыно',
      'Кантемировская',
      'Каширская',
      'Коломенская',
      'Автозаводская',
      'Павелецкая',
      'Новокузнецкая',
      'Театральная',
      'Тверская',
      'Маяковская',
      'Белорусская',
      'Динамо',
      'Аэропорт',
      'Сокол',
      'Войковская',
      'Водный стадион',
      'Речной вокзал',
    ],
  },
  {
    line: 'Арбатско-Покровская линия',
    stations: [
      'Щёлковская',
      'Первомайская',
      'Измайловская',
      'Партизанская',
      'Семёновская',
      'Электрозаводская',
      'Бауманская',
      'Курская',
      'Площадь Революции',
      'Арбатская',
      'Смоленская',
      'Киевская',
      'Парк Победы',
      'Славянский бульвар',
      'Кунцевская',
      'Молодёжная',
      'Крылатское',
      'Строгино',
      'Мякинино',
      'Волоколамская',
      'Митино',
    ],
  },
  {
    line: 'Филёвская линия',
    stations: [
      'Кунцевская',
      'Пионерская',
      'Филевский парк',
      'Багратионовская',
      'Фили',
      'Кутузовская',
      'Студенческая',
      'Киевская',
      'Смоленская',
      'Арбатская',
      'Александровский сад',
      'Выставочная',
      'Международная',
    ],
  },
  {
    line: 'Кольцевая линия',
    stations: [
      'Парк культуры',
      'Октябрьская',
      'Добрынинская',
      'Павелецкая',
      'Таганская',
      'Курская',
      'Комсомольская',
      'Проспект Мира',
      'Новослободская',
      'Белорусская',
      'Краснопресненская',
      'Киевская',
    ],
  },
  {
    line: 'Калужско-Рижская линия',
    stations: [
      'Медведково',
      'Бабушкинская',
      'Свиблово',
      'Ботанический сад',
      'ВДНХ',
      'Алексеевская',
      'Рижская',
      'Проспект Мира',
      'Сухаревская',
      'Тургеневская',
      'Китай-город',
      'Третьяковская',
      'Октябрьская',
      'Шаболовская',
      'Ленинский проспект',
      'Академическая',
      'Профсоюзная',
      'Новые Черёмушки',
      'Калужская',
      'Беляево',
      'Коньково',
      'Тёплый стан',
      'Ясенево',
      'Новоясеневская',
    ],
  },
  {
    line: 'Таганско-Краснопресненская линия',
    stations: [
      'Планерная',
      'Сходненская',
      'Тушинская',
      'Щукинская',
      'Октябрьское поле',
      'Полежаевская',
      'Беговая',
      'Улица 1905 года',
      'Баррикадная',
      'Пушкинская',
      'Кузнецкий мост',
      'Китай-город',
      'Таганская',
      'Пролетарская',
      'Волгоградский проспект',
      'Текстильщики',
      'Кузьминки',
      'Рязанский проспект',
      'Выхино',
    ],
  },
  {
    line: 'Калининская линия',
    stations: [
      'Новогиреево',
      'Перово',
      'Шоссе Энтузиастов',
      'Авиамоторная',
      'Площадь Ильича',
      'Марксистская',
      'Третьяковская',
    ],
  },
  {
    line: 'Серпуховско-Тимирязевская линия',
    stations: [
      'Алтуфьево',
      'Бибирево',
      'Отрадное',
      'Владыкино',
      'Петровско-Разумовская',
      'Тимирязевская',
      'Дмитровская',
      'Савёловская',
      'Менделеевская',
      'Цветной бульвар',
      'Чеховская',
      'Боровицкая',
      'Полянка',
      'Серпуховская',
      'Тульская',
      'Нагатинская',
      'Нагорная',
      'Нахимовский проспект',
      'Севастопольская',
      'Чертановская',
      'Южная',
      'Пражская',
      'Улица академика Янгеля',
      'Аннино',
      'Бульвар Дмитрия Донского',
    ],
  },
  {
    line: 'Люблинско-Дмитровская линия',
    stations: [
      'Марьина роща',
      'Достоевская',
      'Трубная',
      'Сретенский бульвар',
      'Чкаловская',
      'Римская',
      'Крестьянская застава',
      'Дубровка',
      'Кожуховская',
      'Печатники',
      'Волжская',
      'Люблино',
      'Братиславская',
      'Марьино',
    ],
  },
  {
    line: 'Каховская линия',
    stations: ['Каширская', 'Варшавская', 'Каховская'],
  },
  {
    line: 'Бутовская линия',
    stations: [
      'Улица Старокачаловская',
      'Улица Скобелевская',
      'Бульвар адмирала Ушакова',
      'Улица Горчакова',
      'Бунинская аллея',
    ],
  },
];
