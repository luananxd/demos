export class QZTable {
  private readonly database: IDBDatabase;
  private readonly storage: IDBObjectStore;

  constructor(props: QZTableConstructorProps) {
    this.database = props.database;
    this.storage = props.storage;
  }
}

interface QZTableConstructorProps {
  database: IDBDatabase;
  storage: IDBObjectStore;
}
