import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { RoomList, Room } from './room';
import { HeaderComponent } from '../header/header.component';
import { Conditional } from '@angular/compiler';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  
})
export class RoomsComponent implements OnInit ,DoCheck,AfterViewInit,AfterViewChecked{
 
  ngAfterViewChecked(): void {
   console.log('afterviewcheked method');
  }
  ngAfterViewInit(): void { 
this.headerComponent.title='Room List';
this.headerChildrenComplonent.last.title="Header Cheldren Component";
//this.headerChildrenComplonent.get(0)!.title="first";
  }
  /**
   *
   */

  constructor(@SkipSelf() private roomsService:RoomsService) {
   
 }
  ngDoCheck(): void { 
    console.log("on change is called");
  }
  ngOnInit(): void {
    this.roomsService.getphoto().subscribe((data)=>{
      console.log(data);
    })
this.stream.subscribe({
  next: (value) => {console.log(value)},
  error:(error)=> {console.log(error)},
  complete:()=>{console.log("complete")}
})
  this.stream.subscribe((data)=>console.log(data));
  this.roomsService.getRoom().subscribe(rooms=>{
  this.roomList=rooms
 });
  
  }
  
  hotelName = 'Hiltone Hotel';
  numberOfRooms = 10;
  hiddenRoom = true;
SelectedRoom!:RoomList;

  rooms: Room = {
    totalRoom: 20,
    availableRooms: 10,
    bookedRoom: 5,
  };
  title!:'Room List';
  roomList:RoomList[] =[];
  stream =new Observable<string>(observer=>{
    observer.next('user 1');
    observer.next('user 2');
    observer.next('user 3');
    observer.complete();
  })
  @ViewChildren(HeaderComponent) headerChildrenComplonent!:QueryList<HeaderComponent>;
  @ViewChild(HeaderComponent) headerComponent!:HeaderComponent;
  toogle() {
    this.hiddenRoom = !this.hiddenRoom;
    this.title='Room List';
  }
  selectRoom(room:RoomList){
   this.SelectedRoom=room;
  }
  addRoom(){
    const room : RoomList = {
      roomID:0,
     roomNumber:'5',
      roomType:'Deluxe Room',
      amenities: 'Air Condition , Free Wifi , TV ,Bathroom , kitchen',
      price: 800,
      photos:'https://unsplash.com/photos/a-couple-of-lawn-chairs-sitting-',
      checkinTime:new Date(),
      checkoutTime:new Date(),
      rating:4
    };
    //this.roomList.push(room);
    //this.roomList=[...this.roomList,room];
    this.roomsService.addRoom(room).subscribe(() => {
      // On successful addition, fetch the updated room list
      this.roomsService.getRoom().subscribe((data) => {
        this.roomList = data; // Update the room list in the component
      });
    });
  }

}
