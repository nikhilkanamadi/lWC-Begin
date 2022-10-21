import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToFiles extends NavigationMixin(LightningElement) {

    navigateToFiles(){
        this[NavigationMixin.Navigate]({
          type:'standard__objectPage',
          attributes:{
              objectApiName:'ContentDocument',
              actionName:'home'
          }
  
        })
      }
}