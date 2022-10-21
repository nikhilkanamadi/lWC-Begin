import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'

export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    navigateToObject(){
      this[NavigationMixin.Navigate]({
        type:'standard__objectPage',
        attributes:{
            objectApiName:'Contact',
            actionName:'new'
        }

      })
    }

    navigateToObjectWithValues(){
        const defaultValues = encodeDefaultFieldValues({
            FirstName:'Nikhil',
            LastName:'Kanamadi',
            LeadSource:'Udemy'
        });

        this[NavigationMixin.Navigate]({
          type:'standard__objectPage',
          attributes:{
              objectApiName:'Contact',
              actionName:'new'
          },
          state:{
            defaultFieldValues : defaultValues
          }
  
        })
      }


      navigateToObjectListView(){
        this[NavigationMixin.Navigate]({
          type:'standard__objectPage',
          attributes:{
              objectApiName:'Contact',
              actionName:'list'
          },
          state:{
            filterName: 'All'
          }
  
        })
      }


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