var token = require('../token.json')

module.exports = {
  SSP: {
    BLOCK_BUGS_URL: '/SSP',
    BLOCK_BUGS_LINK:
      'https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags%20contains%20%27*block*%27%20)and(EntityState.Name%20not%20contains%20%20%27Code%27)and(EntityState.Id%20ne%20%27174%27)and(EntityState.Id%20ne%20%20%27225%27)and(EntityState.Name%20not%20contains%20%20%27*Deploy*%27)and(EntityState.Name%20not%20contains%20%20%27*Design*%27)and(EntityState.Name%20not%20contains%20%20%27*Live*%27)and(Project.Name%20contains%20%27SSP%27)&take=100&access_token=' +
      token.key
  },
  SSF: {
    BLOCK_BUGS_URL: '/SSF',
    BLOCK_BUGS_LINK:
      'https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags%20contains%20%27*block*%27%20)and(EntityState.Name%20not%20contains%20%20%27Code%27)and(EntityState.Id%20ne%20%27174%27)and(EntityState.Id%20ne%20%20%27225%27)and(EntityState.Name%20not%20contains%20%20%27*Deploy*%27)and(EntityState.Name%20not%20contains%20%20%27*Design*%27)and(EntityState.Name%20not%20contains%20%20%27*Live*%27)and(Project.Name%20contains%20%27SSF%27)&take=100&access_token=' +
      token.key
  }
}
