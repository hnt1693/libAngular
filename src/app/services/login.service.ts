import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Const;
  API = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {
  }
  public login(account: Account): Observable<any>{
    return this.http.post<any>(this.API, account);
  }
}
