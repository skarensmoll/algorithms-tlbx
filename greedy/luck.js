function LuckBalance(k, contests) {
  // k max amount contest allowed to loose
  const kList = [];
  let sum = 0;
  let totalImpContest = 0;

  for(let contest of contests) {
    const [points, imp] = contest;
    console.log(points, imp)
    sum += points;

    if(imp === 1){
      totalImpContest += 1;
      placePointBySmallest(kList, points);
    }
  }

  const contestToWin = totalImpContest - k;
  console.log('totalImpContest', totalImpContest);
  let winContest = 0;

  if(contestToWin > 0) {
    winContest = kList.slice(0, contestToWin).reduce((p,c) => p + c, 0);
    console.log('winContest', winContest, kList, 'sum', sum);
  }

  return sum - (winContest * 2);
}

function placePointBySmallest(kList, point) {
  const size = kList.length -1;

  if(size < 0) {
    kList.push(point);
    return ;
  }

  if(point > kList[0] && point < kList[size]) {
    console.log('inter', point);
    for(let i = 1; i<size; i++) {
      if(point < kList[i]) {
        kList.splice(i, 0, point);

        break;
      }
    }

    return;
  }

  if(point <= kList[0]) {
    kList.unshift(point);
    return;
  }

  if(point >= kList[size]) {
    kList.push(point);
    return;
  }
}

const k = 0;
const arr = [
[1 ,1],
[2, 1],
[3, 1],
[4, 1]
];
console.log(LuckBalance(k , arr));