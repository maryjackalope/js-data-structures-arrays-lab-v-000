// Write your solution here!

const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function removeLastDriver(){
  drivers.slice(-1)
}

function removeFirstDriver(){
  drivers.slice(1)
}
