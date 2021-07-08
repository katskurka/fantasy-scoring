/* const point = 1;
let yardsPassing = 14.52*point;
let passingTouchdown = ;
let interception = point
let rushing = ;
let rushingTouchdown =;
let rushingFumble = */

function qbScoring(qbStats) {
  let passingYardScore = qbStats.passing.yards / 25
  let passingTouchdownScore = qbStats.passing.touchdowns * 6
  let interceptionScore = qbStats.passing.interceptions * -3
  let rushingYardScore = qbStats.rushing.yards / 10
  let rushingTouchdownScore = qbStats.rushing.touchdowns * 6
  let rushingFumbleScore = qbStats.rushing.fumbles * -3

  return passingYardScore + passingTouchdownScore + interceptionScore + rushingYardScore + rushingTouchdownScore + rushingFumbleScore
}

function rbScoring(rbStats) {
  let passingYardScore = rbStats.passing.yards / 25
  let passingTouchdownScore = rbStats.passing.touchdowns * 6
  let interceptionScore = rbStats.passing.interceptions * -3
  let rushingYardScore = rbStats.rushing.yards / 10
  let rushingTouchdownScore = rbStats.rushing.touchdowns * 6
  let rushingFumbleScore = rbStats.rushing.fumbles * -3

  return passingYardScore + passingTouchdownScore + interceptionScore + rushingYardScore + rushingTouchdownScore + rushingFumbleScore
}

function checkPosition(player) { // make switch statements
  if (player.position === 'QB') {
    return qbScoring(player.stats)
  }
  else if (player.position === 'RB') {
    return rbScoring(player.stats)
  }
  else if (player.position === 'WR') {
    return wrScoring(player.stats)
  }
  else if (player.position === 'TE') {
    return teScoring(player.stats)
  }
  else return 0
}
function calculateScore(player) {
  let score = checkPosition(player)

  return score
}


module.exports = calculateScore
