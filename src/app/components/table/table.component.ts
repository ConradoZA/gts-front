import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { GeneralService } from "../../services/general.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  public data: Array<{}>;
  public page: number = 1;
  public pageSize: number = 10;
  public collectionSize: number;

  constructor(
    private dataService: GeneralService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.data = this.dataService.getFromData();
    this.collectionSize = this.data.length;
  }

  refresh() {
    this.data = this.dataService
      .getFromData()
      .map((item: any, index: number) => ({ id: index + 1, ...item }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
