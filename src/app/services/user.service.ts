import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    prueba(){
        return 'hola mundo';
    }

    register(user): Observable<any>{
        let json =JSON.stringify(user);
        let params = 'json=' + json;

        // Definir las cabeceras
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'register',params, {headers:headers});
    }

    signup(user, gettoken=null): Observable<any>{
        if(gettoken != null){
            user.gettoken = 'true';
        }
        let json =JSON.stringify(user);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'login', params, {headers:headers});
    }
}