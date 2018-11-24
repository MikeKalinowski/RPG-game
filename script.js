// ======================== 1. CHARACTER, ENEMIES AND EQUIPMENT DEFINITIONS============================
// ==== 1.1 CHARACTER
const hero = {
	name: "Hero",
	minDmg: 5,
	maxDmg: 10,
	hp: 15,
	maxHp: 15,
	defense: 0,
	experienceCurrent: 0,
	experienceToLevel: 3,
	level: 1,
	gold: 100,
	equipmentWorn: []
};

// ==== 1.2 ENEMIES
const enemyPlace = [{
	name: "Forest",
	enemies: [{
		name: "Rabid Rabbit",
		level: 1,
		minDmg: 1,
		maxDmg: 2,
		hp: 9,
		maxHp: 9,
		defense: 0,
		loot: [
			{ 
				name: "Thick Stick",
				chance: 0.3
			}],
		experienceWorth: 1,
	},
	{
		name: "Zombie's Arm",
		level: 1,
		minDmg: 1,
		maxDmg: 2,
		hp: 13,
		maxHp: 13,
		defense: 0,
		loot: [
			{ 
				name: "Thick Stick",
				chance: 0.35
			}],
		experienceWorth: 1,
	},
	{
		name: "Elderly skeleton",
		level: 2,
		minDmg: 2,
		maxDmg: 3,
		hp: 8,
		maxHp: 8,
		defense: 0,
		loot: [
			{ 
				name: "Thick Stick",
				chance: 0.4
			},
			{
				name: "Rotten Club",
				chance: 0.25
			}],
		experienceWorth: 2,
	}]
},
{	
	name: "Caves",
	enemies: [{
		name: "Small wolf",
		level: 4,
		minDmg: 2,
		maxDmg: 5,
		hp: 16,
		maxHp: 16,
		defense: 0,
		loot: [
			{ 
				name: "Half-broken Bow",
				chance: 0.2
			},
			{
				name: "Used Cloth Armor",
				chance: 0.3
			}],
		experienceWorth: 3,
	},
	{
		name: "Toxic Mushroom",
		level: 5,
		minDmg: 2,
		maxDmg: 4,
		hp: 20,
		maxHp: 20,
		defense: 0,
		loot: [
			{ 
				name: "Half-broken Bow",
				chance: 0.3
			},
			{
				name: "Used Cloth Armor",
				chance: 0.3
			}],
		experienceWorth: 4,
	},
	{
		name: "The Rock",
		level: 6,
		minDmg: 3,
		maxDmg: 7,
		hp: 14,
		maxHp: 14,
		defense: 0,
		loot: [
			{ 
				name: "Almost-new Club",
				chance: 0.3
			},
			{
				name: "Dad's Quilted Armor",
				chance: 0.2
			}],
		experienceWorth: 4,
	}]
},
{	
	name: "Dungeon",
	enemies: [{
		name: "Skeleton Archer",
		level: 7,
		minDmg: 4,
		maxDmg: 8,
		hp: 35,
		maxHp: 35,
		defense: 0,
		loot: [
			{ 
				name: "Old Sword",
				chance: 0.4
			},
			{ 
				name: "Two-handed Hammer",
				chance: 0.15
			},
			{
				name: "Real Deal Ring Mail",
				chance: 0.3
			}],
		experienceWorth: 6,
	},
	{
		name: "Confused Ogre",
		level: 8,
		minDmg: 4,
		maxDmg: 9,
		hp: 43,
		maxHp: 43,
		defense: 0,
		loot: [
			{ 
				name: "Two-handed Hammer",
				chance: 0.2
			},
			{
				name: "Real Deal Ring Mail",
				chance: 0.3
			},
			{
				name: "Sword of Glory",
				chance: 0.1
			}],
		experienceWorth: 7,
	},
	{
		name: "The Thing",
		level: 9,
		minDmg: 5,
		maxDmg: 9,
		hp: 41,
		maxHp: 41,
		defense: 0,
		loot: [
			{ 
				name: "Two-handed Hammer",
				chance: 0.3
			},
			{
				name: "Sword of Glory",
				chance: 0.25
			},
			],
		experienceWorth: 7,
	}]
},
{	
	name: "Castle",
	enemies: [{
		name: "Small Crippled DRAGON(!)",
		level: 10,
		minDmg: 10,
		maxDmg: 13,
		hp: 90,
		maxHp: 90,
		defense: 0,
		loot: [],
		experienceWorth: 50,
	}]
}]

