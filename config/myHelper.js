
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function replaceAll(str, match, replacement){
  return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
}

// REPLACE “ TO "
// var fs = require('fs')
// const needReplace = "“";
// const replaceTo = "check";
// fs.readFile("./guests.js", 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//
//   const count = data.split(needReplace).length - 1;
//   console.log("count:", count);
//
//   let index = 0;
//   let result = data;
//   while(index < count) {
//     result = result.replace("“", '"');
//     result = result.replace("”", '"');
//
//     index++;
//   }
//
//   fs.writeFile("./guests.js", result, 'utf8', function (err) {
//     if (err) return console.log(err);
//   });
// });

// CHECK SAME IDS my
// const guest = require("../config/guests");
// let oldIds = {};
// guest.forEach(person => {
//   if (oldIds[person.id]) {
//     console.log("1", oldIds[person.id]);
//     console.log("2", person.surname + " " + person.name);
//   }
//   oldIds[person.id] = person.surname+" "+person.name;
// })

// COUNTS
const guest = require("../config/guests");
const fs = require("fs");
let count = 0;
let list = [];
guest.forEach(person => {
  if (person.wedding && person.isYoung) {
    let item = person.surname + " " + person.name;

    if (person.spouse) {
      // console.log("spouse", person.spouse, guest[person.spouse])
      const spouse = guest.find(p => person.spouse === p.id);
      item += ` (Вместе с ${spouse.surname + " " + spouse.name})`
    }

    list.push(item);
  }
})

fs.writeFileSync("гости.txt", list.join("\n"))
console.log(list);




// let guests = require("../config/guests");
// var fs = require('fs')
//
// guests.forEach(guest => {
//   if (typeof guest.fullName !== "boolean") guest.fullName = !Number.isInteger(guest.spouse)
// })
//
// let stringFile = JSON.stringify(guests);
//
// // Следущая линия после запятой
// stringFile = replaceAll(stringFile, ",", ",\n  ");
//
// // Следущая линия после {
// stringFile = replaceAll(stringFile, "{", "\n {\n  ");
//
// // Следущая линия до ,{
// stringFile = replaceAll(stringFile, "}", "\n }");
//
// fs.writeFile("./guests.js", `module.exports=${stringFile}`, "utf8", (err, data) => {
//   console.log("DONE");
// })
//
//
//   console.log(guests);
