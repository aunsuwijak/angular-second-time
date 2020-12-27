import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-second-time'

  filteredCategories = []
  categories = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data)
      this.categories = data
      this.filteredCategories = this.categories
    })
  }

  filterChange(event) {
    const filter = event.target.value

    if (!filter) {
      this.filteredCategories = this.categories
    } else {
      this.filteredCategories = this.categories.filter((category) => category.indexOf(filter) > -1)
    }
  }
}
