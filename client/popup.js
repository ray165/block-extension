document.addEventListener('DOMContentLoaded', () => {
    var submitBlockBtn = document.getElementById('submitBlock')
    submitBlockBtn.addEventListener('click', () => {
        console.log("user is blocked")
        alert("ok but this works?")
        let name = document.getElementById("nameToBlock").value
        let reason = document.getElementById("descriptionWhy").value
        setData(name, reason)
    })

    var searchBtn = document.getElementById('searchBtn')
    searchBtn.addEventListener('click', () => {
        console.log("running search")
    })
})


function setData(name, reason) {
    chrome.storage.sync.set({
        name: reason
    }, () => {
        console.log("succesfully sent: ", name, " and ", reason)
    })
}