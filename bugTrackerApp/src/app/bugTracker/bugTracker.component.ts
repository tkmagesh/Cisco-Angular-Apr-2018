import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{

	bugs : Bug[] = [];
	trimRange : number = 25;

	sortBugBy : string = 'name';
	sortBugDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Application not responding'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
	}

	onCreateClick(bugName : string){
		let newBug : Bug = this.bugOperations.createNew(bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations.toggle(bugToToggle);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedBugCount(){
		return this.bugs.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}
}