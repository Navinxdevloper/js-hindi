class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }

    static uniqueID(){
        return `123`
    }
}

const navin = new user('navin')

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher('iphone','iphone@www.com')
console.log(iphone.logMe());