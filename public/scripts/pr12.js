const socket = io('/pr12') // This means your client will always be connected to your server, locally or on Heroku.

const errorContainer = document.getElementById('errMsg')
const usernameInput = document.getElementById('username')
const date = new Date()

// A simple async POST request function
const getData = async(url = ' ') => {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response.json()
}

// A simple async POST request function
const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

// Login user to access chat room.
const login = async() => {
    // Get the username from our input
    const username = usernameInput.value

    // Do some simple validation on the client-side
    errorContainer.innerHTML = ''
    if (!username || username.trim() === '') {
        errorContainer.innerHTML = 'Username cannot be empty!'
        return
    }

    // Get JSON data from the server
    const data = await postData('/pr12/login', {
        username
    })

    // Check for errors
    if (data.error) {
        errorContainer.innerHTML = data.error
        return
    }

    // No errors, emit a newUser event and redirect to /chat
    socket.emit('newUser', username)
    window.location = '/pr12/chat'
}