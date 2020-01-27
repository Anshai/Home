const fs = require('fs');
const path = require('path');

exports.getNapiIge = (req, res, next) => {
    fs.readFile(path.join(__dirname, '../', 'data', 'napi-ige.json'), (err, data) => {
        if(!err){
            res.status(200).json(JSON.parse(data));
        } else {
            console.log(err);
        }  
    })
}