const { ApolloServer, gql } = require("apollo-server");

const moviesFromDB = [
  {
    id: 121,
    title: "The Shawshank Redemption",
    release: 1994,
    runtime: 142,
    ageRating: "15",
    imdbRating: 9.2,
    director: {
      firstName: "Frank",
      lastName: "Darabont",
    },
  },

  {
    id: 122,
    title: "The Godfather",
    release: 1972,
    runtime: 175,
    ageRating: "X",
    imdbRating: 9.1,
    director: {
      firstName: "Francis Ford",
      lastName: "Coppola",
    },
  },

  {
    id: 123,
    title: "The Godfather: Part II",
    release: 1974,
    runtime: 202,
    ageRating: "X",
    imdbRating: 9,
    director: {
      firstName: "Francis Ford",
      lastName: "Coppola",
    },
  },
  {
    id: 124,
    title: "The Dark Knight",
    release: 2008,
    runtime: 152,
    ageRating: "12A",
    imdbRating: 9,
    director: {
      firstName: "Christopher",
      lastName: "Nolan",
    },
  },
  {
    id: 125,
    title: "12 Angry Men",
    release: 1957,
    runtime: 96,
    ageRating: "U",
    imdbRating: 9,
    director: {
      firstName: "Sidney",
      lastName: "Lumet",
    },
  },
];

const directorsFromDB = [
  {
    firstName: "Frank",
    lastName: "Darabont",
  },
  {
    firstName: "Francis Ford",
    lastName: "Coppola",
  },
  {
    firstName: "Christopher",
    lastName: "Nolan",
  },
  {
    firstName: "Sidney",
    lastName: "Lumet",
  },
];

const typeDefs = gql`
  type Movie {
    id: ID
    title: String
    release: Int
    runtime: Int
    ageRating: String
    imdbRating: Float
    director: Director
  }

  type Director {
    firstName: String
    lastName: String
  }

  type Query {
    movies: [Movie]
    director: [Director]
  }
`;

const movieResolver = () => {
  return moviesFromDB;
};

const directorResolver = () => {
  return directorsFromDB;
};

const resolvers = {
  Query: {
    movies: movieResolver,
    director: directorResolver,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  capital(`🚀  Server ready at ${url}`);
});
