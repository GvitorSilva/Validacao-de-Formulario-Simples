function valida(){
    var nome = document.getElementById('nome');

    if(nome.value == ""){
        alert("Campo nome não pode estar em branco");
    }
    else {
        alert("Nenhuma problema foi detectado, seu formulário pode ser enviado com sucesso");
    }
    
}

/* alert(nome.value);*/