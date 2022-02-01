                    // create user
let createFullName = document.querySelector("#createFullName")
let createUsername = document.querySelector("#createUsername")
let createEmail = document.querySelector("#createEmail")
let createBio = document.querySelector("#createBio")
let createPassword = document.querySelector("#createPassword")
let confrimPassword = document.querySelector("#confrimPassword")

                    // changeUser
let changeFullName = document.querySelector("#changeFullName")
let changeUsername = document.querySelector("#changeUsername")
let changeEmail = document.querySelector("#changeEmail")
let changeBio = document.querySelector("#changeBio")
let currentChangePass = document.querySelector("#currentChangePass")
let changeNewPassword = document.querySelector("#changeNewPassword")
let changePassword = document.querySelector("#changePassword")







let saveBtn = document.querySelector("#save-btn")
let saveChangesBtn = document.querySelector('#save-changes')
let tbody = document.querySelector('tbody')
let btnEdit = document.querySelector('.btn')
let userEdit = document.querySelector('#user-edit')


// databases
let users = window.localStorage.getItem('users')
users = JSON.parse(users) || []



// function createElements(...arr){
//     return arr.map( el => {
//         return document.createElement(el)
//     })
// }



function createUser() {
    if (!(createFullName.value.trim().length < 30 && createFullName.value.trim())) {
        return alert('Wrong Fullname')
    }
    if (!(createUsername.value.trim().length < 30 && createUsername.value.trim())) {
        return alert('Wrong username')
    }
    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(createEmail.value)) {
        return alert('Wrong Email')
    }
    if (!((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(createPassword.value) == (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(confrimPassword.value))) {
        return alert('Wrong password')
    }

    users.push({
        userId: users.length ? +users.at(-1).userId + 1 : 1,
        fullName : createFullName.value,
        username : createUsername.value,
        email: createEmail.value,
        password: createPassword.value,
        date: new Date().toLocaleDateString("en-US"),
        bio: createBio.value

    })
    window.localStorage.setItem('users', JSON.stringify(users))
    createFullName.value = null
    createUsername.value = null
    createEmail.value = null
    createPassword.value = null
    createBio.value = null
}


function renderUsers(users) {
    for (const user of users) {

        let tr = document.createElement('tr')
        tr.innerHTML = `<td class="align-middle">
        <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
          <input type="checkbox" class="custom-control-input" id=${user.userId}>
          <label class="custom-control-label" for=${user.userId}></label>
        </div>
      </td>
      <td class="text-nowrap align-middle">${user.fullName}</td>
      <td class="text-nowrap align-middle"><span>${user.date}</span></td>
      <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-on"></i></td>
      <td class="text-center align-middle">
        <div class="btn-group align-top">
            <button class="btn btn-sm btn-outline-secondary badge edit_btn" type="button" data-toggle="modal" data-target="#user-edit" data-edit="${user.userId}">Edit</button>
            <button class="btn btn-sm btn-outline-secondary badge" type="button"><i class="fa fa-trash"></i></button>
        </div>
      </td>`
        tbody.append(tr)
    }
}



renderUsers(users)
const editBtns = document.querySelectorAll('.edit_btn')
let editedUser


for (const i of editBtns) {
    i.onclick = (e) => {
        console.log(users);
        editedUser = users.find(el => e.target.dataset.edit == el.userId)
        console.log(editedUser);
        // console.log(editedUser.password);

        // if (!(changeFullName.value.trim().length < 30 && changeFullName.value.trim())) {
        //     return alert('Wrong Fullname')
        // }
        // if (!(changeUsername.value.trim().length < 30 && changeUsername.value.trim())) {
        //     return alert('Wrong username')
        // }
        // if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(changeEmail.value)) {
        //     return alert('Wrong Email')
        // }
        // if (!((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(currentChangePass.value) == editedUser.password)) {
        //     return alert('Wrong current password')
        // }
        // if (!((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(changeNewPassword.value) == (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(changePassword.value))) {
        //     return alert('Wrong password')
        // }

        // users[editedUser.userId - 1] = ({
        //     userId: users.Id,
        //     fullName : changeFullName.value,
        //     username : changeUsername.value,
        //     email: changeEmail.value,
        //     password: changeNewPassword.value,
        //     date: new Date().toLocaleDateString("en-US"),
        //     bio: changeBio.value
    
        // })
        // window.localStorage.setItem('users', JSON.stringify(users))


    }
}

function changeUser() {
    if (!(changeFullName.value.trim().length < 30 && changeFullName.value.trim())) {
        return alert('Wrong Fullname')
    }
    if (!(changeUsername.value.trim().length < 30 && changeUsername.value.trim())) {
        return alert('Wrong username')
    }
    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(changeEmail.value)) {
        return alert('Wrong Email')
    }
    // console.log(currentChangePass.value , editedUser.password);
    console.log(editedUser);
    if (!(currentChangePass.value == editedUser.password)) {
        return alert('Wrong current password')
    }
    if (!((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(changeNewPassword.value) == (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(changePassword.value))) {
        return alert('Wrong password')
    }

    users[editedUser.userId - 1] = ({
        userId: editedUser.userId,
        fullName : changeFullName.value,
        username : changeUsername.value,
        email: changeEmail.value,
        password: changeNewPassword.value,
        date: new Date().toLocaleDateString("en-US"),
        bio: changeBio.value

    })
    window.localStorage.setItem('users', JSON.stringify(users))
}
    
// console.log(currentChangePass.value);
// console.log(editedUser.password);



saveBtn.onclick = (event) => {
    event.preventDefault()
    createUser()
    window.location = '/index.html'
}

saveChangesBtn.onclick = (e) =>{
    e.preventDefault()
    console.log("salom");
    changeUser()
}
























