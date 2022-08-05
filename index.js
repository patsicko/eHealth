

const signup=document.getElementById("signup");
const login=document.getElementById("login");
console.log(login)

const main=document.getElementById("main");

const dashboard=document.getElementById("dashboard");
const loginField=document.getElementById("login-field");
const  loginButton=document.getElementById("login-button");
const createHospital=document.getElementsByClassName("create-hospital")[0];
const container=document.getElementById("container");
console.log(container);




// const message=JSON.stringify({"phone":"0785189326","password":"12345678"});
const header={"Accept":"application/json"};



// formData.append("phone","0785189326");

// formData.append("password","12345678");
// const message=JSON.stringify({"phone":phone.value,"password":password.value});

const log=async()=>{
 const phone=document.getElementById("phone").value;
const password=document.getElementById("password").value;
const formData=new FormData();
formData.append("phone",phone);
formData.append("password",password);


try{
    const data=await (await fetch("https://mdbackend.herokuapp.com/api/authenticate",{method:"POST",headers:header,body:formData})).json();
    console.log(data);
if(data.message=="success"){
    
    main.classList.toggle("hide-main");
    dashboard.classList.toggle("show-dashboard");
}
}catch(error){
console.log(error);
}



}


login.addEventListener("click",e=>{
   e.preventDefault();
loginField.classList.toggle("show-login");
console.log("helloooo");




})

loginButton.addEventListener("click",e=>{
    e.preventDefault();
    log();
     
})

localStorage.setItem("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzRjMGRmYzQ0YTY2YzYyZDU4ZDBmNDJlMmQ3NWYxYWVkMGNkMjlhZDBmMjMxODhiY2RlMTZmNjBiYjBjMmI5OGQ0YjQ0ZjdkMmM1MzYyMWEiLCJpYXQiOjE2NTkzODA3MDMsIm5iZiI6MTY1OTM4MDcwMywiZXhwIjoxNjkwOTE2NzAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dkxiUSGUeIGVRziGDW3URSXwMVjQdkV6FM3kf5YwGRcGyKOkAwyiEa3_hAs7nWx-Dm1e0votwJgfgTxrghXwAPPOHSUf_cgr-lCz65XRPhagK7cXvaDJRGaKcHCM4hhpYvs05gB0vWlBP3k1ob4WAkOT0h4jp26kq0JQ_VysMMDtPuqheOWX_eyM6pilsE1ye3kciPYeNiSaku3Y55IDz78D7HZv0BEiOj_RFqvQzeTQ-kKrOkoLsGIBwl-cOVxffhAyDyRq9Hy_QXIevqYB_Dy8GYp4Iz_kYG-4TFxm1CETuxcfOtgi5cCuJp_enS6tfdmZCln-GQ40iV7-lgwrlO9QcrfTnOMsyCm_4jW3KoCMbtGv63WIyOmqBvjLvkKcz4RTeVXova3_d-rOW48nE4ecLO3CHWG-J6AFdMx62vAlhIg-CxKPdq8jgjHBIysY29eVFFbvKV3v44oDz27gVpgbWbR5-5jlmTc0Ro1YjUW9e4O6HT0dHnlJfi2YteJ5gwy_QSDlRG1XXNRZj8O13oNs3DIETCbsH3qDT46apsV7a-vgZ-yYJ-UhKUVbmatlPCte2wR9VC5-bS71QTiu1zOCCextyLAIPXAlLEmbaN7H-GGuAyivnSTWVSRBi97733dCHMZ6oRthek7ZV82JChxMvBiZ_41xelC74fhN454")





const hospital=document.getElementsByClassName("hospital")[0];
const hospitals=document.getElementsByClassName("hospitals")[0];
const hideHospitals=document.getElementsByClassName("fa-x")[0];


hospital.addEventListener("click",e=>{
hospitals.classList.toggle("show-hospital");
})

hideHospitals.addEventListener("click",e=>{
    hospitals.classList.toggle("show-hospital");
})

