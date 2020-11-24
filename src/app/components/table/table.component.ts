import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../../services/general.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  public data: Array<{}>;
  public page: number;
  public pageSize: number;
  public collectionSize: number;

  constructor(private dataService: GeneralService) {}

  ngOnInit() {
    this.data = this.dataService.getFromData();
    this.page = 1;
    this.pageSize = 4;
    this.collectionSize = this.data.length;
  }

  refresh() {
    this.data = this.dataService
      .getFromData()
      .map((item, i) => ({ id: i + 1, ...item }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
