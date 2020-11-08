const { patchableGameStatuses, waitingForPossibilities, gameStatuses } = require("../constants/Game");

exports.isWerewolfSideAlive = game => game.players.some(player => player.role.group === "werewolves" && player.isAlive);

exports.isVillagerSideAlive = game => game.players.some(player => player.role.group === "villagers" && player.isAlive);

exports.areAllPlayersDead = game => game.players.every(player => !player.isAlive);

exports.isGameDone = game => this.areAllPlayersDead(game) ||
                            (!this.isVillagerSideAlive(game) || !this.isWerewolfSideAlive(game)) && !this.isActionInWaitingQueue(game, "shoot");

exports.isActionInWaitingQueue = (game, action) => game.waiting.some(({ to }) => to === action);

exports.getPatchableGameStatuses = () => JSON.parse(JSON.stringify(patchableGameStatuses));

exports.getWaitingForPossibilities = () => JSON.parse(JSON.stringify(waitingForPossibilities));

exports.getGameStatuses = () => JSON.parse(JSON.stringify(gameStatuses));