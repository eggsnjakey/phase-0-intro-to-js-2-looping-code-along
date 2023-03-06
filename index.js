function writeCards(name,surprise){
    const messages=[];
    for (let i=0; i < name.length; i++){
        messages[i]=`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`
    }
    return messages;
    
}
function countDown(number){
    while (number >= 0){
        console.log(number--);
    }
}
    