// ==== 1.3 Chest Loot

const lootChest = [{
	type: "Forest",
	loot: [{
		name: "Rags",
		chance: 1
	},
	{
		name: "Rusty Dagger",
		chance: 0.6
	}]
},
{
	type: "Caves",
	loot: [{
		name: "Almost-new Club",
		chance: 0.6
	},
	{
		name: "Old Sword",
		chance: 0.3
	},
	{
		name: "Dad's Quilted Armor",
		chance: 0.4
	},
	{
		name: "Real Deal Ring Mail",
		chance: 0.2
	}]
},
{
	type: "Dungeon",
	loot: [{
		name: "Legendary Gothic Plate",
		chance: 0.3
	},
	{
		name: "Sword of Glory",
		chance: 0.4
	},
	{
		name: "Legendary DragonSlayer",
		chance: 0.25
	}]
},
{
	type: "Castle",
	loot: [{
		name: "Rags",
		chance: 1
	}]
}]

// ==== 1.4 Equipment

const equipment = [{
	type: "armor",
	name: "Rags",
	value: 1,
	minDmg: 0,
	maxDmg: 0,
	defense: 1,
	levelRequirement: 1,
},
{
	type: "armor",
	name: "Used Cloth Armor",
	value: 2,
	minDmg: 0,
	maxDmg: 0,
	defense: 2,
	levelRequirement: 2,
},
{
	type: "armor",
	name: "Dad's Quilted Armor",
	value: 3,
	minDmg: 0,
	maxDmg: 0,
	defense: 3,
	levelRequirement: 3,
},
{
	type: "armor",
	name: "Real Deal Ring Mail",
	value: 4,
	minDmg: 0,
	maxDmg: 0,
	defense: 4,
	levelRequirement: 6,
},
{
	type: "armor",
	name: "Light Plate",
	value: 5,
	minDmg: 0,
	maxDmg: 0,
	defense: 5,
	levelRequirement: 6,
},
{
	type: "armor",
	name: "Legendary Gothic Plate",
	value: 6,
	minDmg: 0,
	maxDmg: 0,
	defense: 7,
	levelRequirement: 9,
},
{
	type: "weapon",
	name: "Pointy Rock",
	value: 1,
	minDmg: 1,
	maxDmg: 3,
	defense: 0,
	levelRequirement: 1,
},
{
	type: "weapon",
	name: "Thick Stick",
	value: 2,
	minDmg: 2,
	maxDmg: 3,
	defense: 0,
	levelRequirement: 1,
},
{
	type: "weapon",
	name: "Rotten Club",
	value: 3,
	minDmg: 2,
	maxDmg: 5,
	defense: 0,
	levelRequirement: 1,
},
{
	type: "weapon",
	name: "Rusty Dagger",
	value: 4,
	minDmg: 3,
	maxDmg: 5,
	defense: 0,
	levelRequirement: 3,
},
{
	type: "weapon",
	name: "Half-broken Bow",
	value: 5,
	minDmg: 3,
	maxDmg: 7,
	defense: 0,
	levelRequirement: 4,
},
{
	type: "weapon",
	name: "Almost-new Club",
	value: 6,
	minDmg: 4,
	maxDmg: 9,
	defense: 0,
	levelRequirement: 4,
},
{
	type: "weapon",
	name: "Old Sword",
	value: 7,
	minDmg: 5,
	maxDmg: 11,
	defense: 0,
	levelRequirement: 4,
},
{
	type: "weapon",
	name: "Two-handed Hammer",
	value: 8,
	minDmg: 5,
	maxDmg: 11,
	defense: 0,
	levelRequirement: 4,
},
{
	type: "weapon",
	name: "Sword of Glory",
	value: 9,
	minDmg: 7,
	maxDmg: 10,
	defense: 0,
	levelRequirement: 1,
},
{
	type: "weapon",
	name: "Legendary DragonSlayer",
	value: 10,
	minDmg: 8,
	maxDmg: 12,
	defense: 0,
	levelRequirement: 1,
},
{
	type: "ring",
	name: "Ring of Fire",
	value: 0,
	minDmg: 5,
	maxDmg: 10,
	defense: 0,
	levelRequirement: 1,
}]





