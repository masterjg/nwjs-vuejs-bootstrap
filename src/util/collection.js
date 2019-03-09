import MarsDB from 'marsdb';
import LocalForageManager from 'marsdb-localforage';

MarsDB.defaultStorageManager(LocalForageManager);

export default class Collection {
  static get(name, inMemory = false) {
    return new MarsDB(name, { inMemory });
  }
}
