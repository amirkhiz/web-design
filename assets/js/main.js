document.getElementById('butto0n').addEventListener('click', function () {
    document.querySelector('.bg-model').style.display = 'flex';
});

document.getElementById('close').addEventListener('click', function () {
    document.querySelector('.bg-model').style.display = 'none';
});

document.getElementById('join').addEventListener('click', function () {
    document.querySelector('.modeljoin').style.display = 'flex';
});
document.getElementById('tabcloser').addEventListener('click', function () {
    document.querySelector('.modeljoin').style.display = 'none';
});