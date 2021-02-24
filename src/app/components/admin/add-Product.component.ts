import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './add-Product.component.html',
  styleUrls: ['./add-Product.component.less']
})
export class AddProductComponent implements OnInit {
  @Output() public onCloseAdmin: EventEmitter<void> = new EventEmitter<void>();
  public addProduct = {
    name: '',
    price: '',
    id: '',
    category: '',
    description: '',
    count: ''
  };
  public addProductForm: FormGroup = new FormGroup({});
  constructor() {
  }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl(this.addProduct.name, [Validators.required, Validators.minLength(3)]),
      price: new FormControl(this.addProduct.price, [Validators.required, Validators.minLength(3)]),
      id: new FormControl(this.addProduct.id, [Validators.required, Validators.minLength(3)]),
      category: new FormControl(this.addProduct.category, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(this.addProduct.description, [Validators.required, Validators.minLength(3)]),
      count: new FormControl(this.addProduct.count, [Validators.required, Validators.minLength(1)]),
    });
  }
  _onCloseAdmin(): void {
    this.onCloseAdmin.emit();
  }
}
