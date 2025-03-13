const uniqueKey = Symbol("id");
const user = {
    [uniqueKey]: 1234,
    name: "John"
};
console.log(user[uniqueKey]); // 1234
