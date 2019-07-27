import { Component } from '@angular/core'

import Quill from 'quill'

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import ImageResize from 'quill-image-resize-module';
import 'quill-emoji/dist/quill-emoji.js';
Quill.register('modules/imageResize', ImageResize)

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html'
})
export class FormulaComponent {

  form: FormGroup = this.fb.group({
    html: new FormControl('')
  })

  modules = {}
  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) {
    this.modules = {
      formula: true,
      imageResize: {},
      syntax: true,
      'emoji-toolbar': true,
      'emoji-shortname': true,
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'font': [] }],
        [{ 'align': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image', 'video'],
        ['clean'],
        ['formula'],
        ['blockquote', 'code-block'], ['emoji']
      ]
    }
  }

  addBindingCreated(quill) {
    quill.keyboard.addBinding({
      key: 'b'
    }, (range, context) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING B', range, context)
    })

    quill.keyboard.addBinding({
      key: 'B',
      shiftKey: true
    }, (range, context) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING SHIFT + B', range, context)
    })
  }

  byPassHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

}
