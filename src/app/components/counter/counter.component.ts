import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';



@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {
  @Input() count!: number;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }
  decrease(): void {
    this.count--;
    this.countChange.emit(this.count);
     }
  increase(): void {
    this.count++;
    this.countChange.emit(this.count);
  }
}

