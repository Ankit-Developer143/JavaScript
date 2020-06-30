let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  let second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])
  let merged = new Map([...first,...second]);
  //OR
  let merged = new Map([...first]);
  console.log(merged);
  /*  Merge maps with an array. The last repeated key wins.
  Map { 1 => 'uno', 2 => 'dos', 3 => 'three' }
  */