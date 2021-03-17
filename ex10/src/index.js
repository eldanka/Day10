function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Dino Merlin",
            title: "Sredinom",
            release_year: 2000,
            id: 4,
            formats: {
                1: "CD",
                2: "Bluray",
                3: "Digital"
            }
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;