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
			url: 'https://h1048.lanosso.com/4ea475d99b047a8ede76b4d2cd68269f/6a6c94e7/2026/07/31/a4973096f4b3003ced2838b0d3198934.apk?fn=1.mp3', // 'https://bucket.oxue.de/music/Friendships - Pascal Letoublon、Leony.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Friendships - Pascal Letoublon、Leony.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Friendships - Pascal Letoublon、Leony.lrc'
        },
        {
            name: 'Una Mattina',
            artist: 'Alexandre Pachabezian',
            url: 'https://h1049.lanosso.com/b64073baeca395599b41a6796aea7e16/6a6c95b4/2026/07/31/1d8ab9880cdfc44f1ec376251459fa65.apk?fn=2.mp3', // 'https://bucket.oxue.de/music/Una Mattina - Alexandre Pachabezian.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Una Mattina - Alexandre Pachabezian.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Una Mattina - Alexandre Pachabezian.lrc'
        },
        {
            name: 'Holiday Crasher',
            artist: 'Future Mind',
            url: 'https://h1048.lanosso.com/c9ea9ec8beef7a15df32409eee1ea2bf/6a6c95fd/2026/07/31/f06ffd4ec69677d43654ddf915009ba6.apk?fn=3.mp3', // 'https://bucket.oxue.de/music/Holiday Crasher - Future Mind.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Holiday Crasher - Future Mind.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Holiday Crasher - Future Mind.lrc'
        },
        {
            name: 'Shootout',
            artist: 'Izzamuzzic、Julien Marchal',
            url: 'https://h1043.lanosso.com/27d0a984a7b345735dce32e4aaa4cc90/6a6c9630/2026/07/31/d6e411611e16bbef6c88d050be42cfc5.apk?fn=4.mp3', // 'https://bucket.oxue.de/music/Shootout - Izzamuzzic、Julien Marchal.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Shootout - Izzamuzzic、Julien Marchal.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Shootout - Izzamuzzic、Julien Marchal.lrc'
        },
        {
            name: 'Take Me Hand',
            artist: 'DAISHI DANCE、Cécile Corbel',
            url: 'https://h1048.lanosso.com/1cbee570670df18ce0e9d558db8e717d/6a6c9662/2026/07/31/71a58ab316cfe4e24fd7e130fab41edb.apk?fn=5.mp3', // 'https://bucket.oxue.de/music/Take me hand - DAISHI DANCE、Cécile Corbel.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Take me hand - DAISHI DANCE、Cécile Corbel.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Take me hand - DAISHI DANCE、Cécile Corbel.lrc'
        },
        {
            name: 'Nevada',
            artist: 'Vicetone',
            url: 'https://h1048.lanosso.com/1c930d3b5a1ef72429c55c23bb3052aa/6a6c969b/2026/07/31/e6300a5b306073d7b10b9a1704a90fbc.apk?fn=6.mp3', // 'https://bucket.oxue.de/music/Nevada - Vicetone、Cozi Zuehlsdorff.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Nevada - Vicetone、Cozi Zuehlsdorff.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Nevada - Vicetone、Cozi Zuehlsdorff.lrc'
        },
        {
            name: 'I Don\'t Want to Play Around',
            artist: 'Ace Spectrum',
            url: 'https://h1048.lanosso.com/f117bef73aa90ef6b14d04a99c99cfe6/6a6c973b/2026/07/31/b4fc78c8bd500e0aeefb44d9ef362165.apk?fn=7.mp3', // 'https://bucket.oxue.de/music/I Don%27t Want to Play Around - Ace Spectrum.mp3',
            cover: 'https://bucket.oxue.de/music/cover/I Don%27t Want to Play Around - Ace Spectrum.png',
            lrc: 'https://bucket.oxue.de/music/lyric/I Don%27t Want to Play Around - Ace Spectrum.lrc'
        },
        {
            name: 'Nu ',
            artist: 'Giulia、DJ Project',
            url: 'https://h1048.lanosso.com/522d02565edb7a110006809332b7e981/6a6c978a/2026/07/31/d537cae3752e4b018c3272cb92a08e08.apk?fn=8.mp3', // 'https://bucket.oxue.de/music/Nu - Giulia、DJ Project.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Nu - Giulia、DJ Project.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Nu - Giulia、DJ Project.lrc'
        },
        {
            name: 'Trap Queen',
            artist: 'MKJ、Eightfold',
            url: 'https://h1048.lanosso.com/2afe005531d80fa6d93706f8ada9d1ed/6a6c97b9/2026/07/31/ea2ae2eddc73c2549d17195f4f42c71b.apk?fn=9.mp3', // 'https://bucket.oxue.de/music/Trap Queen - MKJ、Eightfold.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Trap Queen - MKJ、Eightfold.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Trap Queen - MKJ、Eightfold.lrc'
        },
        {
            name: 'Diamonds',
            artist: 'Rihanna',
            url: 'https://h1042.lanosso.com/9549da1803137de0c186b090c730a3a8/6a6c97e5/2026/07/31/97f8e2df758ce57670199b28b5c1e056.apk?fn=10.mp3', // 'https://h1044.lanosso.com/6f0cb5b8b2bbf30ef456b8965632dacc/6a6c907a/2026/07/31/30bc0a0f42550078f0e0e8c8cb8004c6.apk?fn=Diamonds.mp3' //'https://bucket.oxue.de/music/Diamonds - Rihanna.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Diamonds - Rihanna.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Diamonds - Rihanna.lrc'
        },
        {
            name: 'Merry Christmas Mr. Lawrence',
            artist: '坂本龍一、Jaques Morelenbaum、Judy Kang',
            url: 'https://h1042.lanosso.com/0b9df0124022208d39db96f017b87a83/6a6c9817/2026/07/31/363a526c3c5e651cceae1e19274dbf6d.apk?fn=11.mp3', // 'https://bucket.oxue.de/music/Merry Christmas Mr. Lawrence - 坂本龍一、Jaques Morelenbaum、Judy Kang.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Merry Christmas Mr. Lawrence - 坂本龍一、Jaques Morelenbaum、Judy Kang.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Merry Christmas Mr. Lawrence - 坂本龍一、Jaques Morelenbaum、Judy Kang.lrc'
        },
        {
            name: 'WHERE IS MY HUSBAND!',
            artist: 'RAYE',
            url: 'https://h1048.lanosso.com/9246618397759c096b03033d30246fc5/6a6c984b/2026/07/31/f9d59d90bcc04a5c851166c2f7a0c0e8.apk?fn=12.mp3', // 'https://bucket.oxue.de/music/WHERE IS MY HUSBAND! - RAYE.mp3',
            cover: 'https://bucket.oxue.de/music/cover/WHERE IS MY HUSBAND! - RAYE.png',
            lrc: 'https://bucket.oxue.de/music/lyric/WHERE IS MY HUSBAND! - RAYE.lrc'
        },
        {
            name: 'Where Is Your Love',
            artist: 'J Lisk',
            url: 'https://h1042.lanosso.com/ba166d6552aa347b3a70a16ed1366118/6a6c9885/2026/07/31/7e715555fa46e935f03fc629e52ac008.apk?fn=13.mp3', // 'https://bucket.oxue.de/music/Where Is Your Love - J Lisk.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Where Is Your Love - J Lisk.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Where Is Your Love - J Lisk.lrc'
        },
        {
            name: 'Hello',
            artist: 'Adele',
            url: 'https://h1049.lanosso.com/ca5dedb82bc68d4cb45e8c18a5da5e97/6a6c98ad/2026/07/31/f2eecb626022ffa56b94c7930a4eed5c.apk?fn=14.mp3', // 'https://bucket.oxue.de/music/Hello - Adele.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Hello - Adele.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Hello - Adele.lrc'
        },
        {
            name: 'Wasted',
            artist: 'Murkish、huken、harmony haven',
            url: 'https://h1040.lanosso.com/e386c6cc61ab60ac0ad847a9f8be5e11/6a6c98d7/2026/07/31/e505323d8edd5f636212b4bd05463d91.apk?fn=15.mp3', // 'https://bucket.oxue.de/music/Wasted - Murkish、huken、harmony haven.mp3',
            cover: 'https://bucket.oxue.de/music/cover/Wasted - Murkish、huken、harmony haven.png',
            lrc: 'https://bucket.oxue.de/music/lyric/Wasted - Murkish、huken、harmony haven.lrc'
        }
    ]
});
