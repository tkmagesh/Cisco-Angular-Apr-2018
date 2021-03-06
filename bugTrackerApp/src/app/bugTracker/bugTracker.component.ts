import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{

	bugs : Bug[] = [];
	trimRange : number = 25;

	sortBugBy : string = 'name';
	sortBugDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		
	}

	ngOnInit(){
		this.bugOperations
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
		
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperations
					.remove(closedBug)
					.subscribe(() => this.bugs = this.bugs.filter(bug => bug !== closedBug))
			});
	}

}