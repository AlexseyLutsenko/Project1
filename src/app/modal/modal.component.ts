import {Component, NgZone, OnInit} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-config',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent implements OnInit{

  data = ['Пост','Сотрудники','Ответсвенный','Подразделение'];
  text: string;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private zone: NgZone) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

    this.zone.runOutsideAngular(() => {
      document.addEventListener('contextmenu', (e: MouseEvent) => {
        e.preventDefault();
      });
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    console.log(this.text);
  }
}
