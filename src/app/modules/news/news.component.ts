import { Component, OnInit } from "@angular/core";
import { Posts } from "src/app/models/cryptopanic/posts";
import { NewscatcherService } from "../../services/newscatcher/newscatcher.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  public posts: Posts[];
  public rippleColor: "blue";
  constructor(private newscatcher: NewscatcherService) {}

  ngOnInit(): void {
    this.newscatcher.getNews().subscribe({
      next: (result) => {
        this.posts = result.results;
        console.log(this.posts);
      },
    });
  }
}
