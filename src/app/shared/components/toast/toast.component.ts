import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() message: string = ''; 
  @Input() typeMessage: string = ''; 
  @Input() duration: number = 3000;
  isVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showToast(message: string,typeMessage:string ="Mensaje", duration: number = 3000) {
    this.message = message;
    this.typeMessage = typeMessage
    this.duration = duration;
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, this.duration);
  }

}
