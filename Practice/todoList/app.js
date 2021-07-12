

$(function() {
let buttonEnter = $('#enter')
let userInput = $('#userInput')
let ul = $('ul')
let localStorage = window.localStorage
let todoMap = [
    {
        ind: 1,
        text: 'example'
    }
]


function inputLength() {   
    return !!userInput.val();
}

function createTodo() {
    let li = $("<li>")
    li.append(document.createTextNode(userInput.val()))
    ul.append(li)
    todoMap.push({
        ind: todoMap.length + 1,
        text: userInput.val()
    })
    localStorage.setItem( 'Todo_list', JSON.stringify(todoMap))
    soundAdd()
    userInput.val('')

    let deleteButton = $('<button>')
    deleteButton.append(document.createTextNode('X'))
    li.append(deleteButton)
    deleteButton.click(deleteTodoItem)

    li.click(() => {
        
        li.toggleClass('done');
        soundCheck()
        fadeOut(100)
    });


    function deleteTodoItem() {
        li.fadeOut(1000)
        li.classList.add('delete') 
        
    }
    
}

function changeListAfterKeypress(event){
    if (inputLength() && event.which === 13) {
        createTodo()
        
    }
}
buttonEnter.click(function() {
        if(inputLength()) {
            createTodo()
        }
    });

function soundAdd() {
    var audio = new Audio(); 
    audio.src = 'https://zvuki.top/wp-content/uploads/2021/04/zvukovoy-effekt-multiashnogo-nagatiya.mp3'; 
    audio.autoplay = true; 
}

function soundCheck() {
    var audio = new Audio(); 
    audio.src = 'https://zvukhub.ru/upload/iblock/882/8823df8670d0911e267b07ea9ab7d716.mp3'; 
    audio.autoplay = true; 
}
userInput.keypress(changeListAfterKeypress)
})