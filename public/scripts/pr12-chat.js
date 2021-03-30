const socket = io('/') // This means your client will always be connected to your server, locally or on Heroku.

const chatBox = document.getElementById('chatBox')
const messageEl = document.getElementById('message')
const user = document.getElementById('user')
const date = new Date() // Date implementation

socket.on('newMessage', data => {
    addMessage(data, false)
})

// Post message to board
const postMessage = () => {
    // Get input values from the page
    const message = messageEl.value.trim()
    const from = user.value


    const data = { message, from }

    // Emit the message
    socket.emit('message', data)

    // Add the message to the page
    addMessage(data, true)

    // Clear input
    messageEl.value = ''
}

// Add message from any user to chatbox, determine if added
// by current user.
const addMessage = (data = {}, user = false) => {
    // Add an li to the page containing the new message
    // Give it the uMessage class if from the current user
    chatBox.innerHTML += `
    <li class="message${user ? ' uMessage' : ''}">
        ${data.from}: ${data.message}
    </li>
    `
}