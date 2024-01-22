class App {
    runApplication() {
        console.log("Hello world");

        let spotifyPlaylist = {
            accountName: "leraar",
            songs: [
                {
                    artist: "Slipknot",
                    title: "Killpop",
                    album: "The Grey Chapter",
                    trackNumber: 5,
                    genre: "Metal"
                },
                {
                    artist: "Sisters of Mercy",
                    title: "This Corrosion",
                    album: "Floodland",
                    trackNumber: 5,
                    genre: "Gothic Rock"
                },
                {
                    artist: "Bauhaus",
                    title: "The Sanity Assasin",
                    album: "Burning From The Inside",
                    trackNumber: 14,
                    genre: "Gothic Rock"
                }
            ],
            favoriteArtist: {
                artistName: "Marilyn Manson",
                age: 55,
                grammyCount: 0,
                number1HitsCount: 0,
                genre: "rock / hard rock / gothic rock",
            }
        };
        console.log(spotifyPlaylist);
        console.log("Favorite Artist:", spotifyPlaylist.favoriteArtist);

        for (let i = 0; i < spotifyPlaylist.songs.length; i++) {
            let song = spotifyPlaylist.songs[i];
            console.log(`Song ${i + 1}: ${song.title} by ${song.artist}`);
        }

        let magicaart = {
            attack: 3,
            defense: 2,
            name: "basic creature",
            cost: ["1R", "1B"],
            text: "this basic creature is better at attacking"
        };
        let oneCost = magicaart.cost[0];
        let twoCost = magicaart.cost[1];

        console.log("You play: " + magicaart.name);
        console.log("This basic creature is better at attacking");
        console.log(`Basic creature has ${magicaart.attack} attack`);
        console.log(`Basic creature has ${magicaart.defense} defense`);
        console.log(`You played: ${oneCost} and ${twoCost}`);


        console.log(magicaart);
        let dataToSend = JSON.stringify(magicaart);
        console.log(dataToSend);

        console.log(spotifyPlaylist);
        let dataToSend2 = JSON.stringify(spotifyPlaylist);
        console.log(dataToSend2)

        let coolJson = '{"legosetname":"Geluksdraak","itemnumber":80112,"pieces":1171,"releaseDate":"Binnenkort op 1 januari 2024","price":79.99}';

        let objectFromString = JSON.parse(coolJson);
        console.log(objectFromString)

        console.log("Lego Set Properties:");
        console.log("Lego Set Name:", objectFromString.legosetname);
        console.log("Item Number:", objectFromString.itemnumber);
        console.log("Number of Pieces:", objectFromString.pieces);
        console.log("Release Date:", objectFromString.releaseDate);
        console.log("Price:", objectFromString.price);
    }
}

let app = new App();
app.runApplication();
