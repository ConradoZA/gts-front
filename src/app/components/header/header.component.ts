import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../services/language.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public language: string = "es";
  constructor(private languageService: LanguageService) {}

  ngOnInit() {}

  onLanguageChange() {
    this.languageService.setLanguage(this.language);
  }
}
