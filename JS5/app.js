let btn =document.getElementById('btn')

btn.onclick = function () {

    let  div = document.createElement('div');
    let container = document.querySelector('.container')
    container.appendChild(div);
    div.setAttribute('class','list')
    let h1 = document.createElement('h1');
    div.appendChild(h1);
    let icon = document.createElement('i');
    div.appendChild(icon);
    icon.setAttribute('class','fa-solid fa-trash-can')
    let inputVal = document.getElementById('input').value;
    h1.innerHTML = inputVal;

    icon.onclick = function () {
        icon.parentElement.remove();
    }

}

window.oncontextmenu = function(){
    return false;
}