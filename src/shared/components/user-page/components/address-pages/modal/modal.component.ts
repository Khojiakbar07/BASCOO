import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() copiedText: string = '';
  @Output() closed = new EventEmitter<void>();

  ngOnChanges(changes: any) {
    if (changes.isOpen && this.isOpen) {
      setTimeout(() => {
        this.closeModal();
      }, 3000); // Close after 1 second
    }
  }

  closeModal() {
    this.isOpen = false;
    this.closed.emit();
  }
}
