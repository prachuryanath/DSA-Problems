var isSymmetric = function(root) {
    
    var roots=[root.left,root.right];
    var l,r;
    while(roots.length>0){
        l=roots.shift();
        r=roots.shift();
        if(!l && !r) continue;
        if(!l || !r) return false;
        if(l.val!==r.val) return false;
        roots.push(l.left,r.right);
        roots.push(l.right,r.left);
    }
    
    return true;
    
    
};