//user and subscriber tables
const User = require('./User');
const Subscriber = require('./Subscriber');
//resource tables
const Abuse = require('./Abuse');
const Advocacy = require('./Advocacy');
const CasePlanning = require('./CasePlanning');
const Court = require('./Court');
const CpLaw = require('./CpLaw');
const DataPrivacy = require('./DataPrivacy');
const Diversity = require('./Diversity');
const EdNeglect = require('./EdNeglect');
const Ethics = require('./Ethics');
const FosterCare = require('./FosterCare');
const History = require('./History');
const Incarceration = require('./Incarceration');
const Interviewing = require('./Interviewing');
const Ive = require('./Iv-e');
const MentalHealth = require('./MentalHealth');
const Parenting = require('./Parenting');
const Ssis = require('./SSIS');
const SubstanceAbuse = require('./SubstanceAbuse');

//user and subscriber exports
module.exports = User;
module.exports = Subscriber;

//resource table exports
module.exports = Abuse;
module.exports = Advocacy;
module.exports = CasePlanning;
module.exports = Court;
module.exports = CpLaw;
module.exports = DataPrivacy;
module.exports = Diversity;
module.exports = EdNeglect;
module.exports = Ethics;
module.exports = FosterCare;
module.exports = History;
module.exports = Incarceration;
module.exports = Interviewing;
module.exports = Ive;
module.exports = MentalHealth;
module.exports = Parenting;
module.exports = Ssis;
module.exports = SubstanceAbuse;