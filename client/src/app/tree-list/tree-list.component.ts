import { Component, OnInit } from "@angular/core";
import { TreeService } from "./../shared/tree/tree.service";

@Component({
  selector: "app-tree-list",
  templateUrl: "./tree-list.component.html",
  styleUrls: ["./tree-list.component.css"]
})
export class TreeListComponent implements OnInit {
  trees: Array<any>;
  constructor(private TreeService: TreeService) {}

  ngOnInit() {
    this.TreeService.getAll().subscribe(data => {
      this.trees = data;
    });
  }
}
