
/*
 * GET home page, which is specified in Jade.
 */

exports.do_work = function(req, res){
  res.render('yang.jade', {
	  title: "welcome to yang's page"
  });
};
