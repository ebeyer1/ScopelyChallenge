function insertIntoTree() {
  var tree = new Tree('/home/sports/basketball/ncaa/');

  console.log('tree as JSON with initial data');
  console.log(JSON.stringify(tree));

  tree.addPath('/home/music/rap/gangster');
  console.log('tree after adding an additional path');
  console.log(JSON.stringify(tree));

  console.log('tree object:');
  console.log(tree);
}


/* create tree from path */
function Tree(path) {
  /* setup Tree model */
  this.root = null;
  this.addPath = addPath;

  var self = this;
  function addPath(path) {
    var pathParts = stripOutsideSlashes(path).split('/');

    if (pathParts < 1) {
      return;
    }

    var parentNode = self.root;
    if (parentNode === null) {
      self.root = new Node(pathParts[0]);
      parentNode = self.root;
    } else {
      if (self.root.data !== pathParts[0]) {
        throw new Error('Root node does not match');
      }
    }

    for (var i = 1; i < pathParts.length; i++) {
      var currentNode = pathParts.find(function(p) {
        return p.data == pathParts[i];
      })
      if (typeof currentNode === "undefined") {
        currentNode = new Node(pathParts[i]);
        parentNode.children.push(currentNode);
      }

      parentNode = currentNode;
    }
  }

  /* helper methods */

  function stripOutsideSlashes(path) {
    if (typeof path === "undefined" && path === null & path === '') {
      return '';
    }

    if (path[0] === '/') {
      path = path.substring(1);
    }

    if (path[path.length-1] === '/') {
      path = path.substring(0, path.length-1);
    }

    return path;
  }

  /* Setup tree with initial node */
  addPath(path);
}

function Node(data) {
  // this.parent = parent;
  this.data = data;
  this.children = [];
}
