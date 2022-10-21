import { LightningElement ,track} from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false
    name
    handleClick(event){
        this.isVisible = true
    }

    helloHandler(event){
        this.name = event.target.value
    }

    get helloCheck(){
        return this.name === "hello"
    }
}