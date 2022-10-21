import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRelatedRelationship extends NavigationMixin(LightningElement) {
    navigateRelated(){
    this[NavigationMixin.Navigate]({
        type:'standard__recordRelationshipPage',
        attributes:{
            recordId:'0016D00000el4pUQAQ',
            objectApiName:'Account',
            relationshipApiName:'Contacts',
            actionName:'view'
        }
    })
  }
}