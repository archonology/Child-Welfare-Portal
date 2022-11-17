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

// exports
module.exports = { User, Subscriber, Abuse, Advocacy, CasePlanning, Court, CpLaw, DataPrivacy, Diversity, EdNeglect, Ethics, FosterCare, History, Incarceration, Interviewing, Ive, MentalHealth, Parenting, Ssis, SubstanceAbuse };