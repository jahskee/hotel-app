const Company = require('../../databases/mlab/collection1/company');

const mongoCRUD = require('../_lib/mongoCRUD');

const resolvers = {
  Company: {
    /* 
     set graph relationship here with other records
     ie : author: (parent, args, context, info) => Author.findById(parent.authorId),
    */
  },
  Query: {
    company: mongoCRUD.findOne(Company),
    companies: mongoCRUD.findAll(Company),
    // custom queries go here
  },
  Mutation: {
    // add when id is undefined, else update when id is defined
    saveCompany: mongoCRUD.save(Company, 'Company'),
    removeCompany: mongoCRUD.remove(Company, 'Company'),
  },
};

module.exports = resolvers;
//Id name phone email hotel arrival departure  totalAmout