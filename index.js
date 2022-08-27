
const fs = require("fs");
fs.readFile("./employee.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }

  const employeeData= JSON.parse(jsonString);
  let countHours=0;
  employeeData.forEach(employee => {
    countHours+=employee.Hours
  });
  const avgHours = countHours /employeeData.length;
  //console.log("File data:", avgHours);

const sorted= employeeData.sort((a,b)=> a.Hours- b.Hours)
console.log(sorted.slice(0,5))

})