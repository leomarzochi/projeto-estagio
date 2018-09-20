import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { TreeService } from "./../shared/tree/tree.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tree-edit",
  templateUrl: "./tree-edit.component.html",
  styleUrls: ["./tree-edit.component.css"]
})
export class TreeEditComponent implements OnInit, OnDestroy {
  tree: any = {};

  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private treeService: TreeService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params["id"];
      if (id) {
        this.treeService.get(id).subscribe((tree: any) => {
          if (tree) {
            this.tree = tree;
            this.tree.href = tree._links.self.href;
          } else {
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(["/trees"]);
  }

  save(form: NgForm) {
    this.treeService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

  remove(href) {
    this.treeService.remove(href).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
}
