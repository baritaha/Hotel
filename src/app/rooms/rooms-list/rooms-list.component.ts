import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, SkipSelf } from '@angular/core';
import { RoomList } from '../room';
import { RoomsService } from '../services/rooms.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit ,OnChanges,OnDestroy,SkipSelf{
  isModalOpen=false;
  
  ngOnDestroy(): void {
    console.log("destroyed called");
   
  }
  editingRoom: RoomList = {roomID:0, roomNumber: '',roomType:'',amenities:'',price:0,photos:'',checkinTime:new Date(),checkoutTime:new Date(),rating:0  };
  @Input() rooms:RoomList[]=[];
  @Input() title:string='';
  @Output() SelectedRoom =new EventEmitter<RoomList>();
  room:RoomList[]=[];

  constructor(@SkipSelf() private roomsService:RoomsService,private cdr: ChangeDetectorRef) {
 
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title=changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void {}
  
  selectRoom(room:RoomList){
    this.SelectedRoom.emit(room);
  }
  loadRooms() {
    this.roomsService.getRoom().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }
  deleteRoom(roomID: number) {
    console.log("the id to delete "+roomID);
    const confirmation = confirm('Are you sure you want to delete this room?');
    if (confirmation) {
      this.roomsService.deleteRoom(roomID).subscribe(() => {
        // Filter out the deleted room from the current list
        this.rooms = this.rooms.filter(room => room.roomID !== roomID);
        this.cdr.detectChanges(); // Trigger change detection
      });
    } else {
      console.log('Deletion canceled');
    }
  }
  EditRoom(roomID:number,room:RoomList){
    this.isModalOpen=true;
    this.editingRoom = { ...room }; // Create a copy of the room to edit
    this.editingRoom.roomID = roomID;
   
  }
  UpdateRoom(event: Event) {
    event.preventDefault();
    this.roomsService.UpdateRoom(this.editingRoom.roomID, this.editingRoom).subscribe(
        () => {
            this.isModalOpen = false; // Hide the modal on successful update
            this.loadRooms(); // Refresh room data after update
        },
        (error) => {
            console.error('Error updating room:', error);
            // Handle error if the update fails
        }
    );
}

  
  cancelUpdate() {
    this.isModalOpen = false; // Hide the modal
  }

  
  
  
}
