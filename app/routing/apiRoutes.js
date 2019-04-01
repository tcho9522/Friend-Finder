var friendData = require("../data/friends.js");
var arraySort = require("array-sort");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    friendData.push(newFriend);
  });
};
