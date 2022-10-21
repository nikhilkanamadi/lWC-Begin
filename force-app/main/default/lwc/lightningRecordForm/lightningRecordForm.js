import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class LightningRecordForm extends LightningElement {
      ObjectName = ACCOUNT_OBJECT;
      fieldList = [ ACCOUNT_NAME,ACCOUNT_TYPE,ANNUAL_REVENUE,INDUSTRY_FIELD];
      successHandler(event){
        console.log(event.detail.id);
      const toastEvent = new ShowToastEvent({
            title:'Account created',
            message:'Record Id: '+event.detail.id,
            variant:'success'
         })
         this.dispatchEvent(toastEvent);
      }

}