import {healthStatus} from './app.js';

test('Статус жизней (X>50)', () => expect(healthStatus('Маг', 90)).toBe('healthy'));
test('Статус жизней (15<X<50)', () => expect(healthStatus('Лучник', 45)).toBe('wounded'));
test('Статус жизней (X<15)', () => expect(healthStatus('Мечник', 10)).toBe('critical'));
