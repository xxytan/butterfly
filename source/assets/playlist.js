const BASE_URL = 'https://bucket.oxue.de/music';

const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  loop: 'all',
  order: 'random',
  preload: 'metadata',
  listFolded: true,
  audio: [
    {
      name: 'Friendship',
      artist: 'Pascal Letoublon、Leony',
      url: `${BASE_URL}/Friendships - Pascal Letoublon、Leony.mp3`,
      cover: `${BASE_URL}/cover/Friendships - Pascal Letoublon、Leony.png`
    },
    {
      name: 'Una Mattina',
      artist: 'Alexandre Pachabezian',
      url: `${BASE_URL}/Una Mattina - Alexandre Pachabezian.mp3`,
      cover: `${BASE_URL}/cover/Una Mattina - Alexandre Pachabezian.png`
    },
    {
      name: 'Holiday Crasher',
      artist: 'Future Mind',
      url: `${BASE_URL}/Holiday Crasher - Future Mind.mp3`,
      cover: `${BASE_URL}/cover/Holiday Crasher - Future Mind.png`
    },
    {
      name: 'Shootout',
      artist: 'Izzamuzzic、Julien Marchal',
      url: `${BASE_URL}/Shootout - Izzamuzzic、Julien Marchal.mp3`,
      cover: `${BASE_URL}/cover/Shootout - Izzamuzzic、Julien Marchal.png`
    },
    {
      name: 'Take Me Hand',
      artist: 'DAISHI DANCE、Cécile Corbel',
      url: `${BASE_URL}/Take me hand - DAISHI DANCE、Cécile Corbel.mp3`,
      cover: `${BASE_URL}/cover/Take me hand - DAISHI DANCE、Cécile Corbel.png`
    },
    {
      name: 'Nevada',
      artist: 'Vicetone',
      url: `${BASE_URL}/Nevada - Vicetone、Cozi Zuehlsdorff.mp3`,
      cover: `${BASE_URL}/cover/Nevada - Vicetone、Cozi Zuehlsdorff.png`
    },
    {
      name: 'I Don\'t Want to Play Around',
      artist: 'Ace Spectrum',
      url: `${BASE_URL}/I Don%27t Want to Play Around - Ace Spectrum.mp3`,
      cover: `${BASE_URL}/cover/I Don%27t Want to Play Around - Ace Spectrum.png`
    },
    {
      name: 'Nu ',
      artist: 'Giulia、DJ Project',
      url: `${BASE_URL}/Nu - Giulia、DJ Project.mp3`,
      cover: `${BASE_URL}/cover/Nu - Giulia、DJ Project.png`
    },
    {
      name: 'Trap Queen',
      artist: 'MKJ、Eightfold',
      url: `${BASE_URL}/Trap Queen - MKJ、Eightfold.mp3`,
      cover: `${BASE_URL}/cover/Trap Queen - MKJ、Eightfold.png`
    },
    {
      name: 'Diamonds',
      artist: 'Rihanna',
      url: `${BASE_URL}/Diamonds - Rihanna.mp3`,
      cover: `${BASE_URL}/cover/Diamonds - Rihanna.png`
    },
    {
      name: 'Merry Christmas Mr. Lawrence',
      artist: '坂本龍一、Jaques Morelenbaum、Judy Kang',
      url: `${BASE_URL}/Merry Christmas Mr. Lawrence - 坂本龍一、Jaques Morelenbaum、Judy Kang.mp3`,
      cover: `${BASE_URL}/cover/Merry Christmas Mr. Lawrence - 坂本龍一、Jaques Morelenbaum、Judy Kang.png`
    },
    {
      name: 'WHERE IS MY HUSBAND!',
      artist: 'RAYE',
      url: `${BASE_URL}/WHERE IS MY HUSBAND! - RAYE.mp3`,
      cover: `${BASE_URL}/cover/WHERE IS MY HUSBAND! - RAYE.png`
    },
    {
      name: 'Where Is Your Love',
      artist: 'J Lisk',
      url: `${BASE_URL}/Where Is Your Love - J Lisk.mp3`,
      cover: `${BASE_URL}/cover/Where Is Your Love - J Lisk.png`
    },
    {
      name: 'Hello',
      artist: 'Adele',
      url: `${BASE_URL}/Hello - Adele.mp3`,
      cover: `${BASE_URL}/cover/Hello - Adele.png`
    },
    {
      name: 'Wasted',
      artist: 'Murkish、huken、harmony haven',
      url: `${BASE_URL}/Wasted - Murkish、huken、harmony haven.mp3`,
      cover: `${BASE_URL}/cover/Wasted - Murkish、huken、harmony haven.png`
    }
  ]
});
