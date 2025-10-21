// ============================================
// TEAM PROFILE PAGE
// Team Members: [Gavin and Luke]
// ============================================

// ============================================
// MEMBER 1 VARIABLES
// ============================================

let member1Name = "Gavin";
let member1Age = 17;
let member1Game = "Skyrim";
let member1Music = "Any Rock Music";
let member1BestFood = "Steak";
let member1Restaurant = "Griddle's Cafe";
let member1PitBull = "No";
let member1Basketball = "Kobe";
let member1Future = "In college for computer engineering";


// ============================================
// MEMBER 2 VARIABLES
// ============================================
let member2Name = "Luke";
let member2Age = 17;
let member2Game = "Team Fortress 2";
let member2Music = "The Offspring or any punk/skate rock";
let member2BestFood = "Thai Chili Lime Wings from Wingstop";
let member2Restaurant = "Longhorn Steakhouse";
let member2PitBull = "No";
let member2Basketball = "Kobe, Mamba Forever";
let member2Future = "In college for software engineering";

// ============================================
// TEAM CALCULATIONS
// ============================================

// How many team members?
let totalMembers = 2;  // Change this to 3 if you have 3 people!

// Calculate total age
let totalAge = member1Age + member2Age;

// Calculate average age
let averageAge = totalAge / totalMembers;

// ============================================
// DISPLAY TEAM STATS
// ============================================

document.getElementById('totalMembers').textContent = totalMembers;
document.getElementById('totalAge').textContent = totalAge;
document.getElementById('averageAge').textContent = averageAge.toFixed(1);

// ============================================
// DISPLAY MEMBER 1
// ============================================

document.getElementById('member1Name').textContent = member1Name;
document.getElementById('member1Age').textContent = member1Age;
document.getElementById('member1Game').textContent = member1Game;
document.getElementById('member1Music').textContent = member1Music;
document.getElementById('member1BestFood').textContent = member1BestFood;
document.getElementById('member1Restaurant').textContent = member1Restaurant;
document.getElementById('member1PitBull').textContent = member1PitBull;
document.getElementById('member1Basketball').textContent = member1Basketball;
document.getElementById('member1Future').textContent = member1Future;


// ============================================
// DISPLAY MEMBER 2
// ============================================
document.getElementById('member2Name').textContent = member2Name;
document.getElementById('member2Age').textContent = member2Age;
document.getElementById('member2Game').textContent = member2Game;
document.getElementById('member2Music').textContent = member2Music;
document.getElementById('member2BestFood').textContent = member2BestFood;
document.getElementById('member2Restaurant').textContent = member2Restaurant;
document.getElementById('member2PitBull').textContent = member2PitBull;
document.getElementById('member2Basketball').textContent = member2Basketball;
document.getElementById('member2Future').textContent = member2Future;

// ============================================
// LOG TO CONSOLE (for testing)
// ============================================

console.log("Team loaded!");
console.log("Total members:", totalMembers);
console.log("Total age:", totalAge);
console.log("Average age:", averageAge);