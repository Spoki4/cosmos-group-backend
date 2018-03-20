import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typedi";
import { createExpressServer } from "routing-controllers";
import { AuthController } from "./controller/AuthController";

const port = process.env.PORT || 3000;

useContainer(Container);
createConnection({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [__dirname + "/entity/*.js"],
  synchronize: true,
  logging: true
})
  .then(async connection => {
    console.log("Connected. Now run express app");
    createExpressServer({
      controllers: [AuthController]
    }).listen(port);
    console.log(
      "Server is up and running on port " +
        port +
        ". Now send requests to check if everything works."
    );
  })
  .catch(error => console.log("Error: ", error));
