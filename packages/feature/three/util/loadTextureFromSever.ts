const fs = require('fs');
const path = require('path');

export default function loadTextureFromSever(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                // base64로 인코딩하여 클라이언트로 전달
                const base64Data = `data:image/png;base64,${data.toString('base64')}`;
                resolve(base64Data);
            }
        });
    });
}


