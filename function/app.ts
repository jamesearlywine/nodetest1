import { RandomService } from './lib/service';

const randomNumber = RandomService.getRandomNumber(1, 10);
console.log("randomNumber: ", randomNumber);