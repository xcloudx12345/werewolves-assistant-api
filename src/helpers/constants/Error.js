exports.errorMetadata = {
    BAD_REQUEST: {
        code: 1,
        HTTPCode: 400,
    },
    UNAUTHORIZED: {
        code: 2,
        HTTPCode: 401,
    },
    EMAIL_EXISTS: {
        code: 3,
        HTTPCode: 400,
    },
    NOT_FOUND: {
        code: 4,
        HTTPCode: 404,
    },
    INTERNAL_SERVER_ERROR: {
        code: 5,
        HTTPCode: 500,
    },
    BAD_TOKEN: {
        code: 6,
        HTTPCode: 400,
    },
    BAD_CREDENTIALS: {
        code: 7,
        HTTPCode: 401,
    },
    PLAYERS_NAME_NOT_UNIQUE: {
        code: 8,
        HTTPCode: 400,
    },
    NO_WEREWOLF_IN_GAME_COMPOSITION: {
        code: 9,
        HTTPCode: 400,
    },
    NO_VILLAGER_IN_GAME_COMPOSITION: {
        code: 10,
        HTTPCode: 400,
    },
    GAME_MASTER_HAS_ON_GOING_GAMES: {
        code: 11,
        HTTPCode: 400,
    },
    GAME_DOESNT_BELONG_TO_USER: {
        code: 12,
        HTTPCode: 401,
    },
    BAD_PLAY_SOURCE: {
        code: 13,
        HTTPCode: 400,
    },
    BAD_PLAY_ACTION: {
        code: 14,
        HTTPCode: 400,
    },
    VOTES_REQUIRED: {
        code: 15,
        HTTPCode: 400,
    },
    VOTES_CANT_BE_EMPTY: {
        code: 15,
        HTTPCode: 400,
    },
    BAD_VOTE_STRUCTURE: {
        code: 16,
        HTTPCode: 400,
    },
    SAME_VOTE_SOURCE_AND_TARGET: {
        code: 17,
        HTTPCode: 400,
    },
    CANT_VOTE: {
        code: 18,
        HTTPCode: 400,
    },
    CANT_BE_VOTE_TARGET: {
        code: 19,
        HTTPCode: 400,
    },
    CANT_VOTE_MULTIPLE_TIMES: {
        code: 20,
        HTTPCode: 400,
    },
    TIE_IN_VOTES: {
        code: 21,
        HTTPCode: 400,
    },
    TARGETS_REQUIRED: {
        code: 22,
        HTTPCode: 400,
    },
    TARGETS_CANT_BE_EMPTY: {
        code: 23,
        HTTPCode: 400,
    },
    BAD_TARGETS_LENGTH: {
        code: 24,
        HTTPCode: 400,
    },
    BAD_TARGET_STRUCTURE: {
        code: 25,
        HTTPCode: 400,
    },
    NOT_TARGETABLE: {
        code: 26,
        HTTPCode: 400,
    },
    CANT_LOOK_AT_HERSELF: {
        code: 27,
        HTTPCode: 400,
    },
    CANT_EAT_EACH_OTHER: {
        code: 28,
        HTTPCode: 400,
    },
    BAD_LIFE_POTION_USE: {
        code: 29,
        HTTPCode: 400,
    },
    ONLY_ONE_LIFE_POTION: {
        code: 30,
        HTTPCode: 400,
    },
    ONLY_ONE_DEATH_POTION: {
        code: 31,
        HTTPCode: 400,
    },
    NON_UNIQUE_TARGETS: {
        code: 32,
        HTTPCode: 400,
    },
    CANT_PROTECT_TWICE: {
        code: 33,
        HTTPCode: 400,
    },
    CANT_BE_CHOSEN_AS_TIEBREAKER: {
        code: 34,
        HTTPCode: 400,
    },
    NO_MORE_PLAY_ALLOWED: {
        code: 35,
        HTTPCode: 400,
    },
    CANT_BE_RESET: {
        code: 36,
        HTTPCode: 400,
    },
    TOO_MANY_REQUESTS: {
        code: 37,
        HTTPCode: 429,
    },
    SISTERS_MUST_BE_TWO: {
        code: 38,
        HTTPCode: 400,
    },
    BROTHERS_MUST_BE_THREE: {
        code: 39,
        HTTPCode: 400,
    },
};