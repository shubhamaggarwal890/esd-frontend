window.onload = loopThroughList;

function loopThroughList(){
    let lists = document.getElementById("user_list");

    let usernames = ["ClarkKent", "BruceWayne", "BarryAllen", "VictorStone", "HalJordan"];
    let colors = ["#007bff", "#5f2013", "#c2c428", "#c428b1", "#57c428"];
    for (let i = 0 ; i<usernames.length; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'media text-muted pt-3');
        const svg = document.createElement("svg");
        svg.innerHTML = '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg"\n' +
            '                 preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">\n' +
            '                <title>Placeholder</title>\n' +
            '                <rect width="100%" height="100%" fill="'+colors[i]+'"/>\n'+
            '            </svg>\n';

        div.appendChild(svg);
        const para = document.createElement("p");
        para.innerHTML = '<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">\n' +
            '                <strong class="d-block text-gray-dark">@'+usernames[i]+'</strong>\n' +
            '                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n' +
            '                condimentum nibh, ut fermentum massa justo sit amet risus.\n' +
            '            </p>\n';
        div.appendChild(para);
        lists.appendChild(div);
    }


}