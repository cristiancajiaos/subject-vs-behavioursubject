import { FourService } from './two/three/four/four.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor(
    private fourService: FourService
  ) { }

  ngOnInit() {
    this.fourService.fooAsObs.subscribe(foo => {
      console.log(foo);
    });
  }

}
