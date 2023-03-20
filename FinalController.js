const FinalModel = require('./FinalModel');

module.exports.getTravel = async (req,res) => {
    const myTravel = await FinalModel.find();
    res.send(myTravel)
}

module.exports.saveTravels = async (req,res) => {
    const { title } = req.body;
    FinalModel.create({ title })
    .then((data) => { console.log('Travel added')
    res.send(data)
})
}

module.exports.deleteTravel = async (req,res) => {
    const {_id} = req.body
    FinalModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a travel'))
}

module.exports.editTravel = async (req,res) => {
    const {_id, title} = req.body;
    FinalModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited a travel'))
}
