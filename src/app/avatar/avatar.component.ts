import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  name = "";

  constructor(private apiService: ApiService){}

  search(){
    this.apiService.endpointOne(this.name).subscribe((response)=>{
      console.log(response);
    });
  }
}
