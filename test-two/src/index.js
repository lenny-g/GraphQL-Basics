const { ApolloServer, gql } = require("apollo-server");

const categoriesFromDB = [
  {
    id: 1,
    categoryName: "Sports wear",
    product: {
      id: 11,
      productName: "Swim shorts",
      price: 8.99,
      stock: 13,
      tag: {
        tagName1: "Swim",
        tagName2: "Sports",
      },
    },
  },

  {
    id: 2,
    categoryName: "Night wear",
    product: {
      id: 1,
      productName: "Dressing gown",
      price: 13.99,
      stock: 17,
      tag: {
        tagName1: "Sleep",
        tagName2: "Comfort",
      },
    },
  },

  {
    id: 1,
    categoryName: "Sports wear",
    product: {
      id: 12,
      productName: "Cycle shorts",
      price: 5,
      stock: 8,
      tag: {
        tagName1: "Cycle",
        tagName2: "Sports",
      },
    },
  },

  {
    id: 2,
    categoryName: "Night wear",
    product: {
      id: 2,
      productName: "Eye mask",
      price: 2.99,
      stock: 37,
      tag: {
        tagName1: "Sleep",
        tagName2: "Mask",
      },
    },
  },

  {
    id: 3,
    categoryName: "Business attire",
    product: {
      id: 4,
      productName: "Tie",
      price: 5.99,
      stock: 52,
      tag: {
        tagName1: "Business",
        tagName2: "Smart",
      },
    },
  },
];

const productsFromDB = [
  {
    id: 11,
    productName: "Swim shorts",
    price: 8.99,
    stock: 13,
    tag: {
      tagName1: "Swim",
      tagName2: "Sports",
    },
  },
  {
    id: 1,
    productName: "Dressing gown",
    price: 13.99,
    stock: 17,
    tag: {
      tagName1: "Sleep",
      tagName2: "Comfort",
    },
  },
  {
    id: 12,
    productName: "Cycle shorts",
    price: 5,
    stock: 8,
    tag: {
      tagName1: "Cycle",
      tagName2: "Sports",
    },
  },
  {
    id: 2,
    productName: "Eye mask",
    price: 2.99,
    stock: 37,
    tag: {
      tagName1: "Sleep",
      tagName2: "Mask",
    },
  },
  {
    id: 4,
    productName: "Tie",
    price: 5.99,
    stock: 52,
    tag: {
      tagName1: "Business",
      tagName2: "Smart",
    },
  },
];

const tagsFromDB = [
  {
    tagName1: "Swim",
    tagName2: "Sports",
  },
  {
    tagName1: "Sleep",
    tagName2: "Comfort",
  },
  {
    tagName1: "Cycle",
    tagName2: "Sports",
  },
  {
    tagName1: "Sleep",
    tagName2: "Mask",
  },
  {
    tagName1: "Business",
    tagName2: "Smart",
  },
];

const typeDefs = gql`
  type Category {
    id: ID
    categoryName: String
    product: Product
  }

  type Product {
    id: ID
    productName: String
    price: Float
    stock: Int
    tag: Tag
  }

  type Tag {
    tagName1: String
    tagName2: String
  }
  type Query {
    categories: [Category]
    products: [Product]
    tags: [Tag]
  }
`;

const categoryResolver = () => {
  return categoriesFromDB;
};

const productResolver = () => {
  return productsFromDB;
};

const tagResolver = () => {
  return tagsFromDB;
};

const resolvers = {
  Query: {
    categories: categoryResolver,
    products: productResolver,
    tags: tagResolver,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
