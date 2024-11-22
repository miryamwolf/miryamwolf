import { Component } from "@angular/core";

@Component({
selector:'app-first2',
templateUrl:'./first2.component.html',
styleUrl:'./first2.component.css',
standalone:true,
imports:[]
})

export class First2Component{
    fullName:string='Miryam Wolf'
    isHomework:boolean=false
}