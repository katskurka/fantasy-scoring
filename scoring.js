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
  let rushingYardScore = rbStats.rushing.yards / 10
  let rushingTouchdownScore = rbStats.rushing.touchdowns * 6
  let rushingFumbleScore = rbStats.rushing.fumbles * -3
  let receptionScore = rbStats.receiving.receptions * 1
  let receivingYardScore = rbStats.receiving.yards / 10
  let receivingTouchdownScore = rbStats.receiving.touchdowns * 6
  let receivingFumbleScore = rbStats.receiving.fumbles * -3
  let kickreturnYardScore = rbStats.return.kickreturn.yards / 15
  let kickreturnTouchdownScore = rbStats.return.kickreturn.touchdowns * 6
  let kickreturnFumbleScore = rbStats.return.kickreturn.fumbles * -3
  let puntreturnYardScore = rbStats.return.puntreturn.yards / 15
  let puntreturnTouchdownScore = rbStats.return.puntreturn.touchdowns * 6
  let puntreturnFumbleScore = rbStats.return.puntreturn.fumbles * -3

  return rushingYardScore + rushingTouchdownScore + rushingFumbleScore + receptionScore + receivingYardScore + receivingTouchdownScore + receivingFumbleScore + kickreturnYardScore + kickreturnTouchdownScore + kickreturnFumbleScore + puntreturnYardScore + puntreturnTouchdownScore + puntreturnFumbleScore
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
