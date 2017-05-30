var data = [
   {
      "id": "one",
      "pId": "foo1",
      "cId": "bar1"
   },
   {
      "id": "two",
      "pId": "foo2",
      "cId": "bar2"
   },
   {
      "id": "three",
      "pId": "foo3",
      "cId": "bar3"
   }
];

var length=data.length;
for(i=0;i<length;i++){
    var count=data[i].length;
    var elem=data[i]; 
    for(j=0;j<count;j++){
        if(elem[j].id="three"){
            console.log("got it");
        }
        else{
            
        }
    }
}