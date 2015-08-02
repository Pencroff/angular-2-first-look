/**
 * Created by pencr on 02-Aug-15.
 */

//import deps
import 'zone.js';
import 'reflect-metadata';
//you may need es6-shim if you get an error relating to list.fill
import 'es6-shim';

//import {
//    Component,
//    View,
//    bootstrap
//} from 'angular2/angular2';

import * as lib from 'angular2/angular2';

let Component = lib.default.Component;
let View = lib.default.View;
let bootstrap = lib.default.bootstrap;

console.log(View);

//create a simple angular component
@Component({
    selector: 'test-app'
})
@View({
    template: '<h4>Hello {{name}}</h4>'
})
class TestApp {
    constructor(){
        this.name = 'Angular2';
        setTimeout(() => {
            this.name = 'Angular2!!!'
        },1500);
    }
}

//start our app
bootstrap(TestApp);