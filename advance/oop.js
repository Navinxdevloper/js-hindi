const user ={
    username : 'hitesh',
    logincount: 0,
    signedin:true,
    getuserdetails: function(){
        console.log('this.username');
        console.log('this.logincount');
    }
}

//console.log(user.username);

function myuser(username,loggedin){
    this.username = username
    this.loggedin = loggedin

    return this
}

const userone =new myuser('navin',true)
const usertwo =new myuser('vinit',true)
console.log(userone);
console.log(usertwo);