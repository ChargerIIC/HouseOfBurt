import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
	providedIn: 'root',
})
export class NewsRepositoryProvider {

	constructor(private firebase: AngularFireDatabase) {

	}

	///Gets a news article starting at a certain index and then so many forward
	public getPagedNews(start: number, count: number): AngularFireList<any> {
		return this.firebase.list('/News/');
	}
}