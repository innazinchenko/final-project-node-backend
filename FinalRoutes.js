const { Router } = require('express');
const { getTravel, saveTravels, deleteTravel, editTravel } = require('./FinalController');

const router = Router();

router.get('/', getTravel);
router.post('/saveTravels', saveTravels);
router.post('/deleteTravel', deleteTravel);
router.post('/editTravel', editTravel)

module.exports = router;