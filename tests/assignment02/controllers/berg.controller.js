const Berg = require ("../models/berg.model")

const bergSplit = ('/api/berg/split/bergId=:bergId',async (req, res) => {
    try {
        const berg = await Berg.findOne({bergId: req.params.bergId}).exec()
        //create 2 observations identical to the last but append "A and B" to each one
        // delete the original
        const berg1 = JSON.parse(JSON.stringify(berg))
        const berg2 = JSON.parse(JSON.stringify(berg))
        berg1.bergId = berg1.bergId + "a"
        berg2.bergId = berg2.bergId + "b"
        delete berg1["_id"]
        delete berg2["_id"]
        Berg.create(berg1)
        Berg.create(berg2)
        console.log(berg._id)
        Berg.findOneAndDelete({bergId: req.params.bergId}).exec()

 


        res.json({ message: "Enrollment successful" });
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
});

const createBerg = ('api/berg', async (req, res) => {
    try {
        const sched = await Berg.create(req.body);
        res.status(200).json(sched);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = {
    createBerg,
    bergSplit
}