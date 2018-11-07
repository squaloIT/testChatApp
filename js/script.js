window.onload = function (){
    $.ajax("json/conversations.json", {
        method:"GET",
        dataType: "json",
        success: function(conversations){
            console.log(conversations);
            var chatPerson = document.querySelector("#chatting");
            conversations.forEach (function(message){
                chatPerson.innerHTML += `<div class="personname">
                <img src="${message.src}">
                <div class="test">
                    <p class="name">${message.name}</p>
                    <span class="status">${message.status}</span>
                </div>
                </div>
                `;
            })

        },
        error: function (_err){
            console.error(_err);
        }
    })
    // Uraditi prikaz poruka
}