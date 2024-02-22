import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit, OnChanges
{

  @Input() data: any;


  ngOnInit(): void {}


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
