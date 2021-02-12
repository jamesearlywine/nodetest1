"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomService = void 0;
class RandomService {
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max + -min)) + min;
    }
}
exports.RandomService = RandomService;
exports.default = new RandomService();
//# sourceMappingURL=random-service.js.map