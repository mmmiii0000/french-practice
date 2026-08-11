// 500 films — French titles, directors and release years.
const MOVIE_DATASET = {
  "total": 500,
  "movies": [
    {
      "id": 1,
      "frenchTitle": "Le Parrain",
      "director": "Francis Ford Coppola",
      "year": 1972
    },
    {
      "id": 2,
      "frenchTitle": "Les Aventuriers de l'arche perdue",
      "director": "Steven Spielberg",
      "year": 1981
    },
    {
      "id": 3,
      "frenchTitle": "L'Empire contre-attaque",
      "director": "Irvin Kershner",
      "year": 1980
    },
    {
      "id": 4,
      "frenchTitle": "Les Évadés",
      "director": "Frank Darabont",
      "year": 1994
    },
    {
      "id": 5,
      "frenchTitle": "Les Dents de la mer",
      "director": "Steven Spielberg",
      "year": 1975
    },
    {
      "id": 6,
      "frenchTitle": "Les Affranchis",
      "director": "Martin Scorsese",
      "year": 1990
    },
    {
      "id": 7,
      "frenchTitle": "Apocalypse Now",
      "director": "Francis Ford Coppola",
      "year": 1979
    },
    {
      "id": 8,
      "frenchTitle": "Chantons sous la pluie",
      "director": "Stanley Donen, Gene Kelly",
      "year": 1952
    },
    {
      "id": 9,
      "frenchTitle": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "year": 1994
    },
    {
      "id": 10,
      "frenchTitle": "Fight Club",
      "director": "David Fincher",
      "year": 1999
    },
    {
      "id": 11,
      "frenchTitle": "Raging Bull",
      "director": "Martin Scorsese",
      "year": 1980
    },
    {
      "id": 12,
      "frenchTitle": "La Garçonnière",
      "director": "Billy Wilder",
      "year": 1960
    },
    {
      "id": 13,
      "frenchTitle": "Chinatown",
      "director": "Roman Polanski",
      "year": 1974
    },
    {
      "id": 14,
      "frenchTitle": "Il était une fois dans l'Ouest",
      "director": "Sergio Leone",
      "year": 1968
    },
    {
      "id": 15,
      "frenchTitle": "The Dark Knight - Le Chevalier noir",
      "director": "Christopher Nolan",
      "year": 2008
    },
    {
      "id": 16,
      "frenchTitle": "2001 : L'Odyssée de l'espace",
      "director": "Stanley Kubrick",
      "year": 1968
    },
    {
      "id": 17,
      "frenchTitle": "Taxi Driver",
      "director": "Martin Scorsese",
      "year": 1976
    },
    {
      "id": 18,
      "frenchTitle": "Casablanca",
      "director": "Michael Curtiz",
      "year": 1942
    },
    {
      "id": 19,
      "frenchTitle": "Le Parrain - 2e Partie",
      "director": "Francis Ford Coppola",
      "year": 1974
    },
    {
      "id": 20,
      "frenchTitle": "Blade Runner",
      "director": "Ridley Scott",
      "year": 1982
    },
    {
      "id": 21,
      "frenchTitle": "Le Troisième Homme",
      "director": "Carol Reed",
      "year": 1949
    },
    {
      "id": 22,
      "frenchTitle": "La Guerre des étoiles",
      "director": "George Lucas",
      "year": 1977
    },
    {
      "id": 23,
      "frenchTitle": "Retour vers le futur",
      "director": "Robert Zemeckis",
      "year": 1985
    },
    {
      "id": 24,
      "frenchTitle": "Le Seigneur des anneaux - La Communauté de l'anneau",
      "director": "Peter Jackson",
      "year": 2001
    },
    {
      "id": 25,
      "frenchTitle": "Le Bon, la Brute et le Truand",
      "director": "Sergio Leone",
      "year": 1966
    },
    {
      "id": 26,
      "frenchTitle": "Docteur Folamour",
      "director": "Stanley Kubrick",
      "year": 1964
    },
    {
      "id": 27,
      "frenchTitle": "Certains l'aiment chaud !",
      "director": "Billy Wilder",
      "year": 1959
    },
    {
      "id": 28,
      "frenchTitle": "Citizen Kane",
      "director": "Orson Welles",
      "year": 1941
    },
    {
      "id": 29,
      "frenchTitle": "Piège de cristal",
      "director": "John McTiernan",
      "year": 1988
    },
    {
      "id": 30,
      "frenchTitle": "Aliens, le retour",
      "director": "James Cameron",
      "year": 1986
    },
    {
      "id": 31,
      "frenchTitle": "Autant en emporte le vent",
      "director": "Victor Fleming",
      "year": 1939
    },
    {
      "id": 32,
      "frenchTitle": "Butch Cassidy et le Kid",
      "director": "George Roy Hill",
      "year": 1969
    },
    {
      "id": 33,
      "frenchTitle": "Alien, le huitième passager",
      "director": "Ridley Scott",
      "year": 1979
    },
    {
      "id": 34,
      "frenchTitle": "Le Seigneur des anneaux - Le Retour du roi",
      "director": "Peter Jackson",
      "year": 2003
    },
    {
      "id": 35,
      "frenchTitle": "Terminator 2 : Le Jugement dernier",
      "director": "James Cameron",
      "year": 1991
    },
    {
      "id": 36,
      "frenchTitle": "Andreï Roublev",
      "director": "Andrei Tarkovsky",
      "year": 1966
    },
    {
      "id": 37,
      "frenchTitle": "Orange mécanique",
      "director": "Stanley Kubrick",
      "year": 1971
    },
    {
      "id": 38,
      "frenchTitle": "Heat",
      "director": "Michael Mann",
      "year": 1995
    },
    {
      "id": 39,
      "frenchTitle": "Matrix",
      "director": "Andy & Larry Wachowski",
      "year": 1999
    },
    {
      "id": 40,
      "frenchTitle": "Sueurs froides",
      "director": "Alfred Hitchcock",
      "year": 1958
    },
    {
      "id": 41,
      "frenchTitle": "Les Quatre Cents Coups",
      "director": "François Truffaut",
      "year": 1959
    },
    {
      "id": 42,
      "frenchTitle": "Noblesse oblige",
      "director": "Robert Hamer",
      "year": 1949
    },
    {
      "id": 43,
      "frenchTitle": "The Big Lebowski",
      "director": "Joel & Ethan Coen",
      "year": 1998
    },
    {
      "id": 44,
      "frenchTitle": "La Liste de Schindler",
      "director": "Steven Spielberg",
      "year": 1993
    },
    {
      "id": 45,
      "frenchTitle": "Psychose",
      "director": "Alfred Hitchcock",
      "year": 1960
    },
    {
      "id": 46,
      "frenchTitle": "Sur les quais",
      "director": "Elia Kazan",
      "year": 1954
    },
    {
      "id": 47,
      "frenchTitle": "E.T., l'extra-terrestre",
      "director": "Steven Spielberg",
      "year": 1982
    },
    {
      "id": 48,
      "frenchTitle": "Spinal Tap",
      "director": "Rob Reiner",
      "year": 1984
    },
    {
      "id": 49,
      "frenchTitle": "Evil Dead 2",
      "director": "Sam Raimi",
      "year": 1987
    },
    {
      "id": 50,
      "frenchTitle": "Les Sept Samouraïs",
      "director": "Akira Kurosawa",
      "year": 1954
    },
    {
      "id": 51,
      "frenchTitle": "Huit et demi",
      "director": "Federico Fellini",
      "year": 1963
    },
    {
      "id": 52,
      "frenchTitle": "Shining",
      "director": "Stanley Kubrick",
      "year": 1980
    },
    {
      "id": 53,
      "frenchTitle": "Donnie Darko",
      "director": "Richard Kelly",
      "year": 2001
    },
    {
      "id": 54,
      "frenchTitle": "Le Seigneur des anneaux - Les Deux Tours",
      "director": "Peter Jackson",
      "year": 2002
    },
    {
      "id": 55,
      "frenchTitle": "La Dolce Vita",
      "director": "Federico Fellini",
      "year": 1960
    },
    {
      "id": 56,
      "frenchTitle": "Casino Royale",
      "director": "Martin Campbell",
      "year": 2006
    },
    {
      "id": 57,
      "frenchTitle": "Lawrence d'Arabie",
      "director": "David Lean",
      "year": 1962
    },
    {
      "id": 58,
      "frenchTitle": "La Dame du vendredi",
      "director": "Howard Hawks",
      "year": 1940
    },
    {
      "id": 59,
      "frenchTitle": "Rencontres du troisième type",
      "director": "Steven Spielberg",
      "year": 1977
    },
    {
      "id": 60,
      "frenchTitle": "Requiem pour un massacre",
      "director": "Elem Klimov",
      "year": 1985
    },
    {
      "id": 61,
      "frenchTitle": "Usual Suspects",
      "director": "Bryan Singer",
      "year": 1995
    },
    {
      "id": 62,
      "frenchTitle": "Le Lauréat",
      "director": "Mike Nichols",
      "year": 1967
    },
    {
      "id": 63,
      "frenchTitle": "Boulevard du crépuscule",
      "director": "Billy Wilder",
      "year": 1950
    },
    {
      "id": 64,
      "frenchTitle": "Old Boy",
      "director": "Park Chan-wook",
      "year": 2003
    },
    {
      "id": 65,
      "frenchTitle": "Harold et Maude",
      "director": "Hal Ashby",
      "year": 1971
    },
    {
      "id": 66,
      "frenchTitle": "Edward aux mains d'argent",
      "director": "Tim Burton",
      "year": 1990
    },
    {
      "id": 67,
      "frenchTitle": "Voyage à Tokyo",
      "director": "Yasujiro Ozu",
      "year": 1953
    },
    {
      "id": 68,
      "frenchTitle": "Annie Hall",
      "director": "Woody Allen",
      "year": 1977
    },
    {
      "id": 69,
      "frenchTitle": "Trois Couleurs : Rouge",
      "director": "Krzysztof Kieslowski",
      "year": 1994
    },
    {
      "id": 70,
      "frenchTitle": "Stand by Me",
      "director": "Rob Reiner",
      "year": 1986
    },
    {
      "id": 71,
      "frenchTitle": "La Nuit du chasseur",
      "director": "Charles Laughton",
      "year": 1955
    },
    {
      "id": 72,
      "frenchTitle": "Douze Hommes en colère",
      "director": "Sidney Lumet",
      "year": 1957
    },
    {
      "id": 73,
      "frenchTitle": "Eternal Sunshine of the Spotless Mind",
      "director": "Michel Gondry",
      "year": 2004
    },
    {
      "id": 74,
      "frenchTitle": "Le Trésor de la Sierra Madre",
      "director": "John Huston",
      "year": 1948
    },
    {
      "id": 75,
      "frenchTitle": "Une question de vie ou de mort",
      "director": "Michael Powell, Emeric Pressburger",
      "year": 1946
    },
    {
      "id": 76,
      "frenchTitle": "Manhattan",
      "director": "Woody Allen",
      "year": 1979
    },
    {
      "id": 77,
      "frenchTitle": "Spartacus",
      "director": "Stanley Kubrick",
      "year": 1960
    },
    {
      "id": 78,
      "frenchTitle": "Rosemary’s Baby",
      "director": "Roman Polanski",
      "year": 1968
    },
    {
      "id": 79,
      "frenchTitle": "La Ligne rouge",
      "director": "Terrence Malick",
      "year": 1998
    },
    {
      "id": 80,
      "frenchTitle": "Colonel Blimp",
      "director": "Michael Powell, Emeric Pressburger",
      "year": 1943
    },
    {
      "id": 81,
      "frenchTitle": "Batman Begins",
      "director": "Christopher Nolan",
      "year": 2005
    },
    {
      "id": 82,
      "frenchTitle": "La Grande Évasion",
      "director": "John Sturges",
      "year": 1963
    },
    {
      "id": 83,
      "frenchTitle": "Brazil",
      "director": "Terry Gilliam",
      "year": 1985
    },
    {
      "id": 84,
      "frenchTitle": "L.A. Confidential",
      "director": "Curtis Hanson",
      "year": 1997
    },
    {
      "id": 85,
      "frenchTitle": "Blue Velvet",
      "director": "David Lynch",
      "year": 1986
    },
    {
      "id": 86,
      "frenchTitle": "Carrie au bal du diable",
      "director": "Brian De Palma",
      "year": 1976
    },
    {
      "id": 87,
      "frenchTitle": "La Valse des pantins",
      "director": "Martin Scorsese",
      "year": 1982
    },
    {
      "id": 88,
      "frenchTitle": "La Folle Journée de Ferris Bueller",
      "director": "John Hughes",
      "year": 1986
    },
    {
      "id": 89,
      "frenchTitle": "Magnolia",
      "director": "Paul Thomas Anderson",
      "year": 1999
    },
    {
      "id": 90,
      "frenchTitle": "Quand Harry rencontre Sally",
      "director": "Rob Reiner",
      "year": 1989
    },
    {
      "id": 91,
      "frenchTitle": "Le Retour du Jedi",
      "director": "Richard Marquand",
      "year": 1983
    },
    {
      "id": 92,
      "frenchTitle": "Il était une fois en Amérique",
      "director": "Sergio Leone",
      "year": 1984
    },
    {
      "id": 93,
      "frenchTitle": "L'Esprit de la ruche",
      "director": "Victor Erice",
      "year": 1973
    },
    {
      "id": 94,
      "frenchTitle": "La Horde sauvage",
      "director": "Sam Peckinpah",
      "year": 1969
    },
    {
      "id": 95,
      "frenchTitle": "Le Garde du corps",
      "director": "Akira Kurosawa",
      "year": 1961
    },
    {
      "id": 96,
      "frenchTitle": "American Beauty",
      "director": "Sam Mendes",
      "year": 1999
    },
    {
      "id": 97,
      "frenchTitle": "Reservoir Dogs",
      "director": "Quentin Tarantino",
      "year": 1992
    },
    {
      "id": 98,
      "frenchTitle": "La Mort aux trousses",
      "director": "Alfred Hitchcock",
      "year": 1959
    },
    {
      "id": 99,
      "frenchTitle": "Toy Story",
      "director": "John Lasseter",
      "year": 1995
    },
    {
      "id": 100,
      "frenchTitle": "Network - Main basse sur la TV",
      "director": "Sidney Lumet",
      "year": 1976
    },
    {
      "id": 101,
      "frenchTitle": "Arizona Junior",
      "director": "Joel & Ethan Coen",
      "year": 1987
    },
    {
      "id": 102,
      "frenchTitle": "L'Arnaqueur",
      "director": "Robert Rossen",
      "year": 1961
    },
    {
      "id": 103,
      "frenchTitle": "Fenêtre sur cour",
      "director": "Alfred Hitchcock",
      "year": 1954
    },
    {
      "id": 104,
      "frenchTitle": "La Règle du jeu",
      "director": "Jean Renoir",
      "year": 1939
    },
    {
      "id": 105,
      "frenchTitle": "Vol au-dessus d'un nid de coucou",
      "director": "Milos Forman",
      "year": 1975
    },
    {
      "id": 106,
      "frenchTitle": "Un homme pour l'éternité",
      "director": "Fred Zinnemann",
      "year": 1966
    },
    {
      "id": 107,
      "frenchTitle": "Le Loup-garou de Londres",
      "director": "John Landis",
      "year": 1981
    },
    {
      "id": 108,
      "frenchTitle": "L'Arbre aux sabots",
      "director": "Ermanno Olmi",
      "year": 1978
    },
    {
      "id": 109,
      "frenchTitle": "La Soif du mal",
      "director": "Orson Welles",
      "year": 1958
    },
    {
      "id": 110,
      "frenchTitle": "Before Sunset",
      "director": "Richard Linklater",
      "year": 2004
    },
    {
      "id": 111,
      "frenchTitle": "Fitzcarraldo",
      "director": "Werner Herzog",
      "year": 1982
    },
    {
      "id": 112,
      "frenchTitle": "Soy Cuba",
      "director": "Mikhail Kalatozov",
      "year": 1964
    },
    {
      "id": 113,
      "frenchTitle": "La Légende de Ron Burgundy - Présentateur vedette",
      "director": "Adam McKay",
      "year": 2004
    },
    {
      "id": 114,
      "frenchTitle": "Conversation secrète",
      "director": "Francis Ford Coppola",
      "year": 1974
    },
    {
      "id": 115,
      "frenchTitle": "Le Shérif est en prison",
      "director": "Mel Brooks",
      "year": 1974
    },
    {
      "id": 116,
      "frenchTitle": "Rio Bravo",
      "director": "Howard Hawks",
      "year": 1959
    },
    {
      "id": 117,
      "frenchTitle": "Miller’s Crossing",
      "director": "Joel & Ethan Coen",
      "year": 1990
    },
    {
      "id": 118,
      "frenchTitle": "Withnail and I",
      "director": "Bruce Robinson",
      "year": 1987
    },
    {
      "id": 119,
      "frenchTitle": "Le Salaire de la peur",
      "director": "Henri-Georges Clouzot",
      "year": 1953
    },
    {
      "id": 120,
      "frenchTitle": "La Bataille d'Alger",
      "director": "Gillo Pontecorvo",
      "year": 1966
    },
    {
      "id": 121,
      "frenchTitle": "Los Olvidados",
      "director": "Luis Buñuel",
      "year": 1950
    },
    {
      "id": 122,
      "frenchTitle": "Princess Bride",
      "director": "Rob Reiner",
      "year": 1987
    },
    {
      "id": 123,
      "frenchTitle": "Une femme sous influence",
      "director": "John Cassavetes",
      "year": 1974
    },
    {
      "id": 124,
      "frenchTitle": "Le Silence des agneaux",
      "director": "Jonathan Demme",
      "year": 1991
    },
    {
      "id": 125,
      "frenchTitle": "À bout de souffle",
      "director": "Jean-Luc Godard",
      "year": 1960
    },
    {
      "id": 126,
      "frenchTitle": "Pat Garrett and Billy the Kid",
      "director": "Sam Peckinpah",
      "year": 1973
    },
    {
      "id": 127,
      "frenchTitle": "L'Arnaque",
      "director": "George Roy Hill",
      "year": 1973
    },
    {
      "id": 128,
      "frenchTitle": "Lost in Translation",
      "director": "Sofia Coppola",
      "year": 2003
    },
    {
      "id": 129,
      "frenchTitle": "Harvey",
      "director": "Henry Koster",
      "year": 1950
    },
    {
      "id": 130,
      "frenchTitle": "L'Homme qui voulut être roi",
      "director": "John Huston",
      "year": 1975
    },
    {
      "id": 131,
      "frenchTitle": "Le Dernier des Mohicans",
      "director": "Michael Mann",
      "year": 1992
    },
    {
      "id": 132,
      "frenchTitle": "Le Labyrinthe de Pan",
      "director": "Guillermo del Toro",
      "year": 2006
    },
    {
      "id": 133,
      "frenchTitle": "Assurance sur la mort",
      "director": "Billy Wilder",
      "year": 1944
    },
    {
      "id": 134,
      "frenchTitle": "Seven",
      "director": "David Fincher",
      "year": 1995
    },
    {
      "id": 135,
      "frenchTitle": "La Soupe au canard",
      "director": "Leo McCarey",
      "year": 1933
    },
    {
      "id": 136,
      "frenchTitle": "Amadeus",
      "director": "Milos Forman",
      "year": 1984
    },
    {
      "id": 137,
      "frenchTitle": "Danse avec les loups",
      "director": "Kevin Costner",
      "year": 1990
    },
    {
      "id": 138,
      "frenchTitle": "Luke la main froide",
      "director": "Stuart Rosenberg",
      "year": 1967
    },
    {
      "id": 139,
      "frenchTitle": "Blow Out",
      "director": "Brian De Palma",
      "year": 1981
    },
    {
      "id": 140,
      "frenchTitle": "Pour le pire et pour le meilleur",
      "director": "James L. Brooks",
      "year": 1997
    },
    {
      "id": 141,
      "frenchTitle": "Blanche-Neige et les Sept Nains",
      "director": "David Hand",
      "year": 1937
    },
    {
      "id": 142,
      "frenchTitle": "Presque célèbre",
      "director": "Cameron Crowe",
      "year": 2000
    },
    {
      "id": 143,
      "frenchTitle": "Cyrano de Bergerac",
      "director": "Jean-Paul Rappeneau",
      "year": 1990
    },
    {
      "id": 144,
      "frenchTitle": "There Will Be Blood",
      "director": "Paul Thomas Anderson",
      "year": 2007
    },
    {
      "id": 145,
      "frenchTitle": "Le Choix de Sophie",
      "director": "Alan J. Pakula",
      "year": 1982
    },
    {
      "id": 146,
      "frenchTitle": "Shampoo",
      "director": "Hal Ashby",
      "year": 1975
    },
    {
      "id": 147,
      "frenchTitle": "Les Enchaînés",
      "director": "Alfred Hitchcock",
      "year": 1946
    },
    {
      "id": 148,
      "frenchTitle": "Z",
      "director": "Costa-Gavras",
      "year": 1969
    },
    {
      "id": 149,
      "frenchTitle": "Les Chaussons rouges",
      "director": "Michael Powell, Emeric Pressburger",
      "year": 1948
    },
    {
      "id": 150,
      "frenchTitle": "French Connection",
      "director": "William Friedkin",
      "year": 1971
    },
    {
      "id": 151,
      "frenchTitle": "Gladiator",
      "director": "Ridley Scott",
      "year": 2000
    },
    {
      "id": 152,
      "frenchTitle": "Boogie Nights",
      "director": "Paul Thomas Anderson",
      "year": 1997
    },
    {
      "id": 153,
      "frenchTitle": "Les Innocents",
      "director": "Jack Clayton",
      "year": 1961
    },
    {
      "id": 154,
      "frenchTitle": "37°2 le matin",
      "director": "Jean-Jacques Beineix",
      "year": 1986
    },
    {
      "id": 155,
      "frenchTitle": "La Balade sauvage",
      "director": "Terrence Malick",
      "year": 1973
    },
    {
      "id": 156,
      "frenchTitle": "Il faut sauver le soldat Ryan",
      "director": "Steven Spielberg",
      "year": 1998
    },
    {
      "id": 157,
      "frenchTitle": "True Romance",
      "director": "Tony Scott",
      "year": 1993
    },
    {
      "id": 158,
      "frenchTitle": "Impitoyable",
      "director": "Clint Eastwood",
      "year": 1992
    },
    {
      "id": 159,
      "frenchTitle": "La Famille Tenenbaum",
      "director": "Wes Anderson",
      "year": 2001
    },
    {
      "id": 160,
      "frenchTitle": "Bienvenue Mister Chance",
      "director": "Hal Ashby",
      "year": 1979
    },
    {
      "id": 161,
      "frenchTitle": "L'Année de tous les dangers",
      "director": "Peter Weir",
      "year": 1982
    },
    {
      "id": 162,
      "frenchTitle": "Les Griffes de la nuit",
      "director": "Wes Craven",
      "year": 1984
    },
    {
      "id": 163,
      "frenchTitle": "Le Pont de la rivière Kwaï",
      "director": "David Lean",
      "year": 1957
    },
    {
      "id": 164,
      "frenchTitle": "La Prisonnière du désert",
      "director": "John Ford",
      "year": 1956
    },
    {
      "id": 165,
      "frenchTitle": "Partie de campagne",
      "director": "Jean Renoir",
      "year": 1936
    },
    {
      "id": 166,
      "frenchTitle": "Goldfinger",
      "director": "Guy Hamilton",
      "year": 1964
    },
    {
      "id": 167,
      "frenchTitle": "Ne vous retournez pas",
      "director": "Nic Roeg",
      "year": 1973
    },
    {
      "id": 168,
      "frenchTitle": "Tootsie",
      "director": "Sydney Pollack",
      "year": 1982
    },
    {
      "id": 169,
      "frenchTitle": "Viridiana",
      "director": "Luis Buñuel",
      "year": 1961
    },
    {
      "id": 170,
      "frenchTitle": "La Haine",
      "director": "Mathieu Kassovitz",
      "year": 1995
    },
    {
      "id": 171,
      "frenchTitle": "Brève Rencontre",
      "director": "David Lean",
      "year": 1945
    },
    {
      "id": 172,
      "frenchTitle": "Le Magicien d'Oz",
      "director": "Victor Fleming",
      "year": 1939
    },
    {
      "id": 173,
      "frenchTitle": "Memento",
      "director": "Christopher Nolan",
      "year": 2000
    },
    {
      "id": 174,
      "frenchTitle": "Superman",
      "director": "Richard Donner",
      "year": 1978
    },
    {
      "id": 175,
      "frenchTitle": "Rushmore",
      "director": "Wes Anderson",
      "year": 1998
    },
    {
      "id": 176,
      "frenchTitle": "A Canterbury Tale",
      "director": "Michael Powell, Emeric Pressburger",
      "year": 1944
    },
    {
      "id": 177,
      "frenchTitle": "La Cité de Dieu",
      "director": "Fernando Meirelles, Kátia Lund",
      "year": 2002
    },
    {
      "id": 178,
      "frenchTitle": "Hellzapoppin’",
      "director": "H.C. Potter",
      "year": 1941
    },
    {
      "id": 179,
      "frenchTitle": "Toy Story 2",
      "director": "John Lasseter",
      "year": 1999
    },
    {
      "id": 180,
      "frenchTitle": "Du silence et des ombres",
      "director": "Robert Mulligan",
      "year": 1962
    },
    {
      "id": 181,
      "frenchTitle": "La Vallée des plaisirs",
      "director": "Russ Meyer",
      "year": 1970
    },
    {
      "id": 182,
      "frenchTitle": "Performance",
      "director": "Donald Cammell, Nic Roeg",
      "year": 1970
    },
    {
      "id": 183,
      "frenchTitle": "Le Samouraï",
      "director": "Jean-Pierre Melville",
      "year": 1967
    },
    {
      "id": 184,
      "frenchTitle": "L'Inspecteur Harry",
      "director": "Don Siegel",
      "year": 1971
    },
    {
      "id": 185,
      "frenchTitle": "Les Sentiers de la gloire",
      "director": "Stanley Kubrick",
      "year": 1957
    },
    {
      "id": 186,
      "frenchTitle": "Vol 93",
      "director": "Paul Greengrass",
      "year": 2006
    },
    {
      "id": 187,
      "frenchTitle": "Les Grands Espaces",
      "director": "William Wyler",
      "year": 1958
    },
    {
      "id": 188,
      "frenchTitle": "Rock Academy",
      "director": "Richard Linklater",
      "year": 2003
    },
    {
      "id": 189,
      "frenchTitle": "SOS Fantômes",
      "director": "Ivan Reitman",
      "year": 1984
    },
    {
      "id": 190,
      "frenchTitle": "Big",
      "director": "Penny Marshall",
      "year": 1988
    },
    {
      "id": 191,
      "frenchTitle": "Brokeback Mountain",
      "director": "Ang Lee",
      "year": 2005
    },
    {
      "id": 192,
      "frenchTitle": "Eraserhead",
      "director": "David Lynch",
      "year": 1977
    },
    {
      "id": 193,
      "frenchTitle": "Ed Wood",
      "director": "Tim Burton",
      "year": 1994
    },
    {
      "id": 194,
      "frenchTitle": "Le Voleur de bicyclette",
      "director": "Vittorio De Sica",
      "year": 1948
    },
    {
      "id": 195,
      "frenchTitle": "La vie est belle",
      "director": "Frank Capra",
      "year": 1946
    },
    {
      "id": 196,
      "frenchTitle": "Le Fabuleux Destin d'Amélie Poulain",
      "director": "Jean-Pierre Jeunet",
      "year": 2001
    },
    {
      "id": 197,
      "frenchTitle": "Point Break",
      "director": "Kathryn Bigelow",
      "year": 1991
    },
    {
      "id": 198,
      "frenchTitle": "Fargo",
      "director": "Joel & Ethan Coen",
      "year": 1996
    },
    {
      "id": 199,
      "frenchTitle": "Massacre à la tronçonneuse",
      "director": "Tobe Hooper",
      "year": 1974
    },
    {
      "id": 200,
      "frenchTitle": "Before Sunrise",
      "director": "Richard Linklater",
      "year": 1995
    },
    {
      "id": 201,
      "frenchTitle": "JFK",
      "director": "Oliver Stone",
      "year": 1991
    },
    {
      "id": 202,
      "frenchTitle": "The Killer",
      "director": "John Woo",
      "year": 1989
    },
    {
      "id": 203,
      "frenchTitle": "Monty Python : La Vie de Brian",
      "director": "Terry Jones",
      "year": 1979
    },
    {
      "id": 204,
      "frenchTitle": "La Fiancée de Frankenstein",
      "director": "James Whale",
      "year": 1935
    },
    {
      "id": 205,
      "frenchTitle": "The Addiction",
      "director": "Abel Ferrara",
      "year": 1995
    },
    {
      "id": 206,
      "frenchTitle": "L'Exorciste",
      "director": "William Friedkin",
      "year": 1973
    },
    {
      "id": 207,
      "frenchTitle": "Les Désaxés",
      "director": "John Huston",
      "year": 1961
    },
    {
      "id": 208,
      "frenchTitle": "Les Infiltrés",
      "director": "Martin Scorsese",
      "year": 2006
    },
    {
      "id": 209,
      "frenchTitle": "Local Hero",
      "director": "Bill Forsyth",
      "year": 1983
    },
    {
      "id": 210,
      "frenchTitle": "Platoon",
      "director": "Oliver Stone",
      "year": 1986
    },
    {
      "id": 211,
      "frenchTitle": "Moulin Rouge",
      "director": "Baz Luhrmann",
      "year": 2001
    },
    {
      "id": 212,
      "frenchTitle": "M le maudit",
      "director": "Fritz Lang",
      "year": 1931
    },
    {
      "id": 213,
      "frenchTitle": "Chansons du deuxième étage",
      "director": "Roy Andersson",
      "year": 2000
    },
    {
      "id": 214,
      "frenchTitle": "L'Armée des ombres",
      "director": "Jean-Pierre Melville",
      "year": 1969
    },
    {
      "id": 215,
      "frenchTitle": "Jackie Brown",
      "director": "Quentin Tarantino",
      "year": 1997
    },
    {
      "id": 216,
      "frenchTitle": "Un dimanche comme les autres",
      "director": "John Schlesinger",
      "year": 1971
    },
    {
      "id": 217,
      "frenchTitle": "Les Sept Mercenaires",
      "director": "John Sturges",
      "year": 1960
    },
    {
      "id": 218,
      "frenchTitle": "Les Vacances de Monsieur Hulot",
      "director": "Jacques Tati",
      "year": 1953
    },
    {
      "id": 219,
      "frenchTitle": "Josey Wales hors-la-loi",
      "director": "Clint Eastwood",
      "year": 1976
    },
    {
      "id": 220,
      "frenchTitle": "Loin du paradis",
      "director": "Todd Haynes",
      "year": 2002
    },
    {
      "id": 221,
      "frenchTitle": "John McCabe",
      "director": "Robert Altman",
      "year": 1971
    },
    {
      "id": 222,
      "frenchTitle": "Mère et fils",
      "director": "Aleksandr Sokurov",
      "year": 1997
    },
    {
      "id": 223,
      "frenchTitle": "Safe",
      "director": "Todd Haynes",
      "year": 1995
    },
    {
      "id": 224,
      "frenchTitle": "Distant Voices",
      "director": "Terence Davies",
      "year": 1988
    },
    {
      "id": 225,
      "frenchTitle": "La Loi du milieu",
      "director": "Mike Hodges",
      "year": 1971
    },
    {
      "id": 226,
      "frenchTitle": "Roméo + Juliette",
      "director": "Baz Luhrmann",
      "year": 1996
    },
    {
      "id": 227,
      "frenchTitle": "Léon",
      "director": "Luc Besson",
      "year": 1994
    },
    {
      "id": 228,
      "frenchTitle": "No Country for Old Men",
      "director": "Joel & Ethan Coen",
      "year": 2007
    },
    {
      "id": 229,
      "frenchTitle": "Festen",
      "director": "Thomas Vinterberg",
      "year": 1998
    },
    {
      "id": 230,
      "frenchTitle": "Le Château ambulant",
      "director": "Hayao Miyazaki",
      "year": 2004
    },
    {
      "id": 231,
      "frenchTitle": "Shaun of the Dead",
      "director": "Edgar Wright",
      "year": 2004
    },
    {
      "id": 232,
      "frenchTitle": "Jurassic Park",
      "director": "Steven Spielberg",
      "year": 1993
    },
    {
      "id": 233,
      "frenchTitle": "Indiana Jones et le Temple maudit",
      "director": "Steven Spielberg",
      "year": 1984
    },
    {
      "id": 234,
      "frenchTitle": "La Vengeance dans la peau",
      "director": "Paul Greengrass",
      "year": 2007
    },
    {
      "id": 235,
      "frenchTitle": "Battle Royale",
      "director": "Kinji Fukasaku",
      "year": 2000
    },
    {
      "id": 236,
      "frenchTitle": "Le Narcisse noir",
      "director": "Michael Powell, Emeric Pressburger",
      "year": 1947
    },
    {
      "id": 237,
      "frenchTitle": "Delicatessen",
      "director": "Jean-Pierre Jeunet, Marc Caro",
      "year": 1991
    },
    {
      "id": 238,
      "frenchTitle": "Requiem for a Dream",
      "director": "Darren Aronofsky",
      "year": 2000
    },
    {
      "id": 239,
      "frenchTitle": "Cinema Paradiso",
      "director": "Giuseppe Tornatore",
      "year": 1988
    },
    {
      "id": 240,
      "frenchTitle": "Forrest Gump",
      "director": "Robert Zemeckis",
      "year": 1994
    },
    {
      "id": 241,
      "frenchTitle": "Le Gang des tueurs",
      "director": "John Boulting",
      "year": 1947
    },
    {
      "id": 242,
      "frenchTitle": "King Kong",
      "director": "Merian C. Cooper, Ernest B. Schoedsack",
      "year": 1933
    },
    {
      "id": 243,
      "frenchTitle": "Heimat : Une chronique allemande",
      "director": "Edgar Reitz",
      "year": 1984
    },
    {
      "id": 244,
      "frenchTitle": "Génération rebelle",
      "director": "Richard Linklater",
      "year": 1993
    },
    {
      "id": 245,
      "frenchTitle": "La Chute",
      "director": "Oliver Hirschbiegel",
      "year": 2004
    },
    {
      "id": 246,
      "frenchTitle": "Indiscrétions",
      "director": "George Cukor",
      "year": 1940
    },
    {
      "id": 247,
      "frenchTitle": "Que le spectacle commence...",
      "director": "Bob Fosse",
      "year": 1979
    },
    {
      "id": 248,
      "frenchTitle": "Loulou",
      "director": "Georg Wilhelm Pabst",
      "year": 1929
    },
    {
      "id": 249,
      "frenchTitle": "La Poursuite infernale",
      "director": "John Ford",
      "year": 1946
    },
    {
      "id": 250,
      "frenchTitle": "L'Aurore",
      "director": "F.W. Murnau",
      "year": 1927
    },
    {
      "id": 251,
      "frenchTitle": "Darling",
      "director": "John Schlesinger",
      "year": 1965
    },
    {
      "id": 252,
      "frenchTitle": "Le Guépard",
      "director": "Luchino Visconti",
      "year": 1963
    },
    {
      "id": 253,
      "frenchTitle": "Rambo",
      "director": "Ted Kotcheff",
      "year": 1982
    },
    {
      "id": 254,
      "frenchTitle": "Le Verdict",
      "director": "Sidney Lumet",
      "year": 1982
    },
    {
      "id": 255,
      "frenchTitle": "Ninotchka",
      "director": "Ernst Lubitsch",
      "year": 1939
    },
    {
      "id": 256,
      "frenchTitle": "Le Quai des brumes",
      "director": "Marcel Carné",
      "year": 1938
    },
    {
      "id": 257,
      "frenchTitle": "Le Chat noir",
      "director": "Edgar G. Ulmer",
      "year": 1934
    },
    {
      "id": 258,
      "frenchTitle": "The Blues Brothers",
      "director": "John Landis",
      "year": 1980
    },
    {
      "id": 259,
      "frenchTitle": "Un jour sans fin",
      "director": "Harold Ramis",
      "year": 1993
    },
    {
      "id": 260,
      "frenchTitle": "Jusqu'au bout du rêve",
      "director": "Phil Alden Robinson",
      "year": 1989
    },
    {
      "id": 261,
      "frenchTitle": "Vacances romaines",
      "director": "William Wyler",
      "year": 1953
    },
    {
      "id": 262,
      "frenchTitle": "Virgin Suicides",
      "director": "Sofia Coppola",
      "year": 1999
    },
    {
      "id": 263,
      "frenchTitle": "Le Bateau",
      "director": "Wolfgang Petersen",
      "year": 1981
    },
    {
      "id": 264,
      "frenchTitle": "American Graffiti",
      "director": "George Lucas",
      "year": 1973
    },
    {
      "id": 265,
      "frenchTitle": "A.I. - Intelligence artificielle",
      "director": "Steven Spielberg",
      "year": 2001
    },
    {
      "id": 266,
      "frenchTitle": "Ghost World",
      "director": "Terry Zwigoff",
      "year": 2001
    },
    {
      "id": 267,
      "frenchTitle": "Crimes et Délits",
      "director": "Woody Allen",
      "year": 1989
    },
    {
      "id": 268,
      "frenchTitle": "Une femme disparaît",
      "director": "Alfred Hitchcock",
      "year": 1938
    },
    {
      "id": 269,
      "frenchTitle": "Une place au soleil",
      "director": "George Stevens",
      "year": 1951
    },
    {
      "id": 270,
      "frenchTitle": "La Mort de Dante Lazarescu",
      "director": "Cristi Puiu",
      "year": 2005
    },
    {
      "id": 271,
      "frenchTitle": "Pee-Wee Big Adventure",
      "director": "Tim Burton",
      "year": 1985
    },
    {
      "id": 272,
      "frenchTitle": "L'Oiseau au plumage de cristal",
      "director": "Dario Argento",
      "year": 1970
    },
    {
      "id": 273,
      "frenchTitle": "Le Faucon maltais",
      "director": "John Huston",
      "year": 1941
    },
    {
      "id": 274,
      "frenchTitle": "Sin City",
      "director": "Robert Rodriguez, Frank Miller",
      "year": 2005
    },
    {
      "id": 275,
      "frenchTitle": "Mon voisin Totoro",
      "director": "Hayao Miyazaki",
      "year": 1988
    },
    {
      "id": 276,
      "frenchTitle": "Layer Cake",
      "director": "Matthew Vaughn",
      "year": 2004
    },
    {
      "id": 277,
      "frenchTitle": "Un jour à New York",
      "director": "Stanley Donen, Gene Kelly",
      "year": 1949
    },
    {
      "id": 278,
      "frenchTitle": "L'Impasse",
      "director": "Brian De Palma",
      "year": 1993
    },
    {
      "id": 279,
      "frenchTitle": "American College",
      "director": "John Landis",
      "year": 1978
    },
    {
      "id": 280,
      "frenchTitle": "Mad Max 2 : Le Défi",
      "director": "George Miller",
      "year": 1981
    },
    {
      "id": 281,
      "frenchTitle": "Entretien avec un vampire",
      "director": "Neil Jordan",
      "year": 1994
    },
    {
      "id": 282,
      "frenchTitle": "Le Parrain - 3e Partie",
      "director": "Francis Ford Coppola",
      "year": 1990
    },
    {
      "id": 283,
      "frenchTitle": "Ran",
      "director": "Akira Kurosawa",
      "year": 1985
    },
    {
      "id": 284,
      "frenchTitle": "Scarface",
      "director": "Brian De Palma",
      "year": 1983
    },
    {
      "id": 285,
      "frenchTitle": "Solaris",
      "director": "Andrei Tarkovsky",
      "year": 1972
    },
    {
      "id": 286,
      "frenchTitle": "L’avventura",
      "director": "Michelangelo Antonioni",
      "year": 1960
    },
    {
      "id": 287,
      "frenchTitle": "Secrets et Mensonges",
      "director": "Mike Leigh",
      "year": 1996
    },
    {
      "id": 288,
      "frenchTitle": "Qui veut la peau de Roger Rabbit",
      "director": "Robert Zemeckis",
      "year": 1988
    },
    {
      "id": 289,
      "frenchTitle": "The Thing",
      "director": "John Carpenter",
      "year": 1982
    },
    {
      "id": 290,
      "frenchTitle": "Rashomon",
      "director": "Akira Kurosawa",
      "year": 1950
    },
    {
      "id": 291,
      "frenchTitle": "Rocco et ses frères",
      "director": "Luchino Visconti",
      "year": 1960
    },
    {
      "id": 292,
      "frenchTitle": "La Belle et la Bête",
      "director": "Jean Cocteau",
      "year": 1946
    },
    {
      "id": 293,
      "frenchTitle": "La Maman et la Putain",
      "director": "Jean Eustache",
      "year": 1973
    },
    {
      "id": 294,
      "frenchTitle": "Le Ballon rouge",
      "director": "Albert Lamorisse",
      "year": 1956
    },
    {
      "id": 295,
      "frenchTitle": "Les Incorruptibles",
      "director": "Brian De Palma",
      "year": 1987
    },
    {
      "id": 296,
      "frenchTitle": "Les Hommes du président",
      "director": "Alan J. Pakula",
      "year": 1976
    },
    {
      "id": 297,
      "frenchTitle": "New York-Miami",
      "director": "Frank Capra",
      "year": 1934
    },
    {
      "id": 298,
      "frenchTitle": "Le Cercle rouge",
      "director": "Jean-Pierre Melville",
      "year": 1970
    },
    {
      "id": 299,
      "frenchTitle": "Madame et ses flirts",
      "director": "Preston Sturges",
      "year": 1942
    },
    {
      "id": 300,
      "frenchTitle": "La Nuit des forains",
      "director": "Ingmar Bergman",
      "year": 1953
    },
    {
      "id": 301,
      "frenchTitle": "Guerre et Amour",
      "director": "Woody Allen",
      "year": 1975
    },
    {
      "id": 302,
      "frenchTitle": "Les Plus belles années de notre vie",
      "director": "William Wyler",
      "year": 1946
    },
    {
      "id": 303,
      "frenchTitle": "Together",
      "director": "Lukas Moodyson",
      "year": 2000
    },
    {
      "id": 304,
      "frenchTitle": "Radio Days",
      "director": "Woody Allen",
      "year": 1987
    },
    {
      "id": 305,
      "frenchTitle": "Le Prestige",
      "director": "Christopher Nolan",
      "year": 2006
    },
    {
      "id": 306,
      "frenchTitle": "Indiana Jones et la Dernière Croisade",
      "director": "Steven Spielberg",
      "year": 1989
    },
    {
      "id": 307,
      "frenchTitle": "Macadam Cowboy",
      "director": "John Schlesinger",
      "year": 1969
    },
    {
      "id": 308,
      "frenchTitle": "Terminator",
      "director": "James Cameron",
      "year": 1984
    },
    {
      "id": 309,
      "frenchTitle": "Transformers",
      "director": "Michael Bay",
      "year": 2007
    },
    {
      "id": 310,
      "frenchTitle": "Gremlins",
      "director": "Joe Dante",
      "year": 1984
    },
    {
      "id": 311,
      "frenchTitle": "American History X",
      "director": "Tony Kaye",
      "year": 1998
    },
    {
      "id": 312,
      "frenchTitle": "Suspiria",
      "director": "Dario Argento",
      "year": 1977
    },
    {
      "id": 313,
      "frenchTitle": "Le Cuirassé Potemkine",
      "director": "Sergei Eisenstein",
      "year": 1925
    },
    {
      "id": 314,
      "frenchTitle": "Le Grand Chantage",
      "director": "Alexander Mackendrick",
      "year": 1957
    },
    {
      "id": 315,
      "frenchTitle": "Raison et Sentiments",
      "director": "Ang Lee",
      "year": 1995
    },
    {
      "id": 316,
      "frenchTitle": "Trainspotting",
      "director": "Danny Boyle",
      "year": 1996
    },
    {
      "id": 317,
      "frenchTitle": "Midnight Run",
      "director": "Martin Brest",
      "year": 1988
    },
    {
      "id": 318,
      "frenchTitle": "Rebecca",
      "director": "Alfred Hitchcock",
      "year": 1940
    },
    {
      "id": 319,
      "frenchTitle": "Le Roi Lion",
      "director": "Roger Allers, Rob Minkoff",
      "year": 1994
    },
    {
      "id": 320,
      "frenchTitle": "Braveheart",
      "director": "Mel Gibson",
      "year": 1995
    },
    {
      "id": 321,
      "frenchTitle": "Drôle de frimousse",
      "director": "Stanley Donen",
      "year": 1957
    },
    {
      "id": 322,
      "frenchTitle": "Aladdin",
      "director": "Ron Clements, John Musker",
      "year": 1992
    },
    {
      "id": 323,
      "frenchTitle": "Last Seduction",
      "director": "John Dahl",
      "year": 1994
    },
    {
      "id": 324,
      "frenchTitle": "Lone Star",
      "director": "John Sayles",
      "year": 1996
    },
    {
      "id": 325,
      "frenchTitle": "Kill Bill - Volume 1",
      "director": "Quentin Tarantino",
      "year": 2003
    },
    {
      "id": 326,
      "frenchTitle": "Hors d'atteinte",
      "director": "Steven Soderbergh",
      "year": 1998
    },
    {
      "id": 327,
      "frenchTitle": "L'Étrange Noël de Monsieur Jack",
      "director": "Henry Selick",
      "year": 1993
    },
    {
      "id": 328,
      "frenchTitle": "The Truman Show",
      "director": "Peter Weir",
      "year": 1998
    },
    {
      "id": 329,
      "frenchTitle": "La Vie des autres",
      "director": "Florian Henckel von Donnersmarck",
      "year": 2006
    },
    {
      "id": 330,
      "frenchTitle": "Star Wars - Épisode III : La Revanche des Sith",
      "director": "George Lucas",
      "year": 2005
    },
    {
      "id": 331,
      "frenchTitle": "La Ligne verte",
      "director": "Frank Darabont",
      "year": 1999
    },
    {
      "id": 332,
      "frenchTitle": "Sixième Sens",
      "director": "M. Night Shyamalan",
      "year": 1999
    },
    {
      "id": 333,
      "frenchTitle": "Grease",
      "director": "Randal Kleiser",
      "year": 1978
    },
    {
      "id": 334,
      "frenchTitle": "La Splendeur des Amberson",
      "director": "Orson Welles",
      "year": 1942
    },
    {
      "id": 335,
      "frenchTitle": "Le Septième Sceau",
      "director": "Ingmar Bergman",
      "year": 1957
    },
    {
      "id": 336,
      "frenchTitle": "Titanic",
      "director": "James Cameron",
      "year": 1997
    },
    {
      "id": 337,
      "frenchTitle": "300",
      "director": "Zack Snyder",
      "year": 2006
    },
    {
      "id": 338,
      "frenchTitle": "Jules et Jim",
      "director": "François Truffaut",
      "year": 1962
    },
    {
      "id": 339,
      "frenchTitle": "Le Voyage de Chihiro",
      "director": "Hayao Miyazaki",
      "year": 2001
    },
    {
      "id": 340,
      "frenchTitle": "Entre le ciel et l'enfer",
      "director": "Akira Kurosawa",
      "year": 1963
    },
    {
      "id": 341,
      "frenchTitle": "Profession : reporter",
      "director": "Michelangelo Antonioni",
      "year": 1975
    },
    {
      "id": 342,
      "frenchTitle": "La Ruée vers l'or",
      "director": "Charlie Chaplin",
      "year": 1925
    },
    {
      "id": 343,
      "frenchTitle": "Monstres & Cie",
      "director": "Pete Docter",
      "year": 2001
    },
    {
      "id": 344,
      "frenchTitle": "La Dernière Valse",
      "director": "Martin Scorsese",
      "year": 1978
    },
    {
      "id": 345,
      "frenchTitle": "Liaison fatale",
      "director": "Adrian Lyne",
      "year": 1987
    },
    {
      "id": 346,
      "frenchTitle": "Péché mortel",
      "director": "John M. Stahl",
      "year": 1945
    },
    {
      "id": 347,
      "frenchTitle": "Ève",
      "director": "Joseph L. Mankiewicz",
      "year": 1950
    },
    {
      "id": 348,
      "frenchTitle": "Au hasard Balthazar",
      "director": "Robert Bresson",
      "year": 1966
    },
    {
      "id": 349,
      "frenchTitle": "Arthur",
      "director": "Steve Gordon",
      "year": 1981
    },
    {
      "id": 350,
      "frenchTitle": "La Planète des singes",
      "director": "Franklin J. Schaffner",
      "year": 1968
    },
    {
      "id": 351,
      "frenchTitle": "Zulu",
      "director": "Cy Endfield",
      "year": 1964
    },
    {
      "id": 352,
      "frenchTitle": "Infidèlement vôtre",
      "director": "Preston Sturges",
      "year": 1948
    },
    {
      "id": 353,
      "frenchTitle": "Bugsy Malone",
      "director": "Alan Parker",
      "year": 1976
    },
    {
      "id": 354,
      "frenchTitle": "Un chien andalou",
      "director": "Luis Buñuel",
      "year": 1929
    },
    {
      "id": 355,
      "frenchTitle": "Sunshine",
      "director": "Danny Boyle",
      "year": 2007
    },
    {
      "id": 356,
      "frenchTitle": "Napoléon",
      "director": "Abel Gance",
      "year": 1927
    },
    {
      "id": 357,
      "frenchTitle": "Le Privé",
      "director": "Robert Altman",
      "year": 1973
    },
    {
      "id": 358,
      "frenchTitle": "L'Arche russe",
      "director": "Aleksandr Sokurov",
      "year": 2002
    },
    {
      "id": 359,
      "frenchTitle": "Un cœur pris au piège",
      "director": "Preston Sturges",
      "year": 1941
    },
    {
      "id": 360,
      "frenchTitle": "Le Retour",
      "director": "Andrei Zvyagintsev",
      "year": 2003
    },
    {
      "id": 361,
      "frenchTitle": "Clerks - Les Employés modèles",
      "director": "Kevin Smith",
      "year": 1994
    },
    {
      "id": 362,
      "frenchTitle": "Elephant Man",
      "director": "David Lynch",
      "year": 1980
    },
    {
      "id": 363,
      "frenchTitle": "Good Morning, Vietnam",
      "director": "Barry Levinson",
      "year": 1987
    },
    {
      "id": 364,
      "frenchTitle": "Tueurs nés",
      "director": "Oliver Stone",
      "year": 1994
    },
    {
      "id": 365,
      "frenchTitle": "La Mémoire dans la peau",
      "director": "Doug Liman",
      "year": 2002
    },
    {
      "id": 366,
      "frenchTitle": "Predator",
      "director": "John McTiernan",
      "year": 1987
    },
    {
      "id": 367,
      "frenchTitle": "Cabaret",
      "director": "Bob Fosse",
      "year": 1972
    },
    {
      "id": 368,
      "frenchTitle": "Y a-t-il un pilote dans l'avion ?",
      "director": "Jim Abrahams, David Zucker, Jerry Zucker",
      "year": 1980
    },
    {
      "id": 369,
      "frenchTitle": "Breakfast Club",
      "director": "John Hughes",
      "year": 1985
    },
    {
      "id": 370,
      "frenchTitle": "Rocky",
      "director": "John G. Avildsen",
      "year": 1976
    },
    {
      "id": 371,
      "frenchTitle": "Pirates des Caraïbes : La Malédiction du Black Pearl",
      "director": "Gore Verbinski",
      "year": 2003
    },
    {
      "id": 372,
      "frenchTitle": "Evil Dead 3 : L'Armée des ténèbres",
      "director": "Sam Raimi",
      "year": 1992
    },
    {
      "id": 373,
      "frenchTitle": "WALL-E",
      "director": "Andrew Stanton",
      "year": 2008
    },
    {
      "id": 374,
      "frenchTitle": "Hot Fuzz",
      "director": "Edgar Wright",
      "year": 2007
    },
    {
      "id": 375,
      "frenchTitle": "Quatre mariages et un enterrement",
      "director": "Mike Newell",
      "year": 1994
    },
    {
      "id": 376,
      "frenchTitle": "Zodiac",
      "director": "David Fincher",
      "year": 2007
    },
    {
      "id": 377,
      "frenchTitle": "Mean Streets",
      "director": "Martin Scorsese",
      "year": 1973
    },
    {
      "id": 378,
      "frenchTitle": "Les Goonies",
      "director": "Richard Donner",
      "year": 1985
    },
    {
      "id": 379,
      "frenchTitle": "Ratatouille",
      "director": "Brad Bird",
      "year": 2007
    },
    {
      "id": 380,
      "frenchTitle": "Les Fils de l'homme",
      "director": "Alfonso Cuarón",
      "year": 2006
    },
    {
      "id": 381,
      "frenchTitle": "Monty Python : Sacré Graal !",
      "director": "Terry Jones, Terry Gilliam",
      "year": 1975
    },
    {
      "id": 382,
      "frenchTitle": "Caché",
      "director": "Michael Haneke",
      "year": 2005
    },
    {
      "id": 383,
      "frenchTitle": "Serenity",
      "director": "Joss Whedon",
      "year": 2005
    },
    {
      "id": 384,
      "frenchTitle": "Rendez-vous",
      "director": "Ernst Lubitsch",
      "year": 1940
    },
    {
      "id": 385,
      "frenchTitle": "Le Gouffre aux chimères",
      "director": "Billy Wilder",
      "year": 1951
    },
    {
      "id": 386,
      "frenchTitle": "Le Grand Silence",
      "director": "Sergio Corbucci",
      "year": 1968
    },
    {
      "id": 387,
      "frenchTitle": "Rain Man",
      "director": "Barry Levinson",
      "year": 1988
    },
    {
      "id": 388,
      "frenchTitle": "Le Patient anglais",
      "director": "Anthony Minghella",
      "year": 1996
    },
    {
      "id": 389,
      "frenchTitle": "Election",
      "director": "Alexander Payne",
      "year": 1999
    },
    {
      "id": 390,
      "frenchTitle": "2 Days in Paris",
      "director": "Julie Delpy",
      "year": 2007
    },
    {
      "id": 391,
      "frenchTitle": "Mulholland Drive",
      "director": "David Lynch",
      "year": 2001
    },
    {
      "id": 392,
      "frenchTitle": "Paris, Texas",
      "director": "Wim Wenders",
      "year": 1984
    },
    {
      "id": 393,
      "frenchTitle": "Garden State",
      "director": "Zach Braff",
      "year": 2004
    },
    {
      "id": 394,
      "frenchTitle": "Cloverfield",
      "director": "Matt Reeves",
      "year": 2008
    },
    {
      "id": 395,
      "frenchTitle": "Casino",
      "director": "Martin Scorsese",
      "year": 1995
    },
    {
      "id": 396,
      "frenchTitle": "L'Assassinat de Jesse James par le lâche Robert Ford",
      "director": "Andrew Dominik",
      "year": 2007
    },
    {
      "id": 397,
      "frenchTitle": "La Nuit des morts-vivants",
      "director": "George A. Romero",
      "year": 1968
    },
    {
      "id": 398,
      "frenchTitle": "Killer of Sheep",
      "director": "Charles Burnett",
      "year": 1977
    },
    {
      "id": 399,
      "frenchTitle": "Les Rapaces",
      "director": "Erich von Stroheim",
      "year": 1924
    },
    {
      "id": 400,
      "frenchTitle": "Les Indestructibles",
      "director": "Brad Bird",
      "year": 2004
    },
    {
      "id": 401,
      "frenchTitle": "Batman : Le Défi",
      "director": "Tim Burton",
      "year": 1992
    },
    {
      "id": 402,
      "frenchTitle": "Little Miss Sunshine",
      "director": "Jonathan Dayton, Valerie Faris",
      "year": 2006
    },
    {
      "id": 403,
      "frenchTitle": "Do the Right Thing",
      "director": "Spike Lee",
      "year": 1989
    },
    {
      "id": 404,
      "frenchTitle": "RoboCop",
      "director": "Paul Verhoeven",
      "year": 1987
    },
    {
      "id": 405,
      "frenchTitle": "Dirty Dancing",
      "director": "Emile Ardolino",
      "year": 1987
    },
    {
      "id": 406,
      "frenchTitle": "Iron Man",
      "director": "Jon Favreau",
      "year": 2008
    },
    {
      "id": 407,
      "frenchTitle": "Le Livre de la jungle",
      "director": "Wolfgang Reitherman",
      "year": 1967
    },
    {
      "id": 408,
      "frenchTitle": "Zelig",
      "director": "Woody Allen",
      "year": 1983
    },
    {
      "id": 409,
      "frenchTitle": "Men in Black",
      "director": "Barry Sonnenfeld",
      "year": 1997
    },
    {
      "id": 410,
      "frenchTitle": "Quatre garçons dans le vent",
      "director": "Richard Lester",
      "year": 1964
    },
    {
      "id": 411,
      "frenchTitle": "Spider-Man 2",
      "director": "Sam Raimi",
      "year": 2004
    },
    {
      "id": 412,
      "frenchTitle": "Fatal Games",
      "director": "Michael Lehmann",
      "year": 1989
    },
    {
      "id": 413,
      "frenchTitle": "Le Monde de Nemo",
      "director": "Andrew Stanton",
      "year": 2003
    },
    {
      "id": 414,
      "frenchTitle": "La Double Vie de Véronique",
      "director": "Krzysztof Kieslowski",
      "year": 1991
    },
    {
      "id": 415,
      "frenchTitle": "Zombie",
      "director": "George A. Romero",
      "year": 1978
    },
    {
      "id": 416,
      "frenchTitle": "Bad Taste",
      "director": "Peter Jackson",
      "year": 1987
    },
    {
      "id": 417,
      "frenchTitle": "Les Seigneurs de Dogtown",
      "director": "Catherine Hardwicke",
      "year": 2005
    },
    {
      "id": 418,
      "frenchTitle": "V pour Vendetta",
      "director": "James McTeigue",
      "year": 2005
    },
    {
      "id": 419,
      "frenchTitle": "Les Moissons du ciel",
      "director": "Terrence Malick",
      "year": 1978
    },
    {
      "id": 420,
      "frenchTitle": "Jerry Maguire",
      "director": "Cameron Crowe",
      "year": 1996
    },
    {
      "id": 421,
      "frenchTitle": "L'Arme fatale",
      "director": "Richard Donner",
      "year": 1987
    },
    {
      "id": 422,
      "frenchTitle": "Un condamné à mort s'est échappé",
      "director": "Robert Bresson",
      "year": 1956
    },
    {
      "id": 423,
      "frenchTitle": "Kill Bill - Volume 2",
      "director": "Quentin Tarantino",
      "year": 2004
    },
    {
      "id": 424,
      "frenchTitle": "Le Port de l'angoisse",
      "director": "Howard Hawks",
      "year": 1944
    },
    {
      "id": 425,
      "frenchTitle": "Wonder Boys",
      "director": "Curtis Hanson",
      "year": 2000
    },
    {
      "id": 426,
      "frenchTitle": "Enduring Love",
      "director": "Roger Michell",
      "year": 2004
    },
    {
      "id": 427,
      "frenchTitle": "Printemps dans une petite ville",
      "director": "Mu Fei",
      "year": 1948
    },
    {
      "id": 428,
      "frenchTitle": "L'Énigme de Kaspar Hauser",
      "director": "Werner Herzog",
      "year": 1974
    },
    {
      "id": 429,
      "frenchTitle": "Danger : Diabolik !",
      "director": "Mario Bava",
      "year": 1968
    },
    {
      "id": 430,
      "frenchTitle": "Les Aventures de Jack Burton dans les griffes du Mandarin",
      "director": "John Carpenter",
      "year": 1986
    },
    {
      "id": 431,
      "frenchTitle": "Electra Glide in Blue",
      "director": "James William Guercio",
      "year": 1973
    },
    {
      "id": 432,
      "frenchTitle": "X-Men 2",
      "director": "Bryan Singer",
      "year": 2003
    },
    {
      "id": 433,
      "frenchTitle": "Will Hunting",
      "director": "Gus Van Sant",
      "year": 1997
    },
    {
      "id": 434,
      "frenchTitle": "Tom et Jerry au piano",
      "director": "William Hanna, Joseph Barbera",
      "year": 1947
    },
    {
      "id": 435,
      "frenchTitle": "American Psycho",
      "director": "Mary Harron",
      "year": 2000
    },
    {
      "id": 436,
      "frenchTitle": "La Belle et la Bête",
      "director": "Gary Trousdale, Kirk Wise",
      "year": 1991
    },
    {
      "id": 437,
      "frenchTitle": "Spider-Man",
      "director": "Sam Raimi",
      "year": 2002
    },
    {
      "id": 438,
      "frenchTitle": "Génération perdue",
      "director": "Joel Schumacher",
      "year": 1987
    },
    {
      "id": 439,
      "frenchTitle": "Tueurs à gages",
      "director": "George Armitage",
      "year": 1997
    },
    {
      "id": 440,
      "frenchTitle": "Akira",
      "director": "Katsuhiro Otomo",
      "year": 1988
    },
    {
      "id": 441,
      "frenchTitle": "Dans la peau de John Malkovich",
      "director": "Spike Jonze",
      "year": 1999
    },
    {
      "id": 442,
      "frenchTitle": "Reviens-moi",
      "director": "Joe Wright",
      "year": 2007
    },
    {
      "id": 443,
      "frenchTitle": "Un après-midi de chien",
      "director": "Sidney Lumet",
      "year": 1975
    },
    {
      "id": 444,
      "frenchTitle": "Hairspray",
      "director": "John Waters",
      "year": 1988
    },
    {
      "id": 445,
      "frenchTitle": "Dumb and Dumber",
      "director": "Peter and Bobby Farrelly",
      "year": 1994
    },
    {
      "id": 446,
      "frenchTitle": "High Fidelity",
      "director": "Stephen Frears",
      "year": 2000
    },
    {
      "id": 447,
      "frenchTitle": "Ten",
      "director": "Abbas Kiarostami",
      "year": 2002
    },
    {
      "id": 448,
      "frenchTitle": "A History of Violence",
      "director": "David Cronenberg",
      "year": 2005
    },
    {
      "id": 449,
      "frenchTitle": "Star Wars - Épisode I : La Menace fantôme",
      "director": "George Lucas",
      "year": 1999
    },
    {
      "id": 450,
      "frenchTitle": "King Kong",
      "director": "Peter Jackson",
      "year": 2005
    },
    {
      "id": 451,
      "frenchTitle": "Speed",
      "director": "Jan De Bont",
      "year": 1994
    },
    {
      "id": 452,
      "frenchTitle": "Incassable",
      "director": "M. Night Shyamalan",
      "year": 2000
    },
    {
      "id": 453,
      "frenchTitle": "Indiana Jones et le Royaume du crâne de cristal",
      "director": "Steven Spielberg",
      "year": 2008
    },
    {
      "id": 454,
      "frenchTitle": "La Mort dans la peau",
      "director": "Paul Greengrass",
      "year": 2004
    },
    {
      "id": 455,
      "frenchTitle": "Top Gun",
      "director": "Tony Scott",
      "year": 1986
    },
    {
      "id": 456,
      "frenchTitle": "28 jours plus tard",
      "director": "Danny Boyle",
      "year": 2002
    },
    {
      "id": 457,
      "frenchTitle": "Full Metal Jacket",
      "director": "Stanley Kubrick",
      "year": 1987
    },
    {
      "id": 458,
      "frenchTitle": "Batman",
      "director": "Tim Burton",
      "year": 1989
    },
    {
      "id": 459,
      "frenchTitle": "Vivre",
      "director": "Akira Kurosawa",
      "year": 1952
    },
    {
      "id": 460,
      "frenchTitle": "Collision",
      "director": "Paul Haggis",
      "year": 2004
    },
    {
      "id": 461,
      "frenchTitle": "Halloween : La Nuit des masques",
      "director": "John Carpenter",
      "year": 1978
    },
    {
      "id": 462,
      "frenchTitle": "Dead Man’s Shoes",
      "director": "Shane Meadows",
      "year": 2004
    },
    {
      "id": 463,
      "frenchTitle": "Juno",
      "director": "Jason Reitman",
      "year": 2007
    },
    {
      "id": 464,
      "frenchTitle": "Les Sept Femmes de Barbe-Rousse",
      "director": "Stanley Donen",
      "year": 1954
    },
    {
      "id": 465,
      "frenchTitle": "L'Armée des douze singes",
      "director": "Terry Gilliam",
      "year": 1995
    },
    {
      "id": 466,
      "frenchTitle": "Snatch",
      "director": "Guy Ritchie",
      "year": 2000
    },
    {
      "id": 467,
      "frenchTitle": "Voyage au bout de l'enfer",
      "director": "Michael Cimino",
      "year": 1978
    },
    {
      "id": 468,
      "frenchTitle": "The Crow",
      "director": "Alex Proyas",
      "year": 1994
    },
    {
      "id": 469,
      "frenchTitle": "Las Vegas Parano",
      "director": "Terry Gilliam",
      "year": 1998
    },
    {
      "id": 470,
      "frenchTitle": "Glengarry",
      "director": "James Foley",
      "year": 1992
    },
    {
      "id": 471,
      "frenchTitle": "Harry Potter et le Prisonnier d'Azkaban",
      "director": "Alfonso Cuarón",
      "year": 2004
    },
    {
      "id": 472,
      "frenchTitle": "Le Doulos",
      "director": "Jean-Pierre Melville",
      "year": 1962
    },
    {
      "id": 473,
      "frenchTitle": "Into the Wild",
      "director": "Sean Penn",
      "year": 2007
    },
    {
      "id": 474,
      "frenchTitle": "Opération Dragon",
      "director": "Robert Clouse",
      "year": 1973
    },
    {
      "id": 475,
      "frenchTitle": "Pirates des Caraïbes : Le Secret du coffre maudit",
      "director": "Gore Verbinski",
      "year": 2006
    },
    {
      "id": 476,
      "frenchTitle": "Santa Sangre",
      "director": "Alejandro Jodorowsky",
      "year": 1989
    },
    {
      "id": 477,
      "frenchTitle": "La Fureur de vivre",
      "director": "Nicholas Ray",
      "year": 1955
    },
    {
      "id": 478,
      "frenchTitle": "Flesh",
      "director": "Paul Morrissey",
      "year": 1968
    },
    {
      "id": 479,
      "frenchTitle": "La Vie secrète de Walter Mitty",
      "director": "Norman Z. McLeod",
      "year": 1947
    },
    {
      "id": 480,
      "frenchTitle": "La Chambre du fils",
      "director": "Nanni Moretti",
      "year": 2001
    },
    {
      "id": 481,
      "frenchTitle": "Topsy-Turvy",
      "director": "Mike Leigh",
      "year": 1999
    },
    {
      "id": 482,
      "frenchTitle": "Scream",
      "director": "Wes Craven",
      "year": 1996
    },
    {
      "id": 483,
      "frenchTitle": "Au-delà de la gloire",
      "director": "Samuel Fuller",
      "year": 1980
    },
    {
      "id": 484,
      "frenchTitle": "The Fountain",
      "director": "Darren Aronofsky",
      "year": 2006
    },
    {
      "id": 485,
      "frenchTitle": "The Wicker Man",
      "director": "Robin Hardy",
      "year": 1973
    },
    {
      "id": 486,
      "frenchTitle": "Diamants sur canapé",
      "director": "Blake Edwards",
      "year": 1961
    },
    {
      "id": 487,
      "frenchTitle": "SuperGrave",
      "director": "Greg Mottola",
      "year": 2007
    },
    {
      "id": 488,
      "frenchTitle": "Princesse Mononoké",
      "director": "Hayao Miyazaki",
      "year": 1997
    },
    {
      "id": 489,
      "frenchTitle": "Brick",
      "director": "Rian Johnson",
      "year": 2005
    },
    {
      "id": 490,
      "frenchTitle": "Sweeney Todd : Le Diabolique Barbier de Fleet Street",
      "director": "Tim Burton",
      "year": 2007
    },
    {
      "id": 491,
      "frenchTitle": "Ben-Hur",
      "director": "William Wyler",
      "year": 1959
    },
    {
      "id": 492,
      "frenchTitle": "Amours chiennes",
      "director": "Alejandro González Iñárritu",
      "year": 2000
    },
    {
      "id": 493,
      "frenchTitle": "En compagnie des hommes",
      "director": "Neil LaBute",
      "year": 1997
    },
    {
      "id": 494,
      "frenchTitle": "Sideways",
      "director": "Alexander Payne",
      "year": 2004
    },
    {
      "id": 495,
      "frenchTitle": "Le Rock du bagne",
      "director": "Richard Thorpe",
      "year": 1957
    },
    {
      "id": 496,
      "frenchTitle": "Superman Returns",
      "director": "Bryan Singer",
      "year": 2006
    },
    {
      "id": 497,
      "frenchTitle": "Tigre et Dragon",
      "director": "Ang Lee",
      "year": 2000
    },
    {
      "id": 498,
      "frenchTitle": "Retour vers le futur 2",
      "director": "Robert Zemeckis",
      "year": 1989
    },
    {
      "id": 499,
      "frenchTitle": "Saw",
      "director": "James Wan",
      "year": 2004
    },
    {
      "id": 500,
      "frenchTitle": "Ocean’s Eleven",
      "director": "Steven Soderbergh",
      "year": 2001
    }
  ]
};
const CLASSIC_MOVIES = MOVIE_DATASET.movies;
