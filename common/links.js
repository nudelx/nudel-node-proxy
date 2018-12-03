var token = require('../token.json')

module.exports = {
  SSP: {
    BLOCK_BUGS_URL: '/SSP',
    ALL_BUGS_URL: '/SSP-ALL',
    BLOCK_BUGS_LINK:
      "https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags contains '*block*'  )and(EntityState.Name not contains 'Code' )and(EntityState.Id ne 174 )and(EntityState.Id ne 225 )and(EntityState.Name not contains '*Deploy*' )and(EntityState.Name not contains '*Design*' )and(EntityState.Name not contains '*Live*' )and(Project.Name contains 'SSP' )&take=100&access_token=" +
      token.key,
    ALL_BUGS_LINK:
      "https://samanage.tpondemand.com/api/v1/Bugs?where=(EntityState.Id ne 465)and(EntityState.Id ne 174)and(Project.Name contains 'SSP' )&take=200&access_token=" +
      token.key
  },
  SSF: {
    BLOCK_BUGS_URL: '/SSF',
    ALL_BUGS_URL: '/SSF-ALL',
    BLOCK_BUGS_LINK:
      "https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags contains '*block*'  )and(EntityState.Name not contains 'Code' )and(EntityState.Id ne 174 )and(EntityState.Id ne 225 )and(EntityState.Name not contains '*Deploy*' )and(EntityState.Name not contains '*Design*' )and(EntityState.Name not contains '*Live*')and(Project.Name contains 'SSF' )&take=100&access_token=" +
      token.key,
    ALL_BUGS_LINK:
      "https://samanage.tpondemand.com/api/v1/Bugs?where=(EntityState.Id ne 465)and(EntityState.Id ne 174)and(Project.Name contains 'SSF' )&take=200&access_token=" +
      token.key
  }
}

/*
Id="172" Name="Working On"
Id="225" Name="Waiting for Deploy to Stage"
Id="170" Name="Backlog"
Id="171" Name="Next"
Id="227" Name="Waiting for Deploy">
Id="170" Name="Backlog">
Id="173" Name="Code Review"
Id="174" Name="Archive"
Id="226" Name="Deployed on Stage">
Id="465" Name="Live"

*/
