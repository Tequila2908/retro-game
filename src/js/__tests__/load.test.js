import GameStateService from '../mocks/GameStateServiceForMocks';
import dataForMocks from '../mocks/dataForMocks';

jest.mock('../mocks/dataForMocks');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Load --> success', () => {
  const expected = `{"point":10,"maxPoint":10,"level":1,"currentTheme":"prairie","userPositions":[]}`; // eslint-disable-line quotes
  dataForMocks.mockReturnValue(expected);
  const recived = GameStateService.load();
  expect(JSON.stringify(recived)).toBe(expected);
});

test('Load --> error', () => {
  const expected = '';
  dataForMocks.mockReturnValue(expected);

  expect(() => GameStateService.load()).toThrow();
});
