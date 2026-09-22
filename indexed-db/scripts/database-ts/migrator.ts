import { QZTable } from "./table.ts";

export class QZMigrator {
  private readonly database: IDBDatabase;
  private readonly upgradeTransaction: IDBTransaction;

  constructor(props: QZMigratorConstructorProps) {
    this.database = props.database;
    this.upgradeTransaction = props.transaction;
  }

  public createTable(name: string, primaryKey: string) {
    let table: IDBObjectStore;

    if (this.database.objectStoreNames.contains(name)) {
      table = this.upgradeTransaction.objectStore(name);
    } else {
      table = this.database.createObjectStore(name, { keyPath: primaryKey });
    }

    return new QZTable({ database: this.database, storage: table });
  }

  public deleteTable(name: string) {
    if (!this.database.objectStoreNames.contains(name)) return;
    this.database.deleteObjectStore(name);
  }

  public createIndex(props: QZMigratorCreateIndexProps) {
    const table = this.upgradeTransaction.objectStore(props.tableName);
    table.createIndex(props.indexName, props.field, { unique: props.unique });
  }

  public deleteIndex(props: QZMigratorDeleteIndexProps) {
    const table = this.upgradeTransaction.objectStore(props.tableName);
    table.deleteIndex(props.indexName);
  }
}

interface QZMigratorConstructorProps {
  database: IDBDatabase;
  transaction: IDBTransaction;
}

interface QZMigratorCreateIndexProps {
  tableName: string;
  indexName: string;
  field: string;
  unique?: boolean;
}

interface QZMigratorDeleteIndexProps {
  tableName: string;
  indexName: string;
}
