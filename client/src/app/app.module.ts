import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { TreeService } from "./shared/tree/tree.service";
import { TreeListComponent } from "./tree-list/tree-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TreeEditComponent } from "./tree-edit/tree-edit.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/trees", pathMatch: "full" },
  {
    path: "trees",
    component: TreeListComponent
  },
  {
    path: "tree-add",
    component: TreeEditComponent
  },
  {
    path: "tree-edit/:id",
    component: TreeEditComponent
  }
];

@NgModule({
  declarations: [AppComponent, TreeListComponent, TreeEditComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
