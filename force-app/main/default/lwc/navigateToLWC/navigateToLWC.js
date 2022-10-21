import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToLWC extends NavigationMixin(LightningElement) {
    navigateLWC(){
       var definition = {
         componentDef:'c:navigatedLWCTarget',
         attributes:{
            recordId:'7353000840'
         }
       }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })

    }
}