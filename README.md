# Music Business Node Module
This music.js module provides functionalities to manage music data for businesses in the entertainment field.
The module allows a user to add, update, delete and search for music pieces within a database.

## Setting up the node module
1)  Clone repository to own directory
2)  Create a new file named "app.js" and insert the code below
    ```
    const music = require("./music.js");
    ```
3) To run the module, open a new terminal and enter the following command 
    ```
    node app.js
    ```


## How to use the Functions
`addMusic(genre, singer, dateOfRelease, duration, title, description = null)`: This function allows user to
adds a new music into the database. The *required parameters* are genre, ssinger, dateOfRelease, duration & title. 
The description can be **nullable**.

`getMusic(index)`: This function takes in *one parameter*, 'index'. It allows the user to retrieve the music by its **index**.

`getAllMusic()`: This function retrieves all music from the music database.

`getNumberOfMusics()`: This function retrieves the number of music from the music database.

`updateDescriptionByTitle(t,d)`: This function takes in *two parameters*, t representing the title of the song and d representing the description of the song, allowing users to specify the title of the music to be updated and **new description** of the music they want to update to. 

`deleteSong(index)`: This function takes in *one parameter*, 'index', allowing the user to delete a song by its **index**.

`searchSong2(search)`: This function takes in *a 'search' parameter*, allowing the user to input the title, genre or singer of song to search for a song.

`addNewPlaylist(name)` : This function takes in one parameter, 'name', allowing the user the set a name for the new playlist.

`addMusicToPlaylist(name, title)` : This function takes in two parameter, 'name' representing the name of a already created playlist and 
'title' representing the title of song that the user wants to add into the playlist. This function allows the user to add a music to the playlist.

## Example demonstrating how to use the functions from the module in app.js

```
const music = require("./music.js"); 

// adds a new music to the musicdatabase
music.addMusic("Mandopop", "Joysaaaa", "13-03-2022", "3:51", "You won't understand", "You will not understand");

music.addMusic("Kpop", "10CM", "26-04-2024", "3:56", "Tell Me It's Not a Dream", "You're the light to my darkness");
console.log("The music is: " + JSON.stringify(music.getMusic(1))); // returns the music at index 1

console.log("All of the music is: " + JSON.stringify(music.getAllMusic())); // return all music pieces in musicdatabase
console.log("Number of music in musicdatabase: " + music.getNumberOfMusics()); // returns the number of music pieces in musicdatabase

music.updateDescriptionByTitle("Tell Me It's Not a Dream", "Music3a"); // update music description by title of song

music.deleteSong(1); // deletes song from musicdatabase

console.log("The searched results are: " + JSON.stringify(music.searchSong2("Tell Me It's Not a Dream"))); // search song from musicdatabase

console.log(JSON.stringify(music.addNewPlaylist("Chinese"))); // adds a new playlist

console.log(JSON.stringify(music.addMusicToPlaylist("Chinese", "You won't understand"))); // adds a music to a playlist

```



