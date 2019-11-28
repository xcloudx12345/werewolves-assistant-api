const ErrorEnum = {
    BAD_REQUEST: {
        code: 1,
        statusCode: 400,
    },
    UNAUTHORIZED: {
        code: 2,
        statusCode: 401,
    },
    EMAIL_EXISTS: {
        code: 3,
        statusCode: 400,
    },
    NOT_FOUND: {
        code: 4,
        statusCode: 404,
    },
    INTERNAL_SERVER_ERROR: {
        code: 5,
        statusCode: 500,
    },
    BAD_TOKEN: {
        code: 6,
        statusCode: 400,
    },
    BAD_CREDENTIALS: {
        code: 7,
        statusCode: 401,
    },
};

class Error {
    constructor(errorType, e) {
        this.code = ErrorEnum[errorType].code;
        this.statusCode = ErrorEnum[errorType].statusCode;
        this.type = errorType;
        this.errors = e;
    }
}

module.exports = Error;