const {
    genFourRandomNumber, getANumber, getBNumber, guessNumber
} = require('../src/main');
describe('Guss Number', function () {
    describe('When guess number is 1234 and output', function () {
        it('should generate 4 random number', function () {
            let result = genFourRandomNumber();
            expect(result.length).toBe(4);
            expect(new Set(result).size).toBe(4);
        });

        it('should return 4A when input is 1234', function () {
            let ANumber = getANumber("1234", "1234");
            expect(ANumber).toBe(4);
        });

        it('should return 3A when last number is 1235', function () {
            let ANumber = getANumber("1234", "1235");
            expect(ANumber).toBe(3);
        });

        it('should return 4B when input is 4321', function () {
            let BNumber = getBNumber("1234", "4312");
            expect(BNumber).toBe(4);
        });

        it('should return 1A0B when input is 1567', function () {
            expect(guessNumber("1234","1567")).toBe("1A0B");
        });

        it('should return 1A0B when input is 2478', function () {
            expect(guessNumber("1234","2478")).toBe("0A2B");
        });

        it('should return 1A0B when input is 0324', function () {
            expect(guessNumber("1234","0324")).toBe("1A2B");
        });

        it('should should return error message when input is wrong format', function () {
            expect(guessNumber("1234", "213123")).toBe('Wrong Input，Input again')
        });

        it('should should return error message when input is null', function () {
            expect(guessNumber("1234", null)).toBe('Wrong Input，Input again')
        });

        it('should should return error message when input has letter', function () {
            expect(guessNumber("1234", "24jd")).toBe('Wrong Input，Input again')
        });
    });
});