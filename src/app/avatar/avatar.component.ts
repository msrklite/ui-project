import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  name = "";
  responseObj:any = {};

 

  search(){
    
    this.apiService.endpointOne(this.name).subscribe((response:any)=>{
      if(response.success){
        this.responseObj = response;
      }else{
        this.responseObj = {};
        alert("Error, Plese check console.");
      }
    });
  }

  uploadStarted:boolean = true;
  downloadURLImg:string = "";
  repImgUrl:any = "";

  constructor(private apiService: ApiService, private storage: AngularFireStorage){}
  
  pushFileToStorage(fileUpload: any): Observable<number | undefined> {
    this.downloadURLImg="";
    let basePath = "/uploads";
    const filePath = `${basePath}/${fileUpload.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // fileUpload.url = downloadURL;
          // fileUpload.name = fileUpload.name;
          console.log(downloadURL);
          this.downloadURLImg = downloadURL;
          this.uploadStarted=false;
          this.uploadSearch(downloadURL);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }

  currentFileUpload:any;
  percentage:any=0;
  upload(event:any) {
    this.currentFileUpload = event.target.files[0];
    console.log(this.currentFileUpload);
    this.pushFileToStorage(this.currentFileUpload).subscribe(
     ( percentage:any) => {
        this.percentage = Math.round(percentage ? percentage : 0);
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

uploadSearch(url:any){
  this.apiService.uploadSearch(url).subscribe((response)=>{
    console.log(response);
    //this.repImgUrl=response;
    setTimeout(()=>{

      this.repImgUrl="assets/result.jpg";
      
       }, 5000);
});
}


}
