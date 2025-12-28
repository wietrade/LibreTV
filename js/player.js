const p2pEngine = new window.P2PMediaLoader.HlsJsP2PEngine({
    trackerAnnounce: [
        'wss://tracker.novage.com.ua',
        'wss://tracker.webtorrent.dev',
        'wss://tracker.openwebtorrent.com'
    ]
});