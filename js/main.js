const form = document.querySelector('.form');
const nameFirst = document.getElementById('first-name');
const nameLast = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const birthday = document.getElementById('birth-day');
const inputs = document.querySelectorAll('input');

const btnForm = document.getElementById('form-button');

function validate(reg, inp) {
    return reg.test(String(inp));
}
function notvalid(inp) {
    inp.classList.add('invalid');
}
function valid(inp) {
    inp.classList.remove('invalid');
    inp.classList.add('valid');
}

function   howMuchAge(el){
    const birthDay = el.value;
    let fullDate = birthDay.split('-');
    
    const year = parseInt(fullDate[0]);
    const month = parseInt(fullDate[1]) - 1; 
    const day = parseInt(fullDate[2]);

    const currentDate = new Date();

    const age = currentDate.getFullYear() - year;
    return age;
} 


// let count = 0;
// inputs.forEach((inp) => {
//     inp.addEventListener('input', function(){
//         let count = 0;
//         if(inp.classList.contains('valid')){
//             count +=1;
//             console.log(count);
//         }
       
//     })
// })
nameFirst.addEventListener('blur', function(){
    const validName = /^[a-zA-Zа-яА-Я]+$/;
    let name = nameFirst.value;
    if(name.length < 16){
        if (validate( validName, nameFirst.value) ) {
            valid(nameFirst);
        } else {
            notvalid(nameFirst);
            alert('Имя должно содержать только буквы')
        }
    }
    // if(nameFirst.classList.contains('valid')){
    //    count +=1;
    //    console.log(count)
    // }
});
nameLast.addEventListener('blur', function(){
    const validName = /^[a-zA-Z]+$/;
    let lastName = nameLast.value;
    if(lastName.length < 25){
        console.log("lastName");
        if ( validate( validName, nameLast.value) ) {
            valid(nameLast);
        } else {
            notvalid(nameLast);
        }
    }
    // if(nameLast.classList.contains('valid')){
    //     count +=1;
    //     console.log(count)
    //  }

})

email.addEventListener('blur', function(){
    const validateEmail = /^\S+@\S+\.\S+$/;

    if ( validate(validateEmail, email.value) ) {
        valid(email);
    } else {
        notvalid(email);
    }
    // if(email.classList.contains('valid')){
    //     count +=1;
    //     console.log(count)
    //  }
})

password.addEventListener('blur', function(){
    const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;
    if (validate(validPass, password.value)){
        valid(password);
    } else {
        notvalid(password);
    }
});
passwordConfirm.addEventListener('blur', function(){
    const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;
    if (validate(validPass, passwordConfirm.value)){
        valid(passwordConfirm);
        
    } else {
        notvalid(passwordConfirm);
    }
});
function checkPass(){
    if(password.value != passwordConfirm.value){
        console.log('Пароли не совпадают')
        alert('Пароли не совпадают')
    } else{
        console.log('Пароли совпадают')
    }
}

passwordConfirm.addEventListener('blur', checkPass);

birthday.addEventListener('blur', function(){
    let ageUser = howMuchAge(birthday);
    if(ageUser > 18){
            birthday.classList.add('valid');
            // count +=1;
            // console.log( count)   
    } else{
        birthday.classList.add('invalid');
    }
    // if (count == 5){
    //     // console.log('all valid');
    //     btnForm.disabled = "true";
    // } else{
    //       btnForm.disabled = "false";
    //     // console.log('no valid all ')
    // }
});



















// form.addEventListener('submit', function (e) {
//     e.preventDefault();

    // const validName = /^[a-zA-Z]+$/;
    // const validateEmail = /^\S+@\S+\.\S+$/;
    // const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;
    //  /^[a-zA-Z0-9!@#$%^&()-+=]$/;

    // let name = nameFirst.value;
    // let lastName = nameLast.value;
// когда все данные валидные кнопку разблокировать
// вывести подсказку по заполнению данных валидно
    // if(name.length < 16){
    //     console.log("name")
    // }
    //  if(lastName.length < 25){
    //     console.log("lastName")
    // }

    // if(password.value == passwordConfirm.value){
    //     if (validate(validPass, password.value)){
    //         valid(password);
    //         console.log("pass valid")
    //     } else {
    //         notvalid(password);
    //         console.log("pass novalid")
    //     }
    // } else{
    //     console.log("two pass no")
    // }
    // if ( validate( validName, nameFirst.value) ) {
    //     valid(nameFirst);
    // } else {
    //     notvalid(nameFirst);
    // }
    // if ( validate( validName, nameLast.value) ) {
    //     valid(nameLast);
    // } else {
    //     notvalid(nameLast);
    // }

    // if ( validate(validateEmail, email.value) ) {
    //     valid(email);
    // } else {
    //     notvalid(email);
    // }
   
// valid pass?
 

//    if(){
//     btnForm.disabled = "true";
//    }
// });


