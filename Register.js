//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {
  let need = cash - price;
  let tempCid = JSON.parse(JSON.stringify(cid));
  // Here is your change, ma'am.
  const money = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  //　必要になるキャッシュの種類を特定（お釣り金額以下の現金）
  let neededCash = money.filter(item => {
    return item[1] <= need;
  });

  // 必要になるキャッシュの種類について、レジ内コインの枚数を確定
  // cidの各要素と通貨の数を追加（money中の[1]で割り算）
  // 完成図：[通貨名前, 通貨単位, 持ってる金額,　枚数]
  neededCash.forEach(item => {
    for (let i = 0; i < neededCash.length; i++) {
      if (item[0] == tempCid[i][0]) {
        item.push(tempCid[i][1]);
        item.push((tempCid[i][1] * 10 * 10) / (item[1] * 10 * 10));
      }
    }
  });

  // 価格の大きいキャッシュから順に、お釣りに当てはめてく
  // tempCidからその分の金額を引いていく
  let forExchange = [];

  for (let i = neededCash.length - 1; i >= 0; i--) {
    if (need <= 0) {
      break;
    }
    if (neededCash[i][3] > 0 && need > neededCash[i][1]) {
      let kazu = Math.floor(need / neededCash[i][1]);
      if (kazu > neededCash[i][3]) {
        kazu = neededCash[i][3];
      }
      let amount = neededCash[i][1] * kazu;
      need = (need * 1000 - amount * 1000) / 1000;
      tempCid[i][1] -= amount;
      neededCash[i][3] -= kazu;
      forExchange.push([neededCash[i][0], amount]);
    }
  }

  // cidの残り金額計算
  let leftCash = tempCid.filter(item => item[1] > 0).reduce(function (a, b){ return a  + b[1] *1000}, 0)/1000;
  
  if (need == 0 && leftCash == 0) {
    return { status: "CLOSED", change: cid };
  } else if (need == 0 && leftCash > 0) {
    return { status: "OPEN", change: forExchange };
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

let answer = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(answer);