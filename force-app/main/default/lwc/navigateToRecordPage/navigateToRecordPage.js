import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/Navigation';

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__RecordPage',
            attributes: {
                recordId:'0036D00000TxZR5QAN',
                objectApiName:'Contact',
                actionName:'view'
            }

        })
    }
}