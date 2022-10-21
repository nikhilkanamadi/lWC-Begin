import { LightningElement } from 'lwc';
import CONTACT_OBJECT  from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ADDRESS_FIELD from '@salesforce/schema/Contact.MailingAddress';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';

export default class RecordEditForm extends LightningElement {

    ObjectName = CONTACT_OBJECT;
    fieldList = {
        accountId :ACCOUNT_FIELD, 
        accountName: NAME_FIELD, 
        phone: PHONE_FIELD, 
        email:EMAIL_FIELD, 
        address: ADDRESS_FIELD};


        handleReset(){
           const inputFields =  this.template.querySelectorAll('lightning-input-field');
           if(inputFields){
            Array.from(inputFields).forEach(field => {
                field.reset();
            }); 
           }

        }
}