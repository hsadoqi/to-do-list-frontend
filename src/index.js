const form = document.getElementById('listForm')
const listUrl = `http://localhost:3000/lists`

form.addEventListener("submit", submitForm)

function submitForm(){
    event.preventDefault()
    const input = document.getElementById('listName').value

    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json', 
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({list: {name: input}})
    }

    fetch(listUrl, options)
    .then(res => res.json())
    .then(listObj => renderList(listObj.data))
}

function renderList(list){
    const div = document.getElementById('listContainer')
    const pTag = document.createElement('p')
    pTag.innerText = list.attributes.name
    div.appendChild(pTag)
}

function fetchLists(){
    fetch(listUrl)
    .then(res => res.json())
    .then(lists => lists.data.forEach(renderList))
}

fetchLists()