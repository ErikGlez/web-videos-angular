import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { Video } from '../../models/video';


@Component({
  selector: 'app-video-new',
  templateUrl: './video-new.component.html',
  styleUrls: ['./video-new.component.css'],
  providers: [ UserService ]
})
export class VideoNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public video: Video;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.page_title = "Guardar video favorito";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.video = new Video(1,this.identity.sub,'','','','ver luego',null,null);

  }

  onSubmit(form){
    console.log(this.video);
    
  }

}