createHospital.addEventListener("click",e=>{
container.classList.toggle("show-container");
hospitals.classList.toggle("hide-hospitals");
console.log("this is container");
})

const hospitalData=async()=>{


    const hospitalName=document.getElementById("hname");
    console.log(hospitalName)
    const code=document.getElementById("code").value;
    const type=document.getElementById("type").value;
    const district=document.getElementById("district").value;
    const sector=document.getElementById("sector").value;
    const cell=document.getElementById("cell").value;
    const village=document.getElementById("village").value;
    const email=document.getElementById("email").value;
    const createH=document.getElementById("create");

   const formData=new FormData();
 formData.append("names",hospitalName);
   formData.append("code",code);
   formData.append("type",type);
   formData.append("district",district);
   formData.append("sector",sector);
   formData.append("cell",cell);
   formData.append("village",village);
   formData.append("email",email);
  
    // const data=await (await fetch("https://mdbackend.herokuapp.com/api/create-hospital",{method:"POST",headers:{"Accept":"application/json"},body:formF})).json();
const data=await (await fetch("https://mdbackend.herokuapp.com/api/create-hospital",{method:"POST",headers:{"accept":"application/json","Authorization":`Bearer  ${localStorage.getItem("token")}`},body:formData})).json();

console.log(data);


   
}


createH.addEventListener("click",e=>{
    e.preventDefault();
    hospitalData();
    createH.classList.toggle("hide-createH");
    listH(); 
})

localStorage.setItem("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTIyYjQ1NjdjODcxMDQzNGI1ZTU0NzE0NzM1YmZlMzc5NDNkMWZiYmQ3NGNlMTczODhiZTgwYjI5ODUxNDMzOTQwNjYyMDVhN2Y5M2VlOGIiLCJpYXQiOjE2NTk2NjgwMzMsIm5iZiI6MTY1OTY2ODAzMywiZXhwIjoxNjkxMjA0MDMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kkcmv7e136vEfZuoeCgVgvL2B5e-73SQD9BQxw1n7r7ogOQk4R2Hwm2yuzs5Nbt21NgYG7hKSRc1NwLQLI52uqrncM1wzpYMsuNBAWKf-D9zMQNpxOmTzUljFECbN_spoqT4CDUExQ-PiT7mCM6MAOmE0cdBqcoiG8aj63f1uTxRalM6gZhfdeJtgXf7ZwhCYkmWArW9q7lbFxgczF34L9nreB_4TnuffNSPCwgVEt1YZkrcfJUdCMb7i7G4r7VejMW9rLHSHhc-wNma5kxVZzM0i9KKN9C0LFu5dNhvNvLt4CDgTCqzxOqjIjNH5FIGx2BFkN1jaAU0Z8q9TaABLFm2yA3_lPVc46xOif3a8RnKQUT7MB206I9hzdarrKdqZs31kHV4qTTE8_Z8ZnVQ9Qkj5CkLAB5HHn8TAS5N5-qWW0HnwQi2THlnFCevqYjN1VrfIwfcEXpYckUpaf6q30l1dTASTKbShsJpt1rWRMQTC8KvwQkX5MNnfkeIcewBOEeffnWbjo6z8pCOr_Pw-EDqy8bMu_y7iqd4fNcjS8AfQzz04AeVuwpMsmXVHOb2Vd7gGmRDrq8joRVTZ4zr1BhmQpIaM8tRzFPtTiGBkhvrP3Mvj-HDclHhw1z7RsuLrQiUCKUN4XpH4CT7QpS8FnLfOe1oL--Nla3jFnyv4lg")


const listH=async()=>{
    const data=await (await fetch("https://mdbackend.herokuapp.com/api/hospitals")).json();
   
const hdata=data.data;
console.log(hdata);

hdata.map(item=>{
    
    for(key in item){container.innerHTML+=`<br> ${key}:${item[key]}` } 
})}

