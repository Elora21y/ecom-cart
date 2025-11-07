const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = 2100;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster21.x54inhf.mongodb.net/?appName=Cluster21`;
// const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db(process.env.DB_USER);
const productsCollection = db.collection("products");
const cartsCollection = db.collection("cart");
const checkoutCollection = db.collection("checkout");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // <------------------------PRODUCT----------------------------->
    //find product
    app.get("/products/:id", async (req, res) => {
          const query = req.params.id;
      const products = await productsCollection.findOne({_id : new ObjectId(query)})
      res.send(products);
    });

    //find products
    app.get("/products", async (req, res) => {
      const products = await productsCollection.find().toArray();
      res.send(products);
    });

    //product delete
    app.delete("/products/:id", async (req, res) => {
      const query = req.params.id;
      const result = await productsCollection.deleteOne({
        _id: new ObjectId(query),
      });
      if (result.deletedCount === 0) {
        return res.status(404).send({ message: "product not found to delete" });
      }
      res.send(result);
    });

    // ------------------------CART-------------------------------
    //find product
    app.get("/carts/:id", async (req, res) => {
          const query = req.params.id;
      const cart = await cartsCollection.findOne({_id : new ObjectId(query)})
      res.send(cart);
    });
    //find carts
    app.get("/carts", async (req, res) => {
      const carts = await cartsCollection.find().toArray();
      res.send(carts);
    });

    //find cart
    app.post("/carts", async (req, res) => {
           const query = req.body
      const cart = await cartsCollection.insertOne(query)
      res.send(cart);
    });

    //find cart
    app.get("/carts", async (req, res) => {
      const products = await cartsCollection.find().toArray();
      res.send(products);
    });
    //product cart
    app.delete("/carts/:id", async (req, res) => {
      const query = req.params.id;
      const result = await cartsCollection.deleteOne({
        _id: new ObjectId(query),
      });
      if (result.deletedCount === 0) {
        return res.status(404).send({ message: "cart not found to delete" });
      }
      res.send(result);
    });

    // <---------------------------CHECKOUT----------------------->
    //product cart
    app.post("/checkout", async (req, res) => {
      const query = req.body
      const result = await checkoutCollection.insertOne(query)
    //   if (result.deletedCount === 0) {
    //     return res.status(404).send({ message: "product not found to delete" });
    //   }
      res.send(result);
    });

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
