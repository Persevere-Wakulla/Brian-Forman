import express from "express";
import cors from "cors"

// Create our container for our sever
const app = express();

// Middleware
app.use(cors())


// get listening for GET request
// (route, (req,res))
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
app.get("/", (req, res) => {
  // API
  res.status(200).json({
    "Blueberry CupCakes": {
      id: 1,
      Name: "BlueBerry CupCakes",
      image: "images/Blueberry Cupcake.jpg",
      Description:
        "BlueBerry Cupcakes with vanilla icing and raspberry sprinkles",
      Quantity: 12,
      Price: 29.99,
      Category: "Cupcakes",
    },
    "Cherry Pie": {
      id: 2,
      Name: "Cherry Pie",
      image: "images/Cherry Pie.jpg",
      Description:
        "This is a delicious homemade pie you and your family can really enjoy together",
      Quantity: 1,
      Price: 12.99,
      Category: "Pie",  

    },
    "Chocolate Cake": {
      id: 3,
      Name: "Chocolate Cake",
      image: "/images/Chocolate  Cake.jpg",
      Description:
        "This is a Chocolate Cake with chocolate icing with carmel filling",
      Quantity: 1,
      Price: 42.99,
      Category: "Cake",
    },
    "ChocolateChip Cookies": {
      id: 4,
      Name: "Chocolate Chip Cookies",
      image: "images/Chocolate Chip Cookies.jpg",
      Description: "This are some home made Chocolate Chip cookies",
      Quantity: 24,
      Price: 15.99,
      Category: "Cookies",
    },
    "Chocolate CupCakes": {
      id: 5,
      Name: "Chocolate Cup Cakes",
      image: "./images/Chocolate CupCake.jpg",
      Description:
        "These are chocolate cupcakes with banana icing and raspberry sprinkles",
      Quantity: 12,
      Price: 15.99,
      Category: "CupCakes",
    },
    FruitCake: {
      id: 6,
      Name: "Fruit Cake",
      image: "images/Fruit Cake.jpg",
      Description:
        "This is a delicious fruit cake with a variety of assorted fruit",
      Quantity: 1,
      Price: 34.99,
      Category: "Cake",
    },
    "GermanChocolate Cake": {
      id: 7,
      Name: "German Chocolate Cake",
      image: "/images/German Chocolate Cake.jpg",
      Description:
        "This is a German chocolate cake with a glazed cherry topping",
      Quantity: 1,
      Price: 40.0,
      Category: "Cake",
    },
    "LoveBird Cookies": {
      id: 8,
      Name: "Love Bird Cookies",
      image: "/images/Love Birds Cookies.jpg",
      Description:
        "Delicious heart shaped gingerbread cookies with assorted icing ",
      Quantity: 1,
      Price: 3.99,
      Category: "Cookies",
    },
    "Mini ApplePies": {
      id: 9,
      Name: "Mini Apple Pie",
      image: "/images/Mini Apple Pies.jpg",
      Description: "Amazing miniature apple pies with a cinnamon coating",
      Quantity: 1,
      Price: 8.99,
      Category: "Pies",
    },
    "Oatmeal Cookies": {
      id: 10,
      Name: "Oatmeal & Raisin Cookies",
      image: "./images/Oatmeal & Rasin Cookies.jpg",
      Description: "Home made oatmeal and raisin cookies",
      Quantity: 24,
      Price: 14.99,
      Category: "Cookies",
    },
    "ChocolateChip Brownies": {
      id: 11,
      Name: "Chocolate Chip Brownies",
      image: "./images/Raspberry & Chocolate Chip Brownies.jpg",
      Description: "Homemade delicious chocolate chip and raspberry brownies",
      Quantity: 1,
      Price: 2.99,
      Category: "Brownies",
    },
    "Sprinkled Donuts": {
      id: 12,
      Name: "Sprinkled Donuts",
      image: "/images/Sprinkled Donuts.jpg",
      Description: "Glazed Donuts with grape icing and sprinkles",
      Quantity: 12,
      Price: 18.99,
      Category: "Donuts",
    },
    "Gingerbread Cookies": {
      id: 13,
      Name: "Gingerbread Cookies",
      image: "/images/Star GingerBread Cookies.jpg",
      Description:
        "Star Shaped gingerbread cookies with white icing and chocolate m&m's",
      Quantity: 1,
      Price: 2.99,
      Category: "Cookies",
    },
    "Strawberry CupCakes": {
      id: 14,
      Name: "Strawberry CupCakes",
      image: "/images/Strawberry Cupcakes.jpg",
      Description: "Vanilla cupcakes with strawberry icing",
      Quantity: 12,
      Price: 15.99,
      Category: "CupCakes",
    },
    "Strawberry Cake": {
      id: 15,
      Name: "Strawberry Cake",
      image: "/images/Strawberry Cake.jpg",
      Description:
        "This is a delicious homemade with vanilla cake mix and fresh strawberries ",
      Quantity: 1,
      Price: 18.99,
      Category: "Cake",
    },
    "Strawberry ShortCake": {
      id: 16,
      Name: "StrawBerry Short Cake",
      image: "./images/Strawberry Short Cake.jpg",
      Description:
        "This a amazing dish one of my favorites of all times. Its a strawberry short cake made with fresh strawberries, blueberries, and whip cream",
      Quantity: 1,
      Price: 24.99,
      Category: "Cake",
    },
    "Walnut Brownies": {
      id: 17,
      Name: "Walnut Brownies",
      image: "/images/Walnut Brownies.jpg",
      Description: "These are some great walnut and chocolate chip brownies",
      Quantity: 1,
      Price: 1.99,
      Category: "Brownies",
    },
    "Wedding Cake": {
      id: 18,
      Name: "Wedding Cake",
      image: "/images/Wedding Cake.jpg",
      Description:
        "This is a beautiful and delicious cake for that special day",
      Quantity: 1,
      Price: 59.99,
      Category: "Cake",
    },
  });

  app.get("/blueberrycupcakes", (req, res) => {
    res.status(200).json({
      BlueberryCupcakes: {
        id: 1,
        Name: "BlueBerry CupCakes",
        image: "images/Blueberry Cupcake.jpg",
        Description:
          "BlueBerry Cupcakes with vanilla icing and raspberry sprinkles",
        Quantity: 12,
        Price: 29.99,
        Category: "CupCakes",
      },
    });
  });

  app.get("/cherrypie", (req, res) => {
    res.status(200).json({
      CherryPie: {
        id: 2,
        Name: "Cherry Pie",
        image: "images/Cherry Pie.jpg",
        Description:
          "This is a delicious homemade pie you and your family can really enjoy together",
        Quantity: 1,
        Price: 12.99,
        Category: "Pie",
      },
    });
  });

  app.get("/chocolatecake", (req, res) => {
    res.status(200).json({
      chocolateCake: {
        id: 3,
        Name: "Chocolate Cake",
        image: "/images/Chocolate  Cake.jpg",
        Description:
          "This is a Chocolate Cake with chocolate icing with carmel filling",
        Quantity: 1,
        Price: 42.99,
        Category: "Cake",
      },
    });
  });

  app.get("/chocolatechipcookies", (req, res) => {
    res.status(200).json({
      ChocolateChipCookies: {
        id: 4,
        Name: "Chocolate Chip Cookies",
        image: "images/Chocolate Chip Cookies.jpg",
        Description: "This are some home made Chocolate Chip cookies",
        Quantity: 24,
        Price: 15.99,
        Category: "Cookies",
      },
    });
  });

  app.get("/chocolatecupcakes", (req, res) => {
    res.status(200).json({
      ChocolateCupCakes: {
        id: 5,
        Name: "Chocolate Cup Cakes",
        image: "./images/Chocolate CupCake.jpg",
        Description:
          "These are chocolate cupcakes with banana icing and raspberry sprinkles",
        Quantity: 12,
        Price: 15.99,
        Category: "CupCakes",
      },
    });
  });

  app.get("/fruitcake", (req, res) => {
    res.status(200).json({
      FruitCake: {
        id: 6,
        Name: "Fruit Cake",
        image: "images/Fruit Cake.jpg",
        Description:
          "This is a delicious fruit cake with a variety of assorted fruit",
        Quantity: 1,
        Price: 34.99,
        Category: "Cake",
      },
    });
  });

  app.get("/germanchocolatecake", (req, res) => {
    res.status(200).json({
      GermanChocolateCake: {
        id: 7,
        Name: "German Chocolate Cake",
        image: "/images/German Chocolate Cake.jpg",
        Description:
          "This is a German chocolate cake with a glazed cherry topping",
        Quantity: 1,
        Price: 40.0,
        Category: "Cake",
      },
    });
  });

  app.get("/lovebirdcookies", (req, res) => {
    res.status(200).json({
      LoveBirdCookies: {
        id: 8,
        Name: "Love Bird Cookies",
        image: "/images/Love Birds Cookies.jpg",
        Description:
          "Delicious heart shaped gingerbread cookies with assorted icing ",
        Quantity: 1,
        Price: 3.99,
        Category: "Cookies",
      },
    });
  });

  app.get("/miniapplepies", (req, res) => {
    res.status(200).json({
      MiniApplePies: {
        id: 9,
        Name: "Mini Apple Pie",
        image: "/images/Mini Apple Pies.jpg",
        Description: "Amazing miniature apple pies with a cinnamon coating",
        Quantity: 1,
        Price: 8.99,
        Category: "Pie",
      },
    });
  });

  app.get("/oatmealcookies", (req, res) => {
    res.status(200).json({
      OatmealCookies: {
        id: 10,
        Name: "Oatmeal & Raisin Cookies",
        image: "./images/Oatmeal & Rasin Cookies.jpg",
        Description: "Home made oatmeal and raisin cookies",
        Quantity: 24,
        Price: 14.99,
        Category: "Cookies",
      },
    });
  });

  app.get("/chocolatechipbrownies", (req, res) => {
    res.status(200).json({
      ChocolateChipBrownies: {
        id: 11,
        Name: "Chocolate Chip Brownies",
        image: "./images/Raspberry & Chocolate Chip Brownies.jpg",
        Description: "Homemade delicious chocolate chip and raspberry brownies",
        Quantity: 1,
        Price: 2.99,
        Category: "Brownies",
      },
    });
  });

  app.get("/sprinkleddonuts", (req, res) => {
    res.status(200).json({
      SprinkledDonuts: {
        id: 12,
        Name: "Sprinkled Donuts",
        image: "/images/Sprinkled Donuts.jpg",
        Description: "Glazed Donuts with grape icing and sprinkles",
        Quantity: 12,
        Price: 18.99,
        Category: "Donuts",
      },
    });
  });

  app.get("/gingerbreadcoookies", (req, res) => {
    res.status(200).json({
      GingerbreadCookies: {
        id: 13,
        Name: "Gingerbread Cookies",
        image: "/images/Star GingerBread Cookies.jpg",
        Description:
          "Star Shaped gingerbread cookies with white icing and chocolate m&m's",
        Quantity: 1,
        Price: 2.99,
        Category: "Cookies",
      },
    });
  });

  app.get("/strawberrycupcakes", (req, res) => {
    res.status(200).json({
      StrawberryCupcakes: {
        id: 14,
        Name: "Strawberry CupCakes",
        image: "/images/Strawberry Cupcakes.jpg",
        Description: "Vanilla cupcakes with strawberry icing",
        Quantity: 12,
        Price: 15.99,
        Category: "CupCakes",
      },
    });
  });
  app.get("/strawberrycake", (req, res) => {
    res.status(200).json({
      StrawberryCake: {
        id: 15,
        Name: "Strawberry Cake",
        image: "/images/Strawberry Cake.jpg",
        Description:
          "This is a delicious homemade with vanilla cake mix and fresh strawberries ",
        Quantity: 1,
        Price: 18.99,
        Category: "Cake",
      },
    });
  });

  app.get("/strawberryshortcake", (req, res) => {
    res.status(200).json({
      StrawberryShortCake: {
        id: 16,
        Name: "StrawBerry Short Cake",
        image: "./images/Strawberry Short Cake.jpg",
        Description:
          "This a amazing dish one of my favorites of all times. Its a strawberry short cake made with fresh strawberries, blueberries, and whip cream",
        Quantity: 1,
        Price: 24.99,
        Category: "Cake",
      },
    });
  });

  app.get("/walnutbrownies", (req, res) => {
    res.status(200).json({
      WalnutBrownies: {
        id: 17,
        Name: "Walnut Brownies",
        image: "/images/Walnut Brownies.jpg",
        Description: "These are some great walnut and chocolate chip brownies",
        Quantity: 1,
        Price: 1.99,
        Category: "Brownies",
      },
    });
  });

  app.get("/weddingcake", (req, res) => {
    res.status(200).json({
      WeddingCake: {
        id: 18,
        Name: "Wedding Cake",
        image: "/images/Wedding Cake.jpg",
        Description:
          "This is a beautiful and delicious cake for that special day",
        Quantity: 1,
        Price: 59.99,
        Category: "Cake",
      },
    });
  });
});

const port = 3000;
// Start our server/listen
app.listen(port, () => {
  console.log(`your server is up on port ${port} http://localhost:${port}`);
});
