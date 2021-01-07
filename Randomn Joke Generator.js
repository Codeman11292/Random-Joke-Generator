
let joke1 = "Your momma so fat when she went bunjee jumping she went straight to hell"
let joke2 = "Your momma so old, when god said let there be light she was the one to flip the switch"
let joke3 = "Your momma is like a shotgun, two cocks and she is loaded"
let joke4 = "Your momma is so ugly she went into a haunted house and came out with a job application"
var arr = [joke1, joke2, joke3,joke4] 

const getRandom = arr[Math.floor(Math.random() * arr.length)]
    
const getJoke = () => {
console.log(getRandom)
}

getJoke() 
//hopefully this works like its supposed too
