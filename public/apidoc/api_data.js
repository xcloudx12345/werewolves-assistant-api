define({ "api": [
  {
    "type": "GET",
    "url": "/",
    "title": "A] Get API info",
    "name": "GetAPIInfo",
    "group": "API_🔌",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>API's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>API's version</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "API_🔌"
  },
  {
    "type": "POST",
    "url": "/games",
    "title": "D] Create a game",
    "name": "CreateGame",
    "group": "Games_🎲",
    "permission": [
      {
        "name": "JWT",
        "title": "Bearer Authorization with JSON Web Token.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Request Body Parameters": [
          {
            "group": "Request Body Parameters",
            "type": "Object[]",
            "optional": false,
            "field": "players",
            "description": "<p>Must contain between 4 and 40 players.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "size": ">= 1 && <= 30",
            "optional": false,
            "field": "players.name",
            "description": "<p>Player's name. Must be unique in the array and between 1 and 30 characters long.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "optional": false,
            "field": "players.role",
            "description": "<p>Player's role. (<em>See <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 0",
            "optional": true,
            "field": "players.position",
            "description": "<p>Player's unique position among all players. Maximum is <code>players.length - 1</code>. Either all players position must be set or none of them. In that last case, it will be generated automatically.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object[]",
            "optional": true,
            "field": "additionalCards",
            "description": "<p>Game's additional cards. Must be set if role <code>thief</code> is in the game and contain 2 cards.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "optional": false,
            "field": "additionalCards.role",
            "description": "<p>Additional card's role. The role must be still available compared to the game's composition. (<em>See <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "optional": false,
            "field": "additionalCards.for",
            "description": "<p>Additional card's recipient. Must be equal to <code>thief</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>Game's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.repartition",
            "description": "<p>Game repartition's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.repartition.isHidden",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, game's repartition will be hidden to all players.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles",
            "description": "<p>Game roles options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.areRevealedOnDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, player's role is revealed when he's dead.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.sheriff",
            "description": "<p>Game sheriff role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.sheriff.isEnabled",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> will be elected the first tick and the responsibility will be delegated when he dies. Otherwise, there will be no sheriff in the game and tie in votes will result in another vote between the tied players. In case of another equality, there will be no vote.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.sheriff.electedAt",
            "description": "<p>When the sheriff is elected during the game.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": true,
            "field": "options.roles.sheriff.electedAt.turn",
            "defaultValue": "1",
            "description": "<p>When the sheriff is elected during the game.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "size": "\"night\", \"day\"",
            "optional": true,
            "field": "options.roles.sheriff.electedAt.phase",
            "defaultValue": "night",
            "description": "<p>When the sheriff is elected during the game.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.sheriff.hasDoubledVote",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> vote during the village's vote is doubled, otherwise, it's a regular vote.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.bigBadWolf",
            "description": "<p>Game big bad wolf role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.bigBadWolf.isPowerlessIfWerewolfDies",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>big-bad-wolf</code> won't wake up anymore during the night if at least one player from the <code>werewolves</code> side died. Default is <code>true</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.whiteWerewolf",
            "description": "<p>Game white werewolf role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": true,
            "field": "options.roles.whiteWerewolf.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the <code>white-werewolf</code> is waking up. Default is <code>2</code>, meaning he wakes up every other night.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.seer",
            "description": "<p>Game seer role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.seer.isTalkative",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the game master must say out loud what the seer saw during her night, otherwise, he must mime the seen role to the seer. Default is <code>true</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.seer.canSeeRoles",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the seer can the exact <code>role</code> of the target, otherwise, she only sees the <code>side</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.littleGirl",
            "description": "<p>Game little girl role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.littleGirl.isProtectedByGuard",
            "defaultValue": "false",
            "description": "<p>If set to <code>false</code>, the little girl won't be protected by the guard from the werewolves attacks. Default is <code>false</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.guard",
            "description": "<p>Game guard role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.guard.canProtectTwice",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, the guard can protect twice in a row the same target. Default is <code>false</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.ancient",
            "description": "<p>Game ancient role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": true,
            "field": "options.roles.ancient.livesCountAgainstWerewolves",
            "defaultValue": "2",
            "description": "<p>Number of lives ancient has against <code>werewolves</code>. Default is <code>2</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.ancient.doesTakeHisRevenge",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the <code>ancient</code> will make all players from the <code>villagers</code> side <code>powerless</code> if he dies from them. Default is <code>true</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.idiot",
            "description": "<p>Game idiot role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.idiot.doesDieOnAncientDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the idiot will die if he is revealed and the ancient is dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.twoSisters",
            "description": "<p>Game two sisters role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": true,
            "field": "options.roles.twoSisters.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Two Sisters are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.threeBrothers",
            "description": "<p>Game three brothers role's options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": true,
            "field": "options.roles.threeBrothers.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Three Brothers are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.fox",
            "description": "<p>Game fox's role options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.fox.isPowerlessIfMissesWerewolf",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the fox will loose his power if he doesn't find a player from the <code>werewolves</code> side during his turn if he doesn't skip. Default is <code>true</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.bearTamer",
            "description": "<p>Game bear tamer's role options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.bearTamer.doesGrowlIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the bear tamer will have the <code>growls</code> attribute until he dies if he is <code>infected</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.stutteringJudge",
            "description": "<p>Game stuttering judge's role options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": true,
            "field": "options.roles.stutteringJudge.voteRequestsCount",
            "defaultValue": "1",
            "description": "<p>Number of vote requests that the <code>stuttering-judge</code> can make during the game. Default is <code>1</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.wildChild",
            "description": "<p>Game wild child's role options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.wildChild.isTransformationRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>wild-child</code> joins the <code>werewolves</code> side because his model died, the game master will announce his transformation to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.dogWolf",
            "description": "<p>Game dog wolf's role options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.dogWolf.isChosenSideRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>dog-wolf</code> chooses his side at the beginning of the game, the game master will announce the chosen side to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.thief",
            "description": "<p>Game thief's role options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.thief.mustChooseBetweenWerewolves",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, if all <code>thief</code> additional cards are from the <code>werewolves</code> side, he can't skip and must choose one. Default is <code>true</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": true,
            "field": "options.roles.thief.additionalCardsCount",
            "defaultValue": "2",
            "description": "<p>Number of additional cards for the <code>thief</code> at the beginning of the game. Default is <code>2</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.piedPiper",
            "description": "<p>Game pied piper's role options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": true,
            "field": "options.roles.piedPiper.charmedPeopleCountPerNight",
            "defaultValue": "2",
            "description": "<p>Number of charmed people by the <code>pied-piper</code> per night if there are enough targets (or number of not charmed players otherwise). Default is <code>2</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "options.roles.piedPiper.isPowerlessIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>pied-piper</code> will be powerless if he is infected by the <code>vile-father-of-wolves</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "options.roles.raven",
            "description": "<p>Game raven's role options.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": true,
            "field": "options.roles.raven.markPenalty",
            "defaultValue": "2",
            "description": "<p>Penalty of votes against the player targeted by the raven mark for the next village's vote. Default is <code>2</code>, meaning that the raven marked player will have two votes against himself.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/Game.js",
    "groupTitle": "Games_🎲",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "MongoId",
            "optional": false,
            "field": "_id",
            "description": "<p>Game's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "gameMaster",
            "description": "<p>User who created the game and managing it. (<em>See: <a href=\"#user-class\">Classes - User</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": false,
            "field": "players",
            "description": "<p>Players of the game. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "turn",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, a turn starts with the first phase (the <code>night</code>) and ends with the second phase (the <code>day</code>).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"day\"",
              "\"night\""
            ],
            "optional": false,
            "field": "phase",
            "description": "<p>Each turn has two phases, <code>day</code> or <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tick",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, tick increments each time a play is made.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "waiting",
            "description": "<p>Queue of upcoming actions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.for",
            "description": "<p>Can be either a group, a role or the sheriff. (<em>Possibilities: <a href=\"#player-groups\">Codes - Player Groups</a> or <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.to",
            "description": "<p>What action needs to be performed by <code>waiting.for</code>. (Possibilities: <a href=\"#player-actions\">Codes - Player Actions</a>_)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "waiting.cause",
            "description": "<p>The cause of action. (<em>Possibilities: <code>stuttering-judge-request</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Game's current status. (<em>Possibilities: <a href=\"#game-statuses\">Codes - Game Statuses</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "AdditionalCard[]",
            "optional": true,
            "field": "additionalCards",
            "description": "<p>Game's additional cards. Set if <code>thief</code> is in the game. (<em>See: <a href=\"#game-additional-card-class\">Classes - Additional Card</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Game's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.repartition",
            "description": "<p>Game role's repartition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.repartition.isHidden",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, game's repartition will be hidden to all players. Default is false.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles",
            "description": "<p>Game roles options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.areRevealedOnDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, player's role is revealed when he's dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff",
            "description": "<p>Game sheriff role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.isEnabled",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> will be elected the first tick and the responsibility will be delegated when he dies. Otherwise, there will be no sheriff in the game and tie in votes will result in another vote between the tied players. In case of another equality, there will be no vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff.electedAt",
            "description": "<p>When the sheriff is elected during the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.turn",
            "defaultValue": "1",
            "description": "<p>Game's turn when the sheriff is elected. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.phase",
            "defaultValue": "night",
            "description": "<p>Game's phase when the sheriff is elected. Default is <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.hasDoubledVote",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> vote during the village's vote is doubled, otherwise, it's a regular vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bigBadWolf",
            "description": "<p>Game big bad wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bigBadWolf.isPowerlessIfWerewolfDies",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>big-bad-wolf</code> won't wake up anymore during the night if at least one player from the <code>werewolves</code> side died. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.whiteWerewolf",
            "description": "<p>Game white werewolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.whiteWerewolf.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the <code>white-werewolf</code> is waking up. Default is <code>2</code>, meaning he wakes up every other night.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.seer",
            "description": "<p>Game seer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.isTalkative",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the game master must say out loud what the seer saw during her night, otherwise, he must mime the seen role to the seer. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.canSeeRoles",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the seer can the exact <code>role</code> of the target, otherwise, she only sees the <code>side</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.littleGirl",
            "description": "<p>Game little girl role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.littleGirl.isProtectedByGuard",
            "defaultValue": "false",
            "description": "<p>If set to <code>false</code>, the little girl won't be protected by the guard from the werewolves attacks. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.guard",
            "description": "<p>Game guard role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.guard.canProtectTwice",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, the guard can protect twice in a row the same target. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.ancient",
            "description": "<p>Game ancient role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.ancient.livesCountAgainstWerewolves",
            "defaultValue": "2",
            "description": "<p>Number of lives ancient has against <code>werewolves</code>. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.ancient.doesTakeHisRevenge",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the <code>ancient</code> will make all players from the <code>villagers</code> side <code>powerless</code> if he dies from them. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.idiot",
            "description": "<p>Game idiot role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.idiot.doesDieOnAncientDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the idiot will die if he is revealed and the ancient is dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.twoSisters",
            "description": "<p>Game two sisters role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.twoSisters.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Two Sisters are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.threeBrothers",
            "description": "<p>Game three brothers role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.threeBrothers.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Three Brothers are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.fox",
            "description": "<p>Game fox role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.fox.isPowerlessIfMissesWerewolf",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the fox will loose his power if he doesn't find a player from the <code>werewolves</code> side during his turn if he doesn't skip. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bearTamer",
            "description": "<p>Game bear tamer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bearTamer.doesGrowlIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the bear tamer will have the <code>growls</code> attribute until he dies if he is <code>infected</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.stutteringJudge",
            "description": "<p>Game stuttering judge role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.stutteringJudge.voteRequestsCount",
            "defaultValue": "1",
            "description": "<p>Number of vote requests that the <code>stuttering-judge</code> can make during the game. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.wildChild",
            "description": "<p>Game wild child role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.wildChild.isTransformationRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>wild-child</code> joins the <code>werewolves</code> side because his model died, the game master will announce his transformation to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.dogWolf",
            "description": "<p>Game dog wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.dogWolf.isChosenSideRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>dog-wolf</code> chooses his side at the beginning of the game, the game master will announce the chosen side to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.thief",
            "description": "<p>Game thief role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.thief.mustChooseBetweenWerewolves",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, if all <code>thief</code> additional cards are from the <code>werewolves</code> side, he can't skip and must choose one. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.thief.additionalCardsCount",
            "defaultValue": "2",
            "description": "<p>Number of additional cards for the <code>thief</code> at the beginning of the game. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.piedPiper",
            "description": "<p>Game pied piper role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.piedPiper.charmedPeopleCountPerNight",
            "defaultValue": "2",
            "description": "<p>Number of charmed people by the <code>pied-piper</code> per night if there are enough targets (or number of not charmed players otherwise). Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.piedPiper.isPowerlessIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>pied-piper</code> will be powerless if he is infected by the <code>vile-father-of-wolves</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.raven",
            "description": "<p>Game raven role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.raven.markPenalty",
            "defaultValue": "2",
            "description": "<p>Penalty of votes against the player targeted by the raven mark for the next village's vote. Default is <code>2</code>, meaning that the raven marked player will have two votes against himself.</p>"
          },
          {
            "group": "Success 200",
            "type": "GameHistory[]",
            "optional": false,
            "field": "history",
            "description": "<p>Game's history. (<em>See: <a href=\"#game-history-class\">Classes - Game History</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "won",
            "description": "<p>Winners of the game when status is <code>done</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "{\"werewolves\"",
              "\"villagers\"",
              "\"lovers\"",
              "null}"
            ],
            "optional": false,
            "field": "won.by",
            "description": "<p>Can be either a group or a role. (<em>Possibilities: <code>werewolves</code>, <code>villagers</code>, <code>lovers</code> or null if nobody won</em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": true,
            "field": "won.players",
            "description": "<p>List of player(s) who won. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>When the game was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>When the game was updated.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/games/:id",
    "title": "C] Get a game",
    "name": "GetGame",
    "group": "Games_🎲",
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Game's ID.</p>"
          }
        ],
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "Number",
            "optional": true,
            "field": "history-limit",
            "description": "<p>Number of game history's entries. Set to <code>0</code> for no limit.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Basic",
        "title": "Basic authentication with username and password.",
        "description": ""
      },
      {
        "name": "JWT",
        "title": "Bearer Authorization with JSON Web Token.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/Game.js",
    "groupTitle": "Games_🎲",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "MongoId",
            "optional": false,
            "field": "_id",
            "description": "<p>Game's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "gameMaster",
            "description": "<p>User who created the game and managing it. (<em>See: <a href=\"#user-class\">Classes - User</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": false,
            "field": "players",
            "description": "<p>Players of the game. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "turn",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, a turn starts with the first phase (the <code>night</code>) and ends with the second phase (the <code>day</code>).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"day\"",
              "\"night\""
            ],
            "optional": false,
            "field": "phase",
            "description": "<p>Each turn has two phases, <code>day</code> or <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tick",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, tick increments each time a play is made.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "waiting",
            "description": "<p>Queue of upcoming actions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.for",
            "description": "<p>Can be either a group, a role or the sheriff. (<em>Possibilities: <a href=\"#player-groups\">Codes - Player Groups</a> or <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.to",
            "description": "<p>What action needs to be performed by <code>waiting.for</code>. (Possibilities: <a href=\"#player-actions\">Codes - Player Actions</a>_)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "waiting.cause",
            "description": "<p>The cause of action. (<em>Possibilities: <code>stuttering-judge-request</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Game's current status. (<em>Possibilities: <a href=\"#game-statuses\">Codes - Game Statuses</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "AdditionalCard[]",
            "optional": true,
            "field": "additionalCards",
            "description": "<p>Game's additional cards. Set if <code>thief</code> is in the game. (<em>See: <a href=\"#game-additional-card-class\">Classes - Additional Card</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Game's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.repartition",
            "description": "<p>Game role's repartition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.repartition.isHidden",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, game's repartition will be hidden to all players. Default is false.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles",
            "description": "<p>Game roles options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.areRevealedOnDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, player's role is revealed when he's dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff",
            "description": "<p>Game sheriff role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.isEnabled",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> will be elected the first tick and the responsibility will be delegated when he dies. Otherwise, there will be no sheriff in the game and tie in votes will result in another vote between the tied players. In case of another equality, there will be no vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff.electedAt",
            "description": "<p>When the sheriff is elected during the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.turn",
            "defaultValue": "1",
            "description": "<p>Game's turn when the sheriff is elected. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.phase",
            "defaultValue": "night",
            "description": "<p>Game's phase when the sheriff is elected. Default is <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.hasDoubledVote",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> vote during the village's vote is doubled, otherwise, it's a regular vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bigBadWolf",
            "description": "<p>Game big bad wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bigBadWolf.isPowerlessIfWerewolfDies",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>big-bad-wolf</code> won't wake up anymore during the night if at least one player from the <code>werewolves</code> side died. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.whiteWerewolf",
            "description": "<p>Game white werewolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.whiteWerewolf.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the <code>white-werewolf</code> is waking up. Default is <code>2</code>, meaning he wakes up every other night.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.seer",
            "description": "<p>Game seer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.isTalkative",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the game master must say out loud what the seer saw during her night, otherwise, he must mime the seen role to the seer. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.canSeeRoles",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the seer can the exact <code>role</code> of the target, otherwise, she only sees the <code>side</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.littleGirl",
            "description": "<p>Game little girl role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.littleGirl.isProtectedByGuard",
            "defaultValue": "false",
            "description": "<p>If set to <code>false</code>, the little girl won't be protected by the guard from the werewolves attacks. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.guard",
            "description": "<p>Game guard role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.guard.canProtectTwice",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, the guard can protect twice in a row the same target. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.ancient",
            "description": "<p>Game ancient role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.ancient.livesCountAgainstWerewolves",
            "defaultValue": "2",
            "description": "<p>Number of lives ancient has against <code>werewolves</code>. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.ancient.doesTakeHisRevenge",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the <code>ancient</code> will make all players from the <code>villagers</code> side <code>powerless</code> if he dies from them. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.idiot",
            "description": "<p>Game idiot role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.idiot.doesDieOnAncientDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the idiot will die if he is revealed and the ancient is dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.twoSisters",
            "description": "<p>Game two sisters role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.twoSisters.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Two Sisters are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.threeBrothers",
            "description": "<p>Game three brothers role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.threeBrothers.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Three Brothers are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.fox",
            "description": "<p>Game fox role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.fox.isPowerlessIfMissesWerewolf",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the fox will loose his power if he doesn't find a player from the <code>werewolves</code> side during his turn if he doesn't skip. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bearTamer",
            "description": "<p>Game bear tamer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bearTamer.doesGrowlIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the bear tamer will have the <code>growls</code> attribute until he dies if he is <code>infected</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.stutteringJudge",
            "description": "<p>Game stuttering judge role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.stutteringJudge.voteRequestsCount",
            "defaultValue": "1",
            "description": "<p>Number of vote requests that the <code>stuttering-judge</code> can make during the game. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.wildChild",
            "description": "<p>Game wild child role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.wildChild.isTransformationRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>wild-child</code> joins the <code>werewolves</code> side because his model died, the game master will announce his transformation to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.dogWolf",
            "description": "<p>Game dog wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.dogWolf.isChosenSideRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>dog-wolf</code> chooses his side at the beginning of the game, the game master will announce the chosen side to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.thief",
            "description": "<p>Game thief role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.thief.mustChooseBetweenWerewolves",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, if all <code>thief</code> additional cards are from the <code>werewolves</code> side, he can't skip and must choose one. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.thief.additionalCardsCount",
            "defaultValue": "2",
            "description": "<p>Number of additional cards for the <code>thief</code> at the beginning of the game. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.piedPiper",
            "description": "<p>Game pied piper role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.piedPiper.charmedPeopleCountPerNight",
            "defaultValue": "2",
            "description": "<p>Number of charmed people by the <code>pied-piper</code> per night if there are enough targets (or number of not charmed players otherwise). Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.piedPiper.isPowerlessIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>pied-piper</code> will be powerless if he is infected by the <code>vile-father-of-wolves</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.raven",
            "description": "<p>Game raven role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.raven.markPenalty",
            "defaultValue": "2",
            "description": "<p>Penalty of votes against the player targeted by the raven mark for the next village's vote. Default is <code>2</code>, meaning that the raven marked player will have two votes against himself.</p>"
          },
          {
            "group": "Success 200",
            "type": "GameHistory[]",
            "optional": false,
            "field": "history",
            "description": "<p>Game's history. (<em>See: <a href=\"#game-history-class\">Classes - Game History</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "won",
            "description": "<p>Winners of the game when status is <code>done</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "{\"werewolves\"",
              "\"villagers\"",
              "\"lovers\"",
              "null}"
            ],
            "optional": false,
            "field": "won.by",
            "description": "<p>Can be either a group or a role. (<em>Possibilities: <code>werewolves</code>, <code>villagers</code>, <code>lovers</code> or null if nobody won</em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": true,
            "field": "won.players",
            "description": "<p>List of player(s) who won. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>When the game was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>When the game was updated.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/games/:id/history",
    "title": "H] Get game history",
    "name": "GetGameHistory",
    "group": "Games_🎲",
    "permission": [
      {
        "name": "JWT",
        "title": "Bearer Authorization with JSON Web Token.",
        "description": ""
      },
      {
        "name": "Basic",
        "title": "Basic authentication with username and password.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Game's ID.</p>"
          }
        ],
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": true,
            "field": "play-source",
            "description": "<p>Filter by play's source. (<em>Possibilities: <a href=\"#player-groups\">Codes - Player Groups</a> or <a href=\"#player-roles\">Codes - Player Roles</a> or <code>sheriff</code></em>).</p>"
          },
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": true,
            "field": "play-action",
            "description": "<p>Filter by play's action. (<em>Possibilities: <a href=\"#player-actions\">Codes - Player Actions</a></em>)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Game history entry's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "gameId",
            "description": "<p>Game's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "turn",
            "description": "<p>Game's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tick",
            "description": "<p>Game's tick.</p>"
          },
          {
            "group": "Success 200",
            "type": "Play",
            "optional": false,
            "field": "play",
            "description": "<p>Game's play. (<em>See: <a href=\"#play-class\">Classes - Play</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": true,
            "field": "deadPlayers",
            "description": "<p>Player(s) that might died after the play.</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": true,
            "field": "revealedPlayers",
            "description": "<p>Player(s) which role has been revealed after the play.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/Game.js",
    "groupTitle": "Games_🎲"
  },
  {
    "type": "GET",
    "url": "/games/repartition",
    "title": "B] Get a game repartition",
    "description": "<p>Randomly affects role to players for a game.</p>",
    "name": "GetGameRepartition",
    "group": "Games_🎲",
    "parameter": {
      "fields": {
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "Object[]",
            "optional": false,
            "field": "players",
            "description": "<p>Must contain between 4 and 40 players.</p>"
          },
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": false,
            "field": "players.name",
            "description": "<p>Player's name. Must be unique in the array.</p>"
          },
          {
            "group": "Query String Parameters",
            "type": "String[]",
            "optional": true,
            "field": "forbidden-roles",
            "defaultValue": "[]",
            "description": "<p>Roles that won't be given by game repartition. All roles can be forbidden except <code>villager</code> and <code>werewolf</code>. (<em>See <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Query String Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "are-recommended-min-players-respected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, game repartition will make sure that roles distributed respect the recommend min players in the game.</p>"
          },
          {
            "group": "Query String Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "are-powerful-villager-roles-prioritized",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, villagers with powers will be given to players before simple villagers.</p>"
          },
          {
            "group": "Query String Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "are-powerful-werewolf-roles-prioritized",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, werewolves with powers will be given to players before simple werewolves.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Basic",
        "title": "Basic authentication with username and password.",
        "description": ""
      },
      {
        "name": "JWT",
        "title": "Bearer Authorization with JSON Web Token.",
        "description": ""
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "players",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "players.name",
            "description": "<p>Player's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "players.role",
            "description": "<p>Player's role.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/Game.js",
    "groupTitle": "Games_🎲"
  },
  {
    "type": "GET",
    "url": "/games",
    "title": "A] Get games",
    "name": "GetGames",
    "group": "Games_🎲",
    "description": "<p>Get games filtered by query string parameters if specified.</p> <ul> <li><code>JWT auth</code>: Only games created by the user attached to token can be retrieved from this route.</li> <li><code>Basic auth</code>: All games can be retrieved.</li> </ul>",
    "parameter": {
      "fields": {
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Specifies which user fields to include. Each value must be separated by a <code>,</code> without space. (e.g: <code>field1,field2</code>)</p>"
          },
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Filter by game's status. (<em>Possibilities: <a href=\"#game-statuses\">Codes - Game Statuses</a></em></p>"
          },
          {
            "group": "Query String Parameters",
            "type": "Number",
            "optional": true,
            "field": "history-limit",
            "description": "<p>Number of game history's entries. Set to <code>0</code> for no limit.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "JWT",
        "title": "Bearer Authorization with JSON Web Token.",
        "description": ""
      },
      {
        "name": "Basic",
        "title": "Basic authentication with username and password.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "src/routes/Game.js",
    "groupTitle": "Games_🎲",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "MongoId",
            "optional": false,
            "field": "_id",
            "description": "<p>Game's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "gameMaster",
            "description": "<p>User who created the game and managing it. (<em>See: <a href=\"#user-class\">Classes - User</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": false,
            "field": "players",
            "description": "<p>Players of the game. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "turn",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, a turn starts with the first phase (the <code>night</code>) and ends with the second phase (the <code>day</code>).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"day\"",
              "\"night\""
            ],
            "optional": false,
            "field": "phase",
            "description": "<p>Each turn has two phases, <code>day</code> or <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tick",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, tick increments each time a play is made.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "waiting",
            "description": "<p>Queue of upcoming actions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.for",
            "description": "<p>Can be either a group, a role or the sheriff. (<em>Possibilities: <a href=\"#player-groups\">Codes - Player Groups</a> or <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.to",
            "description": "<p>What action needs to be performed by <code>waiting.for</code>. (Possibilities: <a href=\"#player-actions\">Codes - Player Actions</a>_)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "waiting.cause",
            "description": "<p>The cause of action. (<em>Possibilities: <code>stuttering-judge-request</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Game's current status. (<em>Possibilities: <a href=\"#game-statuses\">Codes - Game Statuses</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "AdditionalCard[]",
            "optional": true,
            "field": "additionalCards",
            "description": "<p>Game's additional cards. Set if <code>thief</code> is in the game. (<em>See: <a href=\"#game-additional-card-class\">Classes - Additional Card</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Game's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.repartition",
            "description": "<p>Game role's repartition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.repartition.isHidden",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, game's repartition will be hidden to all players. Default is false.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles",
            "description": "<p>Game roles options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.areRevealedOnDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, player's role is revealed when he's dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff",
            "description": "<p>Game sheriff role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.isEnabled",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> will be elected the first tick and the responsibility will be delegated when he dies. Otherwise, there will be no sheriff in the game and tie in votes will result in another vote between the tied players. In case of another equality, there will be no vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff.electedAt",
            "description": "<p>When the sheriff is elected during the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.turn",
            "defaultValue": "1",
            "description": "<p>Game's turn when the sheriff is elected. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.phase",
            "defaultValue": "night",
            "description": "<p>Game's phase when the sheriff is elected. Default is <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.hasDoubledVote",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> vote during the village's vote is doubled, otherwise, it's a regular vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bigBadWolf",
            "description": "<p>Game big bad wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bigBadWolf.isPowerlessIfWerewolfDies",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>big-bad-wolf</code> won't wake up anymore during the night if at least one player from the <code>werewolves</code> side died. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.whiteWerewolf",
            "description": "<p>Game white werewolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.whiteWerewolf.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the <code>white-werewolf</code> is waking up. Default is <code>2</code>, meaning he wakes up every other night.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.seer",
            "description": "<p>Game seer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.isTalkative",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the game master must say out loud what the seer saw during her night, otherwise, he must mime the seen role to the seer. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.canSeeRoles",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the seer can the exact <code>role</code> of the target, otherwise, she only sees the <code>side</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.littleGirl",
            "description": "<p>Game little girl role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.littleGirl.isProtectedByGuard",
            "defaultValue": "false",
            "description": "<p>If set to <code>false</code>, the little girl won't be protected by the guard from the werewolves attacks. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.guard",
            "description": "<p>Game guard role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.guard.canProtectTwice",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, the guard can protect twice in a row the same target. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.ancient",
            "description": "<p>Game ancient role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.ancient.livesCountAgainstWerewolves",
            "defaultValue": "2",
            "description": "<p>Number of lives ancient has against <code>werewolves</code>. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.ancient.doesTakeHisRevenge",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the <code>ancient</code> will make all players from the <code>villagers</code> side <code>powerless</code> if he dies from them. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.idiot",
            "description": "<p>Game idiot role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.idiot.doesDieOnAncientDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the idiot will die if he is revealed and the ancient is dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.twoSisters",
            "description": "<p>Game two sisters role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.twoSisters.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Two Sisters are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.threeBrothers",
            "description": "<p>Game three brothers role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.threeBrothers.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Three Brothers are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.fox",
            "description": "<p>Game fox role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.fox.isPowerlessIfMissesWerewolf",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the fox will loose his power if he doesn't find a player from the <code>werewolves</code> side during his turn if he doesn't skip. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bearTamer",
            "description": "<p>Game bear tamer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bearTamer.doesGrowlIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the bear tamer will have the <code>growls</code> attribute until he dies if he is <code>infected</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.stutteringJudge",
            "description": "<p>Game stuttering judge role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.stutteringJudge.voteRequestsCount",
            "defaultValue": "1",
            "description": "<p>Number of vote requests that the <code>stuttering-judge</code> can make during the game. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.wildChild",
            "description": "<p>Game wild child role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.wildChild.isTransformationRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>wild-child</code> joins the <code>werewolves</code> side because his model died, the game master will announce his transformation to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.dogWolf",
            "description": "<p>Game dog wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.dogWolf.isChosenSideRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>dog-wolf</code> chooses his side at the beginning of the game, the game master will announce the chosen side to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.thief",
            "description": "<p>Game thief role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.thief.mustChooseBetweenWerewolves",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, if all <code>thief</code> additional cards are from the <code>werewolves</code> side, he can't skip and must choose one. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.thief.additionalCardsCount",
            "defaultValue": "2",
            "description": "<p>Number of additional cards for the <code>thief</code> at the beginning of the game. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.piedPiper",
            "description": "<p>Game pied piper role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.piedPiper.charmedPeopleCountPerNight",
            "defaultValue": "2",
            "description": "<p>Number of charmed people by the <code>pied-piper</code> per night if there are enough targets (or number of not charmed players otherwise). Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.piedPiper.isPowerlessIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>pied-piper</code> will be powerless if he is infected by the <code>vile-father-of-wolves</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.raven",
            "description": "<p>Game raven role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.raven.markPenalty",
            "defaultValue": "2",
            "description": "<p>Penalty of votes against the player targeted by the raven mark for the next village's vote. Default is <code>2</code>, meaning that the raven marked player will have two votes against himself.</p>"
          },
          {
            "group": "Success 200",
            "type": "GameHistory[]",
            "optional": false,
            "field": "history",
            "description": "<p>Game's history. (<em>See: <a href=\"#game-history-class\">Classes - Game History</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "won",
            "description": "<p>Winners of the game when status is <code>done</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "{\"werewolves\"",
              "\"villagers\"",
              "\"lovers\"",
              "null}"
            ],
            "optional": false,
            "field": "won.by",
            "description": "<p>Can be either a group or a role. (<em>Possibilities: <code>werewolves</code>, <code>villagers</code>, <code>lovers</code> or null if nobody won</em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": true,
            "field": "won.players",
            "description": "<p>List of player(s) who won. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>When the game was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>When the game was updated.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/games/:id/play",
    "title": "G] Make a play",
    "name": "MakeAPlayInGame",
    "group": "Games_🎲",
    "permission": [
      {
        "name": "JWT",
        "title": "Bearer Authorization with JSON Web Token.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Game's ID.</p>"
          }
        ],
        "Request Body Parameters": [
          {
            "group": "Request Body Parameters",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Source of the play. (<em>Possibilities: <a href=\"#player-groups\">Codes - Player Groups</a> or <a href=\"#player-roles\">Codes - Player Roles</a> or <code>sheriff</code></em>).</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Action of the play. (<em>Possibilities: <a href=\"#player-actions\">Codes - Player Actions</a></em>)</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object[]",
            "optional": true,
            "field": "targets",
            "description": "<p>Player(s) affected by the play. Required when <strong>action</strong> is <code>use-potion</code>, <code>eat</code>, <code>look</code>, <code>protect</code>, <code>shoot</code>, <code>mark</code>, <code>delegate</code> or <code>settle-votes</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "ObjectId",
            "optional": false,
            "field": "targets.player",
            "description": "<p>Player's id.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "targets.isInfected",
            "description": "<p>Only if there is vile-father-of-wolves in the game and the action is <code>eat</code> from <code>werewolves</code>. Set to <code>true</code> and the werewolves victim will instantly join the <code>werewolves</code> side if possible.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "targets.hasDrankLifePotion",
            "description": "<p>Set to <code>true</code> if the <code>witch</code> saves target's life from werewolves meal.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "targets.hasDrankDeathPotion",
            "description": "<p>Set to <code>true</code> if the <code>witch</code> kills the target.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object[]",
            "optional": true,
            "field": "votes",
            "description": "<p>Required when <strong>action</strong> is <code>elect-sheriff</code> or <code>vote</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "ObjectId",
            "optional": false,
            "field": "votes.from",
            "description": "<p>Vote's source id.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "ObjectId",
            "optional": false,
            "field": "votes.for",
            "description": "<p>Vote's target id.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "doesJudgeRequestAnotherVote",
            "description": "<p>Only if there is a <code>stuttering-judge</code> in the game and <code>action</code> is <code>vote</code> or <code>settle-votes</code>. If set to <code>true</code>, there is another vote immediately.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "ObjectId",
            "optional": true,
            "field": "card",
            "description": "<p>Only available for <code>thief</code>, chosen card id of additional cards. Set if <code>thief</code> chose a card or must be set if both additional card are <code>werewolves</code> side.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "allowedValues": [
              "{\"villagers\"",
              "\"werewolves\"}"
            ],
            "optional": true,
            "field": "side",
            "description": "<p>Side chosen by the dog-wolf. Required when <strong>action</strong> is <code>choose-side</code>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/Game.js",
    "groupTitle": "Games_🎲",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "MongoId",
            "optional": false,
            "field": "_id",
            "description": "<p>Game's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "gameMaster",
            "description": "<p>User who created the game and managing it. (<em>See: <a href=\"#user-class\">Classes - User</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": false,
            "field": "players",
            "description": "<p>Players of the game. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "turn",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, a turn starts with the first phase (the <code>night</code>) and ends with the second phase (the <code>day</code>).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"day\"",
              "\"night\""
            ],
            "optional": false,
            "field": "phase",
            "description": "<p>Each turn has two phases, <code>day</code> or <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tick",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, tick increments each time a play is made.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "waiting",
            "description": "<p>Queue of upcoming actions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.for",
            "description": "<p>Can be either a group, a role or the sheriff. (<em>Possibilities: <a href=\"#player-groups\">Codes - Player Groups</a> or <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.to",
            "description": "<p>What action needs to be performed by <code>waiting.for</code>. (Possibilities: <a href=\"#player-actions\">Codes - Player Actions</a>_)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "waiting.cause",
            "description": "<p>The cause of action. (<em>Possibilities: <code>stuttering-judge-request</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Game's current status. (<em>Possibilities: <a href=\"#game-statuses\">Codes - Game Statuses</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "AdditionalCard[]",
            "optional": true,
            "field": "additionalCards",
            "description": "<p>Game's additional cards. Set if <code>thief</code> is in the game. (<em>See: <a href=\"#game-additional-card-class\">Classes - Additional Card</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Game's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.repartition",
            "description": "<p>Game role's repartition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.repartition.isHidden",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, game's repartition will be hidden to all players. Default is false.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles",
            "description": "<p>Game roles options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.areRevealedOnDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, player's role is revealed when he's dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff",
            "description": "<p>Game sheriff role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.isEnabled",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> will be elected the first tick and the responsibility will be delegated when he dies. Otherwise, there will be no sheriff in the game and tie in votes will result in another vote between the tied players. In case of another equality, there will be no vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff.electedAt",
            "description": "<p>When the sheriff is elected during the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.turn",
            "defaultValue": "1",
            "description": "<p>Game's turn when the sheriff is elected. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.phase",
            "defaultValue": "night",
            "description": "<p>Game's phase when the sheriff is elected. Default is <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.hasDoubledVote",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> vote during the village's vote is doubled, otherwise, it's a regular vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bigBadWolf",
            "description": "<p>Game big bad wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bigBadWolf.isPowerlessIfWerewolfDies",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>big-bad-wolf</code> won't wake up anymore during the night if at least one player from the <code>werewolves</code> side died. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.whiteWerewolf",
            "description": "<p>Game white werewolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.whiteWerewolf.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the <code>white-werewolf</code> is waking up. Default is <code>2</code>, meaning he wakes up every other night.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.seer",
            "description": "<p>Game seer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.isTalkative",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the game master must say out loud what the seer saw during her night, otherwise, he must mime the seen role to the seer. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.canSeeRoles",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the seer can the exact <code>role</code> of the target, otherwise, she only sees the <code>side</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.littleGirl",
            "description": "<p>Game little girl role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.littleGirl.isProtectedByGuard",
            "defaultValue": "false",
            "description": "<p>If set to <code>false</code>, the little girl won't be protected by the guard from the werewolves attacks. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.guard",
            "description": "<p>Game guard role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.guard.canProtectTwice",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, the guard can protect twice in a row the same target. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.ancient",
            "description": "<p>Game ancient role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.ancient.livesCountAgainstWerewolves",
            "defaultValue": "2",
            "description": "<p>Number of lives ancient has against <code>werewolves</code>. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.ancient.doesTakeHisRevenge",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the <code>ancient</code> will make all players from the <code>villagers</code> side <code>powerless</code> if he dies from them. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.idiot",
            "description": "<p>Game idiot role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.idiot.doesDieOnAncientDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the idiot will die if he is revealed and the ancient is dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.twoSisters",
            "description": "<p>Game two sisters role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.twoSisters.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Two Sisters are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.threeBrothers",
            "description": "<p>Game three brothers role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.threeBrothers.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Three Brothers are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.fox",
            "description": "<p>Game fox role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.fox.isPowerlessIfMissesWerewolf",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the fox will loose his power if he doesn't find a player from the <code>werewolves</code> side during his turn if he doesn't skip. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bearTamer",
            "description": "<p>Game bear tamer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bearTamer.doesGrowlIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the bear tamer will have the <code>growls</code> attribute until he dies if he is <code>infected</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.stutteringJudge",
            "description": "<p>Game stuttering judge role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.stutteringJudge.voteRequestsCount",
            "defaultValue": "1",
            "description": "<p>Number of vote requests that the <code>stuttering-judge</code> can make during the game. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.wildChild",
            "description": "<p>Game wild child role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.wildChild.isTransformationRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>wild-child</code> joins the <code>werewolves</code> side because his model died, the game master will announce his transformation to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.dogWolf",
            "description": "<p>Game dog wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.dogWolf.isChosenSideRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>dog-wolf</code> chooses his side at the beginning of the game, the game master will announce the chosen side to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.thief",
            "description": "<p>Game thief role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.thief.mustChooseBetweenWerewolves",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, if all <code>thief</code> additional cards are from the <code>werewolves</code> side, he can't skip and must choose one. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.thief.additionalCardsCount",
            "defaultValue": "2",
            "description": "<p>Number of additional cards for the <code>thief</code> at the beginning of the game. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.piedPiper",
            "description": "<p>Game pied piper role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.piedPiper.charmedPeopleCountPerNight",
            "defaultValue": "2",
            "description": "<p>Number of charmed people by the <code>pied-piper</code> per night if there are enough targets (or number of not charmed players otherwise). Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.piedPiper.isPowerlessIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>pied-piper</code> will be powerless if he is infected by the <code>vile-father-of-wolves</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.raven",
            "description": "<p>Game raven role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.raven.markPenalty",
            "defaultValue": "2",
            "description": "<p>Penalty of votes against the player targeted by the raven mark for the next village's vote. Default is <code>2</code>, meaning that the raven marked player will have two votes against himself.</p>"
          },
          {
            "group": "Success 200",
            "type": "GameHistory[]",
            "optional": false,
            "field": "history",
            "description": "<p>Game's history. (<em>See: <a href=\"#game-history-class\">Classes - Game History</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "won",
            "description": "<p>Winners of the game when status is <code>done</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "{\"werewolves\"",
              "\"villagers\"",
              "\"lovers\"",
              "null}"
            ],
            "optional": false,
            "field": "won.by",
            "description": "<p>Can be either a group or a role. (<em>Possibilities: <code>werewolves</code>, <code>villagers</code>, <code>lovers</code> or null if nobody won</em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": true,
            "field": "won.players",
            "description": "<p>List of player(s) who won. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>When the game was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>When the game was updated.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "PATCH",
    "url": "/games/:id/reset",
    "title": "E] Reset a game",
    "name": "ResetGame",
    "group": "Games_🎲",
    "permission": [
      {
        "name": "JWT",
        "title": "Bearer Authorization with JSON Web Token.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Game's ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/Game.js",
    "groupTitle": "Games_🎲",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "MongoId",
            "optional": false,
            "field": "_id",
            "description": "<p>Game's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "gameMaster",
            "description": "<p>User who created the game and managing it. (<em>See: <a href=\"#user-class\">Classes - User</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": false,
            "field": "players",
            "description": "<p>Players of the game. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "turn",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, a turn starts with the first phase (the <code>night</code>) and ends with the second phase (the <code>day</code>).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"day\"",
              "\"night\""
            ],
            "optional": false,
            "field": "phase",
            "description": "<p>Each turn has two phases, <code>day</code> or <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tick",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, tick increments each time a play is made.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "waiting",
            "description": "<p>Queue of upcoming actions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.for",
            "description": "<p>Can be either a group, a role or the sheriff. (<em>Possibilities: <a href=\"#player-groups\">Codes - Player Groups</a> or <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.to",
            "description": "<p>What action needs to be performed by <code>waiting.for</code>. (Possibilities: <a href=\"#player-actions\">Codes - Player Actions</a>_)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "waiting.cause",
            "description": "<p>The cause of action. (<em>Possibilities: <code>stuttering-judge-request</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Game's current status. (<em>Possibilities: <a href=\"#game-statuses\">Codes - Game Statuses</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "AdditionalCard[]",
            "optional": true,
            "field": "additionalCards",
            "description": "<p>Game's additional cards. Set if <code>thief</code> is in the game. (<em>See: <a href=\"#game-additional-card-class\">Classes - Additional Card</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Game's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.repartition",
            "description": "<p>Game role's repartition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.repartition.isHidden",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, game's repartition will be hidden to all players. Default is false.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles",
            "description": "<p>Game roles options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.areRevealedOnDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, player's role is revealed when he's dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff",
            "description": "<p>Game sheriff role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.isEnabled",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> will be elected the first tick and the responsibility will be delegated when he dies. Otherwise, there will be no sheriff in the game and tie in votes will result in another vote between the tied players. In case of another equality, there will be no vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff.electedAt",
            "description": "<p>When the sheriff is elected during the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.turn",
            "defaultValue": "1",
            "description": "<p>Game's turn when the sheriff is elected. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.phase",
            "defaultValue": "night",
            "description": "<p>Game's phase when the sheriff is elected. Default is <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.hasDoubledVote",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> vote during the village's vote is doubled, otherwise, it's a regular vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bigBadWolf",
            "description": "<p>Game big bad wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bigBadWolf.isPowerlessIfWerewolfDies",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>big-bad-wolf</code> won't wake up anymore during the night if at least one player from the <code>werewolves</code> side died. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.whiteWerewolf",
            "description": "<p>Game white werewolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.whiteWerewolf.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the <code>white-werewolf</code> is waking up. Default is <code>2</code>, meaning he wakes up every other night.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.seer",
            "description": "<p>Game seer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.isTalkative",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the game master must say out loud what the seer saw during her night, otherwise, he must mime the seen role to the seer. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.canSeeRoles",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the seer can the exact <code>role</code> of the target, otherwise, she only sees the <code>side</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.littleGirl",
            "description": "<p>Game little girl role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.littleGirl.isProtectedByGuard",
            "defaultValue": "false",
            "description": "<p>If set to <code>false</code>, the little girl won't be protected by the guard from the werewolves attacks. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.guard",
            "description": "<p>Game guard role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.guard.canProtectTwice",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, the guard can protect twice in a row the same target. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.ancient",
            "description": "<p>Game ancient role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.ancient.livesCountAgainstWerewolves",
            "defaultValue": "2",
            "description": "<p>Number of lives ancient has against <code>werewolves</code>. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.ancient.doesTakeHisRevenge",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the <code>ancient</code> will make all players from the <code>villagers</code> side <code>powerless</code> if he dies from them. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.idiot",
            "description": "<p>Game idiot role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.idiot.doesDieOnAncientDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the idiot will die if he is revealed and the ancient is dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.twoSisters",
            "description": "<p>Game two sisters role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.twoSisters.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Two Sisters are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.threeBrothers",
            "description": "<p>Game three brothers role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.threeBrothers.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Three Brothers are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.fox",
            "description": "<p>Game fox role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.fox.isPowerlessIfMissesWerewolf",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the fox will loose his power if he doesn't find a player from the <code>werewolves</code> side during his turn if he doesn't skip. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bearTamer",
            "description": "<p>Game bear tamer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bearTamer.doesGrowlIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the bear tamer will have the <code>growls</code> attribute until he dies if he is <code>infected</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.stutteringJudge",
            "description": "<p>Game stuttering judge role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.stutteringJudge.voteRequestsCount",
            "defaultValue": "1",
            "description": "<p>Number of vote requests that the <code>stuttering-judge</code> can make during the game. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.wildChild",
            "description": "<p>Game wild child role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.wildChild.isTransformationRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>wild-child</code> joins the <code>werewolves</code> side because his model died, the game master will announce his transformation to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.dogWolf",
            "description": "<p>Game dog wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.dogWolf.isChosenSideRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>dog-wolf</code> chooses his side at the beginning of the game, the game master will announce the chosen side to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.thief",
            "description": "<p>Game thief role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.thief.mustChooseBetweenWerewolves",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, if all <code>thief</code> additional cards are from the <code>werewolves</code> side, he can't skip and must choose one. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.thief.additionalCardsCount",
            "defaultValue": "2",
            "description": "<p>Number of additional cards for the <code>thief</code> at the beginning of the game. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.piedPiper",
            "description": "<p>Game pied piper role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.piedPiper.charmedPeopleCountPerNight",
            "defaultValue": "2",
            "description": "<p>Number of charmed people by the <code>pied-piper</code> per night if there are enough targets (or number of not charmed players otherwise). Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.piedPiper.isPowerlessIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>pied-piper</code> will be powerless if he is infected by the <code>vile-father-of-wolves</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.raven",
            "description": "<p>Game raven role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.raven.markPenalty",
            "defaultValue": "2",
            "description": "<p>Penalty of votes against the player targeted by the raven mark for the next village's vote. Default is <code>2</code>, meaning that the raven marked player will have two votes against himself.</p>"
          },
          {
            "group": "Success 200",
            "type": "GameHistory[]",
            "optional": false,
            "field": "history",
            "description": "<p>Game's history. (<em>See: <a href=\"#game-history-class\">Classes - Game History</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "won",
            "description": "<p>Winners of the game when status is <code>done</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "{\"werewolves\"",
              "\"villagers\"",
              "\"lovers\"",
              "null}"
            ],
            "optional": false,
            "field": "won.by",
            "description": "<p>Can be either a group or a role. (<em>Possibilities: <code>werewolves</code>, <code>villagers</code>, <code>lovers</code> or null if nobody won</em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": true,
            "field": "won.players",
            "description": "<p>List of player(s) who won. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>When the game was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>When the game was updated.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "PATCH",
    "url": "/games/:id",
    "title": "F] Update a game",
    "name": "UpdateGame",
    "group": "Games_🎲",
    "permission": [
      {
        "name": "JWT",
        "title": "Bearer Authorization with JSON Web Token.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Game's ID.</p>"
          }
        ],
        "Request Body Parameters": [
          {
            "group": "Request Body Parameters",
            "type": "String",
            "allowedValues": [
              "\"canceled\""
            ],
            "optional": true,
            "field": "status",
            "description": "<p>Game master can cancel a game only if its status is set to <code>playing</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Object",
            "optional": true,
            "field": "review",
            "description": "<p>Game master can attach a game review only if its status is set to <code>canceled</code> or <code>done</code>.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "review.rating",
            "description": "<p>Review's rating, from 0 to 5. Not required if it is already set.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "size": ">= 0 && <= 500",
            "optional": true,
            "field": "review.comment",
            "description": "<p>Review's comment, from 1 to 500 characters long.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "Boolean",
            "allowedValues": [
              "false"
            ],
            "optional": true,
            "field": "review.dysfunctionFound",
            "description": "<p>Must be set to true if a bug or a dysfunction was found during the game.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/Game.js",
    "groupTitle": "Games_🎲",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "MongoId",
            "optional": false,
            "field": "_id",
            "description": "<p>Game's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "gameMaster",
            "description": "<p>User who created the game and managing it. (<em>See: <a href=\"#user-class\">Classes - User</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": false,
            "field": "players",
            "description": "<p>Players of the game. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "turn",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, a turn starts with the first phase (the <code>night</code>) and ends with the second phase (the <code>day</code>).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"day\"",
              "\"night\""
            ],
            "optional": false,
            "field": "phase",
            "description": "<p>Each turn has two phases, <code>day</code> or <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tick",
            "defaultValue": "1",
            "description": "<p>Starting at <code>1</code>, tick increments each time a play is made.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "waiting",
            "description": "<p>Queue of upcoming actions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.for",
            "description": "<p>Can be either a group, a role or the sheriff. (<em>Possibilities: <a href=\"#player-groups\">Codes - Player Groups</a> or <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "waiting.to",
            "description": "<p>What action needs to be performed by <code>waiting.for</code>. (Possibilities: <a href=\"#player-actions\">Codes - Player Actions</a>_)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "waiting.cause",
            "description": "<p>The cause of action. (<em>Possibilities: <code>stuttering-judge-request</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Game's current status. (<em>Possibilities: <a href=\"#game-statuses\">Codes - Game Statuses</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "AdditionalCard[]",
            "optional": true,
            "field": "additionalCards",
            "description": "<p>Game's additional cards. Set if <code>thief</code> is in the game. (<em>See: <a href=\"#game-additional-card-class\">Classes - Additional Card</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Game's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.repartition",
            "description": "<p>Game role's repartition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.repartition.isHidden",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, game's repartition will be hidden to all players. Default is false.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles",
            "description": "<p>Game roles options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.areRevealedOnDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, player's role is revealed when he's dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff",
            "description": "<p>Game sheriff role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.isEnabled",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> will be elected the first tick and the responsibility will be delegated when he dies. Otherwise, there will be no sheriff in the game and tie in votes will result in another vote between the tied players. In case of another equality, there will be no vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.sheriff.electedAt",
            "description": "<p>When the sheriff is elected during the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.turn",
            "defaultValue": "1",
            "description": "<p>Game's turn when the sheriff is elected. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.roles.sheriff.electedAt.phase",
            "defaultValue": "night",
            "description": "<p>Game's phase when the sheriff is elected. Default is <code>night</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.sheriff.hasDoubledVote",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>sheriff</code> vote during the village's vote is doubled, otherwise, it's a regular vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bigBadWolf",
            "description": "<p>Game big bad wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bigBadWolf.isPowerlessIfWerewolfDies",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>big-bad-wolf</code> won't wake up anymore during the night if at least one player from the <code>werewolves</code> side died. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.whiteWerewolf",
            "description": "<p>Game white werewolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.whiteWerewolf.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the <code>white-werewolf</code> is waking up. Default is <code>2</code>, meaning he wakes up every other night.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.seer",
            "description": "<p>Game seer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.isTalkative",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the game master must say out loud what the seer saw during her night, otherwise, he must mime the seen role to the seer. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.seer.canSeeRoles",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the seer can the exact <code>role</code> of the target, otherwise, she only sees the <code>side</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.littleGirl",
            "description": "<p>Game little girl role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.littleGirl.isProtectedByGuard",
            "defaultValue": "false",
            "description": "<p>If set to <code>false</code>, the little girl won't be protected by the guard from the werewolves attacks. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.guard",
            "description": "<p>Game guard role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.guard.canProtectTwice",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, the guard can protect twice in a row the same target. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.ancient",
            "description": "<p>Game ancient role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.ancient.livesCountAgainstWerewolves",
            "defaultValue": "2",
            "description": "<p>Number of lives ancient has against <code>werewolves</code>. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.ancient.doesTakeHisRevenge",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the <code>ancient</code> will make all players from the <code>villagers</code> side <code>powerless</code> if he dies from them. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.idiot",
            "description": "<p>Game idiot role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.idiot.doesDieOnAncientDeath",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the idiot will die if he is revealed and the ancient is dead. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.twoSisters",
            "description": "<p>Game two sisters role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.twoSisters.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Two Sisters are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.threeBrothers",
            "description": "<p>Game three brothers role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 0 && <= 5",
            "optional": false,
            "field": "options.roles.threeBrothers.wakingUpInterval",
            "defaultValue": "2",
            "description": "<p>Since first <code>night</code>, interval of nights when the Three Brothers are waking up. Default is <code>2</code>, meaning they wake up every other night. If set to <code>0</code>, they are waking up the first night only.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.fox",
            "description": "<p>Game fox role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.fox.isPowerlessIfMissesWerewolf",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the fox will loose his power if he doesn't find a player from the <code>werewolves</code> side during his turn if he doesn't skip. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.bearTamer",
            "description": "<p>Game bear tamer role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.bearTamer.doesGrowlIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, the bear tamer will have the <code>growls</code> attribute until he dies if he is <code>infected</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.stutteringJudge",
            "description": "<p>Game stuttering judge role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.stutteringJudge.voteRequestsCount",
            "defaultValue": "1",
            "description": "<p>Number of vote requests that the <code>stuttering-judge</code> can make during the game. Default is <code>1</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.wildChild",
            "description": "<p>Game wild child role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.wildChild.isTransformationRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>wild-child</code> joins the <code>werewolves</code> side because his model died, the game master will announce his transformation to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.dogWolf",
            "description": "<p>Game dog wolf role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.dogWolf.isChosenSideRevealed",
            "defaultValue": "false",
            "description": "<p>If set to <code>true</code>, when <code>dog-wolf</code> chooses his side at the beginning of the game, the game master will announce the chosen side to other players. Default is <code>false</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.thief",
            "description": "<p>Game thief role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.thief.mustChooseBetweenWerewolves",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, if all <code>thief</code> additional cards are from the <code>werewolves</code> side, he can't skip and must choose one. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.thief.additionalCardsCount",
            "defaultValue": "2",
            "description": "<p>Number of additional cards for the <code>thief</code> at the beginning of the game. Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.piedPiper",
            "description": "<p>Game pied piper role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.piedPiper.charmedPeopleCountPerNight",
            "defaultValue": "2",
            "description": "<p>Number of charmed people by the <code>pied-piper</code> per night if there are enough targets (or number of not charmed players otherwise). Default is <code>2</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "options.roles.piedPiper.isPowerlessIfInfected",
            "defaultValue": "true",
            "description": "<p>If set to <code>true</code>, <code>pied-piper</code> will be powerless if he is infected by the <code>vile-father-of-wolves</code>. Default is <code>true</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "options.roles.raven",
            "description": "<p>Game raven role's options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "size": ">= 1 && <= 5",
            "optional": false,
            "field": "options.roles.raven.markPenalty",
            "defaultValue": "2",
            "description": "<p>Penalty of votes against the player targeted by the raven mark for the next village's vote. Default is <code>2</code>, meaning that the raven marked player will have two votes against himself.</p>"
          },
          {
            "group": "Success 200",
            "type": "GameHistory[]",
            "optional": false,
            "field": "history",
            "description": "<p>Game's history. (<em>See: <a href=\"#game-history-class\">Classes - Game History</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "won",
            "description": "<p>Winners of the game when status is <code>done</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "{\"werewolves\"",
              "\"villagers\"",
              "\"lovers\"",
              "null}"
            ],
            "optional": false,
            "field": "won.by",
            "description": "<p>Can be either a group or a role. (<em>Possibilities: <code>werewolves</code>, <code>villagers</code>, <code>lovers</code> or null if nobody won</em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": true,
            "field": "won.players",
            "description": "<p>List of player(s) who won. (<em>See: <a href=\"#player-class\">Classes - Player</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>When the game was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>When the game was updated.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/roles",
    "title": "A] Get roles",
    "name": "GetRoles",
    "group": "Roles_🃏",
    "version": "0.0.0",
    "filename": "src/routes/Role.js",
    "groupTitle": "Roles_🃏",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Role's name. (<em>Possibilities: <a href=\"#player-roles\">Codes - Player Roles</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "side",
            "description": "<p>Role's original side. (<em>Possibilities: <a href=\"#player-sides\">Codes - Player Sides</a></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Role's type. (<em>Possibilities: <code>villager</code>, <code>werewolf</code>, <code>ambiguous</code>, <code>lonely</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "minInGame",
            "description": "<p>If the role is chosen by at least one player, then minimum X players must choose it to start the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxInGame",
            "description": "<p>Maximum of this role in a game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "recommendedMinPlayers",
            "description": "<p>It is recommended to have at least X players in game for choosing this role.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/users",
    "title": "C] Create new user",
    "name": "CreateUser",
    "group": "Users_👤",
    "version": "0.0.0",
    "filename": "src/routes/User.js",
    "groupTitle": "Users_👤",
    "parameter": {
      "fields": {
        "Request Body Parameters": [
          {
            "group": "Request Body Parameters",
            "type": "String",
            "size": ">= 50",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "size": ">= 5 && <= 50",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>User's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "registration",
            "description": "<p>User's registration data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registration.method",
            "description": "<p>How the user registered himself. (<em>Possibilities: <code>local</code>, <code>facebook</code> or <code>google</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>When the user is created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>When the user is updated.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/users/:id",
    "title": "B] Get an user",
    "name": "GetUser",
    "group": "Users_👤",
    "permission": [
      {
        "name": "JWT",
        "title": "Bearer Authorization with JSON Web Token.",
        "description": ""
      },
      {
        "name": "Basic",
        "title": "Basic authentication with username and password.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>User's ID.</p> <ul> <li><code>JWT Auth</code>: Only user attached to token can be retrieved from this route.</li> <li><code>Basic Auth</code>: Any user can be retrieved.</li> </ul>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/User.js",
    "groupTitle": "Users_👤",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>User's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "registration",
            "description": "<p>User's registration data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registration.method",
            "description": "<p>How the user registered himself. (<em>Possibilities: <code>local</code>, <code>facebook</code> or <code>google</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>When the user is created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>When the user is updated.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/users",
    "title": "A] Get users",
    "name": "GetUsers",
    "group": "Users_👤",
    "permission": [
      {
        "name": "Basic",
        "title": "Basic authentication with username and password.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Specifies which user fields to include. Each value must be separated by a <code>,</code> without space. (e.g: <code>field1,field2</code>)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/User.js",
    "groupTitle": "Users_👤",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>User's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "registration",
            "description": "<p>User's registration data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registration.method",
            "description": "<p>How the user registered himself. (<em>Possibilities: <code>local</code>, <code>facebook</code> or <code>google</code></em>)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>When the user is created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>When the user is updated.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/users/login/facebook",
    "title": "E] Login with Facebook",
    "name": "LoginFacebookUser",
    "group": "Users_👤",
    "parameter": {
      "fields": {
        "Request Body Parameters": [
          {
            "group": "Request Body Parameters",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Facebook user's access token for the Werewolves Assistant app.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JSON Web Token to keep for further route authentication.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/User.js",
    "groupTitle": "Users_👤"
  },
  {
    "type": "POST",
    "url": "/users/login/facebook",
    "title": "F] Login with Google",
    "name": "LoginGoogleUser",
    "group": "Users_👤",
    "parameter": {
      "fields": {
        "Request Body Parameters": [
          {
            "group": "Request Body Parameters",
            "type": "String",
            "optional": false,
            "field": "idToken",
            "description": "<p>Google user's id token for the Werewolves Assistant app.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JSON Web Token to keep for further route authentication.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/User.js",
    "groupTitle": "Users_👤"
  },
  {
    "type": "POST",
    "url": "/users/login",
    "title": "D] Login",
    "name": "LoginUser",
    "group": "Users_👤",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JSON Web Token to keep for further route authentication.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/User.js",
    "groupTitle": "Users_👤",
    "parameter": {
      "fields": {
        "Request Body Parameters": [
          {
            "group": "Request Body Parameters",
            "type": "String",
            "size": ">= 50",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Request Body Parameters",
            "type": "String",
            "size": ">= 5 && <= 50",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    }
  }
] });