// ============================ 2. ACTION BUTTONS===========================

const attackEnemyButton = document.querySelector("#attackEnemy");
attackEnemyButton.addEventListener("click", calculateRound);

const restButton = document.querySelector("#rest");
restButton.addEventListener("click", rest);

const nextFightButton = document.querySelector("#nextFight");
nextFightButton.addEventListener("click", nextFight);

const backToCityButton = document.querySelector("#backToCity");
backToCityButton.addEventListener("click", backToCity);

const inventoryButton = document.querySelector("#inventory");
inventoryButton.addEventListener("click", initializeBigInventoryView);

const quitInventoryButton = document.querySelector("#quitInventory");
quitInventoryButton.addEventListener("click", quitInventoryView);

const place1 = document.querySelector("#Place1");
place1.addEventListener("click", function() {
	newBattlePlace(0)
});

const place2 = document.querySelector("#Place2");
place2.addEventListener("click", function() {
	newBattlePlace(1)
});

const place3 = document.querySelector("#Place3");
place3.addEventListener("click", function() {
	newBattlePlace(2)
});

const place4 = document.querySelector("#Place4");
place4.addEventListener("click", function() {
	newBattlePlace(3)
});



// ============================ 3.HERO AND ENEMY STATS SCREENS===========================

const heroSheetLevel = document.querySelector("#heroLevel")
const heroSheetExperience = document.querySelector("#heroExperience")
const heroSheetHp = document.querySelector("#heroHp")
const heroSheetDamage = document.querySelector("#heroDamage")
const heroSheetDefense = document.querySelector("#heroDefense")
const heroSheetGold = document.querySelector("#heroGold")
const heroSheetWeapon = document.querySelector("#heroWeapon")
const heroSheetArmor = document.querySelector("#heroArmor")
const heroSheetRing = document.querySelector("#heroRing")
const heroSheetAmulet = document.querySelector("#heroAmulet")

function refreshHeroSheet() {
	heroSheetLevel.innerHTML = hero.level;
	heroSheetExperience.innerHTML = `${hero.experienceCurrent}/${hero.experienceToLevel}`;
	heroSheetHp.innerHTML = `${hero.hp}/${hero.maxHp}`;
	moveExpProgressBar()
	moveHpProgressBar()
}

function refreshHeroEquipment() {
	heroSheetDamage.innerHTML = `${hero.minDmg}-${hero.maxDmg}`;
	heroSheetDefense.innerHTML = `${hero.defense}`;
	heroSheetGold.innerHTML = hero.gold;
	hero.equipmentWorn.forEach(function(val, index) {
		if (val.type === "weapon") {
			heroSheetWeapon.innerHTML = val.name;
		} else if (val.type === "armor") {
			heroSheetArmor.innerHTML = val.name;
		} else if (val.type === "ring") {
			heroSheetRing.innerHTML = val.name;
		} else if (val.type === "weapon") {
			heroSheetAmulet.innerHTML = val.name;
		}
	})
}


const enemySheet = document.querySelector(".enemySheet")
const enemySheetName = document.querySelector("#enemyName")
const enemySheetLevel = document.querySelector("#enemyLevel")
const enemySheetHp = document.querySelector("#enemyHp")
const enemySheetDamage = document.querySelector("#enemyDamage")

