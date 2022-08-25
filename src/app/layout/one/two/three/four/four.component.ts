import { FourService } from './four.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {

  constructor(
    private fourService: FourService
  ) { }

  ngOnInit() {
    this.fourService.setFoo(1);
    // this.fourService.setBehaviourFoo(2);
  }

}
