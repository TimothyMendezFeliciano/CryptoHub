import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { NewsCatcherResult } from "src/app/models/cryptopanic/posts";

const routes = {
  posts: "api/v1/posts/",
};

@Injectable({
  providedIn: "root",
})
export class NewscatcherService {
  private public: boolean = true;
  constructor(private http: HttpClient) {}

  getNews() {
    let params = new HttpParams()
      .set("auth_token", environment.cryptoPanicAuthToken)
      .set("public", this.public);
    return this.http.get<NewsCatcherResult>(routes.posts, { params });
  }
}
