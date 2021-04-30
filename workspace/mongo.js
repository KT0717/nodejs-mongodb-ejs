var MongoClient = require('mongodb').MongoClient,
  settings = require('./settings');
MongoClient.connect("mongodb://localhost/" + settings.db, function (err, client) {
  const db = client.db("nodedb") //　追加
  if (err) {
    return console.dir(err);
  }
  console.log("connected to db");
  db.collection("users", function (err, collection) {
    var docs = [{
        name: "taguchi",
        score: 40
      },
      {
        name: "fkoji",
        score: 80
      },
      {
        name: "dotinstall",
        score: 60
      }
    ];

    // インサート
    // collection.insert(docs, function(err, result) {
    //     console.dir(result);
    // });

    // find その１
    // collection.find({
    //   name: "taguchi"
    // }).toArray(function (err, items) {
    //   console.log(items);
    // });

    // find その２
    var stream = collection.find().stream();
    stream.on("data", function(item) {
        console.log(item);
    });
    stream.on("end", function() {
        console.log("finished.")
    });

  });
});