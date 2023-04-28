import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
	panels1 = ['Based on given User name'];
	panels2 = ['Based on given Image'];
  name = "";
  responseObj:any = {};
  responseObj2:any = {};
  responseObj3:any = {};
  responseObj4:any = {};
  activePanel:string = 'Based on User name';
  initFlag:boolean = true;
  toggle(panel:string){
    this.initFlag=false;
    this.activePanel = panel;
  }
  search(){
    
    this.apiService.endpointOne(this.name).subscribe((response:any)=>{
      if(response.success){
        this.responseObj = response;
      }else{
        this.responseObj = {};
        alert("Error, Plese check console.");
      }
    });
    this.apiService.endpoint2(this.name).subscribe((response:any)=>{
      if(response.success){
        this.responseObj2 = response;
      }else{
        this.responseObj2 = {};
        alert("Error, Plese check console.");
      }
    });
    this.apiService.endpoint3(this.name).subscribe((response:any)=>{
      if(response.success){
        this.responseObj3 = response;
      }else{
        this.responseObj3 = {};
        alert("Error, Plese check console.");
      }
    });
    this.apiService.endpoint4(this.name).subscribe((response:any)=>{
      if(response.success){
        this.responseObj4 = response;
      }else{
        this.responseObj4 = {};
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
});
this.apiService.uploadSearch2(url).subscribe((response)=>{
  console.log(response);
  //this.repImgUrl=response;
});
this.apiService.uploadSearch3(url).subscribe((response)=>{
  console.log(response);
  //this.repImgUrl=response;
});
this.apiService.uploadSearch4(url).subscribe((response)=>{
  console.log(response);
  //this.repImgUrl=response;
});
setTimeout(()=>{

  this.repImgUrl="assets/result.jpg";
  
   }, 5000);
}
back(){
  this.repImgUrl='';
  this.uploadStarted=true;
}

}
