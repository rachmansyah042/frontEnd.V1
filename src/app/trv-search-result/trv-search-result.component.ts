import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-trv-search-result',
  templateUrl: './trv-search-result.component.html',
  styleUrls: ['./trv-search-result.component.css']
})
export class TrvSearchResultComponent implements OnInit {

  order:string;

  constructor(private routeActive : ActivatedRoute) { }

  ngOnInit() {
    this.routeActive.queryParams.filter(params => params.order).subscribe(params => {
      // console.log(params); {order: "popular"}

      this.order = params.order;
     // console.log(this.order);  popular
    });
  }
}
