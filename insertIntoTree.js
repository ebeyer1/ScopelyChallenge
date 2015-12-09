function insertIntoTree() {
  console.log("#1. insert into Tree:");

  var tree = new Tree('home');

  tree.addPath('/home/sports/basketball/ncaa/');
  console.log('tree as JSON with initial data');
  console.log(JSON.stringify(tree));

  tree.addPath('/home/music/rap/gangster');
  console.log('tree after adding an additional path');
  console.log(JSON.stringify(tree));

  console.log('tree object:');
  console.log(tree);
}
