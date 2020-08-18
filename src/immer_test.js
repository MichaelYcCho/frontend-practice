const { produce } = require("immer");

const fruits = ["오렌지", "사과", "레몬", "바나나"];

const newFruits = produce(fruits, draft => {
    draft.splice(1, 2, "딸기");

})

//console.log(newFruits);

// in /src   
// command: node immer_test.js


const baseState = [
    { todo: "Learn Es6+", done: true },
    { todo: "immer+", done: false },
]


const NewState1 = [
    ...baseState.map((tweet, index) =>
        index === 1 ? { ...tweet, done: true } : tweet
    ),
    { todo: 'Tweet about it' },
]

//console.log(NewState1);


const NewState2 = produce(baseState, draft => {
    draft[1].done = true;
    draft.push({ todo: "Tweet about it" })
});


console.log(NewState2);