// Initialize resources and building variables
let gold = 0;
let iron = 0;
let products = 0;
let steel = 0;
let wood = 0;

// Initialize buildings and their counts
let mineCount = 0;
let factoryCount = 0;
let ironMineCount = 0;
let steelMillCount = 0;
let sawmillCount = 0;

// Building costs
const mineCost = 10;
const factoryCost = 100;
const ironMineCost = 50;
const steelMillCost = 200; // Steel requires iron to purchase
const sawmillCost = 150;

// Production rates (per second)
let productionRates = {
    gold: 1,
    products: 5,
    iron: 2,
    steel: 1,
    wood: 3,
};

// Update resource display
function updateDisplay() {
    document.getElementById('gold').innerText = gold;
    document.getElementById('iron').innerText = iron;
    document.getElementById('products').innerText = products;
    document.getElementById('steel').innerText = steel;
    document.getElementById('wood').innerText = wood;
    document.getElementById('mineCount').innerText = mineCount;
    document.getElementById('factoryCount').innerText = factoryCount;
    document.getElementById('ironMineCount').innerText = ironMineCount;
    document.getElementById('steelMillCount').innerText = steelMillCount;
    document.getElementById('sawmillCount').innerText = sawmillCount;
}

// Buy building function
function buyBuilding(building) {
    switch (building) {
        case 'mine':
            if (gold >= mineCost) {
                gold -= mineCost;
                mineCount++;
            }
            break;
        case 'factory':
            if (gold >= factoryCost) {
                gold -= factoryCost;
                factoryCount++;
            }
            break;
        case 'ironMine':
            if (gold >= ironMineCost) {
                gold -= ironMineCost;
                ironMineCount++;
            }
            break;
        case 'steelMill':
            if (iron >= steelMillCost) {
                iron -= steelMillCost;
                steelMillCount++;
            }
            break;
        case 'sawmill':
            if (gold >= sawmillCost) {
                gold -= sawmillCost;
                sawmillCount++;
            }
            break;
    }
    updateDisplay();
}

// Resource production loop
function produceResources() {
    gold += mineCount * productionRates.gold;
    products += factoryCount * productionRates.products;
    iron += ironMineCount * productionRates.iron;
    steel += steelMillCount * productionRates.steel;
    wood += sawmillCount * productionRates.wood;

    updateDisplay();
}

// Game loop
setInterval(produceResources, 1000); // Produce resources every second

// Load game on page load
window.onload = updateDisplay;
