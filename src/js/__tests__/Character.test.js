import Character from '../characters/commonModules/Character';
import Bowman from '../characters/Bowman';

test('creating new Bowman', () => {
  const received = new Bowman(1);
  const expected = {
    level: 1,
    health: 100,
    type: 'bowman',
    attack: 25,
    defence: 25,
    distance: 2,
    distanceAttack: 2,
  };

  expect(received).toEqual(expected);
});

test('new Character not allowed', () => {
  expect(() => new Character()).toThrow();
});
