import { QZMigrator } from "./migrator.ts";
import { QZTable } from "./table.ts";

export class QZDatabase {
  private database: IDBDatabase | null = null;
  private upgradeTransaction: IDBTransaction | null = null;

  private applyMigrations(reducer: QZMigrationReducer, currentVersion: number) {
    if (!this.database || !this.upgradeTransaction) return;

    const migrator = new QZMigrator({
      database: this.database,
      transaction: this.upgradeTransaction,
    });

    reducer(migrator, this.database.version);
  }

  public async create(name: string, version = 1): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(name, version);

      request.addEventListener("upgradeneeded", (e: IDBVersionChangeEvent) => {
        this.database = request.result;
        this.upgradeTransaction = request.transaction;
        this.applyMigrations(() => {}, e.oldVersion);
      });

      request.addEventListener("success", () => resolve(request.result));
      request.addEventListener("error", () => reject(request.error));
      request.addEventListener("blocked", () => reject(request.error));
    });
  }

  public async delete(name: string): Promise<null> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase(name);

      request.addEventListener("success", () => resolve(null));
      request.addEventListener("error", () => reject(request.error));
      request.addEventListener("blocked", () => reject(request.error));
    });
  }
}

type QZMigrationReducer = (
  migrator: QZMigrator,
  currentVersion: number,
) => void;
