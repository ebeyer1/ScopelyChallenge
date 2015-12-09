function insertDualLeafIntoTree() {
  var tree = new Tree('home');

  tree.addPath('/home/sports/football/NFL|NCAA');
  console.log('tree after adding a dual leaf path');
  console.log(JSON.stringify(tree));

  console.log('tree object:');
  console.log(tree);
}
