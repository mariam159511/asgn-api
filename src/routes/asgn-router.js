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




router.post('/assignments', assignmentsController.addAsgn);


router.get('/assignments', assignmentsController.showAsgn);


router.put('/assignments', assignmentsController.changeAsgn);


router.delete('/assignments', assignmentsController.deleteAsgn);




module.exports = router;
                