let currentEnemy = {name: "none"} //It will copy one of enemies' sheets later

function refreshEnemySheet() {
	enemySheetName.innerHTML = `Enemy: ${currentEnemy.name}`;
	enemySheetLevel.innerHTML = currentEnemy.level;
	enemySheetHp.innerHTML = `${currentEnemy.hp}/${currentEnemy.maxHp}`;
	enemySheetDamage.innerHTML = `${currentEnemy.minDmg}-${currentEnemy.maxDmg}`;
	hideEnemySheet()

	function hideEnemySheet() { //when there is no enemy
		if (currentEnemy.name === "none") {
			enemySheet.style.visibility="hidden"
		} else {
			enemySheet.style.visibility="visible"
		}
	}
}





// ============================ 4.HTML AREAS ============================

const mainArea = document.querySelector(".mainArea")
const mainAreaCity = document.querySelector(".mainAreaCity")
const bottomArea = document.querySelector(".bottomArea")
// const inventoryArea = document.querySelector(".inventoryArea")
const inventoryListArea = document.querySelector(".inventoryListArea")
const actionButtonsArea = document.querySelector(".actionButtonsArea")
const bigInventoryArea = document.querySelector(".bigInventoryArea")
const invWeaponArea = document.querySelector(".invWeaponArea")
const invArmorArea = document.querySelector(".invArmorArea")
const invRingArea = document.querySelector(".invRingArea")
const invMiscellanousArea = document.querySelector(".invMiscellanousArea")

function initializeCityView() {
	mainArea.style.display="none";
	mainArea.innerHTML="";
	mainAreaCity.style.display="block";
	nextFightButton.style.display="none";
	backToCityButton.style.display="none";
	attackEnemyButton.style.display="none";
	restButton.style.display="none"; //inline-block was here when rest was in game
	inventoryButton.style.display="inline-block"
}

function initializeBattleView() {
	mainArea.style.display="block";
	mainAreaCity.style.display="none";
	nextFightButton.style.display="none";
	backToCityButton.style.display="none";
	attackEnemyButton.style.display="inline-block";
	restButton.style.display="none";
	inventoryButton.style.display="none"
}

function initializePostBattleView() {
	backToCityButton.style.display="inline-block";
	attackEnemyButton.style.display="none";
	fightNumberCounter = fightNumberCounter + 1
	if (fightNumberCounter <=3) {
		nextFightButton.style.display="inline-block";
	}
}

function initializeBigInventoryView() {
	mainArea.style.display="none";
	mainAreaCity.style.display="none";
	bottomArea.style.display="none";
	bigInventoryArea.style.display="block";
	showItemsInInventory()
}

function quitInventoryView() {
	bigInventoryArea.style.display="none";
	bottomArea.style.display="flex";
	initializeCityView();
}

function backToCity() {
	clearEnemy();
	initializeCityView()	
	function clearEnemy() {
		currentEnemy.name = "none"
		refreshEnemySheet()
	}
	rest()
}

function addTextToMainArea(text) {
	const itemName = document.createElement("p")
	itemName.appendChild(document.createTextNode(text));
	mainArea.appendChild(itemName);
	itemName.setAttribute("class", "mainText");
	const topPos = itemName.offsetTop; //Scrolls div to bottom
	mainArea.scrollTop = topPos;
}


// ==== 4.1 Progress bars

const expProgressBar = document.getElementById("expProgressBar"); 
var leveledUp = 0;
var expProgressBarWidth = 0;

