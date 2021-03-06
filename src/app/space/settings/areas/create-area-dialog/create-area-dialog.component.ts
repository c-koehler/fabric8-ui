import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Area, AreaAttributes, AreaService, Context } from 'ngx-fabric8-wit';
import { Subscription } from 'rxjs';

import { AreaError } from '../../../../models/area-error';
import { ContextService } from '../../../../shared/context.service';

@Component({
  host: {
    'class': 'create-dialog'
  },
  encapsulation: ViewEncapsulation.None,
  selector: 'create-area-dialog',
  templateUrl: './create-area-dialog.component.html',
  styleUrls: ['./create-area-dialog.component.less']
})
export class CreateAreaDialogComponent implements OnInit {

  @Input() host: ModalDirective;
  @Input() parentId: string;
  @Input() areas: Area[];
  @Output() onAdded = new EventEmitter<Area>();
  @ViewChild('areaForm') areaForm: NgForm;

  @ViewChild('rawInputField') rawInputField: ElementRef;
  @ViewChild('inputModel') inputModel: NgModel;

  private context: Context;
  private name: string;
  private errors: AreaError;

  constructor(
    private contexts: ContextService,
    private areaService: AreaService) {
    this.contexts.current.subscribe(val => this.context = val);
  }

  public onOpen() {
    this.focus();
  }

  public onClose() {
    this.clearField();
    this.resetErrors();
  }

  focus() {
    this.rawInputField.nativeElement.focus();
  }

  ngOnInit() {
    this.errors = {uniqueValidationFailure: false};
  }

  clearField() {
    this.inputModel.reset();
  }

  resetErrors() {
    this.errors = {uniqueValidationFailure: false};
  }

  createArea() {
    let area = {} as Area;
    area.attributes = new AreaAttributes();
    area.attributes.name = this.name;
    area.type = 'areas';
    this.areaService.create(this.parentId, area).subscribe(newArea => {
      this.onAdded.emit(newArea);
      this.host.hide();
    }, error => {
      this.handleError(error.json());
    });
  }

  itemPath(item: AreaAttributes) {
    // remove slash from start of string
    let parentPath = item.parent_path_resolved.slice(1, item.parent_path_resolved.length);
    if (parentPath === '') {
      return item.name;
    }
    return parentPath + '/' + item.name;
  }

  cancel() {
    this.host.hide();
  }

  handleError(error: any) {
    if (error.errors.length) {
      error.errors.forEach(error => {
        if (error.status === '409') {
          this.errors.uniqueValidationFailure = true;
        }
      });
    }
  }
}
