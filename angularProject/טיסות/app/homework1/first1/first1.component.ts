import { Component } from "@angular/core";


@Component({
    selector:'app-first1',
    templateUrl:'./first1.component.html',
    styleUrl:'./first1.component.css',
    standalone:true,
    imports:[]
})
export class First1Component{
    fullName:string="Miryam Wolf"
    id:number=214879116
    isHappy=false
}