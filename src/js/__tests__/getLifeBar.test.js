import getLifeBar from '../characters/commonModules/getLifeBar';
import Bowman from '../characters/Bowman';

test('LifeBar Bowman test', () => {
  const received = getLifeBar(new Bowman(1));
  const expected = '\u{1F396}1  \u{2694}25  \u{1F6E1}25  \u{2764}100';

  expect(received).toBe(expected);
});
