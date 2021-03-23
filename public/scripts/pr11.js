const socket = io('/');

socket.on('update-list', () => {
    populateList();
})

const getData = async(url = '') => {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response.json()
}

const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}

const populateList = () => {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = '';

    const data = getData('/pr11/fetchAll');

    data.then(json => {
        json = json.replace(/\[|\]|\"/g, '');
        json = json.split(',');
        console.log(json[1]);
        json.forEach(item => {
            nameList.innerHTML += `<li>${item}</li>`
        })
    }).catch(err => {
        console.log(err, "Hi");
    });
}

const submitName = () => {
    const newName = document.getElementById('newName').value;

    const data = postData('/pr11/insertName', {
        newName: newName
    })

    data.then(response => {
        console.log(response)
        if (response.status == 200) {
            socket.emit('new-name', true);
            location.reload(true);
        } else {
            console.error(status)
        }
    }).catch(err => {
        console.log(err);
    })
}

populateList()