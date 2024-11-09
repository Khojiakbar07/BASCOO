import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'stats-component',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
	public statsNumbers = {
		clients: 0,
		solutions: 0,
		projects: 0,
		experience: 0,
	}

	private targetNumbers = {
		clients: 100,
		solutions: 200,
		projects: 350,
		experience: 11,
	}

	private duration = 2000 // duration for the counting animation
	private intervalTime = 50 // interval time for updating the numbers

	ngOnInit(): void {
		this.startCounting()
	}

	private startCounting(): void {
		const totalIncrements = this.duration / this.intervalTime

		const incrementBooks = this.targetNumbers.clients / totalIncrements
		const incrementBriefcases = this.targetNumbers.solutions / totalIncrements
		const incrementTeams = this.targetNumbers.projects / totalIncrements
		const incrementTeachers = this.targetNumbers.experience / totalIncrements

		let currentBooks = 0
		let currentBriefcases = 0
		let currentTeams = 0
		let currentTeachers = 0

		const timer = setInterval(() => {
			currentBooks += incrementBooks
			currentBriefcases += incrementBriefcases
			currentTeams += incrementTeams
			currentTeachers += incrementTeachers

			if (currentBooks >= this.targetNumbers.clients) {
				currentBooks = this.targetNumbers.clients
			}

			if (currentBriefcases >= this.targetNumbers.solutions) {
				currentBriefcases = this.targetNumbers.solutions
			}

			if (currentTeams >= this.targetNumbers.projects) {
				currentTeams = this.targetNumbers.projects
			}

			if (currentTeachers >= this.targetNumbers.experience) {
				currentTeachers = this.targetNumbers.experience
			}

			this.statsNumbers.clients = Math.floor(currentBooks)
			this.statsNumbers.solutions = Math.floor(currentBriefcases)
			this.statsNumbers.projects = Math.floor(currentTeams)
			this.statsNumbers.experience = Math.floor(currentTeachers)

			// Clear the interval when all numbers reach their target
			if (
				currentBooks >= this.targetNumbers.clients &&
				currentBriefcases >= this.targetNumbers.solutions &&
				currentTeams >= this.targetNumbers.projects &&
				currentTeachers >= this.targetNumbers.experience
			) {
				clearInterval(timer)
			}
		}, this.intervalTime)
	}
}
