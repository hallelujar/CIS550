NBA = require("nba");
const curry = NBA.findPlayer('Stephen curry');
console.log(NBA);
console.log(curry);
var mongodb = require('mongodb');
var uri = "mongodb://owner:clintonyangyixuan@ds121171.mlab.com:21171/cis550";
/* logs the following:
 * {
 *   firstName: 'Stephen',
 *     lastName: 'Curry',
 *       playerId: 201939,
 *         teamId: 1610612744,
 *           fullName: 'Stephen Curry',
 *             downcaseName: 'stephen curry'
 *             }
 *             */
NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(function(result) {
	  //console.log(result); // "Stuff worked!"
}, function(err) {
	  //console.log(err); // Error: "It broke"
});

NBA.stats.commonTeamRoster({ TeamID: curry.teamId,Season:"2016-17" }).then(function(result) {
	  //console.log(result); // "Stuff worked!"
}, function(err) {
	  //console.log(err); // Error: "It broke"
});

NBA.stats.playerProfile({ PlayerID: curry.playerId }).then(function(result) {
	  //console.log(result); // "Stuff worked!"
}, function(err) {
	  //console.log(err); // Error: "It broke"
});

/* Mongodb TEST
*/

var seedData = [
  {
    decade: '1970s',
    artist: 'Debby Boone',
    song: 'You Light Up My Life',
    weeksAtOne: 10
  },
  {
    decade: '1980s',
    artist: 'Olivia Newton-John',
    song: 'Physical',
    weeksAtOne: 10
  },
  {
    decade: '1990s',
    artist: 'Mariah Carey',
    song: 'One Sweet Day',
    weeksAtOne: 16
  }
];


mongodb.MongoClient.connect(uri, function(err, db) {
  
  if(err) throw err;
  
  /*
   * First we'll add a few songs. Nothing is required to create the 
   * songs collection; it is created automatically when we insert.
   */

  var songs = db.collection('songs');
   var players = db.collection('players'); 
   // Note that the insert method can takes either an array or a dict.
   players.find().toArray(function (err,docs) {
   	if(err) throw err;
   	 docs.forEach(function (doc) {
            console.log(
            doc);
          });

   });
  songs.insert(seedData, function(err, result) {
    
    if(err) throw err;

    /*
     * Then we need to give Boyz II Men credit for their contribution
     * to the hit "One Sweet Day".
     */

    songs.update(
      { song: 'One Sweet Day' }, 
      { $set: { artist: 'Mariah Carey ft. Boyz II Men' } },
      function (err, result) {
        
        if(err) throw err;

        /*
         * Finally we run a query which returns all the hits that spend 10 or
         * more weeks at number 1.
         */

        songs.find({ weeksAtOne : { $gte: 10 } }).sort({ decade: 1 }).toArray(function (err, docs) {

          if(err) throw err;

          docs.forEach(function (doc) {
            console.log(
              'In the ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc['artist'] + 
              ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
            );
          });
         
          // Since this is an example, we'll clean up after ourselves.
          songs.drop(function (err) {
            if(err) throw err;
           
            // Only close the connection when your app is terminating.
            db.close(function (err) {
              if(err) throw err;
            });
          });
        });
      }
    );
  });
});