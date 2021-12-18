import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor as NativeHttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router, RouterStateSnapshot } from "@angular/router";
import { environment } from "src/environments/environment";
import { StorageService } from "src/app/shared/services/storage.service";
import { NavController } from "@ionic/angular";

environment;

@Injectable()
export class AppInterceptor implements NativeHttpInterceptor {
  // BASE_URL = environment.api_base_url;

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public storageService: StorageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    state: RouterStateSnapshot;

    // this.spinner.show();

    // Handling Authorization And Lang

    // console.log(`men d ${this.BASE_URL}/${this.storageService.getLang().code}/${req.url}`);
    // if (!this.validUrl(req.url)) {

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL3NoYXRhdC1kZXYwMmMyNGYwYzkxZmFjNWJlZGV2YW9zLmNsb3VkYXguZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYmU4OGY3MTMtYTk2NC00ODhmLTg5ZWYtMDBhMDRiYzBmNzg5LyIsImlhdCI6MTYzOTg2NjE0MCwibmJmIjoxNjM5ODY2MTQwLCJleHAiOjE2Mzk4NzAwNDAsImFpbyI6IkUyWmdZQWhWcVpnbEtsSzQvZlBacWJyVnVyczJBUUE9IiwiYXBwaWQiOiJhZjljNjE5MS0zN2FhLTRiYjQtYTYyMy01ZTdmMmMzNjRjMTciLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iZTg4ZjcxMy1hOTY0LTQ4OGYtODllZi0wMGEwNGJjMGY3ODkvIiwib2lkIjoiY2NlN2E2ODItNzJlOC00ZDQ5LWEzYzctOTNiMDYyZDA5ZWNmIiwicmgiOiIwLkFURUFFX2VJdm1TcGowaUo3d0NnUzhEM2laRmhuSy1xTjdSTHBpTmVmeXcyVEJjeEFBQS4iLCJzdWIiOiJjY2U3YTY4Mi03MmU4LTRkNDktYTNjNy05M2IwNjJkMDllY2YiLCJ0aWQiOiJiZTg4ZjcxMy1hOTY0LTQ4OGYtODllZi0wMGEwNGJjMGY3ODkiLCJ1dGkiOiJ1Q3NsQlZpdUcwUzJPLWozSFhBc0FBIiwidmVyIjoiMS4wIn0.vv8yjG-4t2bYiCiy7AGxU3HOjLpRG1i8GXexibnzU-xQlqzm3mABIDewsia-CuODn3xYDoyahUUyhR2LkiOAm_c792Vnvyg8m-F4sqTViat-78kIhhTbhdaAXNYKVIml0hVxcdEL-vKdfxj-P-Y8Y_nxRTnNrfW3o_IZrRZ-MG9TgFHf-fGmGD7CFdVYWh8fJeqkICnuiY5HXERZM61WKOgnMDeTM_L-fcnDeun_5hyvQHXpe3oqijn_-k8YQYT6zR5efFEtZkq8oK8473FEjA9Ij7bIOzvXDW7jbni5Y91PkzFdyl9fe9ZbS5YWTEi7d8Rw3qP_0Zc4aSd6QfvL1w";

    req = req.clone({
      url: `${req.url}`,
      headers: req.headers.set(
        "Authorization",
        `Bearer ${token}` // this.storageService.getAccessToken()
      ),
    });

    // }

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // this.spinner.hide();
        }
        return event;
      }),
      // catchError((error: HttpErrorResponse) => {
      //   if (error.status === 401) {
      //     this.storageService.removeStorage("access_token");
      //     this.storageService.removeStorage("user");
      //     this.navCtrl.navigateRoot(["/auth/sign-in"], {
      //       queryParams: {
      //         returnUrl: this.router.routerState.snapshot.url,
      //       },
      //     });
      //   } else if (error.status === 500) {
      //     console.log("something went wrong");
      //   } else if (error.status === 403) {
      //     this.storageService.removeStorage("access_token");
      //     this.storageService.removeStorage("user");
      //     this.navCtrl.navigateRoot(["/auth/sign-in"], {
      //       queryParams: {
      //         returnUrl: this.router.routerState.snapshot.url,
      //       },
      //     });
      //   }

      //   const started = Date.now();
      //   const elapsed = Date.now() - started;
      //   // console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
      //   // debugger;
      //   return throwError(error);
      // })
    );
  }

  /**
   * Check if the url is valid and has http or https.
   */
  validUrl(url) {
    return url.includes("http://") || url.includes("https://");
  }
}