function moveExpProgressBar() {
	let maximumWidth = Math.floor(hero.experienceCurrent/hero.experienceToLevel*100);
	let widthDifference = Math.floor(100/hero.experienceToLevel)
	var id = setInterval(frame, 50);
	if (leveledUp === 1) {
		leveledUp = 0;
		expProgressBarWidth = 0;
		expProgressBar.style.width = expProgressBarWidth + '%'; 
	}
	function frame() {
	    if (expProgressBarWidth >= maximumWidth) {
	    	clearInterval(id);
	    } else {
		    expProgressBarWidth = expProgressBarWidth + widthDifference; 
		    expProgressBar.style.width = expProgressBarWidth + '%'; 
		    expProgressBar.innerHTML = `${hero.experienceCurrent}/${hero.experienceToLevel}`;
	    }
	}
}


const hpProgressBar = document.getElementById("hpProgressBar"); 
var hpProgressBarWidth = 100;
function moveHpProgressBar() {
	let maximumWidth = Math.floor(hero.hp/hero.maxHp*100);
	let widthDifference = Math.floor(100/hero.maxHp);
	var id = setInterval(frame, 50);
	function frame() {
	    if (hpProgressBarWidth <= maximumWidth) {
	    	clearInterval(id);
	    } else {
		    hpProgressBarWidth = hpProgressBarWidth - widthDifference; 
		    hpProgressBar.style.width = hpProgressBarWidth + '%'; 
		    hpProgressBar.innerHTML = `${hero.hp}/${hero.maxHp}`;
	    }
	}
}

function fillHpProgressBar() {
	hpProgressBarWidth = 100;
	hpProgressBar.style.width = hpProgressBarWidth + '%'; 
	hpProgressBar.innerHTML = `${hero.hp}/${hero.maxHp}`;
}

const hpEnProgressBar = document.getElementById("hpEnProgressBar"); 
var hpEnProgressBarWidth = 100;
function moveHpEnProgressBar() {
	let maximumWidth = Math.floor(currentEnemy.hp/currentEnemy.maxHp*100);
	let widthDifference = Math.floor(100/currentEnemy.maxHp);
	var id = setInterval(frames, 50);
	function frames() {
	    if (hpEnProgressBarWidth <= maximumWidth) {
	    	clearInterval(id);
	    } else {
			hpEnProgressBarWidth = hpEnProgressBarWidth - widthDifference; 
			if (hpEnProgressBarWidth < 0) {
				hpEnProgressBar.style.width = 0 + '%'
			} else {
				hpEnProgressBar.style.width = hpEnProgressBarWidth + '%'
			}
			hpEnProgressBar.innerHTML = `${currentEnemy.hp}/${currentEnemy.maxHp}`;
	    }
	}
}



// ============================ 5.NEW BATTLE ============================
let monsterLoot = [];
let currentPlace = ""; // Used to pick proper fight when picking next one
let fightNumberCounter = ""; // Used to count number of fights
function newBattlePlace(place) {
	initializeBattleView();
	pickRandomEnemy(place);
	fightNumberCounter = 1;
	showHint(1)
}

//Continuing old battle
function nextFight() {
	pickRandomEnemy(currentPlace);
	initializeBattleView();
}

function pickRandomEnemy(place) {
	//Count number of fights?
	mainArea.innerHTML = "";
	currentEnemy = Object.assign({}, enemyPlace[place].enemies[Math.floor(Math.random() * enemyPlace[place].enemies.length)]);
	addTextToMainArea(`You met a ${currentEnemy.name}. Prepare for battle!`);
	refreshEnemySheet();
	currentPlace = place
	addLootToMonster();
	hpEnProgressBarWidth = 100;
	hpEnProgressBar.style.width = 100 + '%'
	moveHpEnProgressBar()
	hpEnProgressBar.innerHTML = `${currentEnemy.hp}/${currentEnemy.maxHp}`;

	function addLootToMonster() {
		monsterLoot = [];
		currentEnemy.loot.forEach(function(i) {
			if ((1 - Math.random()) < i.chance) {
				monsterLoot.push(i.name);
			}
		})
	}
}





// ============================ 6.FIGHTING ============================
function calculateRound() {
	addTextToMainArea("=====");
	attack(hero, currentEnemy);
	if (currentEnemy.hp !== 0) { //If enemy not dead then he hits back
		attack(currentEnemy, hero);
	}
	refreshHeroSheet()
	refreshEnemySheet()
}

