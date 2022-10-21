import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected ={}
     get allnotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
     }
    myQuestions = [
        {
            id:'Question1',
            question:'Which of the following is directive in lwc?',
            answer:{
                 a:'for:each',
                 b:'if:else',
                 c:'map loop'
            },
            correct:'a'
        },
        {
            id:'Question2',
            question:'Which of the following is not valid file in lwc?',
            answer:{
                 a:'.svg',
                 b:'.apex',
                 c:'.js'
            },
            correct:'c'
        },
        {
            id:'Question3',
            question:'Which of the following is not decorator in lwc ?',
            answer:{
                 a:'@track',
                 b:'@wire',
                 c:'@connect'
            },
            correct:'c'
        }
    ]

    changeHandler(event){
        console.log(event.target.name);
        console.log(event.target.value);
        const {name,value}  = event.target;
        this.selected = {...this.selected , [name]:value} 
    }
    submitHandler(event){

    }
    resetHandler(event){

    }
}