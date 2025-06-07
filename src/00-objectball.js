// src/00-objectball.js

function gameObject() {
    return {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    };
}

function homeTeamName() {
    return gameObject()["home"]["teamName"];
}

function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const teamPlayers = game[teamKey]["players"];
        if (teamPlayers[playerName]) {
            return teamPlayers[playerName]["points"];
        }
    }
    return null;
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const teamPlayers = game[teamKey]["players"];
        if (teamPlayers[playerName]) {
            return teamPlayers[playerName]["shoe"];
        }
    }
    return null;
}

function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        if (game[teamKey]["teamName"] === teamName) {
            return game[teamKey]["colors"];
        }
    }
    return null;
}

function teamNames() {
    const game = gameObject();
    const names = [];
    for (const teamKey in game) {
        names.push(game[teamKey]["teamName"]);
    }
    return names;
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        if (game[teamKey]["teamName"] === teamName) {
            const numbers = [];
            const players = game[teamKey]["players"];
            for (const player in players) {
                numbers.push(players[player]["number"]);
            }
            return numbers;
        }
    }
    return null; 
}

function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const teamPlayers = game[teamKey]["players"];
        if (teamPlayers[playerName]) {
            const { number, shoe, points, rebounds, assists, steals, blocks, slamDunks } = teamPlayers[playerName];
            return { number, shoe, points, rebounds, assists, steals, blocks, slamDunks };
        }
    }
    return null; 
}


function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;

    for (const teamKey in game) {
        const players = game[teamKey]["players"];
        for (const playerName in players) {
            const player = players[playerName];
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoe = player;
            }
        }
    }

    return playerWithLargestShoe ? playerWithLargestShoe.rebounds : null;
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = -1;
    let playerWithMostPoints = null;

    for (const teamKey in game) {
        const players = game[teamKey]["players"];
        for (const playerName in players) {
            const player = players[playerName];
            if (player.points > maxPoints) {
                maxPoints = player.points;
                playerWithMostPoints = playerName;
            }
        }
    }
    return playerWithMostPoints;
}

function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    for (const player in game.home.players) {
        homeTeamPoints += game.home.players[player].points;
    }

    for (const player in game.away.players) {
        awayTeamPoints += game.away.players[player].points;
    }

    if (homeTeamPoints > awayTeamPoints) {
        return game.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    let playerWithLongestName = null;

    for (const teamKey in game) {
        const players = game[teamKey]["players"];
        for (const playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
                playerWithLongestName = playerName;
            }
        }
    }
    return playerWithLongestName;
}


function doesLongNameStealATon() {
    const game = gameObject();
    let maxSteals = -1;
    let playerWithMostSteals = null;

    for (const teamKey in game) {
        const players = game[teamKey]["players"];
        for (const playerName in players) {
            const player = players[playerName];
            if (player.steals > maxSteals) {
                maxSteals = player.steals;
                playerWithMostSteals = playerName;
            }
        }
    }

    const longestNamePlayer = playerWithLongestName();
    return longestNamePlayer === playerWithMostSteals;
}
