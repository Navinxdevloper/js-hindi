function Setusername(username){
this.username = username
}

function createuser(username,email,password){
    Setusername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createuser('navin','navin@gmail.com','123')
console.log(chai);