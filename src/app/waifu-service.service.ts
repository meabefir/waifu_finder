import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaifuServiceService {

  baseUrl: string = 'https://api.waifu.pics/';

  constructor() { }

  async getWaifu(type:string, cat: string): Promise<string> {
    return fetch(`${this.baseUrl}${type}/${cat}`)
      .then(res => res.json()).then(data => data.url);
  }
}
