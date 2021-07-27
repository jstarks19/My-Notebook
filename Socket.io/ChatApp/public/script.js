const socket = io();


const nameContainer = document.querySelector('.name-container');
const nameBtn = nameContainer.children[2];

nameBtn.addEventListener('click', e=>{
    socket.emit('login', nameContainer.children[1].value);
    nameContainer.children[1].value = '';
    nameContainer.remove();
});

function submitName(e) {
    e.preventDefault();
    const inputData = document.querySelector('.chat-input');
    socket.emit('chat', inputData.value);
    inputData.value = '';
}

// const chatForm = document.querySelector('.chat-form');
// chatForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const inputData = document.querySelector('.chat-input');
//     socket.emit('chat', inputData.value);
//     inputData.value = '';
// });


socket.on('chat', message => {
    let re = /^(\w+)::(.+)/;
    if (re.test(message)) {
        let groups = re.exec(message);
        let chatBubble = document.createElement('div');
        chatBubble.classList.add('chat-bubble');
        let span = document.createElement('span');
        span.innerText = `${groups[1]} : ${groups[2]}`;
        chatBubble.append(span);
        document.querySelector('.chat-window').append(chatBubble);
    }
})

socket.on('success', message => {
    console.log(message);
    let chatForm = document.createElement('form');
    chatForm.classList.add('chat-form');
    chatForm.classList.add('name-container');
    let inpLabel = document.createElement('label');
    inpLabel.for = 'chat-input';
    let inp = document.createElement('input');
    inp.type = 'text';
    inp.id = "chat-input";
    inp.classList.add('chat-input');
    let btn = document.createElement('input');
    btn.type = "submit";
    btn.classList.add('chat-submit');
    btn.value = "Send Message";

    chatForm.append(inp, btn);
    chatForm.addEventListener('submit', submitName);
    document.querySelector('#chat-container').append(chatForm);
})





// '
// <form action="" class="chat-form">
// <label for="message" class="chat-label-input">Enter a Message:</label>
// <input type="text" id="message" class="chat-input">
// <input type="submit" class="chat-submit" >
// </form>
// '