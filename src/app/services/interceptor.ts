import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class I1 implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('Token');
        const modified = req.clone({
            setHeaders: {
                'Authorization': token ? `Bearer ${token}` : '',
            },
        });

        return next.handle(modified).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    alert('login again')
                    // Clear the token and navigate to login
                    localStorage.removeItem('Token');
                    this.router.navigate(['/login']);
                }
                return throwError(error); // Re-throw the error for further handling if needed
            })
        );
    }
}
