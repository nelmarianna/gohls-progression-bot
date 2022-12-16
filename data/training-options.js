/* eslint-disable comma-dangle */

const custom = {
	customPick1: 'Custom Pick 1',
	customPick2: 'Custom Pick 2',
	customPick3: 'Custom Pick 3',
};

const skaters = {
	speedSkating:'Speed Skating',
	distanceSkating: 'Distance Skating',
	stickHandling: 'Stick Handling',
	mma: 'MMA',
	marksmanship: 'Marksmanship',
	hitTheTarget: 'Hit The Targets',
	studyFilm:'Study Film',
	specialTeams: 'Special Teams',
	save: 'Save',
	learnCBig: 'Learn C (Big)',
	learnCSmall:'Learn C (Small)',
	learnWBig: 'Learn C (Big)',
	learnWSmall:'Learn W (Small)',
	learnDBig:'Learn D (Big)',
	learnDSmall:'Learn D (Small)',
	missed: 'Missed',
	...custom
};

const goalies = {
	shotsHigh:'Shots High',
	shotsLow: 'Shots Low',
	sideToSides:'Side to Sides',
	puckSkills: 'Puck Skills',
	lapsInPads: 'Laps In Pads',
	positioning: 'Positioning',
	underPressure: 'Under Pressure',
	save: 'Save',
	consistency: '+1 Consistency',
	missed: 'Missed',
	...custom
};

const skatersPick = {
	speed: 'speed',
	acceleration:'acceleration',
	agility:'agility',
	endurance:' endurance',
	balance:'balance',
	durability: 'durability',
	puckControl:'puck control',
	deking: 'deking',
	handEye :'hand eye',
	bodyCheck:'body check',
	strength:'strength',
	aggression:'aggression',
	fighting:'fighting',
	wristPower:'wrist power',
	slapPower:'slap power',
	passing:'passing',
	wristAccuracy:'wrist accuracy',
	slapAccuracy:'slap accuracy',
	poise:'poise',
	offAwareness:'off awareness',
	defAwareness:'def awareness',
	discipline:'discipline',
	stickChecking:'stick checking',
	shotBlock:'shot block',
	faceOffs:'face offs',
};

const goaliesPick = {
	gloveHigh: 'Glove High',
	stickHigh: 'StickHigh',
	vision: 'Vision',
	gloveLow: 'Glove Low',
	stickLow: 'Stick Low',
	fiveHole: '5 Hole',
	speed: 'speed',
	agility: 'agility',
	poise: 'poise',
	pokeCheck: 'poke Check',
	passing: 'Passing',
	pkPlyFreq: 'Pk Ply Freq',
	aggression: 'Aggression'
};

const progressionDictionary = {
	...skaters,
	...goalies
};

const picksDictionary = {
	...goaliesPick,
	...skatersPick
};


module.exports = { skaters, skatersPick, goalies, goaliesPick, custom, picksDictionary, progressionDictionary };