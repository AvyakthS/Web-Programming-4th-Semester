// Attach an event listener to action button
const actionBtn = document.getElementById('actionBtn');
const listenerBtn = document.getElementById('listenerBtn');
const logDiv = document.getElementById('log');

function handleActionClick() {
    const msg = 'Button clicked at ' + new Date().toLocaleTimeString();
    const p = document.createElement('p');
    p.textContent = msg;
    logDiv.appendChild(p);
}

function handleListenerClickAttach() {
    actionBtn.addEventListener('click', handleActionClick);
    listenerBtn.textContent = "Click To Detach Listener";
    const p = document.createElement('p');
    p.textContent = 'Listener attached';
    p.style.fontStyle = 'italic';
    logDiv.appendChild(p);
}

function handleListenerClickDetach() {
    actionBtn.removeEventListener('click', handleActionClick);
    listenerBtn.textContent = "Click To Attach Listener";
    const p = document.createElement('p');
    p.textContent = 'Listener detached';
    p.style.fontStyle = 'italic';
    logDiv.appendChild(p);
}

var state = 0;

// When the listener button is initially pressed we attach the listener, when pressed again we detach the listener, and so on and so forth. We also log the current state of the listener in the log div.
listenerBtn.addEventListener('click', () => {
    if (state == 0) {
        handleListenerClickAttach();
        state = 1;
    }
    else {
        handleListenerClickDetach();
        state = 0;
    }
});