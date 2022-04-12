const express = require('express');
const consign = require('consign/lib/consign');


module.exports = () => {
    const app = express();

    consign()
        .include('controllers')
        .into(app);

    return app
}

