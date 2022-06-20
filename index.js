// fill in javascript code here

// let data

document.querySelector("form").addEventListener("submit",function (){
    event.preventDefault();
    console.log("target buttuon work");
    addDetails();
});


function addDetails(){


 let tableRow=document.createElement("tr");
 let name=document.createElement("td");
 name.innerText=document.querySelector("#name").value;

 let id=document.createElement("td");
 id.textContent=document.querySelector("#docID").value;

 let specialization=document.createElement("td");
 specialization.textContent=document.querySelector("#dept").value;

 let exp=document.createElement("td");
 exp.textContent=document.querySelector("#dept").value;

 let email=document.createElement("td");
 email.textContent=document.querySelector("#dept").value;

 let mobile=document.createElement("td");
 mobile.textContent=document.querySelector("#dept").value;

 let role=document.createElement("td");
 // make a condition

 role.textContent="Junior";
 console.log(exp.innerText);
//  if(roleNumber>=5){
//     role.textContent="Senior";
//     console.log("condition")
// }else if(roleNumber>=2 && roleNumber<5){
//      role.textContent="Junior";
//     }else if(roleNumber<1){
//      role.textContent="Tranee";
//      console.log(roleNumber)
//  }


 let deleteBtn=document.createElement("button");
 deleteBtn.textContent="Delete";
//  deleteBtn.onclick=function(){

//  }


tableRow.append(name,id,specialization,exp,email,mobile,role,deleteBtn);
document.querySelector("tbody").append(tableRow);

 
 


}


