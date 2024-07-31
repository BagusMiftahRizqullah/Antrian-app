import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VisitorCreate } from '../interfaces/visitor-create';
import { VisitorService}  from 'src/services/visitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {
  public dsVisitor: VisitorCreate[] = [];
  public form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private visitorSV: VisitorService,
    private router: Router,
  ) {
    this.form = this.builder.group({
      salesman_id: '',
      customer_name: '',
      pic: '',
      city: '',
      remark: '',
      npwp: '',
      customer_price_category: '',
      address: '',
      address2: '',
      contact_no: '',
      region: '',
      province: '',
      kouta: ''
    });
   }

   
  ngOnInit(): void {
  }


  onSubmit(form: FormBuilder) {
    // Access the form data
    const VisitorCreate: VisitorCreate = {
      salesman_id: this.form.value.salesman_id,
      customer_name: this.form.value.customer_name,
      pic: this.form.value.pic,
      city: this.form.value.city,
      remark: this.form.value.remark,
      npwp: this.form.value.npwp,
      customer_price_category: this.form.value.customer_price_category,
      address: this.form.value.address,
      address2: this.form.value.address2,
      contact_no: this.form.value.contact_no,
      region: this.form.value.region,
      province: this.form.value.province,
      kouta: this.form.value.kouta,
    };


    // Perform any necessary actions with the form data
    console.log(VisitorCreate);

    this.visitorSV.createVisitor(VisitorCreate).subscribe((res: {}) => {
      // window.print();
    this.router.navigate(['/request-queue-number',res.response.no_antrian]);

    },(err) => {
      console.log(err, 'error create visitor');
    }) 
  }

  onAdd() {

  }

}
