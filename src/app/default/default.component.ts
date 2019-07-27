import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  blured = false
  focused = false


  modules = {}
  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) {
    this.modules = {
      formula: true,
      imageResize: {},
      syntax: true,
      toolbar: [['formula'], ['image'], ['code-block']]
    }
  }

  created(event) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blured = false
  }

  blur($event) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blured = true
  }
}
