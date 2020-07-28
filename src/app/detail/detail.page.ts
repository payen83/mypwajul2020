import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public id: any;
  public post: any;
  constructor(
    public api: ApiService, 
    public activatedRoute: ActivatedRoute
    ) {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        console.log('My current id ==> ', this.id);
        this.post = {
          id: null,
          title: null,
          body: null,
          userId: null
        }
   }

  ngOnInit() {
    this.api.getPostById(this.id).then((response: any) => {
      console.log(response);
      this.post = response;
    })
  }

}
