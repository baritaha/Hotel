import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../room';
import { AppConfig } from '../../AppConfig/app.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];
 
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log('the api is  : ' + this.config.apiEndpoint);
  }
  getRoom() {
    return this.http.get<RoomList[]>(this.config.apiEndpoint + 'Rooms');
  }
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>(this.config.apiEndpoint + 'Rooms', room);
  }
  deleteRoom(id: number) {
    return this.http.delete<RoomList[]>(
      this.config.apiEndpoint + `Rooms/${id}`
    );
  }
  UpdateRoom(roomID: number, room: RoomList) {
    return this.http.put<RoomList[]>(
      this.config.apiEndpoint + `Rooms/${roomID}`,
      room
    );
  }
  getphoto() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
        responseType: 'blob',
      }
    );
    return this.http.request(request);
  }
}
