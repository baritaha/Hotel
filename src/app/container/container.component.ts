import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {
  /**
   *
   */
  constructor( private roomServices:RoomsService) {
   
    
  }

  @ContentChild(EmployeeComponent) employee!:EmployeeComponent;
  ngAfterContentInit(): void {
  console.log(this.employee.EmployeeName);
  }
  ngOnInit(): void {}

}
