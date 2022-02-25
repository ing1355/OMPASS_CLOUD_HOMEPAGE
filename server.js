const express = require("express");
const HTTPS = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3443;
let disableKeepAlive = false;

const httpsOptions = {
  key: fs.readFileSync("./localhost.key"),

  cert: fs.readFileSync("./localhost.crt"),
};

app
  .prepare()
  .then(() => {
    const server = express();

    server.use((req, res, next) => {
      if (disableKeepAlive) {
        res.set("Connection", "close");
      }

      next();
    });

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    process.on("SIGINT", async () => {
      disableKeepAlive = true;

      await server.close();

      process.exit(0);
    });

    HTTPS.createServer(httpsOptions, server).listen(port, (err) => {
      if (err) throw err;

      console.log(`> Ready on http://localhost:${port}`);

      process.send("new Process Ready!!");
    });
  })
  .catch((err) => {
    console.log("Error!!!! : ", err);
  });
