var names_of_people = []
function submit(){
var GUESTNAME = document.getElementById("Enter_name").value;
names_of_people.push(GUESTNAME);
document.getElementById("display_names").innerHTML=names_of_people;
}
function show()
{
    var i = names_of_people.join("<br>");
    console.log(names_of_people)
    document .getElementById("show_names").innerHTML = i.toString();
}
function sort()
{
    names_of_people.sort();
    var i = names_of_people.join("<br>");
    console.log(names_of_people)
    document.getElementById("sort_names").innerHTML= i.toString();
}
function search()

{
var s= document.getElementById("search").value;
var found=0;
var j;
for(j=0; j<names_of_people.length; j++)
{
if(s==names_of_people[j]){
found=found+1;
}
}

document .getElementById("search_names").innerHTML="name found "+found+" time/s";
console.log("found name "+found+" time/s");
}