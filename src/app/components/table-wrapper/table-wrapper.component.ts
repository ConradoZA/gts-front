import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-table-wrapper",
  templateUrl: "./table-wrapper.component.html",
  styleUrls: ["./table-wrapper.component.scss"],
})
export class TableWrapperComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
