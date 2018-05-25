import { Component } from '@angular/core';
import { NewsRepositoryProvider } from '../../services/news-repository.provider';

@Component({
	selector: 'news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})

export class NewsComponent {

	constructor(private newsRepo: NewsRepositoryProvider) {

		console.log(newsRepo.getPagedNews(0, 10));

	}
}
