

const signup=document.getElementById("signup");
const login=document.getElementById("login");

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
console.log(password);
console.log(phone)


}


login.addEventListener("click",e=>{
   e.preventDefault();
loginField.classList.toggle("show-login");




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

// const createHospital=async()=>{


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

    console.log(hospitalName);

    createH.addEventListener("click",e=>{
        e.preventDefault();
        console.log("hello");  
    })

//     const data=await (await fetch("https://mdbackend.herokuapp.com/api/create-hospital",{method:"POST",headers:{"Accept":"application/json"},body:formF})).json();
//     console.log(data)
// }

// signup.addEventListener("click",e=>{
//     e.preventDefault();
//     createHospital();

// })