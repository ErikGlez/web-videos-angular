import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [ UserService, VideoService ]
})

export class VideoDetailComponent implements OnInit {

  public identity;
  public token;
  public video: Video;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _videoService: VideoService,
    private _sanitizer: DomSanitizer

  ) { 
   
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
  ngOnInit() {
    
    this.getVideo();

  }

  getVideo(){
    this._route.params.subscribe(params=>{
      var id = +params['id'];

      this._videoService.getVideo(this.token, id).subscribe(
        response =>{
          if(response.status == 'success'){
            this.video = response.video;
          }else{
            this._router.navigate(['/inicio']);
          }
        },
        error =>{
          this.status = 'error';
          console.log(error);
        }
      );
    });
  }
  
  /**
   * Método que recibe una url de un video de youtube y genera una url para embeberlo o incrustarlo.
   * @param url la url del video de youtube
   */
  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }

    //Conseguir mediante la expresion regular conseguir el identificador del video de youtube (id)
    results = url.match('[\\?&]v=([^&#]*)');
    // id del video
    video   = (results === null) ? url : results[1];
    
    // limpiar la url del video generado para embeberlo
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}


}
