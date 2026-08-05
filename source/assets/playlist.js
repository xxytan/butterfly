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
      name: 'Nu',
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
    },
    {
      name: 'Childhood Memory',
      artist: 'Bandari',
      url: `${BASE_URL}/Childhood Memory - Bandari.mp3`,
      cover: `${BASE_URL}/cover/Childhood Memory - Bandari.png`
    },
    {
      name: 'Close Eyes',
      artist: 'DVRST、Valerii Zaitsev',
      url: `${BASE_URL}/Close Eyes - DVRST、Valerii Zaitsev.mp3`,
      cover: `${BASE_URL}/cover/Close Eyes - DVRST、Valerii Zaitsev.png`
    },
    {
      name: 'I Want You To Know',
      artist: 'Pegato、Hella',
      url: `${BASE_URL}/I Want You To Know - Pegato、Hella.mp3`,
      cover: `${BASE_URL}/cover/I Want You To Know - Pegato、Hella.png`
    },
    {
      name: 'Tuesday',
      artist: 'Burak Yeter、Danelle Sandoval',
      url: `${BASE_URL}/Tuesday - Burak Yeter、Danelle Sandoval.mp3`,
      cover: `${BASE_URL}/cover/Tuesday - Burak Yeter、Danelle Sandoval.png`
    },
    {
      name: 'Umbrella',
      artist: 'Rihanna、Jay-Z',
      url: `${BASE_URL}/Umbrella - Rihanna、Jay-Z.mp3`,
      cover: `${BASE_URL}/cover/Umbrella - Rihanna、Jay-Z.png`
    },
    {
      name: 'We Don\'t Talk Anymore',
      artist: 'Charlie Puth、Selena Gomez',
      url: `${BASE_URL}/We Don%27t Talk Anymore - Charlie Puth、Selena Gomez.mp3`,
      cover: `${BASE_URL}/cover/We Don%27t Talk Anymore - Charlie Puth、Selena Gomez.png`
    },
        {
      name: 'Upside Down',
      artist: 'JVKE、Charlie Puth',
      url: `${BASE_URL}/Upside Down - JVKE、Charlie Puth.mp3`,
      cover: `${BASE_URL}/cover/Upside Down - JVKE、Charlie Puth.png`
    },
    {
      name: 'magnolia',
      artist: 'keshi',
      url: `${BASE_URL}/magnolia - keshi.mp3`,
      cover: `${BASE_URL}/cover/magnolia - keshi.png`
    },
    {
      name: 'Leni',
      artist: 'Goodbooks',
      url: `${BASE_URL}/Leni - Goodbooks.mp3`,
      cover: `${BASE_URL}/cover/Leni - Goodbooks.png`
    },
    {
      name: 'Coffee',
      artist: 'beabadoobee',
      url: `${BASE_URL}/Coffee - beabadoobee.mp3`,
      cover: `${BASE_URL}/cover/Coffee - beabadoobee.png`
    },
    {
      name: 'From The Start',
      artist: 'Laufey、Spencer Stewart',
      url: `${BASE_URL}/From The Start - Laufey、Spencer Stewart.mp3`,
      cover: `${BASE_URL}/cover/From The Start - Laufey、Spencer Stewart.png`
    },
    {
      name: 'New Soul',
      artist: 'Yael Naïm',
      url: `${BASE_URL}/New Soul - Yael Naïm.mp3`,
      cover: `${BASE_URL}/cover/New Soul - Yael Naïm.png`
    },
    {
      name: 'The Perfect Girl',
      artist: 'Mareux',
      url: `${BASE_URL}/The Perfect Girl - Mareux.mp3`,
      cover: `${BASE_URL}/cover/The Perfect Girl - Mareux.png`
    },
    {
      name: 'My Soul',
      artist: 'July',
      url: `${BASE_URL}/My Soul - July.mp3`,
      cover: `${BASE_URL}/cover/My Soul - July.png`
    },
    {
      name: 'Alive',
      artist: 'Blue',
      url: `${BASE_URL}/Alive - Blue.mp3`,
      cover: `${BASE_URL}/cover/Alive - Blue.png`
    },
    {
      name: 'NO',
      artist: 'Meghan Trainor',
      url: `${BASE_URL}/NO - Meghan Trainor.mp3`,
      cover: `${BASE_URL}/cover/NO - Meghan Trainor.png`
    },
    {
      name: 'Peaches',
      artist: 'Justin Bieber、Daniel Caesar、GIVĒON',
      url: `${BASE_URL}/Peaches - Justin Bieber、Daniel Caesar、GIVĒON.mp3`,
      cover: `${BASE_URL}/cover/Peaches - Justin Bieber、Daniel Caesar、GIVĒON.png`
    },
    {
      name: 'Boyfriend',
      artist: 'Justin Bieber',
      url: `${BASE_URL}/Boyfriend - Justin Bieber.mp3`,
      cover: `${BASE_URL}/cover/Boyfriend - Justin Bieber.png`
    },
    {
      name: 'Outside',
      artist: 'Calvin Harris、Ellie Goulding',
      url: `${BASE_URL}/Outside - Calvin Harris、Ellie Goulding.mp3`,
      cover: `${BASE_URL}/cover/Outside - Calvin Harris、Ellie Goulding.png`
    },
    {
      name: 'Dancing With Your Ghost',
      artist: 'Sasha Alex Sloan',
      url: `${BASE_URL}/Dancing With Your Ghost - Sasha Alex Sloan.mp3`,
      cover: `${BASE_URL}/cover/Dancing With Your Ghost - Sasha Alex Sloan.png`
    },
    {
      name: 'Fire',
      artist: 'Gavin DeGraw',
      url: `${BASE_URL}/Fire - Gavin DeGraw.mp3`,
      cover: `${BASE_URL}/cover/Fire - Gavin DeGraw.png`
    },
    {
      name: 'Tell Me',
      artist: 'Wonder Girls',
      url: `${BASE_URL}/Tell Me - Wonder Girls.mp3`,
      cover: `${BASE_URL}/cover/Tell Me - Wonder Girls.png`
    },
    {
      name: 'Beloved cat',
      artist: 'EAGLE MOONTAINER',
      url: `${BASE_URL}/Beloved cat - EAGLE MOONTAINER.mp3`,
      cover: `${BASE_URL}/cover/Beloved cat - EAGLE MOONTAINER.png`
    },
    {
      name: 'You Don\'t Know Me',
      artist: 'Jax Jones、RAYE',
      url: `${BASE_URL}/You Don't Know Me - Jax Jones、RAYE.mp3`,
      cover: `${BASE_URL}/cover/You Don't Know Me - Jax Jones、RAYE.png`
    },
    {
      name: 'Neon Rainbow',
      artist: 'Rameses B、Anna Yvette',
      url: `${BASE_URL}/Neon Rainbow - Rameses B、Anna Yvette.mp3`,
      cover: `${BASE_URL}/cover/Neon Rainbow - Rameses B、Anna Yvette.png`
    },
    {
      name: 'Ylang Ylang',
      artist: 'FKJ、((( O )))',
      url: `${BASE_URL}/Ylang Ylang - FKJ、((( O ))).mp3`,
      cover: `${BASE_URL}/cover/Ylang Ylang - FKJ、((( O ))).png`
    },
    {
      name: 'Touch',
      artist: '3LAU、Carly Paige、Marc Schneider、Savannah Giersch、Joe Mason、Richard Walters',
      url: `${BASE_URL}/Touch - 3LAU、Carly Paige、Marc Schneider、Savannah Giersch、Joe Mason、Richard Walters.mp3`,
      cover: `${BASE_URL}/cover/Touch - 3LAU、Carly Paige、Marc Schneider、Savannah Giersch、Joe Mason、Richard Walters.png`
    },
    {
      name: 'Summertime Sadness',
      artist: 'Lana Del Rey',
      url: `${BASE_URL}/Summertime Sadness - Lana Del Rey.mp3`,
      cover: `${BASE_URL}/cover/Summertime Sadness - Lana Del Rey.png`
    },
    {
      name: 'Counting Stars',
      artist: 'OneRepublic',
      url: `${BASE_URL}/Counting Stars - OneRepublic.mp3`,
      cover: `${BASE_URL}/cover/Counting Stars - OneRepublic.png`
    },
    {
      name: 'Superstar',
      artist: 'Jamelia',
      url: `${BASE_URL}/Superstar - Jamelia.mp3`,
      cover: `${BASE_URL}/cover/Superstar - Jamelia.png`
    },
    {
      name: 'Superstar',
      artist: 'Beatrich',
      url: `${BASE_URL}/Superstar - Beatrich.mp3`,
      cover: `${BASE_URL}/cover/Superstar - Beatrich.png`
    },
    {
      name: 'Free Loop',
      artist: 'Daniel Powter',
      url: `${BASE_URL}/Free Loop - Daniel Powter.mp3`,
      cover: `${BASE_URL}/cover/Free Loop - Daniel Powter.png`
    },
    {
      name: 'Ride It',
      artist: 'Jay Sean',
      url: `${BASE_URL}/Ride It - Jay Sean.mp3`,
      cover: `${BASE_URL}/cover/Ride It - Jay Sean.png`
    },
    {
      name: 'Glue',
      artist: 'Rialians on Earth、Cafe De Anatolia、Aodion',
      url: `${BASE_URL}/Glue - Rialians on Earth、Cafe De Anatolia、Aodion.mp3`,
      cover: `${BASE_URL}/cover/Glue - Rialians on Earth、Cafe De Anatolia、Aodion.png`
    },
    {
      name: 'Love Me Like You Do',
      artist: 'Ellie Goulding',
      url: `${BASE_URL}/Love Me Like You Do - Ellie Goulding.mp3`,
      cover: `${BASE_URL}/cover/Love Me Like You Do - Ellie Goulding.png`
    },
    {
      name: 'Call Me Now',
      artist: 'Michael Calfan、INNA',
      url: `${BASE_URL}/Call Me Now - Michael Calfan、INNA.mp3`,
      cover: `${BASE_URL}/cover/Call Me Now - Michael Calfan、INNA.png`
    },
    {
      name: 'Fatal Love',
      artist: 'Jori King',
      url: `${BASE_URL}/Fatal Love - Jori King.mp3`,
      cover: `${BASE_URL}/cover/Fatal Love - Jori King.png`
    },
    {
      name: 'The Way I Still Love You',
      artist: 'Reynard Silva',
      url: `${BASE_URL}/The Way I Still Love You - Reynard Silva.mp3`,
      cover: `${BASE_URL}/cover/The Way I Still Love You - Reynard Silva.png`
    },
    {
      name: 'memory reboot',
      artist: '8d audio - surround.、(((())))',
      url: `${BASE_URL}/memory reboot - 8d audio - surround.、(((()))).mp3`,
      cover: `${BASE_URL}/cover/memory reboot - 8d audio - surround.、(((()))).png`
    },
    {
      name: 'Home',
      artist: 'ThimLife、Bibiane Z',
      url: `${BASE_URL}/Home - ThimLife、Bibiane Z.mp3`,
      cover: `${BASE_URL}/cover/Home - ThimLife、Bibiane Z.png`
    },
    {
      name: 'Drop That Skirt',
      artist: 'Croatia Squad',
      url: `${BASE_URL}/Drop That Skirt - Croatia Squad.mp3`,
      cover: `${BASE_URL}/cover/Drop That Skirt - Croatia Squad.png`
    },
    {
      name: 'Fluxxwave',
      artist: 'Anti、Clovis Reyes',
      url: `${BASE_URL}/Fluxxwave - Anti、Clovis Reyes.mp3`,
      cover: `${BASE_URL}/cover/Fluxxwave - Anti、Clovis Reyes.png`
    },
    {
      name: 'Dreamy Phonk Drift',
      artist: 'lofi\'chield',
      url: `${BASE_URL}/Dreamy Phonk Drift - lofi'chield.mp3`,
      cover: `${BASE_URL}/cover/Dreamy Phonk Drift - lofi'chield.png`
    },
    {
      name: 'SimpsonWave1995',
      artist: 'FrankJavCee',
      url: `${BASE_URL}/SimpsonWave1995 - FrankJavCee.mp3`,
      cover: `${BASE_URL}/cover/SimpsonWave1995 - FrankJavCee.png`
    },
    {
      name: 'Duvet',
      artist: 'bôa',
      url: `${BASE_URL}/Duvet - bôa.mp3`,
      cover: `${BASE_URL}/cover/Duvet - bôa.png`
    },
    {
      name: 'Don\'t Wanna Know',
      artist: 'Maroon 5、Kendrick Lamar',
      url: `${BASE_URL}/Don't Wanna Know - Maroon 5、Kendrick Lamar.mp3`,
      cover: `${BASE_URL}/cover/Don't Wanna Know - Maroon 5、Kendrick Lamar.png`
    },
    {
      name: 'Lone Ranger',
      artist: 'Rachel Platten',
      url: `${BASE_URL}/Lone Ranger - Rachel Platten.mp3`,
      cover: `${BASE_URL}/cover/Lone Ranger - Rachel Platten.png`
    },
    {
      name: 'One Kiss',
      artist: 'Calvin Harris、Dua Lipa',
      url: `${BASE_URL}/One Kiss - Calvin Harris、Dua Lipa.mp3`,
      cover: `${BASE_URL}/cover/One Kiss - Calvin Harris、Dua Lipa.png`
    },
    {
      name: 'Episode 33',
      artist: 'She Her Her Hers',
      url: `${BASE_URL}/Episode 33 - She Her Her Hers.mp3`,
      cover: `${BASE_URL}/cover/Episode 33 - She Her Her Hers.png`
    },
    {
      name: 'East of Eden',
      artist: 'Zella Day',
      url: `${BASE_URL}/East of Eden - Zella Day.mp3`,
      cover: `${BASE_URL}/cover/East of Eden - Zella Day.png`
    },
    {
      name: 'Empty Love',
      artist: 'Lulleaux、Kid Princess',
      url: `${BASE_URL}/Empty Love - Lulleaux、Kid Princess.mp3`,
      cover: `${BASE_URL}/cover/Empty Love - Lulleaux、Kid Princess.png`
    },
    {
      name: 'Scheming Weasel',
      artist: 'Kevin MacLeod',
      url: `${BASE_URL}/Scheming Weasel - Kevin MacLeod.mp3`,
      cover: `${BASE_URL}/cover/Scheming Weasel - Kevin MacLeod.png`
    },
    {
      name: 'See It Again',
      artist: 'Loud Luxury',
      url: `${BASE_URL}/See It Again - Loud Luxury.mp3`,
      cover: `${BASE_URL}/cover/See It Again - Loud Luxury.png`
    },
    {
      name: 'Time to Pretend',
      artist: 'Lazer Boomerang',
      url: `${BASE_URL}/Time to Pretend - Lazer Boomerang.mp3`,
      cover: `${BASE_URL}/cover/Time to Pretend - Lazer Boomerang.png`
    },
    {
      name: 'In The End',
      artist: 'Tommee Profitt、Fleurie、Jung Youth',
      url: `${BASE_URL}/In The End - Tommee Profitt、Fleurie、Jung Youth.mp3`,
      cover: `${BASE_URL}/cover/In The End - Tommee Profitt、Fleurie、Jung Youth.png`
    },
    {
      name: 'Золото',
      artist: 'Kartashow、Mari Kraymbrery',
      url: `${BASE_URL}/Золото - Kartashow、Mari Kraymbrery.mp3`,
      cover: `${BASE_URL}/cover/Золото - Kartashow、Mari Kraymbrery.png`
    },
    {
      name: 'Creep',
      artist: 'GAMPER & DADONI',
      url: `${BASE_URL}/Creep - GAMPER %26 DADONI.mp3`,
      cover: `${BASE_URL}/cover/Creep - GAMPER %26 DADONI.png`
    },
    {
      name: 'Prisionera',
      artist: 'Otilia',
      url: `${BASE_URL}/Prisionera - Otilia.mp3`,
      cover: `${BASE_URL}/cover/Prisionera - Otilia.png`
    },
    {
      name: 'Once Upon a Time',
      artist: 'Max Oazo、Moonessa',
      url: `${BASE_URL}/Once Upon a Time - Max Oazo、Moonessa.mp3`,
      cover: `${BASE_URL}/cover/Once Upon a Time - Max Oazo、Moonessa.png`
    },
    {
      name: 'Early Morning Dreams',
      artist: 'Kadebostany',
      url: `${BASE_URL}/Early Morning Dreams - Kadebostany.mp3`,
      cover: `${BASE_URL}/cover/Early Morning Dreams - Kadebostany.png`
    },
    {
      name: 'Sacred Play Secret Place',
      artist: 'Matryoshka',
      url: `${BASE_URL}/Sacred Play Secret Place - Matryoshka.mp3`,
      cover: `${BASE_URL}/cover/Sacred Play Secret Place - Matryoshka.png`
    },
    {
      name: 'Crystals',
      artist: 'Isolate.exe、Andrej Simon',
      url: `${BASE_URL}/Crystals - Isolate.exe、Andrej Simon.mp3`,
      cover: `${BASE_URL}/cover/Crystals - Isolate.exe、Andrej Simon.png`
    },
    {
      name: 'Closer',
      artist: 'The Chainsmokers、Halsey',
      url: `${BASE_URL}/Closer - The Chainsmokers、Halsey.mp3`,
      cover: `${BASE_URL}/cover/Closer - The Chainsmokers、Halsey.png`
    },
    {
      name: 'Can We Kiss Forever',
      artist: 'Kina、Adriana Proenza',
      url: `${BASE_URL}/Can We Kiss Forever - Kina、Adriana Proenza.mp3`,
      cover: `${BASE_URL}/cover/Can We Kiss Forever - Kina、Adriana Proenza.png`
    },
    {
      name: 'PLAY',
      artist: 'Ricii Lompeurs、Ticia',
      url: `${BASE_URL}/PLAY - Ricii Lompeurs、Ticia.mp3`,
      cover: `${BASE_URL}/cover/PLAY - Ricii Lompeurs、Ticia.png`
    },
    {
      name: 'Normal No More',
      artist: 'TYSM',
      url: `${BASE_URL}/Normal No More - TYSM.mp3`,
      cover: `${BASE_URL}/cover/Normal No More - TYSM.png`
    },
    {
      name: 'Are You Lost',
      artist: 'Park Bird',
      url: `${BASE_URL}/Are You Lost - Park Bird.mp3`,
      cover: `${BASE_URL}/cover/Are You Lost - Park Bird.png`
    },
    {
      name: 'New Rules',
      artist: 'Dua Lipa',
      url: `${BASE_URL}/New Rules - Dua Lipa.mp3`,
      cover: `${BASE_URL}/cover/New Rules - Dua Lipa.png`
    },
    {
      name: 'August',
      artist: 'Intelligency',
      url: `${BASE_URL}/August - Intelligency.mp3`,
      cover: `${BASE_URL}/cover/August - Intelligency.png`
    },
    {
      name: 'YMCA',
      artist: 'Village People',
      url: `${BASE_URL}/YMCA - Village People.mp3`,
      cover: `${BASE_URL}/cover/YMCA - Village People.png`
    },
    {
      name: 'Mine',
      artist: 'ILLENIUM、Phoebe Ryan',
      url: `${BASE_URL}/Mine - ILLENIUM、Phoebe Ryan.mp3`,
      cover: `${BASE_URL}/cover/Mine - ILLENIUM、Phoebe Ryan.png`
    },
    {
      name: '半点心',
      artist: '草蜢',
      url: `${BASE_URL}/半点心 - 草蜢.mp3`,
      cover: `${BASE_URL}/cover/半点心- 草蜢.png`
    },
    {
      name: 'Sugar',
      artist: 'Maroon 5',
      url: `${BASE_URL}/Sugar - Maroon 5.mp3`,
      cover: `${BASE_URL}/cover/Sugar - Maroon 5.png`
    },
    {
      name: 'Maps',
      artist: 'Maroon 5',
      url: `${BASE_URL}/Maps - Maroon 5.mp3`,
      cover: `${BASE_URL}/cover/Maps - Maroon 5.png`
    },
    {
      name: '3 Strikes',
      artist: 'Terror Jr',
      url: `${BASE_URL}/3 Strikes - Terror Jr.mp3`,
      cover: `${BASE_URL}/cover/3 Strikes - Terror Jr.png`
    },
    {
      name: 'Lordly',
      artist: 'Alex Aiono、Feder、MDZN',
      url: `${BASE_URL}/Lordly - Alex Aiono、Feder、MDZN.mp3`,
      cover: `${BASE_URL}/cover/Lordly - Alex Aiono、Feder、MDZN.png`
    },
    {
      name: 'Lotta Lovin\'',
      artist: 'Barbara Evans、Fabio Mek',
      url: `${BASE_URL}/Lotta Lovin' - Barbara Evans、Fabio Mek.mp3`,
      cover: `${BASE_URL}/cover/Lotta Lovin' - Barbara Evans、Fabio Mek.png`
    },
    {
      name: 'You',
      artist: 'Approaching Nirvana',
      url: `${BASE_URL}/You - Approaching Nirvana.mp3`,
      cover: `${BASE_URL}/cover/You - Approaching Nirvana.png`
    },
    {
      name: 'Lost Memory',
      artist: 'VØJ、Narvent',
      url: `${BASE_URL}/Lost Memory - V%C3%98J、Narvent.mp3`,
      cover: `${BASE_URL}/cover/Lost Memory - V%C3%98J、Narvent.png`
    },
    {
      name: 'The truth that you leave',
      artist: 'Pianoboy高至豪',
      url: `${BASE_URL}/The truth that you leave - Pianoboy高至豪.mp3`,
      cover: `${BASE_URL}/cover/The truth that you leave - Pianoboy高至豪.png`
    },
    {
      name: 'Call Me Maybe',
      artist: 'Carly Rae Jepsen',
      url: `${BASE_URL}/Call Me Maybe - Carly Rae Jepsen.mp3`,
      cover: `${BASE_URL}/cover/Call Me Maybe - Carly Rae Jepsen.png`
    },
    {
      name: 'Yeminler Ediyorum',
      artist: 'Rido、Faxo',
      url: `${BASE_URL}/Yeminler Ediyorum - Rido、Faxo.mp3`,
      cover: `${BASE_URL}/cover/Yeminler Ediyorum - Rido、Faxo.png`
    },
    {
      name: 'breathin',
      artist: 'Ariana Grande',
      url: `${BASE_URL}/breathin - Ariana Grande.mp3`,
      cover: `${BASE_URL}/cover/breathin - Ariana Grande.png`
    },
    {
      name: 'Why Would I Ever',
      artist: 'Paula DeAnda',
      url: `${BASE_URL}/Why Would I Ever - Paula DeAnda.mp3`,
      cover: `${BASE_URL}/cover/Why Would I Ever - Paula DeAnda.png`
    },
    {
      name: 'Landslide',
      artist: 'Oh Wonder',
      url: `${BASE_URL}/Landslide - Oh Wonder.mp3`,
      cover: `${BASE_URL}/cover/Landslide - Oh Wonder.png`
    },
    {
      name: 'Wolves',
      artist: 'Selena Gomez、Marshmello',
      url: `${BASE_URL}/Wolves - Selena Gomez、Marshmello.mp3`,
      cover: `${BASE_URL}/cover/Wolves - Selena Gomez、Marshmello.png`
    },
    {
      name: 'Just Dance',
      artist: 'Lady Gaga、Colby O\'Donis',
      url: `${BASE_URL}/Just Dance - Lady Gaga、Colby O'Donis.mp3`,
      cover: `${BASE_URL}/cover/Just Dance - Lady Gaga、Colby O'Donis.png`
    },
    {
      name: 'Wait a Minute!',
      artist: 'WILLOW',
      url: `${BASE_URL}/Wait a Minute! - WILLOW.mp3`,
      cover: `${BASE_URL}/cover/Wait a Minute! - WILLOW.png`
    },
    {
      name: 'Here',
      artist: 'Alessia Cara、Lucian',
      url: `${BASE_URL}/Here - Alessia Cara、Lucian.mp3`,
      cover: `${BASE_URL}/cover/Here - Alessia Cara、Lucian.png`
    },
    {
      name: 'Toxic',
      artist: 'Britney Spears',
      url: `${BASE_URL}/Toxic - Britney Spears.mp3`,
      cover: `${BASE_URL}/cover/Toxic - Britney Spears.png`
    }
  ]
});
