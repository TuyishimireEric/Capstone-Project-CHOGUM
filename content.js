const speakerArray = [
  {
    image: 'Images/spk_06.png',
    name: 'Charles, Prince of Wales',
    title: 'Crown Prince of the United Kingdom',
    description: 'Charles, Prince of Wales, is the heir apparent to the British throne as the eldest son of Queen Elizabeth II and Prince Philip, Duke of Edinburgh.',
  },
  {
    image: 'Images/spk_01.png',
    name: 'HE Paul Kagame',
    title: 'President of Rwanda',
    description: 'Paul Kagame is President of the Republic of Rwanda. In 2019 he was elected Chairperson of the East African Community, and has been leading the institutional .',
  },
  {
    image: 'Images/spk_02.png',
    name: 'Patricia Scotland QC',
    title: 'Commonwealth Secretary-General',
    description: 'The Commonwealth secretary-general is the head of the Commonwealth Secretariat, the central body which has served the Commonwealth of Nations since its establishment in 1965',
  },
  {
    image: 'Images/spk_03.png',
    name: 'HE Yoweri Museveni',
    title: 'President of Uganda',
    description: 'Yoweri Kaguta Museveni Tibuhaburwa is a Ugandan politician and retired senior military officer who is the 9th and current President of Uganda since 29 January 1986',
  },
  {
    image: 'Images/spk_04.png',
    name: 'Muhammadu Buhari',
    title: 'President of Nigeria',
    description: 'Muhammadu Buhari GCFR is a Nigerian politician, who has served as the president of Nigeria since 2015. ',
  },
  {
    image: 'Images/spk_05.png',
    name: 'Boris Johnson',
    title: 'Prime Minister of the United Kingdom',
    description: 'Alexander Boris de Pfeffel Johnson is a British politician serving as Prime Minister of the United Kingdom and Leader of the Conservative Party since 2019. ',
  },
];

const cardss = document.querySelector('.speaker-container');
speakerArray.forEach((c) => {
  const card = document.createElement('article');
  card.innerHTML = (`
  <div class="speaker-main">
      <img class = "speaker-image" src="${c.image}" alt=" Image ">
      <div class="speaker-right">
          <h3> ${c.name}</h2>
          <p><i>${c.title}</i></p>
          <div class="guide_bar2"></div>
          <div class="speaker-divider-menu"></div>
          <p class="description">${c.description}</p>
      </div>
</div>
  `);
  cardss.appendChild(card);
});
