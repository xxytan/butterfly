const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    preload: 'metadata',
    listFolded: true,
    lrcType: 3,
    audio: [
        {
            name: 'Friendship',
            artist: 'Pascal Letoublon、Leony',
			url: 'https://bucket.oxue.de/music/Friendships - Pascal Letoublon、Leony.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Friendships - Pascal Letoublon、Leony.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Friendships - Pascal Letoublon、Leony.lrc'
        },
        {
            name: 'Una Mattina',
            artist: 'Alexandre Pachabezian',
            url: 'https://bucket.oxue.de/music/Una Mattina - Alexandre Pachabezian.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Una Mattina - Alexandre Pachabezian.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Una Mattina - Alexandre Pachabezian.lrc'
        },
        {
            name: 'Holiday Crasher',
            artist: 'Future Mind',
            url: 'https://bucket.oxue.de/music/Holiday Crasher - Future Mind.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Holiday Crasher - Future Mind.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Holiday Crasher - Future Mind.lrc'
        },
        {
            name: 'Shootout',
            artist: 'Izzamuzzic、Julien Marchal',
            url: 'https://bucket.oxue.de/music/Shootout - Izzamuzzic、Julien Marchal.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Shootout - Izzamuzzic、Julien Marchal.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Shootout - Izzamuzzic、Julien Marchal.lrc'
        },
        {
            name: 'Take Me Hand',
            artist: 'DAISHI DANCE、Cécile Corbel',
            url: 'https://bucket.oxue.de/music/Take me hand - DAISHI DANCE、Cécile Corbel.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Take me hand - DAISHI DANCE、Cécile Corbel.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Take me hand - DAISHI DANCE、Cécile Corbel.lrc'
        },
        {
            name: 'Nevada',
            artist: 'Vicetone',
            url: 'https://bucket.oxue.de/music/Nevada - Vicetone、Cozi Zuehlsdorff.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Nevada - Vicetone、Cozi Zuehlsdorff.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Nevada - Vicetone、Cozi Zuehlsdorff.lrc'
        },
        {
            name: 'I Don\'t Want to Play Around',
            artist: 'Ace Spectrum',
            url: 'https://bucket.oxue.de/music/I Don\'t Want to Play Around - Ace Spectrum.mp3',
            cover: 'https://bucket.oxue.de/music/cover/I Don\'t Want to Play Around - Ace Spectrum.png',
            lrc: 'https://bucket.oxue.de/music/lyric/I Don\'t Want to Play Around - Ace Spectrum.lrc'
        },
        {
            name: 'Nu ',
            artist: 'Giulia、DJ Project',
            url: 'https://bucket.oxue.de/music/Nu - Giulia、DJ Project.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Nu - Giulia、DJ Project.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Nu - Giulia、DJ Project.lrc'
        },
        {
            name: 'Trap Queen',
            artist: 'MKJ、Eightfold',
            url: 'https://bucket.oxue.de/music/Trap Queen - MKJ、Eightfold.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Trap Queen - MKJ、Eightfold.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Trap Queen - MKJ、Eightfold.lrc'
        },
        {
            name: 'Diamonds',
            artist: 'Rihanna',
            url: 'https://bucket.oxue.de/music/Diamonds - Rihanna.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Diamonds - Rihanna.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Diamonds - Rihanna.lrc'
        },
        {
            name: 'Merry Christmas Mr. Lawrence',
            artist: '坂本龍一、Jaques Morelenbaum、Judy Kang',
            url: 'https://bucket.oxue.de/music/Merry Christmas Mr. Lawrence - 坂本龍一、Jaques Morelenbaum、Judy Kang.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Merry Christmas Mr. Lawrence - 坂本龍一、Jaques Morelenbaum、Judy Kang.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Merry Christmas Mr. Lawrence - 坂本龍一、Jaques Morelenbaum、Judy Kang.lrc'
        },
        {
            name: 'WHERE IS MY HUSBAND!',
            artist: 'RAYE',
            url: 'https://bucket.oxue.de/music/WHERE IS MY HUSBAND! - RAYE.mp3',
            cover: 'https://bucket.oxue.de/music/cover/WHERE IS MY HUSBAND! - RAYE.png',
            lrc: 'https://bucket.oxue.de/music/lyric/WHERE IS MY HUSBAND! - RAYE.lrc'
        },
        {
            name: 'Where Is Your Love',
            artist: 'J Lisk',
            url: 'https://bucket.oxue.de/music/Where Is Your Love - J Lisk.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Where Is Your Love - J Lisk.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Where Is Your Love - J Lisk.lrc'
        },
        {
            name: 'Hello',
            artist: 'Adele',
            url: 'https://bucket.oxue.de/music/Hello - Adele.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Hello - Adele.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Hello - Adele.lrc'
        }
    ]
});
