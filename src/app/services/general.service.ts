import { Injectable } from "@angular/core";
import data from "./data.json";

@Injectable({
  providedIn: "root",
})
export class GeneralService {
  constructor() {}

  getFromData():any {
    return data;
  }
}
