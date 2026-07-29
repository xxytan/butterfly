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
        }
    ]
});
