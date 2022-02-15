import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dexie } from 'dexie';
import { v4 } from 'uuid';
import { Listitems } from './listitems';

@Injectable({
  providedIn: 'root'
})
export class ListitemsService extends Dexie {
  /** Dat is ein Codesmell --> ist aber hier so, deshalb Ausrufezeichen */
  listitemss!: Dexie.Table<Listitems, string>;

  constructor(private httpClient: HttpClient) { 
    super('ListitemsDB');

    this.version(1).stores({
      listitemss: 'id'
      /*ID als Primärschlüssel*/
    })
  }

  getAll() {
    return this.listitemss.toArray();
  }

  add(title: string) {
    return this.listitemss.add({title, id: v4(), done: false});
  }

  toggleDone(listitems: Listitems) {
    listitems.done = !listitems.done;
    return this.listitemss.put(listitems);
  }

  /** Ich echter Implementierung würde die HTTP-Abfrage von der Datenbank getrennt sein */
  async sync() {
    const allListitemss = await this.getAll();
    /** Generischen Typ Listitems[] nicht vergessen */
    /** HTTP-Client muss angesachalten werden --> app.module.ts */
    const syncedListitemss = await this.httpClient.post<Listitems[]>('http://localhost:3030/sync', allListitemss).toPromise();
    this.listitemss.bulkPut(syncedListitemss!);
  }
}