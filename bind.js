class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
this._password = value.toUpperCase()
    }
}

const navin = new user('NavIN@GmaIl.ai','abc')
console.log(navin.password);
console.log(navin.email);