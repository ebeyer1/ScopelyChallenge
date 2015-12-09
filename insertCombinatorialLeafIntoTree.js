function insertCombinatorialLeafIntoTree() {
  console.log("#3. Support a combinatorial lead-node insert:");

  var tree = new Tree('home');

  tree.addCombinatorialLeafPath('/home/music/rap|rock|pop');
  console.log('tree after adding a combinatorial leaf path');
  console.log(JSON.stringify(tree));

  console.log('tree object:');
  console.log(tree);
}
