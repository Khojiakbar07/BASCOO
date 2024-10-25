import {Component} from '@angular/core';
import {DropDownAnimation} from './animation';

@Component({
	selector: 'app-helps',
	templateUrl: './helps.component.html',
	styleUrls: ['./helps.component.scss'],
	animations: [DropDownAnimation],
})
export class HelpsComponent {
	isOpen1 = false
	isOpen2 = false
	isOpen3 = false
	isOpen4 = false
	isOpen5 = false
	isOpen6 = false
	isOpen7 = false
	isOpen8 = false
	isOpen9 = false
	isOpen10 = false
	isOpen11 = false

	toggleDropdown(dropdownNumber: number): void {
		this.isOpen1 = false
		this.isOpen2 = false
		this.isOpen3 = false
		this.isOpen4 = false
		this.isOpen5 = false
		this.isOpen6 = false

		if (dropdownNumber === 1) {
			this.isOpen1 = !this.isOpen1
		} else if (dropdownNumber === 2) {
			this.isOpen2 = !this.isOpen2
		} else if (dropdownNumber === 3) {
			this.isOpen3 = !this.isOpen3
		} else if (dropdownNumber === 4) {
			this.isOpen4 = !this.isOpen4
		} else if (dropdownNumber === 5) {
			this.isOpen5 = !this.isOpen5
		} else if (dropdownNumber === 6) {
			this.isOpen6 = !this.isOpen6
		}

		this.scrollToDropdown(dropdownNumber)
	}
	scrollToDropdown(dropdownNumber: number): void {
		const dropdownElement = document.getElementById(`dropdown${dropdownNumber}`)
		if (dropdownElement) {
			dropdownElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	images = [
		'..//..//..//../assets/images/about-us/image 2 (1).png',
		'..//..//..//../assets/images/about-us/image 2 (2).png',
		'..//..//..//../assets/images/about-us/image 2.png',
		'../../../../assets/images/carusel/LSBB.jpg',
	]

	selectedImage = '../../../../assets/images/carusel/LSBB.jpg'

	ngOnInit(): void {
		setInterval(() => {
			const currentIndex = this.images.indexOf(this.selectedImage)
			const nextIndex = (currentIndex + 1) % this.images.length
			this.selectedImage = this.images[nextIndex]
		}, 3000)

		// Smooth scroll to the top of the page
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	currentImageIndex = 0

	getGridImageIndices(): number[] {
		const imageCount = this.images.length
		const indices = []

		for (let i = 1; i <= 3; i++) {
			const index = (this.currentImageIndex + i) % imageCount
			indices.push(index)
		}

		return indices
	}

	selectImage(image: string) {
		this.currentImageIndex = this.images.indexOf(image)
	}
}
