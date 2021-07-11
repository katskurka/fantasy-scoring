function qbScoring(qbStats) {
  let passingYardScore = qbStats.passing.yards / 25
  let passingTouchdownScore = qbStats.passing.touchdowns * 6
  let interceptionScore = qbStats.passing.interceptions * -3
  let rushingYardScore = qbStats.rushing.yards / 10
  let rushingTouchdownScore = qbStats.rushing.touchdowns * 6
  let rushingFumbleScore = qbStats.rushing.fumbles * -3

  let passingScore = passingYardScore + passingTouchdownScore + interceptionScore
  let rushingScore = rushingYardScore + rushingTouchdownScore + rushingFumbleScore

  return passingScore + rushingScore
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

  let rushingScore = rushingYardScore + rushingTouchdownScore + rushingFumbleScore + receptionScore
  let receivingScore = receivingYardScore + receivingTouchdownScore + receivingFumbleScore
  let kickreturnScore = kickreturnYardScore + kickreturnTouchdownScore + kickreturnFumbleScore
  let puntreturnScore = puntreturnYardScore + puntreturnTouchdownScore + puntreturnFumbleScore

  return rushingScore + receivingScore + kickreturnScore + puntreturnScore
}

function wrScoring(wrStats) {
  let rushingYardScore = wrStats.rushing.yards / 10
  let rushingTouchdownScore = wrStats.rushing.touchdowns * 6
  let rushingFumbleScore = wrStats.rushing.fumbles * -3
  let receptionScore = wrStats.receiving.receptions * 1
  let receivingYardScore = wrStats.receiving.yards / 10
  let receivingTouchdownScore = wrStats.receiving.touchdowns * 6
  let receivingFumbleScore = wrStats.receiving.fumbles * -3
  let kickreturnYardScore = wrStats.return.kickreturn.yards / 15
  let kickreturnTouchdownScore = wrStats.return.kickreturn.touchdowns * 6
  let kickreturnFumbleScore = wrStats.return.kickreturn.fumbles * -3
  let puntreturnYardScore = wrStats.return.puntreturn.yards / 15
  let puntreturnTouchdownScore = wrStats.return.puntreturn.touchdowns * 6
  let puntreturnFumbleScore = wrStats.return.puntreturn.fumbles * -3

  let rushingScore = rushingYardScore + rushingTouchdownScore + rushingFumbleScore + receptionScore
  let receivingScore = receivingYardScore + receivingTouchdownScore + receivingFumbleScore
  let kickreturnScore = kickreturnYardScore + kickreturnTouchdownScore + kickreturnFumbleScore
  let puntreturnScore = puntreturnYardScore + puntreturnTouchdownScore + puntreturnFumbleScore

  return rushingScore + receivingScore + kickreturnScore + puntreturnScore
}

function teScoring(teStats) {
  let receptionScore = teStats.receiving.receptions * 1
  let receivingYardScore = teStats.receiving.yards / 10
  let receivingTouchdownScore = teStats.receiving.touchdowns * 6
  let receivingFumbleScore = teStats.receiving.fumbles * -3

  return receptionScore + receivingYardScore + receivingTouchdownScore + receivingFumbleScore
}

/* function checkPosition(player) { // make switch statements
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
} */

function checkPosition(player) {
  switch (player.position) {
    case 1: 'QB'
      qbScoring(player.stats)
      break
    case 2: 'RB'
      rbScoring(player.stats)
      break
    case 3: 'WR'
      wrScoring(player.stats)
      break
    case 4: 'TE'
      teScoring(player.stats)
      break
  }
}

function calculateScore(player) {
  let score = checkPosition(player)

  return score
}
module.exports = calculateScore
