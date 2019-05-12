let express = require ('express')
let router = express.Router()
var assignmentsController = require('../controllers/asgn-controller');

router.get('/assignment', (req,res) =>{
    if(req.query.name){
        res.send(`You have requested a assignment ${req.query.name}`)
    }
    else {
    res.send('You have requested a assignment')
    }
})

router.get('/assignment/:name', (req,res) =>{
    res.send(`You have requested a assignment ${req.params.name}`)
})

// POST
router.post('/assignments', assignmentsController.addAsgn);

// GET
router.get('/assignments', assignmentsController.showAsgn);

// PUT
router.put('/assignments', assignmentsController.changeAsgn);

// DELETE
router.delete('/assignments', assignmentsController.deleteAsgn);




module.exports = router;