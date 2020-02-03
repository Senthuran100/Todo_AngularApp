import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  show:boolean;
  value:string;
  id:number;
  mockData: any = [
    {
      id: '1',
      title: 'This is title',
      done: false,
      date: new Date()
    }, {
      id: '2',
      title: 'This is second title',
      done: false,
      date: new Date()
    }, {
      id: '3',
      title: 'This is third title',
      done: false,
      date: new Date()
    }, {
      id: '4',
      title: 'This is forth title',
      done: false,
      date: new Date()
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  create(item){
    this.mockData.push({id:Date.now(),title:item,done:false,date:new Date()});
  }

  remove(id){
    this.mockData=this.mockData.filter(item => {if(item.id!=id){
      return item;
    }})
  }

  edit(id,title){
      this.show=true;
      this.value=title;
      this.id=id;
  }

  update(title){
    this.mockData.map(item => {if(item.id===this.id){
      item['title']=title;
    }});
    this.show = false; 
  }
  
  setTaskComplete(id) {    this.mockData.map(item => {      if (item.id === id) {        item['done'] = true;      }    });  }


}
