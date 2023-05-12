import { ValuesController } from "./Controllers/ValuesController.js";
import { VendingsController } from "./Controllers/VendingsController.js";

class App {
  // valuesController = new ValuesController();
vendingsController = new VendingsController()
  
}



window["app"] = new App();
