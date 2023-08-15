import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent {

  @Input() definition!:string
  @Input() example!:string|undefined
  @Input() showExam:boolean = false
}
