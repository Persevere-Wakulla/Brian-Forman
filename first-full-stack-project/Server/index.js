import express from "express";
import cors from "cors";

// Create our container for our sever
const app = express();

// Middleware
app.use(cors());

// get listening for GET request
// (route, (req,res))
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
app.get("/", (req, res) => {
  // API
  res.status(200).json([
    {
      id: 1,
      name: "BlueBerry CupCakes",
      image: "/Server/images/BlueberryCupcake.jpg",
      description:
        "BlueBerry Cupcakes with vanilla icing and raspberry sprinkles",
      quantity: 12,
      price: 29.99,
      category: "Cupcakes",
    },
    {
      id: 2,
      name: "Cherry Pie",
      image: "/Server/images/CherryPie.jpg",
      description:
        "This is a delicious homemade pie you and your family can really enjoy together",
      quantity: 1,
      price: 12.99,
      category: "Pie",
    },
    {
      id: 3,
      name: "Chocolate Cake",
      image: "/Server/images/ChocolateCake.jpg",
      description:
        "This is a Chocolate Cake with chocolate icing with carmel filling",
      quantity: 1,
      price: 42.99,
      category: "Cake",
    },
    {
      id: 4,
      name: "Chocolate Chip Cookies",
      image: "/Server/images/ChocolateChipCookies.jpg",
      description: "This are some home made Chocolate Chip cookies",
      quantity: 24,
      price: 15.99,
      category: "Cookies",
    },
    {
      id: 5,
      name: "Chocolate Cup Cakes",
      image: "/Server/images/ChocolateCupCake.jpg",
      description:
        "These are chocolate cupcakes with banana icing and raspberry sprinkles",
      quantity: 12,
      price: 15.99,
      category: "CupCakes",
    },
    {
      id: 6,
      name: "Fruit Cake",
      image: "/Server/images/FruitCake.jpg",
      description:
        "This is a delicious fruit cake with a variety of assorted fruit",
      quantity: 1,
      price: 34.99,
      category: "Cake",
    },
    {
      id: 7,
      name: "German Chocolate Cake",
      image: "/Server/images/GermanChocolateCake.jpg",
      description:
        "This is a German chocolate cake with a glazed cherry topping",
      quantity: 1,
      price: 40.0,
      category: "Cake",
    },
    {
      id: 8,
      name: "Love Bird Cookies",
      image: "/Server/images/LoveBirdsCookies.jpg",
      description:
        "Delicious heart shaped gingerbread cookies with assorted icing ",
      quantity: 1,
      price: 3.99,
      category: "Cookies",
    },
    {
      id: 9,
      name: "Mini Apple Pie",
      image: "/Server/images/MiniApplePies.jpg",
      description: "Amazing miniature apple pies with a cinnamon coating",
      quantity: 1,
      price: 8.99,
      category: "Pies",
    },
    {
      id: 10,
      name: "Oatmeal & Raisin Cookies",
      image: "/Server/images/OatmealandRasinCookies.jpg",
      description: "Home made oatmeal and raisin cookies",
      quantity: 24,
      price: 14.99,
      category: "Cookies",
    },
    {
      id: 11,
      name: "Chocolate Chip Brownies",
      image: "/Server/images/Chocolatechipbrownies.jpg",
      description: "Homemade delicious chocolate chip and raspberry brownies",
      quantity: 1,
      price: 2.99,
      category: "Brownies",
    },
    {
      id: 12,
      name: "Sprinkled Donuts",
      image: "/Server/images/SprinkledDonuts.jpg",
      description: "Glazed Donuts with grape icing and sprinkles",
      quantity: 12,
      price: 18.99,
      category: "Donuts",
    },
    {
      id: 13,
      name: "Gingerbread Cookies",
      image: "/Server/images/StarGingerBreadCookies.jpg",
      description:
        "Star Shaped gingerbread cookies with white icing and chocolate m&m's",
      quantity: 1,
      price: 2.99,
      category: "Cookies",
    },
    {
      id: 14,
      name: "Strawberry CupCakes",
      image: "/Server/images/StrawberryCupcakes.jpg",
      description: "Vanilla cupcakes with strawberry icing",
      quantity: 12,
      price: 15.99,
      category: "CupCakes",
    },
    {
      id: 15,
      name: "Strawberry Cake",
      image: "/Server/images/StrawberryCake.jpg",
      description:
        "This is a delicious homemade with vanilla cake mix and fresh strawberries ",
      quantity: 1,
      price: 18.99,
      category: "Cake",
    },
    {
      id: 16,
      name: "StrawBerry Short Cake",
      image: "/Server/images/StrawberryShortCake.jpg",
      description:
        "This a amazing dish one of my favorites of all times. Its a strawberry short cake made with fresh strawberries, blueberries, and whip cream",
      quantity: 1,
      price: 24.99,
      category: "Cake",
    },
    {
      id: 17,
      name: "Walnut Brownies",
      image: "/Server/images/WalnutBrownies.jpg",
      description: "These are some great walnut and chocolate chip brownies",
      quantity: 1,
      price: 1.99,
      category: "Brownies",
    },
    {
      id: 18,
      name: "Wedding Cake",
      image: "/Server/images/WeddingCake.jpg",
      description:
        "This is a beautiful and delicious cake for that special day",
      quantity: 1,
      price: 59.99,
      category: "Cake",
    },
  ]);

  app.get("/blueberrycupcakes", (req, res) => {
    res.status(200).json({
      id: 1,
      Name: "BlueBerry CupCakes",
      image: "/Server/images/BlueberryCupcake.jpg",
      Description:
        "BlueBerry Cupcakes with vanilla icing and raspberry sprinkles",
      Quantity: 12,
      Price: 29.99,
      Category: "CupCakes",
    });
  });

  app.get("/cherrypie", (req, res) => {
    res.status(200).json({
      id: 2,
      Name: "Cherry Pie",
      image: "/Server/images/CherryPie.jpg",
      Description:
        "This is a delicious homemade pie you and your family can really enjoy together",
      Quantity: 1,
      Price: 12.99,
      Category: "Pie",
    });
  });

  app.get("/chocolatecake", (req, res) => {
    res.status(200).json({
      id: 3,
      Name: "Chocolate Cake",
      image: "/Server/images/ChocolateCake.jpg",
      Description:
        "This is a Chocolate Cake with chocolate icing with carmel filling",
      Quantity: 1,
      Price: 42.99,
      Category: "Cake",
    });
  });

  app.get("/chocolatechipcookies", (req, res) => {
    res.status(200).json({
      id: 4,
      Name: "Chocolate Chip Cookies",
      image: "/Server/images/ChocolateChipCookies.jpg",
      Description: "This are some home made Chocolate Chip cookies",
      Quantity: 24,
      Price: 15.99,
      Category: "Cookies",
    });
  });

  app.get("/chocolatecupcakes", (req, res) => {
    res.status(200).json({
      id: 5,
      Name: "Chocolate Cup Cakes",
      image: "/Server/images/ChocolateCupCake.jpg",
      Description:
        "These are chocolate cupcakes with banana icing and raspberry sprinkles",
      Quantity: 12,
      Price: 15.99,
      Category: "CupCakes",
    });
  });

  app.get("/fruitcake", (req, res) => {
    res.status(200).json({
      id: 6,
      Name: "Fruit Cake",
      image: "/Server/images/FruitCake.jpg",
      Description:
        "This is a delicious fruit cake with a variety of assorted fruit",
      Quantity: 1,
      Price: 34.99,
      Category: "Cake",
    });
  });

  app.get("/germanchocolatecake", (req, res) => {
    res.status(200).json({
      id: 7,
      Name: "German Chocolate Cake",
      image: "/Server/images/GermanChocolateCake.jpg",
      Description:
        "This is a German chocolate cake with a glazed cherry topping",
      Quantity: 1,
      Price: 40.0,
      Category: "Cake",
    });
  });

  app.get("/lovebirdcookies", (req, res) => {
    res.status(200).json({
      id: 8,
      Name: "Love Bird Cookies",
      image: "/Server/images/LoveBirdsCookies.jpg",
      Description:
        "Delicious heart shaped gingerbread cookies with assorted icing ",
      Quantity: 1,
      Price: 3.99,
      Category: "Cookies",
    });
  });

  app.get("/miniapplepies", (req, res) => {
    res.status(200).json({
      id: 9,
      Name: "Mini Apple Pie",
      image: "/Server/images/MiniApplePies.jpg",
      Description: "Amazing miniature apple pies with a cinnamon coating",
      Quantity: 1,
      Price: 8.99,
      Category: "Pie",
    });
  });

  app.get("/oatmealcookies", (req, res) => {
    res.status(200).json({
      OatmealCookies: {
        id: 10,
        Name: "Oatmeal & Raisin Cookies",
        image: "/Server/images/OatmealandRasinCookies.jpg",
        Description: "Home made oatmeal and raisin cookies",
        Quantity: 24,
        Price: 14.99,
        Category: "Cookies",
      },
    });
  });

  app.get("/chocolatechipbrownies", (req, res) => {
    res.status(200).json({
      id: 11,
      Name: "Chocolate Chip Brownies",
      image: "/Server/images/Chocolatechipbrownies.jpg",
      Description: "Homemade delicious chocolate chip and raspberry brownies",
      Quantity: 1,
      Price: 2.99,
      Category: "Brownies",
    });
  });

  app.get("/sprinkleddonuts", (req, res) => {
    res.status(200).json({
      id: 12,
      Name: "Sprinkled Donuts",
      image: "/Server/images/SprinkledDonuts.jpg",
      Description: "Glazed Donuts with grape icing and sprinkles",
      Quantity: 12,
      Price: 18.99,
      Category: "Donuts",
    });
  });

  app.get("/gingerbreadcoookies", (req, res) => {
    res.status(200).json({
      id: 13,
      Name: "Gingerbread Cookies",
      image: "/Server/images/StarGingerBreadCookies.jpg",
      Description:
        "Star Shaped gingerbread cookies with white icing and chocolate m&m's",
      Quantity: 1,
      Price: 2.99,
      Category: "Cookies",
    });
  });

  app.get("/strawberrycupcakes", (req, res) => {
    res.status(200).json({
      id: 14,
      Name: "Strawberry CupCakes",
      image: "/Server/images/StrawberryCupcakes.jpg",
      Description: "Vanilla cupcakes with strawberry icing",
      Quantity: 12,
      Price: 15.99,
      Category: "CupCakes",
    });
  });
  app.get("/strawberrycake", (req, res) => {
    res.status(200).json({
      StrawberryCake: {
        id: 15,
        Name: "Strawberry Cake",
        image: "/Server/images/StrawberryCake.jpg",
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
      id: 16,
      Name: "StrawBerry Short Cake",
      image: "/Server/images/StrawberryShortCake.jpg",
      Description:
        "This a amazing dish one of my favorites of all times. Its a strawberry short cake made with fresh strawberries, blueberries, and whip cream",
      Quantity: 1,
      Price: 24.99,
      Category: "Cake",
    });
  });

  app.get("/walnutbrownies", (req, res) => {
    res.status(200).json({
      id: 17,
      Name: "Walnut Brownies",
      image: "/Server/images/WalnutBrownies.jpg",
      Description: "These are some great walnut and chocolate chip brownies",
      Quantity: 1,
      Price: 1.99,
      Category: "Brownies",
    });
  });

  app.get("/weddingcake", (req, res) => {
    res.status(200).json({
      id: 18,
      Name: "Wedding Cake",
      image: "/Server/images/WeddingCake.jpg",
      Description:
        "This is a beautiful and delicious cake for that special day",
      Quantity: 1,
      Price: 59.99,
      Category: "Cake",
    });
  });
});

const port = 3000;
// Start our server/listen
app.listen(port, () => {
  console.log(`your server is up on port ${port} http://localhost:${port}`);
});
