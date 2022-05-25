const si = document.getElementById('id_sizes')
const cl_wd = document.getElementById('id_cloth_width')
const cl = document.getElementById('id_cloth')
const dub = document.getElementById('id_dublerin_cons')
const fli = document.getElementById('id_flizelin_cons')
const col = document.getElementById('id_colors')
const cl_cn_cm = document.getElementById('id_cloth_cons_comm')
const cl_cn_ft = document.getElementById('id_cloth_cons_fact')

var List = [si,cl_wd,cl,dub,fli,col,cl_cn_cm,cl_cn_ft]

window.onload = Hide()


function Hide(){
    for(var i=0;i<List.length;i++){
        if(List[i].innerHTML == 'None'){
            List[i].innerHTML = ''
        }
    }
}
