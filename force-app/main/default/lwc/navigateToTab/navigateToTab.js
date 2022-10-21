import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToTab extends NavigationMixin(LightningElement){

    navigateTab(){
        console.log('It worked!!!')
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Memory_Game',

            }
        })

    }
}