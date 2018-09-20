import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable({ providedIn: "root" })
export class TreeService {
  public API = "//localhost:8080";
  public TREE_API = this.API + "/trees";

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.TREE_API);
  }

  get(id: string) {
    return this.http.get(this.TREE_API + "/" + id);
  }

  save(tree: any): Observable<any> {
    let result: Observable<Object>;
    if (tree["href"]) {
      result = this.http.put(tree.href, tree);
    } else {
      result = this.http.post(this.TREE_API, tree);
      console.log(tree);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
