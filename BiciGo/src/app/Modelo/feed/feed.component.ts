import { Component, OnInit } from '@angular/core';

export interface Post {
  postId: number;
  title: string;
  body: string;
  photoUrl: string;
  user: {
    userId: number;
    username: string;
    name: string;
  };
}

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

  

  ngOnInit() {
    this.data1 = [];

    for (let i = 1; i <= 20; i++) {
      const postData = {
        postId: i,
        title: `Mi post número ${i}`,
        body: `Este es el contenido de mi post número ${i}. ¡Espero que les guste!`,
        photoUrl: `https://ejemplo.com/ruta-a-la-imagen${i}.jpg`,
        user: {
          userId: 1000 + i,
          username: `nombre_usuario${i}`,
          name: `Nombre del Usuario ${i}`
        }
      };
      this.data1.push(postData);
    }
    
    this.data2=this.data1.slice(this.inicio,this.fin);

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
