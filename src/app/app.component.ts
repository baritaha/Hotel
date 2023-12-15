// app.component.ts
import { AfterContentInit, AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localstoragetoken } from './LocalStorage.Token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 //template:"<h1>Inline Page from app.cpmponent.ts</h1>",
  styleUrls: ['./app.component.scss'],
  //styles:[`label{color:green}`]
 // styles:[`background-image{url:}`]
})
export class AppComponent implements OnInit {
  title = 'Credit_Card';
  /**
   *
   */
  constructor(@Inject (localstoragetoken) private localStorage:any) {
   

  }
 /* ngAfterViewInit(): void {
   const componentRef=this.vcr.createComponent(RoomsComponent);
   componentRef.instance.numberOfRooms=100;
  }
  @ViewChild('user',{read:ViewContainerRef})vcr!:ViewContainerRef;
  
   // role="User";
  onSubmit() {
    // Logic to handle form submission - send cardNumber to backend API
    console.log('Submitted:', this.title);
    // You can call your service to send data to the backend here
  }*/
  @ViewChild('name',{static:true}) name!:ElementRef;
  ngOnInit(): void {
    this.localStorage.setItem('name','Hilton Hotel')
      console.log(this.name.nativeElement.innerText=this.title);
  }
}
