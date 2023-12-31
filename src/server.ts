import initApp from "./app";

initApp().then((app) => {
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`);
  });
});
