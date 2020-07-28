import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  public listPosts: Array<any>;
  public post: any;
  constructor(public api: ApiService) { 
    this.listPosts = [];
    this.post = {
      title: null,
      body: null
    }
  }

  submit(){
    this.api.sendPost(this.post).then((response: any) => {
      console.log(response);

      this.listPosts.push({
        id: response.id,
        title: this.post.title,
        body: this.post.body
      });
      
    }).catch((err: any)=>{console.log(err)}); 
  }

  ngOnInit() {
    this.api.getPosts().then((data: any) => {
      this.listPosts = data;
    }).catch(err => {
      console.log(err);
      //display alert here
    });
  }
  

}
