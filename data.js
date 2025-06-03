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

let fatturazione = {

  fattura: [
  
    {
    nome: 'Luca',
    fatture: [[100, 'sport'], [300, 'sport'], [200, 'atttività']]
  },

  {
    nome: 'Paolo',
    fatture: [[400, 'sport'], [500, 'sport'], [50, 'atttività']]
  },

  {
    nome: 'Marielene',
    fatture: [[20, 'sport'], [100, 'sport'], [150, 'atttività']]
  },

  {
    nome: 'Fabio',
    fatture: [[10, 'sport'], [30, 'sport'], [20, 'atttività']]
  }],

  aggiungiFatture: function(nomecliente, fatt){

    let okk = fatturazione.fattura
    for (i=0; i<okk.length;i++){
      if (nomecliente === okk[i].nome){
        okk[i].fatture.push(fatt)
      }
    }
  }
}

fatturazione.aggiungiFatture('Fabio', [400, 'sport'])
console.log(fatturazione)


let contoBancario = {

  clienti: [
    {
    nome: 'Nei',
    saldo: 100,
    movimenti: []
  },

   {
    nome: 'Mark',
    saldo: 10000,
    movimenti: []
  },

   {
    nome: 'Zest',
    saldo: 200,
    movimenti: []
  },

   {
    nome: 'Paul',
    saldo: 10,
    movimenti: []
  },
],

versa: function(name, importo){

  if (importo <0){
    console.log('inserire cifra valida')
    return; 
  }
  for (i=0; i<this.clienti.length;i++){
    if (this.clienti[i].nome === name){
      this.clienti[i].saldo = this.clienti[i].saldo+importo
      this.clienti[i].movimenti.push('+'+importo)  
    }
  }
},

preleva: function(name, importo){
  for (i=0; i<this.clienti.length;i++){
    if (this.clienti[i].nome === name && ((this.clienti[i].saldo)-(importo)>=0)){
      this.clienti[i].saldo = this.clienti[i].saldo-importo
      this.clienti[i].movimenti.push('-'+importo)
    }
  }
},

storico: function(name){
  for (i=0; i<this.clienti.length;i++){
    if (this.clienti[i].nome === name){
      console.log(this.clienti[i].movimenti.join(', '))
    }
  }
}
}

contoBancario.versa('Paul', 100)
contoBancario.preleva('Paul', 100)
contoBancario.storico('Paul')
console.log(contoBancario.clienti)