function attack(attacker, defender) {
	let dmgDealt = calculateAttackDmg(attacker, defender) // needed or it will calculate different dmg every time
	defender.hp = defender.hp - dmgDealt;
	defender.hp < 0 ? defender.hp=0 : ""
	moveHpEnProgressBar()
	addTextToMainArea(`${defender.name} receives ${dmgDealt} damage. He has ${defender.hp}hp left`);
	if (defender.hp <= 0) {isDead()}

	function calculateAttackDmg(attacker, defender) {
		let damage = Math.floor(Math.random() * (attacker.maxDmg - attacker.minDmg + 1)) + attacker.minDmg - defender.defense;
		damage < 0 ? damage = 0 : "";
		return damage
	}
	function isDead() {
		if (defender === currentEnemy) {
			if (currentEnemy.name === "Small Crippled DRAGON(!)") {
				window.location.replace("victory.html")
			}
			addTextToMainArea(`${defender.name} is dead!`);
			addTextToMainArea(`You gain +${defender.experienceWorth} experience`)
			if (monsterLoot.length > 0) {
				addTextToMainArea(`${defender.name} won't need this shiny [${monsterLoot}]. You might as well take it.`);
			} else {
				addTextToMainArea(`This ${defender.name} has no loot for you. Maybe the next one will?`);
			}
			hero.experienceCurrent = hero.experienceCurrent + defender.experienceWorth;
			initializePostBattleView();
			levelUp();
			getItemsFromWherever(monsterLoot);
			openLootChest();
			showHint(2)

			function levelUp() {
				if (hero.experienceCurrent >= hero.experienceToLevel) {
					addTextToMainArea(`Level up! You gain 5hp.`);
					hero.level++;
					hero.maxHp = hero.maxHp + 4;
					// fillHpProgressBar()
					hero.experienceCurrent = hero.experienceCurrent - hero.experienceToLevel;
					hero.experienceToLevel = hero.experienceToLevel + 3;
					expProgressBar.innerHTML = `${hero.experienceCurrent}/${hero.experienceToLevel}`;
					leveledUp = 1
					refreshHeroSheet();
				}
			}
			function openLootChest() {
				if (fightNumberCounter === 4) { //Checks if it's the last fight
					thingsInChest = [];
					lootChest[currentPlace].loot.forEach(function(i) {
						if ((1 - Math.random()) < i.chance) {
							thingsInChest.push(i.name);
						}
					})
					getItemsFromWherever(thingsInChest)
					addTextToMainArea(`Congratulations! You've successfully defeated "Terrifying Monsters" and cleansed this place from all evil. At the deepest level, you've also found an ancient loot chest with a legendary loot: [${thingsInChest}]. Nice one.`)
				}
			}

			function getItemsFromWherever(lootFromWherever) {
				let droppedLootObjects = equipment.filter(el => {
					let isItGoodItem;
					lootFromWherever.forEach(num => {
						if (el.name == num) {
							isItGoodItem = true;
						};
					}) 
					return isItGoodItem;
				})
				addLootToInventory()	
				function addLootToInventory() {
					droppedLootObjects.forEach(el => {
						inventory.push(el)
					})
				}
			} // It maps items from lootChests and monsters to equipment.		
		} else { // if (defender === hero)
			window.location.replace("gameOver.html")
		}
	}
}



// ============================ 7.INVENTORY ============================
// ==== 7.1 Inventory screen
let inventory = [];

