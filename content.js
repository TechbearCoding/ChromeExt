console.log("test message");

let parag = document.getElementsByTagName('p');

for(elt of parag){
    elt.style['background-color'] = '#FF00FF';
}