import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Posts } from "src/app/models/cryptopanic/posts";

@Component({
  selector: "app-article-dialog",
  templateUrl: "./article-dialog.component.html",
  styleUrls: ["./article-dialog.component.css"],
})
export class ArticleDialogComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Posts
  ) {
    if (data.kind === "news") {
      data.metadata.description = data.metadata.description.replace("<p>", "");
      data.metadata.description = data.metadata.description.replace("</p>", "");
    }
    if (data.kind === "media") {
      data.metadata.description = data.metadata.description.replace(
        "<br>",
        " "
      );
    }
  }

  ngOnInit(): void {}
}
