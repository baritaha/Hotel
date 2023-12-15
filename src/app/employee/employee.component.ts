import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  //providers:[RoomsService]
})
export class EmployeeComponent implements OnInit{

  EmployeeName:string="bari taha";
 
  constructor( private roomservices:RoomsService) {
   
    
 }
  ngOnInit(): void {
  
  }

}
