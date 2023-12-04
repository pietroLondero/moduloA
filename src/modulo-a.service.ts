import { Injectable } from '@nestjs/common';
import { TestA } from './index';

@Injectable()
export class ModuloAService {
    getHello(): string {
        return 'Hello from modulo a';
    }

    async getTestA(testA: TestA): Promise<TestA> {
        return {
            name: testA.name,
            age: testA.age
        }
    }

}
