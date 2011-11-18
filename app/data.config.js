App.Data.config = [
    {
        name: 'tracks',
        drop: false,
        fields: {
            id: 'INTEGER',
            name: 'TEXT',
            platform: 'TEXT',
            year: 'INTEGER',
            cover: 'TEXT',
            music: 'TEXT',
            level: 'INTEGER DEFAULT 1'
        }
    },
    {
        name: 'settings',
        drop: false,
        fields: {
            player: 'TEXT',
            name: 'TEXT'
        }
    }
];