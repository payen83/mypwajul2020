import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL: string;
  constructor(public httpClient: HttpClient) { 
    this.baseURL = 'https://jsonplaceholder.typicode.com/'
  }

  getPostById(id: any){
    let url: string = this.baseURL + 'posts/' + id;
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((res: any)=>{
        resolve(res);
      }, (err: any) => { reject(err); });
    });
  }

  sendPost(post: any){
    let url: string = this.baseURL + 'posts';
    let body: any = {
      userId: 1,
      body: post.body,
      title: post.title
    }

    let header: any = {
      'Content-Type' : 'application/json; charset=UTF-8'
    };

    return new Promise((resolve, reject)=>{
      this.httpClient.post(url, JSON.stringify(body), header)
      .subscribe((res: any) => {
        resolve(res);
      }, (err: any) => { reject(err); });
    })

  }

  getPosts(){
    let url: string = this.baseURL + 'posts';

    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((res: any)=>{
        console.log(res);
        resolve(res);
      }, (err: any) => { reject(err); });
    });
  }

}
