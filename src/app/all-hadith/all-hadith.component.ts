import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HadithService } from '../../services/hadith/hadith.service';
import { hadith } from '../../data/hadiths';
import { NgFor,NgIf } from '@angular/common';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [NgFor, NgIf,HlmButtonDirective,HlmInputDirective,FormsModule],
  templateUrl: './all-hadith.component.html',
  styleUrl: './all-hadith.component.css'
})
export class AllHadithComponent {
  all_hadiths:hadith[]=[]
constructor(private hadiths:HadithService){
  this.all_hadiths = hadiths.all_hadith
}

copyAlert = false

changeCopyAlert():boolean{
  this.copyAlert = !this.copyAlert
  return this.copyAlert
}

showAndHideAlert(){
  this.changeCopyAlert()
  setTimeout(()=>{
    this.changeCopyAlert()
  },3000)
}

copyHadith(id:number):void{
  
if(this.isViewedHadith==true){
  this.showAndHideAlert()
  if(this.isViewedHadithTranslated){
    navigator.clipboard.writeText(this.viewedHadithTranslate)
    return
  }else{
    navigator.clipboard.writeText(this.viewedHadithContent)
    return
  }
} else if(this.isTheHadithSearched){
  let i =0;
  this.showAndHideAlert()
  while(i<this.all_hadiths.length){
    if(this.all_hadiths[i].id == id){
      if(this.isSearchedHadithTranslated==true){
        navigator.clipboard.writeText(this.all_hadiths[i].translate)
        return
      }
      else{
        navigator.clipboard.writeText(this.all_hadiths[i].contents)
        return
      }
      
    }
    i++
  }
    
}
else{

  let i =0;
  this.showAndHideAlert()
  while(i<this.all_hadiths.length){
    if(this.all_hadiths[i].id == id+1){
      if(this.all_hadiths[i].isTranslated==true){
        navigator.clipboard.writeText(this.all_hadiths[i].translate)
        return
      }
      else{
        navigator.clipboard.writeText(this.all_hadiths[i].contents)
        return
      }
      
    }
    i++
  }
}



}

translate_the_hadith(id:number):void{

  let i = 0;
  while(i<this.all_hadiths.length){
    if(this.all_hadiths[i].id == id+1){
      this.all_hadiths[i].isTranslated = !this.all_hadiths[i].isTranslated
    }
    i++;
  }
  
}
isViewedHadith = false

viewedHadithContent = ''
viewedHadithTranslate =''
viewedHadithSource = ''
viewedHadithTitle = ''
isViewedHadithTranslated = false
viewFullHadith(viewedHadithId:number){
  let i = 0
  this.isViewedHadith = !this.isViewedHadith
  while(i<this.all_hadiths.length){
    if(this.all_hadiths[i].id == viewedHadithId+1 ){
      this.viewedHadithContent = this.all_hadiths[i].contents
      this.viewedHadithTranslate = this.all_hadiths[i].translate
      this.viewedHadithSource = this.all_hadiths[i].source
      this.viewedHadithTitle = this.all_hadiths[i].title
      this.isViewedHadithTranslated = this.all_hadiths[i].isTranslated
      return
    }
    i++
  }
}

translate_viewed_hadith(){
  this.isViewedHadithTranslated =!this.isViewedHadithTranslated
}



isSearch = false
pop_search_input(){
  this.isSearch = !this.isSearch
}

searchValue = ''
search_matched_hadith:hadith[]=[]
search_the_hadith(){
  this.search_matched_hadith = []
 let i =0
  while(i<this.all_hadiths.length){
    if(this.all_hadiths[i].title.includes(this.searchValue) && this.searchValue!=''){
      this.search_matched_hadith.unshift(this.all_hadiths[i])
    }
    i++
  }
}

isSearchedHadithTranslated = false
translateSearchedHadith(){
  this.isSearchedHadithTranslated=!this.isSearchedHadithTranslated
}

isTheHadithSearched = true
searchedHadith = {
  id:0,
  title:'',
  contents:'',
  translate:'',
  source:''
}
showSearchedHadith(title:string){
  this.isTheHadithSearched = !this.isTheHadithSearched
  let i =0
  while(i<this.all_hadiths.length){
    if(title==this.all_hadiths[i].title){
      this.searchedHadith ={
        id:this.all_hadiths[i].id,
        title: this.all_hadiths[i].title,
        contents: this.all_hadiths[i].contents,
        translate:this.all_hadiths[i].translate,
        source: this.all_hadiths[i].source  
      }
    }
    i++
  }

}
}

