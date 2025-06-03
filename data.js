const numerino = document.getElementById('numerino')
const numerone = document.getElementById('numerone')
const diminuire = document.getElementById('sx')
const aggiungere = document.getElementById('dx')
const azzera = document.getElementById('azzera')
let counterm = 0
let counterbig = 0

function aggiungi (){
counterm++;
counterbig++;

return{
  counterm,
  counterbig
};
}

function diminuisci (){

  counterm++;
  counterbig--;

  if (counterbig<0){
    counterbig=0
  }
  return{
    counterm,
    counterbig
  };
}

diminuire.addEventListener('click', ()=>{
  diminuisci();
  numerino.innerHTML = counterm;
  numerone.innerHTML = counterbig
})

aggiungere.addEventListener('click', ()=>{
  aggiungi();
  numerino.innerHTML = counterm;
  numerone.innerHTML = counterbig
})

azzera.onclick = function azzerare(){
  counterbig =0
  counterm = 0
  numerino.innerHTML = counterm;
  numerone.innerHTML = counterbig
}