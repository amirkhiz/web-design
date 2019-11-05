document.getElementById('btn-open').addEventListener('click', function () {
    document.querySelector('.bg-model').style.display = 'flex';
});

document.getElementById('close').addEventListener('click', function () {
    document.querySelector('.bg-model').style.display = 'none';
});

document.getElementById('join').addEventListener('click', function () {
    document.querySelector('.model-join').style.display = 'flex';
});
document.getElementById('tab-closer').addEventListener('click', function () {
    document.querySelector('.model-join').style.display = 'none';
});