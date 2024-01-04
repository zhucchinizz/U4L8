const express = require("express");
const app = express();


app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" })); // this limits the incoming JSON data to no more than 1MB


app.post("/api", (request, response) => {
console.log(request);
console.log("I got a request");
console.log(request.body);


const data = request.body;
response.json({
  status: 'it works',
  latitude: data.lat,
  longitude:data.lon
    });

});
