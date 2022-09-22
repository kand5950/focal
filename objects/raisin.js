const raisinAlarm = function(cookie) {
  //initialize a result first
  let result = "All good!";
  //if array (the cookie) has a raisin
  // print alert
  for (const c of cookie) {
    if (c === "🍇") {
      result = "Raisin alert!";
    }
  }
  return result;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log("------------------------------------------");

const raisinAlarmArray = function(cookies) {
  let result = [];
  for (const c of cookies) {
    if (c.includes("🍇")) {
      result.push("raisin alert");
    }
  }
  result.push("All good!");
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);