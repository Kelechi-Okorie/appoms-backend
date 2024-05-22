const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const session = require("cookie-session");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.BACKEND_PORT;
const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "APPOMS ALX portfolio project API",
      description: "APPOMS ALX portfolio project APIPlayground",
      contact: {
        name: "APPOMS",
      },
      servers: ["http://localhost:4500"],
    },
    schemes: ["http", "https"],
    components: {
      securitySchemes: {
        Authorization: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },
  },
  apis: ["./routes/*.js", "./routes/*/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "secret",
  })
);
app.use(express.static(`${__dirname}/assets`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(passport.session());

//importing all routes (general)
const allRoutes = require("./routes/index");

app.use("/api/v1", allRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the APPOMS ALX portfolio project API Playground");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
