class CommonService {
    static getWelcomeMessage(name = 'Guest') {
        return `Welcome to the API, ${name}!`;
    }

    static SumNumber(a = 0, b = 0) {
        return a + b;
    }
}

module.exports = CommonService;