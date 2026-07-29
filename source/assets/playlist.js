const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    listFolded: true,
    lrcType: 3,
    audio: [
        {
            name: 'Friendship',
            artist: 'Pascal Letoublon、Leony',
			url: 'https://images.oxue.de/file/music/UvogyRVN.mp3',
            cover: 'https://images.oxue.de/file/music/cover/k5G4XH3r.png',
            lrc: 'https://images.oxue.de/file/music/lyric/GjL5Nstf.lrc'
        },
        {
            name: 'Una Mattina',
            artist: 'Alexandre Pachabezian',
            url: 'https://images.oxue.de/file/music/jvaDoEuc.mp3',
            cover: 'https://images.oxue.de/file/music/cover/IsHOeEcS.png',
            lrc: 'https://images.oxue.de/file/music/lyric/lw6mpzRt.lrc'
        },
        {
            name: 'Holiday Crasher',
            artist: 'Future Mind',
            url: 'https://images.oxue.de/file/music/kHSkEb9a.mp3',
            cover: 'https://images.oxue.de/file/music/cover/VMV3HINr.png',
            lrc: 'https://images.oxue.de/file/music/lyric/SiuLaxsQ.lrc'
        },
        {
            name: 'Shootout',
            artist: 'Izzamuzzic、Julien Marchal',
            url: 'https://images.oxue.de/file/music/a89svwDW.mp3',
            cover: 'https://images.oxue.de/file/music/cover/jLip40Fl.png',
            lrc: 'https://images.oxue.de/file/music/lyric/w3kAAfFW.lrc'
        },
        {
            name: 'Take Me Hand',
            artist: 'DAISHI DANCE、Cécile Corbel',
            url: 'https://images.oxue.de/file/music/hcnq0b3D.mp3',
            cover: 'https://images.oxue.de/file/music/cover/6ipTuzO1.png',
            lrc: 'https://images.oxue.de/file/music/lyric/xbwe6C1v.lrc'
        },
        {
            name: 'Nevada',
            artist: 'Vicetone',
            url: 'https://images.oxue.de/file/music/Insdy0J8.mp3',
            cover: 'https://images.oxue.de/file/music/cover/FApeMUIg.png',
            lrc: 'https://images.oxue.de/file/music/lyric/E1SbHFp0.lrc'
        }
    ]
});
