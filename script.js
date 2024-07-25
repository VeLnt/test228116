document.getElementById('showMessageButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
});
