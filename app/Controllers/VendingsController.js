import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { Vending } from "../Models/Vending.js";

function _drawVending() {
    let vendings = appState.vendings
    console.log('drawing vendings',vendings)
    let template = ''
    vendings.forEach(v => template += v.listTemplate);
    setHTML('vendings',template )
}

export class VendingsController{
    constructor(){
        console.log('vendings controller');
        _drawVending()
    }
}

