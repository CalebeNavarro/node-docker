import app from "./app";

const PORT = process.env.PORT || 3000;

( async () => {

  
  app.listen(PORT, () => console.log("Running at http://localhost:" + PORT));
})();