import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'Nikhil Kanamadi'; //data binding property
    course = 'Data Structures And Algorithms';

    // method called from html
    updateCourse(event) {
        this.course = event.target.value;
    }

    // Object in lwc
    @track
    address = {
        city: "Bagalkot",
        state: "Karnataka",
        country: 'India',
        postal: 587116

    }
    // Method to change city name
    cityHandler(event) {
        this.address.city = event.target.value;
    }

    family ={
       pet:'rocky',
       mom:'vani',
       sister:'rups'
    }

    petHandler(event){
        this.family = {...this.family, "pet": event.target.value};
    }

    // get methods example
    users = ['Nikhil','Arun','Balu'];
    num1 = 5 ;
    num2 = 10 ;
    
    get firstUser(){
        return this.users[0];
    }

    get multiply(){
        return this.num1 * this.num2;
    }
}