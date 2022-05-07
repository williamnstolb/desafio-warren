const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

const sumReversed = (n) => (n % 10 !== 0 && n > 10) ? (n + reversedNum(n)) : 2;

const symmetricalAppearance = (number) => {
  const list = number.toString().split("");
  const middle = Math.ceil(list.length / 2);
  const firstHalf = (list.length % 2 === 0 ) ? list.slice(0, middle) : list.slice(0, middle - 1);
  const secondHalf = list.slice(middle, list.length);
  const symmetrical = firstHalf.join("") === secondHalf.join("");
  return symmetrical;
}

const listNum = (n) => {
  let list = [];
  let sum = 0;

  // O desafio fala de números "ímpares", mas dá a entender que seriam números com aparência "simétrica", não ficou claro.
  for (let i = 12; i < n; i+=1) {
    sum = sumReversed(i);

    const odd = sum % 2 !== 0
    const lessThanN = sum < n;

    if (odd && lessThanN && symmetricalAppearance(sum)) {
      list.push(i);
    }
  }
  console.log(list.length);
  return list;
}

console.log(listNum(1000000));