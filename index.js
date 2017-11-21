// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map (function (driverName) {
    return driverName.toLowerCase()
  });

}

function nameToAttributes (list) {
  return list.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}



function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}

//[1, 2, 3].map(function (num) { return num * num; })


// function lowerCaseDrivers (list) {
//   return list.map(function (driver) {
//     return driver.toLowerCase();
//   });
// }