function showItemsInInventory() {
	cleanInventory()
	showItemByItem()

	function cleanInventory() {
		invWeaponArea.innerHTML="";
		invArmorArea.innerHTML="";
		invRingArea.innerHTML="";
		invMiscellanousArea.innerHTML="";
		inventory.sort(function(a, b) {
			if(a.value > b.value) return -1;
	    	if(a.value < b.value) return 1;
	    	return 0;
		});
	}
	
	function showItemByItem() {
		addEquipmentWornItems()
		addInventoryItems()

		function addEquipmentWornItems() {
			hero.equipmentWorn.forEach((item, index) => {
				const itemName = document.createElement("p");
				itemName.appendChild(document.createTextNode("Equipped: " + item.name + " "));
				addTooltip(itemName, item)
				appendToGoodType();

				function appendToGoodType() {
					if (item.type == "weapon") {
						invWeaponArea.appendChild(itemName);
					} else if (item.type == "armor") {
						invArmorArea.appendChild(itemName);
					} else if (item.type == "ring") {
						invRingArea.appendChild(itemName);
					} else if (item.type == "miscellanous") {
						invMiscellanousArea.appendChild(itemName);
					}
				};
			});			
		}
		function addInventoryItems() {
			inventory.forEach((item, index) => {
				const itemName = document.createElement("p");
				itemName.appendChild(document.createTextNode(item.name + " "));
				addTooltip(itemName, item)
				appendToGoodType();
				addEquipButton();

				function appendToGoodType() {
					if (item.type == "weapon") {
						invWeaponArea.appendChild(itemName);
					} else if (item.type == "armor") {
						invArmorArea.appendChild(itemName);
					} else if (item.type == "ring") {
						invRingArea.appendChild(itemName);
					} else if (item.type == "miscellanous") {
						invMiscellanousArea.appendChild(itemName);
					}
				};
				function addEquipButton() {
					const newButton = document.createElement("button")
					newButton.appendChild(document.createTextNode("Equip"));
					itemName.appendChild(newButton);
					newButton.className = "actionButton equipButton actionButtonSmall";
					newButton.setAttribute("id", index); 
					newButton.addEventListener("click", equipItem);

					function equipItem() {
						let item = inventory[this.id]
						if (item.type == "weapon") {
							equipWeapon(item)
						} else if (item.type == "armor") {
							equipArmor(item)
						} else if (item.type == "ring") {
							console.log("ring")
						} else if (item.type == "amulet") {
							console.log("amulet")
						};
						inventory.splice(this.id, 1);


						hero.equipmentWorn.forEach(function(val, index) {
							if (val.type === "weapon") {
								heroSheetWeapon.innerHTML = val.name;
							} else if (val.type === "armor") {
								heroSheetArmor.innerHTML = val.name;
							} else if (val.type === "ring") {
								heroSheetRing.innerHTML = val.name;
							} else if (val.type === "amulet") {
								heroSheetAmulet.innerHTML = val.name;
							}
						})
						moveItemFromEqWorn()
						hero.equipmentWorn.push(item);
						showItemsInInventory();
						refreshHeroSheet();
						refreshHeroEquipment();

						function moveItemFromEqWorn() {
							var itemToRemoveFromEq = hero.equipmentWorn.findIndex(function(el) {
								return el.type === item.type
							})
							if (itemToRemoveFromEq != -1) {
								inventory.push(hero.equipmentWorn[itemToRemoveFromEq])
								hero.equipmentWorn.splice(itemToRemoveFromEq, 1)
							} else {}
						}
						function equipWeapon(weaponToEquip) {
							hero.minDmg = weaponToEquip.minDmg;
							hero.maxDmg = weaponToEquip.maxDmg;
						};
						function equipArmor(armorToEquip) {
							hero.defense = armorToEquip.defense;
						};
					};
				};

			});
		}
		function addTooltip(itemName, item) {
			itemName.className = "tooltipOutside";
			const tooltip = document.createElement("span");
			tooltip.className = "tooltipInside";
			tooltip.appendChild(document.createTextNode(`Damage: ${item.minDmg}-${item.maxDmg}, Defense: ${item.defense}`));
			itemName.appendChild(tooltip);
		}
	};
}


