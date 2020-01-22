import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public token: string;
  public identity;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.page_title = "Identificate";
    this.user = new User(1,'','','','','ROLE_USER','');
  }
  
  ngOnInit() {
    this.logout();
  }

  onSubmit(form){
    this._userService.signup(this.user).subscribe(
      response=>{
        if(!response.status || response.status != 'error'){
          this.status = 'success';
          this.identity = response;

                // Obtener el token
                this._userService.signup(this.user, true).subscribe(
                  response=>{
                    if(!response.status || response.status != 'error'){
                      this.token = response;
                      
                      // persistir informacion del usuario identificado en el localstorage.
                      localStorage.setItem('token', this.token);
                      localStorage.setItem('identity',JSON.stringify(this.identity));

                      this._router.navigate(['/inicio']);
                    }else{
                      this.status = 'error';
                    }
                  },
                  error =>{
                    this.status = 'error';
                    console.log(error);
                  }
                );

         
        }else{
          this.status = 'error';
        }
      },
      error =>{
        this.status = 'error';
        console.log(error);
      }
    );
  }

  logout(){
    this._route.params.subscribe(params=>{
      let sure = +params['sure'];

      if(sure == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity= null;
        this.token = null;

        this._router.navigate(['/inicio']);
      }
    })
  }
}
