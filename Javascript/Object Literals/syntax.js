//Object Literals give clarity of what the information is about(key-value pair exists here)
let student = {
    name: "sudha",
    age: 21,
    marks: 99
};
console.log(student);

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"]
};
console.log(item);

//add/update/delete the values
const st ={ 
    name:"Sam",
    age:21,
    marks:94.4,
    city:"Delhi"
};
console.log(st);
st.city = "Mumbai";
st.marks = "A";
st.gender = "Female";

//after adding and updating the values
console.log("after adding and updating the values");
console.log(st);

delete st.gender;
//after deleting the values
console.log("after deleting the values");
console.log(st);