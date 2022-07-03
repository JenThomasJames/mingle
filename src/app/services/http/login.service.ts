import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariables } from 'src/app/global/variables';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private globalVariables: GlobalVariables) { }

  public authenticateUser(username: string, password: string) : Observable<User>{
    const headers = new HttpHeaders().set('username', username).set('password', password);
    return this.http.get<User>(this.globalVariables.ROOT_URL+'/user/auth',{headers});
  }
}
