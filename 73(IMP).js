// function hello()
// {
//     console.log("helllo world");
// }

// hello()
// hello.call()

/******************* REAL WORLD EXAMPLE *************************/
const user1 ={
    firstName : "harshit",
    age : 9,
    about : function(hobby,favMusician)
    {
        console.log(this.firstName, this.age , hobby , favMusician)
    }
}
//user1.about()
const user2 ={
    firstName : "harsh",
    age : 10,
}
// Yo user2 vanney object ma chai about vanney xaina aba how to call about inside user2 using user1 ko about

user1.about.call(user2,"guitar"); // using call keyword {call keyword ko bracket vitra vaneko this keyword ho haiiiiii}

//using apply
user1.about.apply(user2,["guitar","bach"])

//using bind
const func = user1.about.bind(user2,["guitar","bach"]); // yesle display chai kei gardaina unless call gareko xaina vanney

func();

