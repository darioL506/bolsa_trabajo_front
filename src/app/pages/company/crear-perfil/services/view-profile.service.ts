import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/auth/services/login.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  public getCompany(companyid: number) {
    const url = environment.Laravel + "company/";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.loginService.user.access_token}`
    });
    return this.http.get(url + companyid, { headers: headers });
  }

  public updateCompany(companyInfoForm: FormGroup) {

    let jsonForm = companyInfoForm.getRawValue();

    let json = JSON.stringify(jsonForm);

    const url = environment.Laravel + "company/";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.loginService.user.access_token}`
    });
    return this.http.put(url + this.loginService.user.user_id, json, { headers: headers });
  }

  public updatePhoto(fd) {    

    const url = environment.Laravel + "saveAvatar/";

    let headers = new HttpHeaders({
      'charset': 'utf-8',
      Authorization: `Bearer ${this.loginService.user.access_token}`
    });
    return this.http.post(url + this.loginService.user.user_id, fd, { headers: headers });
  }
}
