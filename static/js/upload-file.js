const actualBtn = document.getElementById('btn-upload');

const fileChosen = document.getElementById('file-chosen');
const fileChosen1 = document.getElementById('file-chosen1');
const fileChosen2 = document.getElementById('file-chosen2');
const fileChosen3 = document.getElementById('file-chosen3');
const fileChosen4 = document.getElementById('file-chosen4');
const fileChosen5 = document.getElementById('file-chosen5');
const fileChosen6 = document.getElementById('file-chosen6');
const fileChosen7 = document.getElementById('file-chosen7');
const fileChosen8 = document.getElementById('file-chosen8');
const fileChosen9 = document.getElementById('file-chosen9');
const fileChosen10 = document.getElementById('file-chosen10');
const fileChosen11 = document.getElementById('file-chosen11');

actualBtn.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name
    fileChosen1.textContent = this.files[1].name
    fileChosen2.textContent = this.files[2].name
    fileChosen3.textContent = this.files[3].name
    fileChosen4.textContent = this.files[4].name
    fileChosen5.textContent = this.files[5].name
    fileChosen6.textContent = this.files[6].name
    fileChosen7.textContent = this.files[7].name
    fileChosen8.textContent = this.files[8].name
    fileChosen9.textContent = this.files[9].name
    fileChosen10.textContent = this.files[10].name
    fileChosen11.textContent = this.files[11].name
})