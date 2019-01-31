
var tableData = data;

console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Prints the the weather data from data.js
console.log(data);

 data.forEach(function(sightingRep) {
  console.log(sightingRep);
  var row = tbody.append("tr");
   Object.entries(sightingRep).forEach(function([key, value]) {
     console.log(key, value);
     var cell = tbody.append("td");
     cell.text(value);
   });
 });


 var submit = d3.select("#submit");

 // function to take input and recreate table
 submit.on("click", function() {
    d3.event.preventDefault();
 
   d3.select(".summary").html("");
 
   // user input as variable
   var inputElement = d3.select("#datetime");
   var inputValue = inputElement.property("value");
 
   // Filter Data
   var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
 
   // loop through
   filteredData.forEach((dateData) => {
     var row = tbody.append("tr");
     Object.entries(dateData).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);
     });
   });
 });

