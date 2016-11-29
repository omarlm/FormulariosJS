expNum = /^[0-9]+$/;
expLetras = /^[a-zA-Z]+$/;
expNumLetras = /^[a-z\d_]+$/;
expCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

function validate1(form1) {
    var num = document.getElementById('numbers').value;
    var letter = document.getElementById('letters').value;
    var numlet = document.getElementById('num_let').value;
    if ((num.trim() === "") || (letter.trim() === "") || (numlet.trim() === "")) {
        message("* Los campos no pueden estar vacíos");
        return false;
    } else if (!expNum.test(num)) {
        message('* Error, campo Numbers, solo puede llevar números.');
        return false;
    } else if (!expLetras.test(letter)) {
        message('* Error, campo Letters, solo puede llevar letras.');
        return false;
    } else if (!expNumLetras.test(numlet)) {
        message('* Error, campo Letters y Numbers, solo puede llevar números o letras');
        return false;
    }
    message('¡Todo correcto! :)');
    return false;
}


function message(msg) {
    var fmr1 = document.getElementById('form1');
    var div = document.createElement('div');
    div.setAttribute('div', 'messages')
    var p = document.createElement('p');
    var msgError = document.createTextNode(msg);
    p.appendChild(msgError);
    div.appendChild(p);
    fmr1.appendChild(div);
}

function validate2(form1) {
    var num = document.getElementById('numbers').value;
    var letter = document.getElementById('letters').value;
    var numlet = document.getElementById('num_let').value;

    var valNum = document.getElementById('valNum');
    var valLet = document.getElementById('valLet');
    var valNumLet = document.getElementById('valNumLet');

    if ((num.trim() === "") || (!expNum.test(num))) {
        valNum.innerHTML = "* El campo no puede estar vacío y solo admite números.";
        valNum.style.color = "#FA5858";
        return false;
    } else {
        valNum.innerHTML = "";
    }

    if ((letter.trim() === "") || (!expLetras.test(letter))) {
        valLet.innerHTML = "* El campo no puede estar vacío y solo admite letras.";
        valLet.style.color = "#FA5858";
        return false;
    } else {
        valLet.innerHTML = "";
    }

    if ((numlet.trim() === "") || (!expNumLetras.test(numlet))) {
        valNumLet.innerHTML = "* El campo no puede estar vacío y solo admite números y letras.";
        valNumLet.style.color = "#FA5858";
        return false;
    } else {
        valNumLet.innerHTML = "";
    }
}



function validate3(formulario) {
    
}



$(document).ready(function() {
    Materialize.updateTextFields();
});
