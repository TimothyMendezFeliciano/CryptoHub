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
  private PROmember: boolean = true;
  constructor(private http: HttpClient) {}

  getNews(filter?: string, kind?: string, currencies?: string) {
    let params = new HttpParams()
      .set("auth_token", environment.cryptoPanicAuthToken)
      .set("metadata", this.PROmember);

    if (filter) params = params.set("filter", filter);
    if (currencies) params = params.set("currencies", currencies);
    if (kind) params = params.set("kind", kind);
    return this.http.get<NewsCatcherResult>(routes.posts, { params });
  }
}
