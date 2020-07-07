import { run } from "./app/app";
// import "./style.css";
import './main.scss'
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
console.log("J");

alert('webpack is here');