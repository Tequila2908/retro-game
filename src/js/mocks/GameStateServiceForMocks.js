import dataForMocks from './dataForMocks';

export default class GameStateService {
  constructor(storage) {
    this.storage = storage;
  }

  save(state) {
    this.storage.setItem('state', JSON.stringify(state));
  }

  static load() {
    try {
      return JSON.parse(dataForMocks());
    } catch (e) {
      throw new Error('Invalid state');
    }
  }
}
