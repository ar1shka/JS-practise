let buttonEnter = document.getElementById('enter')
let userInput = document.getElementById('userInput')
let ul = document.querySelector('ul')
let a;
let str;

function inputLength() {
    if( userInput.value > " ")
    
    return userInput.value.length > 0 

    else  userInput.value = ""
}

function elem() {
    
    a = userInput.value.length
    str=""
    for (let i=0; i<a; i++) {
         str = str + " "
    }
    if (userInput.value == str) return 0
    else return 1
}

function createTodo() {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(userInput.value))
    ul.appendChild(li)
 
 
    userInput.value = ""

    let deleteButton = document.createElement('button')
    deleteButton.appendChild(document.createTextNode('X'))
    li.appendChild(deleteButton)
    deleteButton.addEventListener('click', deleteTodoItem)




    function deleteTodoItem() {
        li.classList.add('delete')     
    }

    li.onclick = function() {
        li.classList.add('done')
    }

    buttonEnter.onclick = function() {
        if(inputLength()) {
            createTodo()
        }
    }
    
}

 

function changeListAfterKeypress(event){
    if (inputLength() && event.which === 13){
        createTodo()
    }
}



buttonEnter.addEventListener('keypress', changeListAfterKeypress)
userInput.addEventListener('keypress', changeListAfterKeypress)