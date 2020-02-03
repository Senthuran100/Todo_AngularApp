import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-call-rest',
  templateUrl: './call-rest.component.html',
  styleUrls: ['./call-rest.component.css']
})
export class CallRestComponent implements OnInit {

  data1;

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.apiservice.getData().subscribe((data)=>{
    console.log(data);
    this.data1 = data['hello'];
    }
    )
  }

}
