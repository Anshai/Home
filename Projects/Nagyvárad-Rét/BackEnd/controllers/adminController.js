const fs = require('fs');
const path = require('path');

exports.postUpdateNapiIge = (req, res, next) => {
    const napiIge = JSON.stringify(req.body);
    fs.writeFile(path.join(__dirname, '../', 'data', 'napi-ige.json'), napiIge, err => {
        if(err){
            console.log(err);
        } else {
            res.status(201).json({fileWrite: "success"});
        }
    });
}