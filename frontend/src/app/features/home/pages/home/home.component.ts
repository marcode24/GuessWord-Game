import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { Category } from '@models/category.model';
import { ITopic } from '@models/topic.model';

import { CategoryService } from '@services/category.service';
import { TopicService } from '@services/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  categories: Category[];
  topics: ITopic[];
  constructor(
    private categoryService: CategoryService,
    private topicService: TopicService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    forkJoin({
      categories: this.categoryService.getCategories(),
      topics: this.topicService.getTopics()
    }).subscribe({
      next: ({ categories, topics }) => {
        this.categories = categories;
        this.topics = topics;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  playGame(topicId: string | undefined) {
    this.router.navigate(['/play', topicId]);
  }
}
