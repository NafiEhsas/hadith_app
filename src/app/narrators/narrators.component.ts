import { Component } from '@angular/core';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSeparatorModule } from "../../../libs/ui/ui-separator-helm/src/index";
import { NarratorService } from '../../services/narrator/narrator.service';
import { NgFor } from '@angular/common';
import { narrator } from '../../data/narrators';
import { FormsModule } from '@angular/forms';
import { HlmScrollAreaDirective } from "../../../libs/ui/ui-scrollarea-helm/src/lib/hlm-scroll-area.directive";

@Component({
  imports: [HlmInputDirective, HlmSeparatorModule, NgFor, FormsModule, HlmScrollAreaDirective],
  selector:'app-narrators',
  templateUrl: './narrators.component.html',
  styleUrl: './narrators.component.css'
})
export class NarratorsComponent {
  all_narrators:narrator[]=[]
  narratorsName:string[]=[]

  constructor(private narrators:NarratorService){
    this.all_narrators = narrators.data
    this.all_narrators.forEach(i =>{
      this.narratorsName.push(i.name)
    })
  }
searchValue = ''
  search(query:string){
    // alert(query)
    let i =0
    while(i<this.narratorsName.length){
      if(this.narratorsName[i].includes(query)){
        const element = document.getElementById(this.narratorsName[i])
        if(element){
          element.scrollIntoView({behavior:'smooth'})
          return
        }

      }
      i++
    }
    
  }
}
