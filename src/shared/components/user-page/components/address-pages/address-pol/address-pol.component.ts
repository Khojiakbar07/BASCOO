import { ChangeDetectorRef, Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-address-pol',
  templateUrl: './address-pol.component.html',
  styleUrls: ['./address-pol.component.scss']
})
export class AddressPolComponent {
  constructor(private clipboard: Clipboard, private modalService: NzModalService) { }

  copiedText: string = '';

  copyText(text: string) {
    this.clipboard.copy(text);
    this.copiedText = text;
    this.showModalWithAutoClose(this.copiedText);
  }

  copyAll() {
    const allDetails = `
      someone
      11 Southgate Blvd, D10
      ABC9662
      New Castle
      DE
      19720
      Poland
      +1 302 4148567
    `;
    this.clipboard.copy(allDetails);
    this.showModalWithAutoClose(allDetails);
  }

  showModalWithAutoClose(content: string): void {
    const modalRef = this.modalService.create({
      nzContent: content,
      nzFooter: null,
      nzClosable: false,
      nzWrapClassName: 'custom-modal'
    });

    setTimeout(() => {
      modalRef.close();
    }, 1500);
  }
}
