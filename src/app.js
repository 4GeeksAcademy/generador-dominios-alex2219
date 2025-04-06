let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let pro of pronoun){
  for(let ad of adj){
    for(let nou of noun){
      console.log(`${pro}${ad}${nou}.com`);
    }
  }
}

// thegreatjogger.com
// thegreatracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com
// ourbigracoon.com