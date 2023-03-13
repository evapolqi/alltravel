function getCard() {
    let save = localStorage.getItem('basket');
    if(save !== null) {
        return JSON.parse(save);
    }
    return [];
}
function putCard(id) {
    let send = this.getCard();
    let pushCard = false;
    let index = send.indexOf(id);
    if(index === -1) {
        send.push(id);
        pushCard == true;
    } else {
        send.splice(index, 1);  
    }
    localStorage.setItem('basket', JSON.stringify(send));
    return {
        pushCard,
        send
    }
}