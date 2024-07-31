import { Component, OnInit } from '@angular/core';
import { VisitorService}  from 'src/services/visitor.service';
import { Visitor } from '../interfaces/visitor';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {
  elementType = 'svg';
  value = 'A001';
  format = 'CODE128';
  lineColor = '#000000';
  width = 5;
  height = 100;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'top';
  textMargin = 8;
  fontSize = 60;
  background = '#ffffff';
  margin = 10;
  marginTop = 10;
  marginBottom = 10;
  marginLeft = 10;
  marginRight = 10;

  public textHead: string = 'RS. Testung';
  public textInfo: string = 'Nomer Antrian Anda : ';
  public textInfo2: string = 'Mohon Menunggu';
  public dateNow = new Date().toLocaleDateString('id-ID');
  public timeNow = new Date().toLocaleTimeString('en-US');
  public textDesc: string = 'Budayakan antri untuk kenyamanan bersama Terima Kasih atas kunjungan anda';
  public IdAntrian: string;
  constructor(
    private visitorSV: VisitorService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.value = id;
      console.log('Route param id:', id);
      // Use the 'id' value for your logic
      window.print();
    });
  }

  get values(): string[] {
    return this.value.split('\n');
  }



}
