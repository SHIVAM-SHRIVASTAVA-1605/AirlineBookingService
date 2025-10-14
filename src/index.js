const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {PORT, FLIGHT_SERVICE_PATH} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');

const setupAndSatrtServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    // app.get('/bookingservice/api/v1/home', (req, res) => {
    //     return res.json({message: 'Hitting the booking service'});
    // });
    app.use('/bookingservice/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server Started on ${PORT}`);

        // if(process.env.DB_SYNC) {
        //     db.sequelize.sync({alter: true});
        // }

        // console.log(FLIGHT_SERVICE_PATH);
    })
}

setupAndSatrtServer();