class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`my name is ${this.username}`);
    }
}

const chai =new teacher('chai','chai@xyz.com','123')
console.log(chai);
const greenTea =new user('chai')
console.log(greenTea);