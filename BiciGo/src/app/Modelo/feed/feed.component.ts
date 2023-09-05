import { Component, OnInit } from '@angular/core';
import {Post} from '../../Interfaces/post'
import {DatafeedService} from '../../Servicios/datafeed.service'
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public data1: Post[] = [];
  public data2: Post[] = [];
  public inicio: number = 0;
  public fin: number = 10;

  constructor(private dataService: DatafeedService) {}


  ngOnInit() {
    this.dataService.getResponse().subscribe((response) => {
      this.data1 = response as Post[]; 
      this.data2=this.data1.slice(this.inicio,this.fin);
    });
  }
    



onClickButton(){
  if ( this.inicio +10  < this.data1.length){
    this.inicio +=10;
    this.fin+=10;
    this.data2=this.data1.slice(this.inicio,this.fin);
  }
  else{
    this.inicio = 0;
    this.fin =10;
    this.data2=this.data1.slice(this.inicio,this.fin);
  }


}
}
