function onAddHobbyButtonClicked() {
    let newHobby = document.createElement("li");
    newHobby.textContent = hobbyTextInput.value;
    myHobbyList.appendChild(newHobby);
    hobbyTextInput.value = "";
}

window.onload = function () {
    hobbyTextInput = document.getElementById("hobbyTextInput");
    myHobbyList = document.getElementById("myHobbyList");
    document.querySelector('#hobbyTextInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          onAddHobbyButtonClicked();
        }
    });
}