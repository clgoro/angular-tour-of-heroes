import { Component, OnInit } from '@angular/core';
import { MessgeService } from '../messge.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
	

  constructor(public messageService: MessgeService) { }

  ngOnInit() {
  }

}
