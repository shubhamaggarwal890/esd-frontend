let count_value = 0;
window.onload = hide_seek;

function increase_counter(){
    // alert(count_value);
    let counter = document.getElementById("count_value");
    counter.innerText = "Count Value "+count_value;
    count_value++;
}

let hide = true;
function hide_seek(){
    let alert_text = document.getElementById("hide_seek");
    if(hide){
        alert_text.style.display = 'none';
    }else{
        alert_text.style.display = 'block';

    }
    hide = !hide;
}
let search = false;
function search_on(){
    let search_input = document.getElementById("search");
    if(search){
        search_input.style.display = 'none';
    }else{
        search_input.style.display = 'block';

    }
    search = !search;
}

let anime_characters = ["Lelouch Lamperouge", "L Lawliet", "Monkey D. Luffy", "Levi Ackerman", "Edward Elric",
"Light Yagami", "Naruto Uzamaki", "Itachi Uchiha", "Ryuk", "Roy Mustang", "Saitama", "Alphonse Elric"]

function search_result(){
    let search_data = document.getElementById("searching").value;
    let search_list = document.getElementById("search_result");
    search_list.innerHTML ='';
    for(let i = 0; i<anime_characters.length; i++){
        if(anime_characters[i].includes(search_data)){
            search_list.innerHTML += '<li class=\"list-group-item\">'+anime_characters[i]+'</li>';
        }
    }



}