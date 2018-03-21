import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typedi";
import { createExpressServer } from "routing-controllers";
import { AuthController } from "./controller/auth/AuthController";
import * as cors from "cors";

const port = process.env.PORT || 3000;

(async () => {
  try {
    useContainer(Container);
    const connection = await createConnection({
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [__dirname + "/entity/*.js", __dirname + "/entity/*.ts"],
      synchronize: true,
      logging: true
    });

    console.log("Connected. Now run express app");
    const app = createExpressServer({
      cors: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type"
      },
      routePrefix: "/api",
      controllers: [AuthController]
    });

    app.options("*", cors());

    app.listen(port);
    console.log(
      "Server is up and running on port " +
        port +
        ". Now send requests to check if everything works."
    );
  } catch (error) {
    console.error(error);
  }
})();
