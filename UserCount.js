class User{

    static count=0;

    constructor(uname){

        this.uname=uname;

        this.count=++User.count;

    }

}

let userCount=0;
let user1=new User("johnsmith10");
console.log(user1.uname);
let user2=new User("marysue1989");
console.log(user2.uname);

let user3=new User("milan_rodrick");
console.log(user3.uname);

console.log(user1.count);

console.log(user2.count);

console.log(user3.count);