// ============================ 8.REST ============================
// ==== X.1 REST
let day = 0;
let daysToEnd = 25
const dayNumber = document.querySelector("#dayNumber");
dayNumber.innerHTML = `Days left: ${daysToEnd - day}`;
function rest() {
	hero.hp = hero.maxHp;
	refreshHeroSheet();
	day++;
	dayNumber.innerHTML = `Days left: ${daysToEnd - day}`;
	restButton.style.display = "none";
	fillHpProgressBar()
	showHint(3)
	if (day === daysToEnd) {
		gameOverTooLong()
	}
}

function gameOverTooLong() {
	window.location.replace("helloDragonMyOldFriend.html")
}

// ============================ 9.CHEAT CODES ============================
document.addEventListener("keydown", keyDown);
function keyDown(e) {
	if (e.keyCode === 67) {
  		cheatMyWayToVictory();
  	}
}

function cheatMyWayToVictory() {
	window.alert("Oh you dirty little cheater, you")
	// let bestWeapon = equipment[equipment.findIndex((el) => el.name === "Pointy Rock")]
	findBestWeapon()
	findBestArmor()
	
	function findBestWeapon() {
		let bestDmg = 0;
		let itemWithBestDmg;
		equipment.forEach((el) => {
			if (el.maxDmg > bestDmg) {
				bestDmg = el.maxDmg;
				itemWithBestDmg = el;
			}
		})
		inventory.push(itemWithBestDmg)
	} 

	function findBestArmor() {
		let bestDef = 0;
		let itemWithBestDef;
		equipment.forEach((el) => {
			if (el.defense > bestDef) {
				bestDef = el.defense;
				itemWithBestDef = el;
			}
		})
		inventory.push(itemWithBestDef)
	} 
}

// ============================ 10.HINTS ============================

const hintArea = document.querySelector(".hintArea")
const hintText = document.querySelector("#hintText")
const hints = [{
	 	type: "hintNewAdventure",
		wasItShown: 0,
		text: "Welcome Dear Adventurer, It's nice to see you. You couldn't have arrived at a better moment. <br><br> A few days ago a DRAGON(!) attacked our city. We've managed to wound him, but he escaped and hid in the castle nearby. Please find him before 25 days pass or he will heal and destroy our city! <br><br> Oh, and looking at you, I think you might want to gather some loot... You'll find monsters in nearby places. Please don't die."
	},
	{
		type: "hintFirstFight",
		wasItShown: 0,
		text: "Ooooh, you've found your first enemy. You may attack him. If you attack him enough times, he may or may not die. <br><br> Good Luck"
	},
	{
		type: "hintFirstWin",
		wasItShown: 0,
		text: "Congratulations! <br>I knew you are the greatest of warriors! That DRAGON(!) in the castle is as good as dead. <br><br>You may go back to city to heal or continue cleaning this place. If you manage to defeat 3 enemies in a row, you might find a special loot. But be wary, once your health hits 0, it's over for good."
	},
	{
		type: "hintRest",
		wasItShown: 0,
		text: "You've come back tired from an adventure. A good sleep healed your wounds but another day has passed. Please remember that you have only 25 days to kill that DRAGON(!) or he will also heal his wounds and kill us all!"
	}]

function showHint(which) {
	if (hints[which].wasItShown === 0) {
		hintText.innerHTML = hints[which].text
		hintArea.style.display = "inline"
		hints[which].wasItShown = 1
	}
}

const hintButton = document.querySelector("#hintButton")
hintButton.addEventListener("click", () => {hintArea.style.display = "none"})



// ============================ 11.RUN FUNCTIONS ON PAGE LOAD ============================
giveStartingItems()
refreshHeroSheet()
refreshHeroEquipment()
refreshEnemySheet()
initializeCityView()
showHint(0)

function giveStartingItems() {
	let weapon = equipment[equipment.findIndex((el) => el.name === "Pointy Rock")]
	hero.equipmentWorn.push(weapon)
	hero.minDmg = weapon.minDmg;
	hero.maxDmg = weapon.maxDmg;
}
