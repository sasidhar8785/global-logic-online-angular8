interface IPerson {
    getAge():any;
}

class Person  implements IPerson  {

    private  name:String;
    private age:Number;
    public agree:boolean;

    constructor(){

    }
    getAge(): any {
        return 10;
    }
}