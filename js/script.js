const link = document.getElementsByTagName('a')
const cont = document.getElementById('links')
cont.addEventListener('click', checkProtocol)
function checkProtocol (event) {
    if(event.target.href.indexOf('https') === -1 || event.target.href.indexOf('http') === -1) {
        event.preventDefault();
        event.target.href = 'https://' +event.target.attributes.href.value;     
    } else {
    this.click()
}
}