const promiseone = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('async task is completes');
        resolve()
    },1000)
    })
    
    // promiseone.then(function(){
    //     console.log('promise consumed');
    // })
    
    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('task is 2');
            resolve()
        },1000)
    }).then(function(){
        console.log('task 2 is completed')
    })
    
    
    const promisethree = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username: 'navin'})
        },1000)
    })
    
    promisethree.then(function(user){
    console.log(user);
    })
    
    
    const promisefour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = false;
            if (!error) {
                resolve({username : 'navin'})
            }else{
                reject('error something wrong')
            }
        },1000)
    })
    
    promisefour.then((user) =>{
    console.log(user);
    return user.username
    }).then((username) =>{
        console.log(username);
    }).catch(function(error){
        console.log(error);
    })
    
    const promisefive = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = false;
            if (!error) {
                resolve({username : 'js'})
            }else{
                reject('error in js something wrong')
            }
        },1000)
    })
    
    async function profive(){
        const response = await profive
        console.log(response);
    }
    
    profive()
    
    async function getalluser(){
      const response = await  fetch('https://randomuser.me/api/')
      const data = await response.json()
      console.log(data);
    }
    
    getalluser()