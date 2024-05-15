let md = {

    musicdatabase: [
        {genre: "English", singer: "James Arthur", dateOfRelease: "06-08-2023", duration: "4:05", title: "Car's Outside", description: "Bitter Sweet"},
        {genre: "Mandopop", singer: "Wu Da Wen", dateOfRelease: "03-08-2022", duration: "3:34", title: "The Quiet Scarecrow", description: "One day"},
        {genre: "Mandopop", singer: "Zhang Qi Shan", dateOfRelease: "08/01/2024", duration: "3:58", title: "Is this the adulthood you grew up expecting?"}
    ],

    playlists: {},


    addMusic(genre, singer, dateOfRelease, duration, title, description = null) {
        // Check if the song already exists in the musicdatabase
        for (let i = 0; i < this.musicdatabase.length; i++) {
            if (this.musicdatabase[i].title === title) {
                console.log("song has already been added");  // check if song has already been added in musicdatabase
                return;
            }
        }
        
        // otherwise, add song to the musicdatabase
        this.musicdatabase.push({
            genre: genre,
            singer: singer,
            dateOfRelease: dateOfRelease,
            duration: duration,
            title: title,
            description: description
        });
    },

    getMusic(index) {
        return this.musicdatabase[index]; // returns music at index
    },

    getAllMusic() {
        return this.musicdatabase; // returns all music in musicdatabase
    },

    getNumberOfMusics() {
        return this.musicdatabase.length; // returns the number of music in musicdatabase
    },

    addNewPlaylist(name) {                      // adds a new playlist
        if (this.playlists[name]) {
            return "Playlist already exists";    // check if playlist exist
        }
        this.playlists[name] = [];
        return "Playlist created: " + name;
    },

    addMusicToPlaylist(playlistName, title) { // adds a music to a playlist
        if (!this.playlists[playlistName]) {
            return "Playlist does not exist";  // check if playlist exist to be able to add music
        }
    
        const song = this.musicdatabase.find(m => m.title === title);
        if (!song) {
            return "Song not found in music database";       // check if song title exists in musicdatabase
        }
    
        if (this.playlists[playlistName].some(item => item.title === title)) {
            return `Song '${title}' already exists in playlist '${playlistName}'`;   // check if song already exists in playlist
        }
    
        this.playlists[playlistName].push(song);
        return `Song '${title}' added to playlist '${playlistName}'`;   // successfully add song to playlist
    },


    updateDescriptionByTitle(t, d) {                        
        for (let i = 0; i < this.musicdatabase.length; i++) {
            if (this.musicdatabase[i].title === t) {
                this.musicdatabase[i].description = d; // description will now be updated to d
                return "The updated music description for song: " + t + ", is " + d;
            }
        }
        return "Music not found.";      // if music title is not found, will return this message
    }, 

    deleteSong(index) {
        return this.musicdatabase.splice(index, 1); // remove one element at the specified index
    },

    searchSong2(search) {    // search for songs in musicdatabase
        const searchResults = [];
        for (let i = 0; i < this.musicdatabase.length; i++) {  // iterates through the musicdatabase to check if the searchresults equates to either the title or singer
            if (this.musicdatabase[i].title.toLowerCase().includes(search.toLowerCase()) || this.musicdatabase[i].singer.toLowerCase().includes(search.toLowerCase())) {
                searchResults.push(this.musicdatabase[i]);
            }
        }
        return searchResults;
    },
}

module.exports = md;
