// The idea - DFS O(N)
// Postorder DFS to find the height of every node
// If any subtree is not balanced, encrypt the information as Infinity

var isBalanced = function(root) {
    
    let dfs = function(node) {
        if (!node) return 0;
        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) return Infinity;
        return Math.max(left, right);
    }
    
    return dfs(root)==Infinity?false:true;
};
