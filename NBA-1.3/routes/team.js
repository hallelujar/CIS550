
/*
 * GET home page, which is specified in Jade.
 */

exports.do_work = function(req, res){
  res.render('team.jade', {
	  title: "welcome to yang's page"
  });
};

function query_db(res) {

	query = "select Name from Team)";

  //, (SELECT F.count(*) FROM Friends F WHERE P.login = F.login)
  //A.NF from Person, (select login, count(friend) as NF from Friends F group by login) A where Person.login = A.login";
	//if (fullName) query = query + " WHERE Name='" + fullName + "'";
	connection.query(query, function(err, rows, fields) {
		if (err) console.log(err);
		else {

			output_persons(res, Names);
		}
	});
}

function output_persons(res,Names,results) {
	res.render('team.jade',
		   { title: "Person with fullName " + Names,
		     results: results }
	  );
}
