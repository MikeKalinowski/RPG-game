// ======================== 1. CHARACTER, ENEMIES AND EQUIPMENT DEFINITIONS============================
// ==== 1.1 CHARACTER
const hero = {
	name: "Hero",
	minDmg: 5,
	maxDmg: 10,
	hp: 20,
	maxHp: 20,
	defense: 0,
	experienceCurrent: 0,
	experienceToLevel: 10,
	level: 1,
	gold: 100,
	// equipment: {
	// 	armor: "",
	// 	weapon: "Swordy Sword",
	// 	ring: "",
	// 	amulet: ""
	// }};
	equipmentWorn: []
};

let currentEnemy = {name: "none"} //It will copy one of enemies' sheets later

// ==== 1.2 ENEMIES
const enemyPlace = [{
	name: "Forest",
	enemies: [{
		name: "Troll",
		level: 1,
		minDmg: 1,
		maxDmg: 2,
		hp: 15,
		maxHp: 15,
		defense: 1,
		loot: [
			{ 
				name: "Sword of glory",
				chance: 0.5
			},
			{
				name: "Staff of everythingness",
				chance: 1
			},
			{
				name: "Rags",
				chance: 0.9
			}],
		experienceWorth: 5,
	},
	{
		name: "Giraffe",
		level: 2,
		minDmg: 2,
		maxDmg: 3,
		hp: 8,
		maxHp: 8,
		defense: 1,
		loot: [
			{ 
				name: "Sword of glory",
				chance: 0.3
			},
			{
				name: "Staff of everythingness",
				chance: 1
			},
			{
				name: "Rags",
				chance: 0.5
			}],
		experienceWorth: 4,
	},
	{
		name: "Snail",
		level: 1,
		minDmg: 0,
		maxDmg: 1,
		hp: 5,
		maxHp: 5,
		defense: 0,
		loot: [
			{ 
				name: "Sword of glory",
				chance: 0.1
			},
			{
				name: "Staff of everythingness",
				chance: 1
			}],
		experienceWorth: 2,
	}]
},
{	
	name: "Cave",
	enemies: [{
		name: "Golem",
		level: 6,
		minDmg: 6,
		maxDmg: 9,
		hp: 40,
		maxHp: 40,
		defense: 0,
		loot: [
			{ 
				name: "Sword of glory",
				chance: 0.5
			},
			{
				name: "Staff of everythingness",
				chance: 1
			}],
		experienceWorth: 10,
	},
	{
		name: "Elemental",
		level: 7,
		minDmg: 10,
		maxDmg: 15,
		hp: 40,
		maxHp: 40,
		defense: 0,
		loot: [
			{ 
				name: "Sword of glory",
				chance: 0.5
			},
			{
				name: "Staff of everythingness",
				chance: 1
			}],
		experienceWorth: 15,
	},
	{
		name: "Mage",
		level: 10,
		minDmg: 10,
		maxDmg: 30,
		hp: 30,
		maxHp: 30,
		defense: 0,
		loot: [
			{ 
				name: "Sword of glory",
				chance: 0.5
			},
			{
				name: "Staff of everythingness",
				chance: 1
			}],
		experienceWorth: 20,
	}]
}]

// ==== 1.3 Equipment

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
	name: "Leather Armor",
	value: 20,
	minDmg: 0,
	maxDmg: 0,
	defense: 2,
	levelRequirement: 2,
},
{
	type: "weapon",
	name: "Stick",
	value: 1,
	minDmg: 1,
	maxDmg: 2,
	defense: 0,
	levelRequirement: 1,
},
{
	type: "weapon",
	name: "Club",
	value: 3,
	minDmg: 2,
	maxDmg: 4,
	defense: 0,
	levelRequirement: 1,
},
{
	type: "weapon",
	name: "Sword of glory",
	value: 1,
	minDmg: 3,
	maxDmg: 6,
	defense: 0,
	levelRequirement: 1,
},
{
	type: "weapon",
	name: "Staff of everythingness",
	value: 1,
	minDmg: 500,
	maxDmg: 1000,
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
	restButton.style.display="inline-block";
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
	function frame() {
	    if (leveledUp === 1) {
	    	leveledUp = 0;
	    	expProgressBarWidth = 0;
	    }
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
			addTextToMainArea(`${defender.name} is dead!`);
			addTextToMainArea(`${defender.name} drops ${monsterLoot}.`);
			addTextToMainArea(`You gain +${defender.experienceWorth} experience`)
			hero.experienceCurrent = hero.experienceCurrent + defender.experienceWorth;
			initializePostBattleView();
			lootItems()
			levelUp();

			function lootItems() {
				// Maps dropped loot to items
				let droppedLootObjects = equipment.filter(el => {
					let isItGoodItem;
					monsterLoot.forEach(num => {
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
			}
			function levelUp() {
				if (hero.experienceCurrent >= hero.experienceToLevel) {
					addTextToMainArea(`Level up! You gain 5hp.`);
					hero.level++;
					hero.maxHp = hero.maxHp + 5;
					hero.hp = hero.maxHp;
					fillHpProgressBar()
					hero.experienceCurrent = hero.experienceCurrent - hero.experienceToLevel;
					hero.experienceToLevel = hero.experienceToLevel + 3;
					leveledUp = 1
				}
			}		
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
			if(a.name < b.name) return -1;
	    	if(a.name > b.name) return 1;
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
						// console.log("New equipment worn:");
						// console.log(hero.equipmentWorn)
						// console.log(item)
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


// ============================ 8.CITY ACTIONS ============================
// ==== X.1 REST
let day = 1;
const dayNumber = document.querySelector("#dayNumber");
function rest() {
	hero.hp = hero.maxHp;
	refreshHeroSheet();
	day++;
	dayNumber.innerHTML = `Day number: ${day}`;
	restButton.style.display = "none";
	fillHpProgressBar()
}

// ============================ 9.RUN FUNCTIONS ON PAGE LOAD ============================
giveStartingItems()
refreshHeroSheet()
refreshHeroEquipment()
refreshEnemySheet()
initializeCityView()

function giveStartingItems() {
	let weapon = equipment[equipment.findIndex((el) => el.name === "Club")]
	hero.equipmentWorn.push(weapon)
	hero.minDmg = weapon.minDmg;
	hero.maxDmg = weapon.maxDmg;
}
