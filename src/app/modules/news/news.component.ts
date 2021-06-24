import { Component, OnInit } from "@angular/core";
import { Posts } from "src/app/models/cryptopanic/posts";
import { NewscatcherService } from "../../services/newscatcher/newscatcher.service";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ArticleDialogComponent } from "./article/article-dialog.component";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  public posts: Posts[];
  public rippleColor: "blue";
  public isReady: boolean;
  public selectedFilter;
  public selectedKind;

  public options: FormGroup;
  constructor(
    public dialog: MatDialog,
    private newscatcher: NewscatcherService,
    private fb: FormBuilder
  ) {
    this.options = this.fb.group({
      filter: new FormControl(""),
      kind: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.getNews();
  }

  onSubmit() {
    this.getNews(
      this.options.value.filter,
      this.options.value.kind
    );
  }

  getNews(filter?: string, currencies?: string, kind?: string) {
    this.isReady = false;
    this.newscatcher.getNews(filter, currencies, kind).subscribe({
      next: (result) => {
        this.posts = result.results;
        console.log(this.posts);
      },
      complete: () => {
        this.isReady = true;
      },
    });
  }

  openDialog(index) {
    console.log(this.posts[index]);
    const article: Posts = this.posts[index];
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      width: "50vw",
      data: article,
    });
  }
}
