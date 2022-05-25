const id_dublerin = document.getElementById('id_dublerin_cons')
const id_flizelin = document.getElementById('id_flizelin_cons')
const id_furniture = document.getElementById('id_furniture')
const id_proccesing = document.getElementById('id_proccesing')
const id_desc = document.getElementById('id_desc')
const id_colors = document.getElementById('id_colors')
const id_cloth_fact = document.getElementById('id_cloth_cons_fact')
const id_cloth_comm = document.getElementById('id_cloth_cons_comm')


const dublerin = document.getElementById('dublerin')
const flizelin = document.getElementById('flizelin')
const furniture = document.getElementById('furniture')
const proccesing = document.getElementById('proccesing')
const desc = document.getElementById('desc')
const colors = document.getElementById('colors')
const cloth_fact = document.getElementById('cloth_fact')
const cloth_comm = document.getElementById('cloth_comm')
var EmList = [dublerin,flizelin,furniture,proccesing,desc,colors,cloth_fact,cloth_comm]
var List = [id_dublerin,id_flizelin,id_furniture,id_proccesing,id_desc,id_colors,id_cloth_fact,id_cloth_comm]

window.onload = HideFunc()

function HideFunc(){
    for(var i=0; i<List.length;i++){
        if(List[i].value == ''){
            for(var j=0; j<EmList.length; j++){
                if(EmList[j].contains(List[i])){
                    EmList[j].style.display = 'none'
                }
            }
        }
    }
}





function open_desc(){
    document.getElementById('desc').style.display = '';
}
function delete_desc(){
    document.getElementById('desc').style.display = 'none';
    document.getElementById('id_desc').value = '';
}



function open_dublerin(){
    document.getElementById('dublerin').style.display = '';
}
function delete_dublerin(){
    document.getElementById('dublerin').style.display = 'none';
    document.getElementById('id_dublerin_cons').value = '';
}



function open_flizelin(){
    document.getElementById('flizelin').style.display = '';
}
function delete_flizelin(){
    document.getElementById('flizelin').style.display = 'none';
    document.getElementById('id_flizelin_cons').value = '';
}



function open_furniture(){
    document.getElementById('furniture').style.display = '';   
}
function delete_furniture(){
    document.getElementById('furniture').style.display = 'none';
    document.getElementById('id_furniture').value = '';
}



function open_proccesing(){
    document.getElementById('proccesing').style.display = '';
}
function delete_proccesing(){
    document.getElementById('proccesing').style.display = 'none';
    document.getElementById('id_proccesing').value = '';
}



function open_colors(){
    document.getElementById('colors').style.display = ''
}
function delete_colors(){
    document.getElementById('colors').style.display = 'none';
    document.getElementById('id_colors').value = '';
}


function open_cloth_fact(){
    document.getElementById('cloth_fact').style.display = '';
}
function delete_cloth_fact(){
    document.getElementById('cloth_fact').style.display = 'none';
    document.getElementById('id_cloth_cons_fact').value = '';
}


function open_cloth_comm(){
    document.getElementById('cloth_comm').style.display = '';
}
function delete_cloth_comm(){
    document.getElementById('cloth_comm').style.display = 'none';
    document.getElementById('id_cloth_cons_comm').value = '';
}

