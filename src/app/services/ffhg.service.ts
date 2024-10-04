import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../env/environment';
import { FFHGLoginResponse } from '../shared/models/ffhg_response.model';
import { ApiResponse } from '../shared/models/classement.model';
@Injectable({
  providedIn: 'root'
})
export class FfhgService {
  #http = inject(HttpClient);
  accessToken!: string;

  loginToFFHG(): Observable<FFHGLoginResponse> {
    return this.#http.post<FFHGLoginResponse>(`${environment.ffhgApiBaseUrl}/login?username=${environment.ffhgUsername}&password=${environment.ffhgPassword}`, {})
      .pipe(
        tap(response => {
          this.accessToken = response.success.token;
        })
      );
  }

  getResults(): Observable<ApiResponse> {
    return new Observable(observer => {
      this.loginToFFHG().subscribe(() => {
        this.#http.get<ApiResponse>(`${environment.ffhgApiBaseUrl}/classements/phase?phase_id=${environment.phase_id}&details=0`, {
          headers: {
            'Authorization': `Bearer ${this.accessToken}`
          }
        }).pipe(
          tap(response => {
            console.log(response);
            observer.next(response as ApiResponse);
            observer.complete();
          })
        ).subscribe();
      }, error => {
        console.error(error);
        observer.error(error);
      });
    });
  }
}

