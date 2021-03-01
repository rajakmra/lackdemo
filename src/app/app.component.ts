import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ElementFinder } from 'protractor';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string='Vowel Remover';
mynewstr:string='';

 public myfun(str:string):string
 {
   console.log('Entered into myfun()');
   console.log('length : '+str.length);

  for(let i=0;i<str.length;i++)
  {
    if(str.charAt(i) == 'a')
    {
      str = str.replace(str.charAt(i),'');
    }
    else if(str.charAt(i) == 'e')
    {
      str = str.replace(str.charAt(i),'');
    }
    else if(str.charAt(i) == 'i')
    {
      str = str.replace(str.charAt(i),'');
    }
    else if(str.charAt(i) == 'o')
    {
      str = str.replace(str.charAt(i),'');
    }
    else if(str.charAt(i) == 'u')
    {
      str = str.replace(str.charAt(i),'');
    }            
  }
  this.mynewstr = str;
  console.log(str);
  return str;
 }

}
