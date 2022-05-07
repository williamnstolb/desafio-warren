const maxLength = (list, x) => {
  let count = 0;
  let sum = 0;
  let i = 0;
  list.sort((b, a) => a - b);

  while (i < list.length) {
    let element = list[i];
    if ((sum + element) <= x) {
      sum += element;
      count += 1;
    } else i += 1;
  }  
  return count;
}

const findNumbers = function(candidates, target, i, current, list){
  if(target === 0){
      const temp = current.slice();
      list.push(temp);
      return;
  }
  
  for(let j=i; j<candidates.length; j+=1){
      if(target < candidates[j])
          return;
      current.push(candidates[j]);
      findNumbers(candidates, target - candidates[j], j, current, list);
      current.pop();
  }
}

let combinationSum = function(candidates, target) {
  let list = []
  if(candidates === null || candidates.length === 0)
      return list;
  
  candidates.sort();

  let current = []
  findNumbers(candidates, target, 0, current, list);
  return list;
};

const listOfCombination = (list, number) => {
  const allCombinations = combinationSum(list, number);
  // console.log(allCombinations);
  const selectCombinations = allCombinations
    .filter(combination => combination.length === maxLength(list, number));
  
  return selectCombinations;
}

export default listOfCombination;
