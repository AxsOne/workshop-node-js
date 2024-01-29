const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const sendResponse = (content, contentType) => {
        res.writeHead(200, { 'Content-Type': contentType });
        res.write(content);
        res.end();
    };

    if (req.url === '/accueil') {
        console.log('Vous êtes à l\'accueil');
        sendResponse('<h1>Bienvenue sur l\'accueil</h1>', 'text/html');
    } else if (req.url === '/Logo') {
        console.log('Vous êtes au logo');
        const logoPath = 'Epitech.png';
        fs.readFile(logoPath, (err, data) => {
            if (err) {
                sendResponse('Erreur lors de la lecture du logo', 'text/plain');
            } else {
                sendResponse(data, 'image/png');
            }
        });
    } else if (req.url === '/profile') {
        console.log('Vous êtes sur votre profile');
        sendResponse('<h1>Bienvenue sur votre profile</h1>', 'text/html');
    } else {
        sendResponse('Page non trouvée', 'text/plain');
    }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Serveur créé sur le port ${PORT}`));
