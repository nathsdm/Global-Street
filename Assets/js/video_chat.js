let localStream;
let peerConnection;
let userId = 1;

let init = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    document.getElementById('user-1').srcObject = localStream;
}
init();

let socket = io.connect();

socket.on('connect', () => {
    if(socket.connected) {
        console.emit('userconnect', { displayName: 'User' });
    }
});

let servers = {
    'iceServers': [
        { 'urls': 'stun:stun1.l.google.com:19302' },
        { 'urls': 'stun:stun2.l.google.com:19302' }
    ]
};

let createOffer = async () => {
    peerConnection = new RTCPeerConnection(servers);
    let offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit('offerSentToRemote',{
        username: username,
        remoteUser: remoteUser,
        offer: peerConnection.localDescription
    });
};

function NextChat() {
    userId++;
    if (userId == 6) {
        userId = 1;
    }
    const user2 = document.getElementById('user-2');
    user2.src = "img/avatar" + userId + ".png";
}

function StartChat() {
    alert("Start Chat");
}