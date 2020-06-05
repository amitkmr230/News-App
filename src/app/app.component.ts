import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Articles:Array<any>;
  Sources:Array<any>;

  constructor(private newsapi:NewsApiService){         
  }

  ngOnInit() {
        //load articles
      this.newsapi.getArticles().subscribe(data => this.Articles = data['articles']);
    //load news sources
    this.newsapi.getSources().subscribe(data=> this.Sources = data['sources']);  
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.Articles = data['articles']);
  }

}
