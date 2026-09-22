import { QZMigrator } from "./migrator.js";

export class QZDatabase {
  #database = null;
  #upgradeTransaction = null;

  #applyMigrations(reducer, currentVersion) {
    if (!this.#database || !this.#upgradeTransaction) return;
    if (!reducer) return;

    const migrator = new QZMigrator({
      database: this.#database,
      transaction: this.#upgradeTransaction,
    });

    reducer(migrator, currentVersion);
  }

  async create(name, version = 1, migrationReducer) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(name, version);

      request.addEventListener("upgradeneeded", (e) => {
        this.#database = request.result;
        this.#upgradeTransaction = request.transaction;

        this.#applyMigrations(migrationReducer, e.oldVersion);
      });

      request.addEventListener("success", () => {
        resolve(request.result);
      });

      request.addEventListener("error", () => reject(request.error));
      request.addEventListener("blocked", () => reject(request.error));
    });
  }

  async delete(name) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase(name);

      request.addEventListener("success", () => resolve(null));
      request.addEventListener("error", () => reject(request.error));
      request.addEventListener("blocked", () => reject(request.error));
    });
  }
}
