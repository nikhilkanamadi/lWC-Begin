import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {
    carlist = ['Ford','Audi','Maruti','Hyundai','Mercedez','Porsche','Toyota','Lamborghini','Honda','Range Rover'];
    ceoList =[
        {
            id:1,
            company:"Google",
            name:'Sudar Pichai'
        },
        {
            id:2,
            company:'Apple',
            name:'Tim Cook'
        },
        {
            id:3,
            company:'Facebook',
            name:'Mark Zuckerberg'
        },
        {
            id:4,
            company:'Amazon',
            name:'Zeff Bezos'
        },
    ]
}