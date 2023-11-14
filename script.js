function openPopup() {
    document.getElementById('myPopup').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('myPopup').style.display = 'none';
  }


  function preencherEndereco(json){
    if(json.logradouro){
        document.querySelector('input[name=rua]').value = json.logradouro;
        document.querySelector('input[name=bairro]').value = json.bairro;
        document.querySelector('input[name=cidade]').value = json.localidade;
        document.querySelector('input[name=estado]').value = json.uf;
    
    }
  }


  function buscaCEP(){
    const cep = document.querySelector("input[name=cep]");
    const value = cep.value.replace(/[^0-9]+/,'');
    const url = `https://viacep.com.br/ws/${value}/json/`;


    fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(preencherEndereco);

  }
  

function valorTotal(){
  var pizzaPequena = parseFloat(document.getElementById('quantidadePizzaPequena').value)* 39.9;
  var pizzaMedia = parseFloat(document.getElementById('quantidadePizzaMedia').value)* 55.2;
  var pizzaGrande = parseFloat(document.getElementById('quantidadePizzaGrande').value)* 75.9;
 
  var valor = document.getElementById('valorTotal').textContent = pizzaPequena + pizzaMedia + pizzaGrande;
}