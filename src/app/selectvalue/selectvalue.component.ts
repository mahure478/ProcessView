import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectvalue',
  templateUrl: './selectvalue.component.html',
  styleUrls: ['./selectvalue.component.scss']
})
export class SelectvalueComponent {
  @Input() label: string = ''
  @Input() name: Array<any> = []
  @Output() changeEvent = new EventEmitter<any>();
changeEventValue(e:any){
this.changeEvent.emit(e)

}

}
