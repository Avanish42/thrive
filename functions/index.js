var functions = require('firebase-functions');
var admin=require('firebase-admin');
admin.initializeApp(functions.config().firebase);
var randomString=require('randomstring')
// TODO: Make sure you configure the `algolia.app_id` and `algolia.api_key` Google Cloud environment variables.
var algoliasearch = require('algoliasearch');
/////////////////
//Agolia Search
/////////////////
var client = algoliasearch(functions.config().algolia.app_id, functions.config().algolia.api_key);
var ALGOLIA_POSTS_INDEX_NAME = 'blogposts';

// Updates the search index when new blog entries are created or updated.
exports.indexentry = functions.database.ref('/blog-posts/{blogid}/text').onWrite(event => {
  var index = client.initIndex(ALGOLIA_POSTS_INDEX_NAME);
  var firebaseObject = {
    text: event.data.val(),
    objectID: event.params.blogid
  };

  return index.saveObject(firebaseObject).then(
      () => event.data.adminRef.parent.child('last_index_timestamp').set(
          Date.parse(event.timestamp)));
});

// Starts a search query whenever a query is requested (by adding one to the `/search/queries`
// element. Search results are then written under `/search/results`.
exports.searchentry = functions.database.ref('/search/queries/{queryid}').onWrite(event => {
  var index = client.initIndex(ALGOLIA_POSTS_INDEX_NAME);
  var query = event.data.val().query;
  var key = event.data.key;

  return index.search(query).then(content => {
    const updates = {
      '/search/last_query_timestamp': Date.parse(event.timestamp)
    };
    updates[`/search/results/${key}`] = content;
    return admin.database().ref().update(updates);
  });
});


/////////////
//PayuBiz
/////////////
exports.getPaymentDetails = functions.https.onRequest((request, response) => {
  // Merchant key here as provided by Payu
var MERCHANT_KEY = "fsZR5l"; //Please change this value with live key for production
var hash_string = '';
// Merchant Salt as provided by Payu
var SALT = "C0SiMqcB"; //Please change this value with live salt for production
// End point - change to https://secure.payu.in for LIVE mode
var PAYU_BASE_URL = "https://secure.payu.in/_payment";
var action = '';
var nodeid = request.query.nodeid;
var data=[];
//admin.database().ref("wsppreregistrstions/"+nodeid);
var details=admin.database().ref("wsppreregistrstions/"+nodeid).on("value",function(snapshot){
    data.push.snapshot.val();
});
var formError = 0;
// Generate random transaction id
var txnid =data.packageSelected + randomString.generate(12);
// var hash = '';
// // Hash Sequence
// var hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";
//   if(
//           empty($posted['key'])
//           || empty($posted['txnid'])
//           || empty($posted['amount'])
//           || empty($posted['firstname'])
//           || empty($posted['email'])
//           || empty($posted['phone'])
//           || empty($posted['productinfo'])
         
//   ) {
//     $formError = 1;
//   } else {
    
// 	var hashVarsSeq = explode('|', $hashSequence);
// 	foreach($hashVarsSeq as $hash_var) {
//       $hash_string .= isset($posted[$hash_var]) ? $posted[$hash_var] : '';
//       $hash_string .= '|';
//     }

//     $hash_string .= $SALT;


//     $hash = strtolower(hash('sha512', $hash_string));
//     $action = $PAYU_BASE_URL + '/_payment';
//   }
  response.json({'txnid':txnid,'details':data});
 });

exports.payUPaymentCallback = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

/////////////////////
// SendGrid Emails
/////////////////////
var helper = require('sendgrid').mail;
var fromEmail = new helper.Email('test@example.com');
var toEmail = new helper.Email('test@example.com');
var subject = 'Hello World from the SendGrid Node.js Library!';
var content = new helper.Content('text/plain', 'Hello, Email!');
var mail = new helper.Mail(fromEmail, subject, toEmail, content);


exports.sendEmail = functions.https.onRequest((request, response) => {
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
  template_id: "[YOUR TEMPLATE ID GOES HERE]",

});

sg.API(request, function (error, res) {
  if (error) {
    console.log('Error response received');
  }
  console.log(res.statusCode);
  console.log(res.body);
  console.log(res.headers);
});
  response.send("Hello from Firebase!");
 });
