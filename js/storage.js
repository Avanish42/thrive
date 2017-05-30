function uploadfile(){
	var file=document.getElementById("file").files[0];
	var filename=file.name;
	var parts = filename.split(".");
	var x = parts[0]+"-1234";
	var y=parts[1];
	var z=x+"."+y;
	alert(z);
	var filesize=file.size;
//	var strorageref=firebase.storage().ref('/Images/'+z);
	var uploadtask= strorageref.put(file);
//	uploadtask.on('state_changed',function(snapshot){
//		
//	},function (error){
//		
//	},function(){
//		var postkey=firebase.database().ref("Posts/").push().key;
//		var downloadUrl = uploadtask.snapshot.downloadURL;
//		var updates ={};
//		var postdata = {
//			url: downloadUrl
//		};
//		updates['/Posts/'+postkey]=postdata;
//	console.log(updates);
//		firebase.database().ref().update(updates);
//	});
}