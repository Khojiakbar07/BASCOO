import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'stats-component',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
	public statsNumbers = {
		books: 0,
		briefcases: 0,
		teams: 0,
		teachers: 0,
	}

	private targetNumbers = {
		books: 200,
		briefcases: 200,
		teams: 150,
		teachers: 5,
	}

	private duration = 2000 // duration for the counting animation
	private intervalTime = 50 // interval time for updating the numbers

	ngOnInit(): void {
		this.startCounting()
	}

	private startCounting(): void {
		const totalIncrements = this.duration / this.intervalTime

		const incrementBooks = this.targetNumbers.books / totalIncrements
		const incrementBriefcases = this.targetNumbers.briefcases / totalIncrements
		const incrementTeams = this.targetNumbers.teams / totalIncrements
		const incrementTeachers = this.targetNumbers.teachers / totalIncrements

		let currentBooks = 0
		let currentBriefcases = 0
		let currentTeams = 0
		let currentTeachers = 0

		const timer = setInterval(() => {
			currentBooks += incrementBooks
			currentBriefcases += incrementBriefcases
			currentTeams += incrementTeams
			currentTeachers += incrementTeachers

			if (currentBooks >= this.targetNumbers.books) {
				currentBooks = this.targetNumbers.books
			}

			if (currentBriefcases >= this.targetNumbers.briefcases) {
				currentBriefcases = this.targetNumbers.briefcases
			}

			if (currentTeams >= this.targetNumbers.teams) {
				currentTeams = this.targetNumbers.teams
			}

			if (currentTeachers >= this.targetNumbers.teachers) {
				currentTeachers = this.targetNumbers.teachers
			}

			this.statsNumbers.books = Math.floor(currentBooks)
			this.statsNumbers.briefcases = Math.floor(currentBriefcases)
			this.statsNumbers.teams = Math.floor(currentTeams)
			this.statsNumbers.teachers = Math.floor(currentTeachers)

			// Clear the interval when all numbers reach their target
			if (
				currentBooks >= this.targetNumbers.books &&
				currentBriefcases >= this.targetNumbers.briefcases &&
				currentTeams >= this.targetNumbers.teams &&
				currentTeachers >= this.targetNumbers.teachers
			) {
				clearInterval(timer)
			}
		}, this.intervalTime)
	}
}
