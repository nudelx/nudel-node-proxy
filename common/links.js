var token = require('../token.json')

module.exports = {
  SSP: {
    BLOCK_BUGS_URL: '/SSP',
    ALL_BUGS_URL: '/SSP-ALL',
    BLOCK_BUGS_LINK:
      'https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags%20contains%20%27*block*%27%20)and(EntityState.Name%20not%20contains%20%20%27Code%27)and(EntityState.Id%20ne%20%27174%27)and(EntityState.Id%20ne%20%20%27225%27)and(EntityState.Name%20not%20contains%20%20%27*Deploy*%27)and(EntityState.Name%20not%20contains%20%20%27*Design*%27)and(EntityState.Name%20not%20contains%20%20%27*Live*%27)and(Project.Name%20contains%20%27SSP%27)&take=100&access_token=' +
      token.key,
    ALL_BUGS_LINK:
      'https://samanage.tpondemand.com/api/v1/Bugs?where=(EntityState.Id eq 170)and(EntityState.Id eq 171)and(Project.Name%20contains%20%27SSP%27)&take=200&access_token=' +
      token.key
  },
  SSF: {
    BLOCK_BUGS_URL: '/SSF',
    ALL_BUGS_URL: '/SSF-ALL',
    BLOCK_BUGS_LINK:
      'https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags%20contains%20%27*block*%27%20)and(EntityState.Name%20not%20contains%20%20%27Code%27)and(EntityState.Id%20ne%20%27174%27)and(EntityState.Id%20ne%20%20%27225%27)and(EntityState.Name%20not%20contains%20%20%27*Deploy*%27)and(EntityState.Name%20not%20contains%20%20%27*Design*%27)and(EntityState.Name%20not%20contains%20%20%27*Live*%27)and(Project.Name%20contains%20%27SSF%27)&take=100&access_token=' +
      token.key,
    ALL_BUGS_LINK:
      'https://samanage.tpondemand.com/api/v1/Bugs?where=(EntityState.Id eq 170)and(EntityState.Id eq 171)and(Project.Name%20contains%20%27SSF%27)&take=200&access_token=' +
      token.key
  }
}
