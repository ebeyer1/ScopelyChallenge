/* create tree from path */
function Tree(root) {
  /* setup Tree model */
  this.root = new Node(root);
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

    var lastIndex = pathParts.length-1;
    for (var i = 1; i <= lastIndex; i++) {
      if (i == lastIndex) {
        var leaves = pathParts[i].split('|');
        leaves.forEach(function(leaf) {
          getOrAddNode(leaf, parentNode);
        })
      } else {
        var currentNode = getOrAddNode(pathParts[i], parentNode);

        parentNode = currentNode;
      }
    }
  }

  function getOrAddNode(data, parentNode) {
    var currentNode = parentNode.children.find(function(node) {
      return node.data === data;
    })
    if (typeof currentNode === "undefined") {
      currentNode = new Node(data);
      // currentNode.parent = parentNode; // uncomment if we'd like a reference to parent node
      parentNode.children.push(currentNode);
    }

    return currentNode;
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
}

function Node(data) {
  // this.parent = parent;  // uncomment if we'd like a reference to parent node
  this.data = data;
  this.children = [];
}
