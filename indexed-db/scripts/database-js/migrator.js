import { QZTable } from "./table.js";

export class QZMigrator {
  #database;
  #upgradeTransaction;

  constructor(props) {
    this.#database = props.database;
    this.#upgradeTransaction = props.transaction;
  }

  createTable(name, primaryKey) {
    let table;

    if (this.#database.objectStoreNames.contains(name)) {
      table = this.#upgradeTransaction.objectStore(name);
    } else {
      table = this.#database.createObjectStore(name, { keyPath: primaryKey });
    }

    return new QZTable({ database: this.#database, storage: table });
  }

  deleteTable(name) {
    if (!this.#database.objectStoreNames.contains(name)) return;
    this.#database.deleteObjectStore(name);
  }

  createIndex(props) {
    const table = this.#upgradeTransaction.objectStore(props.tableName);
    table.createIndex(props.indexName, props.field, { unique: props.unique });
  }

  deleteIndex(props) {
    const table = this.#upgradeTransaction.objectStore(props.tableName);
    table.deleteIndex(props.indexName);
  }
}
