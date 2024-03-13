export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  ratingUrl: string;
  likes: number;
  categoryId: number;
}
export const products = [
  {
    id: 1,
    name: 'Clinique Even Better Makeup тональная основа',
    price: 24010,
    description:
      'Clinique Even Better Makeup SPF 15 - первый разработанный дерматологами тональный крем Clinique. который при постоянном применении помогает выровнять тон кожи и устранить пигментные пятна. Гиперпигментация является распространенным первым признаком старения и возникает из-за повреждения кожи солнцем или на месте заживших прыщей. Гиперпигментация обычно проявляется в виде возрастных пятен. темных пятен или участков.',
    imageUrl: 'https://i.imgur.com/WnBskCJ.jpeg',
    rating: 4.5,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Dior Addict Lip Maximizer',
    price: 19010,
    description:
      'Dior Addict Lip Maximizer — это культовый блеск-плампер Dior, средство придающее губам максимальный эффект объема и увлажнение. Его формула, насыщенная вишневым маслом и гиалуроновой кислотой, на 90%* состоит из ингредиентов натурального происхождения.',
    imageUrl: 'https://i.imgur.com/pXNDoHb.jpeg',
    rating: 3.7,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'Пудра GIVENCHY Prisme Libre',
    price: 22990,
    description:
      'Не стирается при контакте с маской². Способствует стойкости макияжа. Рассыпчатая пудра Prisme Libre, разработанная в 2006 году арт-директором по макияжу Givenchy Николя Деженном, состоит из четырех гармоничных оттенков. Она обеспечивает ровный матовый тон, коррекцию несовершенств кожи и сияющий цвет лица.',
    imageUrl: 'https://i.imgur.com/njOtSdO.jpeg',
    rating: 3.5,
    ratingUrl: 'https://i.imgur.com/8dsvtlf.jpeg',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'BABOR Enzyme Cleanser',
    price: 17288,
    description:
      'Глубокое очищение + пилинг в одном продукте. Мягко удаляет ороговевшие клетки и загрязнения. Выравнивает тон и микрорельеф кожи. Запускает процессы регенерации. С ферментами и витамином С.',
    imageUrl: 'https://i.imgur.com/KycRgAi.jpeg',
    rating: 4.5,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes: 0,
    categoryId:2,
  },
  {
    id: 4,
    name: 'Paulas Choice Intensive Wrinkle Retinol',
    price: 27500,
    description:
      'Формула содержит высоко стабилизированный ретинол, запатентованные антиоксиданты и восстанавливающие ингредиенты. Обладает сильнейшим омолаживающим действием, придает коже более молодой, здоровый и ухоженный вид. Замедляет процесс старения кожи. При регулярном использовании сокращает присутствие и видимость морщин, разглаживает и подтягивает кожу, улучшает и выравнивает тон кожи.',
    imageUrl: 'https://i.imgur.com/wyitnz3.jpeg',
    rating: 4.7,
    ratingUrl: 'https://i.imgur.com/ySA6Rsu.jpeg',
    likes: 0,
    categoryId: 2,
  },
  {
    id: 5,
    name: 'Anua тонер Heartleaf 77% Toner',
    price: 7385,
    description:
      'Балансирующий тоник на основе хауттюйнии Anua Heartleaf 77% Soothing Toner восполняет недостаток влаги после умывания, обеспечивая коже обильное увлажнение и выраженное успокаивающее действие. Нейтрализует агрессивное воздействие проточной воды, восстанавливает нормальный pH баланс и предотвращает появление стянутости после умывания.',
    imageUrl: 'https://i.imgur.com/o7bauSp.jpeg',
    rating: 3.8,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes: 0,
    categoryId: 2,
  },
  {
    id: 6,
    name: 'Shik Perfect Liquid Contour ',
    price: 3900,
    description:
      'Скульптурирующее средство для лица SHIK идеально подходит для моделирования овала лица. Мягкая кремовая текстура легко растушёвывается, создавая естественную игру света и тени. Со скульптором SHIK сложно переборщить пластичная текстура легко втушёвывается в кожу, и риск неестественных пятен на лице минимален.',
    imageUrl: 'https://i.imgur.com/p7ZAhlE.jpeg',
    rating: 4.4,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 7,
    name: 'Dior Backstage Glow Face Palette',
    price: 38890,
    description:
      'Dior создал свою первую профессиональную линию макияжа, коллекцию незаменимых средств визажистов, вдохновленных атмосферой, царящей за кулисами модных показов. Эксклюзивные* текстуры обеспечивают контроль за интенсивностью покрытия, а богатая палитра позволяет подобрать идеальный оттенок к любому тону кожи.',
    imageUrl: 'https://i.imgur.com/UBb4UUf.jpeg',
    rating: 4.2,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 8,
    name: 'Ноутбук Apple MacBook Air 13 MGN63RU/A',
    price: 433230,
    description: 'диагональ экрана: 13.3 дюйм, процессор: Apple M1, видеокарта: Apple M1,размер оперативной памяти: 8.0 Гб,тип жесткого диска: SSD,общий объем накопителей: 256.0 Гб',
    imageUrl: 'https://i.imgur.com/VIofB8v.jpeg',
    rating: 3.7,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes:0,
    categoryId: 3,
  },
  {
    id: 9,
    name: 'Ноутбук ASUS TUF Gaming F15 90NR0724-M00ZU0',
    price: 449730,
    description: 'диагональ экрана: 15.6 дюйм ,процессор: Intel Core i7-11800H,видеокарта: NVIDIA GeForce RTX 3050,размер оперативной памяти: 16.0 Гб,тип жесткого диска: SSD,общий объем накопителей: 512.0 Гб',
    imageUrl: 'https://i.imgur.com/JqOtgK9.jpeg',
    rating: 2.7,
    ratingUrl: 'https://i.imgur.com/8dsvtlf.jpeg',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 10,
    name: 'Bioderma тоник Sensibio Tonique',
    price: 7800,
    description: 'Sensibio Tonique не просто ухаживает за кожей, но и подготавливает ее к следующим косметическим манипуляциям. Крем, эмульсии, сыворотки - проникают намного глубже в слои кожи и становятся более эффективными. Показания к применению: Тонизация предварительно очищенной нормальной и сухой чувствительной кожи лица и шеи.',
    imageUrl: 'https://i.imgur.com/tHxIits.jpeg',
    rating: 3.6,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes: 0,
    categoryId: 2,
  },
  {
    id: 11,
    name: 'The Ordinary сыворотка Niacinamide',
    price: 4909,
    description: 'Сыворотка для проблемной кожи с 10% ниацинамида и цинком The Ordinary Niacinamide 10% + Zinc 1% предотвращает появление чёрных точек, устраняет жирный блеск и сужает поры, смягчает, обеззараживает и выравнивает тон, делая кожу мягкой и нежной, без высыпаний и воспалений. Не содержит силиконов, масел и спирта. Уровень pH 5,5-6,5.',
    imageUrl: 'https://i.imgur.com/7jl6xCC.jpeg',
    rating: 4,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes: 0,
    categoryId: 2,
  },
  {
    id: 12,
    name: 'Ноутбук Dream Machines RG3070-15KZ25',
    price: 1650000,
    description: 'диагональ экрана: 15.6 дюйм, процессор: Intel Core i7-10870H,размер оперативной памяти: 16.0 Гб,тип жесткого диска: SSD,общий объем накопителей: 1000.0 Гб',
    imageUrl: 'https://i.imgur.com/96ls0nt.jpeg',
    rating: 3.4,
    ratingUrl: 'https://i.imgur.com/8dsvtlf.jpeg',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 14,
    name: 'Ноутбук Huawei Matebook D16 MitchellF-W5651',
    price: 344000,
    description: 'диагональ экрана: 16.0 дюйм, процессор: Intel Core i5-12450H,видеокарта: Intel UHD Graphics,размер оперативной памяти: 16.0 Гб,тип жесткого диска: SSD,общий объем накопителей: 512.0 Гб',
    imageUrl: 'https://i.imgur.com/JPgLAtr.jpeg',
    rating: 3.2,
    ratingUrl: 'https://i.imgur.com/8dsvtlf.jpeg',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 15,
    name: 'Книга Остин Дж.: Гордость и предубеждение',
    price: 1100,
    description: '«Гордость и предубеждение» – самый популярный женский роман в мире, провозглашенный интернет-пользователями Великобритании одной из лучших книг всех времен и народов.',
    imageUrl: 'https://i.imgur.com/CewCwch.jpeg',
    rating: 4.7,
    ratingUrl: 'https://i.imgur.com/ySA6Rsu.jpeg',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 16,
    name: 'Книга Сильвера А.: В конце они оба умрут',
    price: 3200,
    description: 'Однажды ночью сотрудники «Отдела Смерти» звонят Матео Торресу и Руфусу Эметерио, чтобы сообщить им плохие новости: сегодня они умрут. Матео и Руфус не знакомы, но оба по разным причинам ищут себе друга, с которым проведут Последний День. К счастью, специально для этого есть приложение «Последний друг», которое помогает им встретиться и вместе прожить целую жизнь за один день.',
    imageUrl: 'https://i.imgur.com/3NzSAdG.jpeg',
    rating: 3.2,
    ratingUrl: 'https://i.imgur.com/8dsvtlf.jpeg',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 17,
    name: 'Книга Ремарк Э. М.: Триумфальная арка',
    price: 1700,
    description: '«Триумфальная арка» – пронзительная история любви всему наперекор, любви, приносящей боль, но и дарующей бесконечную радость. Место действия – Париж накануне Второй мировой войны. Герой – беженец из Германии, без документов, скрывающийся и от французов, и от нацистов, хирург, спасающий человеческие жизни.',
    imageUrl: 'https://i.imgur.com/zrGauMb.jpeg',
    rating: 4.7,
    ratingUrl: 'https://i.imgur.com/ySA6Rsu.jpeg',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 18,
    name: 'Книга Булгаков М.А.: Мастер и Маргарита',
    price: 1400,
    description: 'Бессмертное, загадочное и остроумное "Евангелие от Сатаны" Михаила Булгакова. Роман, уникальный в российской литературе ХХ столетия. Трудно себе представить, какое влияние он оказал на мировую культуру. На основе "Мастера и Маргариты" снимались и продолжают сниматься фильмы и телесериалы, это произведение легло в основу оперы, симфонии, рок-оперы, его иллюстрировали самые знаменитые художники и фотографы',
    imageUrl: 'https://i.imgur.com/0mZnoCw.jpeg',
    rating: 4.7,
    ratingUrl: 'https://i.imgur.com/ySA6Rsu.jpeg',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 19,
    name: 'Книга Корелли М.: Скорбь Сатаны',
    price: 1000,
    description: 'Молодой писатель Джеффри Темпест, прозябающий в нищете и безвестности, продает душу Сатане и получает от Князя Тьмы все, о чем только мечтал… точнее, почти все. Теперь светское общество, ранее им пренебрегавшее, лежит у его ног. К его услугам несметное состояние, любовь прекрасной девушки, роскошь и удовольствия.',
    imageUrl: 'https://i.imgur.com/3XKg1sD.jpeg',
    rating: 3.7,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
    likes: 0,
    categoryId: 4,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
