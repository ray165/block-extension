document.addEventListener('DOMContentLoaded', () => {
    let name = document.getElementById("nameToBlock").value
    let reason = document.getElementById("descriptionWhy").value
    
    var submitBlockBtn = document.getElementById('submitBlock')
    submitBlockBtn.addEventListener('click', () => {
        console.log("user is blocked")
        setData(document.getElementById("nameToBlock").value, document.getElementById("descriptionWhy").value)
    })

    var searchBtn = document.getElementById('searchBtn')
    searchBtn.addEventListener('click', () => {
        console.log("running search")
        findData(String(document.getElementById("nameToBlock").value))
    })
})


function setData(name, reason) {
    chrome.storage.local.set({
        name: reason
    }, () => {
        console.log("succesfully sent: " , name ," and ", reason)
    })
}

function findData(name) {
    chrome.storage.local.get(name, (result) => {
        console.log(result[name])
        document.getElementById("descriptionWhy").value = result[name];
    })
}
