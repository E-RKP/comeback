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


let registro = [

  {
    name: 'Paolo',
    username: 'Skril',
    mail: 'paolo@paolo.com',
    tempo: 2,
    pass: 'veevneiKCI1',
    isLogged: false
  },

   {
    name: 'Luca',
    username: 'Eskghere',
    mail: 'dancing@hoy.com',
    tempo: 1,
    pass: 'vdenie',
    isLogged: true
  },

   {
    name: 'Mariella',
    username: 'marixx',
    mail: 'maropos@kk.com',
    tempo: 5,
    pass: 'vnevonovehs88',
    isLogged: false
  },


   {
    name: 'Ernesto',
    username: 'sabaody',
    mail: 'ern@roti.com',
    tempo: 1,
    pass: 'snjso77',
    isLogged: true
  }
]
function registrazione (nome, nutente, passwor, mailo){

  let newutente = {
    name: nome,
    username: nutente,
    mail: mailo,
    tempo: 0,
    pass: passwor,
    isLogged: true
  }
  
  for (i=0; i<registro.length;i++){
    if (registro[i].username === newutente.username){
      return 'utente già registrato'
    }
  }

  registro.push(newutente)
}

registrazione('Luke', 'Dustl', 'wincwicn88A', 'dustin@dustin');
console.log(registro)

function signIn(nomeutente, passwar){

  for (i=0; i<registro.length;i++){
    if (nomeutente === registro[i].username && passwar === registro[i].pass ){
      console.log('Sei dentro!') 
      return;
    }
  }
  console.log('utente o password sbagliati')
}

signIn('Dustl', 'wincwicn88A');

let giocoSCF = {

  gioca: function (mossagiocatore){

    let mossacomputer = ''
    let numbercasual = Math.floor(Math.random()*(4-1)+1)
    if (numbercasual === 1){
      mossacomputer = 'sasso'
    }else if (numbercasual === 2){
      mossacomputer = 'forbici'
    }else{
      mossacomputer = 'carta'
    }

    if (mossagiocatore === 'sasso' && mossacomputer === 'sasso'){
      console.log('Pareggio')
      return;
    }else if(mossagiocatore === 'sasso' && mossacomputer === 'forbici'){
      console.log('hai vinto')
      return;
    }else if(mossagiocatore === 'sasso' && mossacomputer === 'carta'){
      console.log('hai perso')
      return;
    }
  }

 
}

giocoSCF.gioca('sasso');