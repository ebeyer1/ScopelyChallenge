function insertCombinatorialPathIntoTree() {
  console.log("#4. Support combinatorial nodes at any level:");

  var tree = new Tree('home');

  tree.addCombinatorialPath('/home/sports|music/misc|favorites');
  console.log('tree after adding a combinatorial path');
  console.log(JSON.stringify(tree));

  console.log('tree object:');
  console.log(tree);
}
