import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';

const { Camera } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  public myImage: any;

  constructor(public sanitizer: DomSanitizer) { }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      resultType: CameraResultType.DataUrl
    });

    let imageData = image.dataUrl;
    this.myImage = this.sanitizer.bypassSecurityTrustUrl(imageData);
    
  }

  ngOnInit() {
  }

}
