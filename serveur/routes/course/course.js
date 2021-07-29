const express = require("express")
const app = express()
// const c= [{
//     pic:"1.1.gif",question:"Pour tourner à droite",answer:"Je passe avec prudence",wrongAnswer1:"Je m'arrête",wrongAnswer2:""},{
//     pic:"1.2.jpg",question:"Je dois tenir compte de ce panneau uniquement",answer:"dans les deux cas",wrongAnswer1:"Lorsque la chaussée est mouillé",wrongAnswer2:"Lorsque la chaussée est sèche"},{
//     pic:"1.3.jpg",question:"Le temps de réaction chez une personne en bonne santé dure en moyenne",answer:"1 seconde",wrongAnswer1:"2 seconde",wrongAnswer2:"3 seconde"},{
//     pic:"1.18.jpg",question:"Ce véhicule va quitter cette station de service",answer:"je passe sans céder le passage",wrongAnswer1:"Je ralenti et je lui cède le passage",wrongAnswer2:"je fait un arrêt puis je lui cède le passage"},{
//     pic:"1.5.jpg",question:"Je m'introduit sur l'anneau",answer:"Avant la voiture noir",wrongAnswer1:"aprés la voiture noir",wrongAnswer2:""},{
//     pic:"1.6.jpg",question:"Ce véhicule est prioritaire lorsqu'il utilise ses avertisseurs lumineux",answer:"NON",wrongAnswer1:"OUI	",wrongAnswer2:""},{
//     pic:"1.7.gif",question:"Je dépasse cette voiture par la droite",answer:"NON",wrongAnswer1:"OUI",wrongAnswer2:""},{
//     pic:"1.8.jpg",question:"Je vais aborder une rue à sens unique",answer:"NON",wrongAnswer1:"OUI",wrongAnswer2:""},{
//     pic:"1.9.jpg",question:"La signalisation indique que la circulation est à double sens",answer:"à partir du panneau",wrongAnswer1:"à 50m du panneau",wrongAnswer2:"à 100m du panneau"},{
//     pic:"1.10.jpg",question:"La signalisation annonce que je vais rencontrer",answer:"un cassis ou un dos d'âne",wrongAnswer1:"un ralentisseur",wrongAnswer2:"un virage"},{
//     pic:"1.11.jpg",question:"je peux stationner derrière cette voiture",answer:"NON",wrongAnswer1:"OUI",wrongAnswer2:""},{
//     pic:"1.12.jpg",question:"La signalisation indique que l'arrêt et le stationnement est interdit uniquement aux véhicules de transport de marchandise",answer:"NON",wrongAnswer1:"OUI",wrongAnswer2:""},{
//     pic:"1.13.jpg",question:"Dans cette situation, pour aller tout droit",answer:"je passe sans faire un arrêt",wrongAnswer1:"Je fait un arrêt puis je passe",wrongAnswer2:""},{
//     pic:"1.14.jpg",question:"à cet endroit étroit de la chaussée",answer:"je dois céder le passage",wrongAnswer1:"Je passe sans céder le passage",wrongAnswer2:"je klaxonne et je passe"},{
//     pic:"1.15.jpg",question:"Sur autoroute, comme cette voiture, je peux faire un arrêt ",answer:"En cas de panne",wrongAnswer1:"Pour lire ma carte routière",wrongAnswer2:""},{
//     pic:"1.16.gif",question:"Pour aller tout droit, je passe",answer:"le premier",wrongAnswer1:"le deuxième",wrongAnswer2:"le troisième"},{
//     pic:"1.17.jpg",question:"Pour tourner à droite , je passe ",answer:"le premier",wrongAnswer1:"le deuxième",wrongAnswer2:"le troisième"},{
//     pic:"1.18.jpg",question:"Ce véhicule va quitter cette station de service",answer:"je passe sans céder le passage",wrongAnswer1:"Je ralenti et je lui cède le passage",wrongAnswer2:"je fait un arrêt puis je lui cède le passage"},{
//     pic:"1.7.gif",question:"Je dépasse cette voiture par la droite",answer:"NON",wrongAnswer1:"OUI",wrongAnswer2:""},{
//     pic:"1.20.jpg",question:"Cette voiture roule à une vitesse de 70 km/h. je peux la dépasser",answer:"NON",wrongAnswer1:"OUI",wrongAnswer2:""},{
//     pic:"1.21.jpg",question:"Le croisement est difficile. Qui passe le premier ?",answer:"Ma voiture",wrongAnswer1:"le camion",wrongAnswer2:""},{
//     pic:"1.22.jpg",question:" Le chargement doit être signalé   s’il dépasse l’arrière du véhicule  de ",answer:"1 mètre",wrongAnswer1:"2 mètre",wrongAnswer2:"3 mètre"},{
//     pic:"1.8.jpg",question:"Je vais aborder une rue à sens unique",answer:"NON",wrongAnswer1:"OUI",wrongAnswer2:""},{
//     pic:"1.9.jpg",question:"La signalisation indique que la circulation est à double sens",answer:"à partir du panneau",wrongAnswer1:"à 50m du panneau",wrongAnswer2:"à 100m du panneau"},{
//     pic:"1.10.jpg",question:"La signalisation annonce que je vais rencontrer",answer:"un cassis ou un dos d'âne",wrongAnswer1:"un ralentisseur",wrongAnswer2:"un virage"},{
//     pic:"1.11.jpg",question:"je peux stationner derrière cette voiture",answer:"NON",wrongAnswer1:"OUI",wrongAnswer2:""},{
//     pic:"1.12.jpg",question:"La signalisation indique que l'arrêt et le stationnement est interdit uniquement aux véhicules de transport de marchandise",answer:"NON",wrongAnswer1:"OUI",wrongAnswer2:""},{
//     pic:"1.18.jpg",question:"Ce véhicule va quitter cette station de service",answer:"je passe sans céder le passage",wrongAnswer1:"Je ralenti et je lui cède le passage",wrongAnswer2:"je fait un arrêt puis je lui cède le passage"},{
//     pic:"1.5.jpg",question:"Je m'introduit sur l'anneau",answer:"Avant la voiture noir",wrongAnswer1:"aprés la voiture noir",wrongAnswer2:""},{
//     pic:"1.6.jpg",question:"Ce véhicule est prioritaire lorsqu'il utilise ses avertisseurs lumineux",answer:"NON",wrongAnswer1:"OUI	",wrongAnswer2:""}]
    

const router = express.Router()
router.use(express.json());
const Course = require("../../models/course/course")

router.get('/', (req, res) => {
    Course.find().then((result) => {
        res.send(JSON.stringify(result))
    }).catch((err) => { console.log(err) }
    )
})

router.post("/",  (req, res) => {
    data =req.body
    const newCourse = new Course({
        course:data.course
    })
    newCourse.save().then((result) => {
        res.send(result)
        console.log(result)
    }).catch(err => {
        console.log(err)
        res.send(JSON.stringify({ error: "Error adding this to the db" }))
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id;

    Course.findById(id).then((result) => {
        res.send(result)
        console.log(JSON.stringify(result))
    }).catch((err) => { console.log(err) }
    )
})



module.exports = router