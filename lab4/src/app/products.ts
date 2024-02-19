export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  ratingUrl: string;
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
  },
  {
    id: 8,
    name: 'Romand тени  Better Than Palette',
    price: 12288,
    description:
      'Тени хорошо пигментированны, обладают мягкой, шелковистой текстурой благодаря чему легко наносятся и растушёвываются, хорошо держатся в течении дня и не скатываются.',
    imageUrl: 'https://i.imgur.com/UAXXIy3.jpeg',
    rating: 4.9,
    ratingUrl: 'https://i.imgur.com/ySA6Rsu.jpeg',
  },
  {
    id: 9,
    name: 'Dior Forever Skin Correct',
    price: 17288,
    description:
      'Всего лишь одним движением этот консилер маскирует круги под глазами, покраснения и любые другие недостатки кожи, не забиваясь в морщинки. Безупречный цвет лица с утра до вечера.',
    imageUrl: 'https://i.imgur.com/pDt3GGS.jpeg',
    rating: 2.5,
    ratingUrl: 'https://i.imgur.com/ca2F5xZ.jpeg',
  },
  {
    id: 10,
    name: 'Ederra Lab 01 Sulfate Free',
    price: 17288,
    description:
      'Специальная концентрированная формула изготовлена на натуральной основе листьев чайного дерева. Содержит комплекс витаминов А, B, E, F, D, коллаген и экстракт листьев алоэ Barbadensis.',
    imageUrl: 'https://i.imgur.com/Bg6g0FB.jpeg',
    rating: 4.5,
    ratingUrl: 'https://i.imgur.com/72ojEPp.jpeg',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
