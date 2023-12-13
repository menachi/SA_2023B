import initApp from "./app";

initApp().then((app) => {
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
