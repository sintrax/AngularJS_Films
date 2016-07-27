'use  strict'

musicApp.factory('artistData', function() {
    
    var artist = {
    id: 1,
    name: "London Has Fallen",
    image: "./img/London-Has-Fallen.jpg",
    created: "2016",
    additionalInformation: {
        country: "GB / BG / USA",
        director: "Babak Najafi",
        writer: "Creighton Rothenberger",
        bandMembers: ["Gerard Butler", "Aaron Eckhart", "Morgan Freeman", "Alon Aboutboul", "Shivani Ghai"],
        albums: 12,
        singles: 25
    },
        albums: [{
          id: 1,
          name: "The Expendables",
          image: "img/The-Expendables.jpg",
          year: 2014,
          director: "Patrick Hughes",
          songs: "English",
          rating: 0,
          price: "80,000,000",
          status: 1

        }, {
          id: 2,
          name: "Mechanic",
          image: "img/mechanic.jpg",
          year: 2016,
          songs: "English",
          rating: 0,
          price: "31,500,000",
          status: 2
        }, {
          id: 3,
          name: "Automata",
          image: "img/automata.jpg",
          year: 2017,
          songs: "Spain",
          rating: 0,
          price: "15,000,000",
          status: 3
        }, {
          id: 4,
          name: "300",
          image: "img/300.jpg",
          year: 2012,
          songs: "English",
          rating: 0,
          price: "40,000,000",
          status: 1
    }]

      }

    return {
    getArtist: artist
    }
})