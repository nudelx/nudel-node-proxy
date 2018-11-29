var token = require('../token.json')

module.exports = {
  SSP: {
    BLOCK_BUGS_URL: '/SSP',
    ALL_BUGS_URL: '/SSP-ALL',
    BLOCK_BUGS_LINK:
      "https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags contains '*block*'  )and(EntityState.Name not contains 'Code' )and(EntityState.Id ne 174 )and(EntityState.Id ne 225 )and(EntityState.Name not contains '*Deploy*' )and(EntityState.Name not contains '*Design*' )and(EntityState.Name not contains '*Live*' )and(Project.Name contains 'SSP' )&take=100&access_token=" +
      token.key,
    ALL_BUGS_LINK:
      "https://samanage.tpondemand.com/api/v1/Bugs?where=(EntityState.Name not contains 'Code' )and(EntityState.Id ne 465)and(EntityState.Id ne 172)and(EntityState.Id ne 174 )and(EntityState.Id ne 225 )and(EntityState.Id ne 227 )and(EntityState.Name not contains '*Design*' )and(EntityState.Name not contains '*Live*' )and(Project.Name contains 'SSP' )&take=200&access_token=" +
      token.key
  },
  SSF: {
    BLOCK_BUGS_URL: '/SSF',
    ALL_BUGS_URL: '/SSF-ALL',
    BLOCK_BUGS_LINK:
      "https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags contains '*block*'  )and(EntityState.Name not contains 'Code' )and(EntityState.Id ne 174 )and(EntityState.Id ne 225 )and(EntityState.Name not contains '*Deploy*' )and(EntityState.Name not contains '*Design*' )and(EntityState.Name not contains '*Live*')and(Project.Name contains 'SSF' )&take=100&access_token=" +
      token.key,
    ALL_BUGS_LINK:
      "https://samanage.tpondemand.com/api/v1/Bugs?where=(EntityState.Name not contains 'Code' )and(EntityState.Id ne 465)and(EntityState.Id ne 172)and(EntityState.Id ne 174 )and(EntityState.Id ne 225 )and(EntityState.Id ne 227 )and(EntityState.Name not contains '*Design*' )and(EntityState.Name not contains '*Live*' )and(Project.Name contains 'SSF' )&take=200&access_token=" +
      token.key
  }
}
