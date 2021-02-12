import {Component, Input, OnInit, TemplateRef} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  @Input() childTemplate?: TemplateRef<any>;

  public categories: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
