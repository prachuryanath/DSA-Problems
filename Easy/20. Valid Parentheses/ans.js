var isValid = function(s) {
    let preS = ''
    while(s !== preS){
        preS = s
        s = s.split('()').join('')
        s = s.split('[]').join('')
        s = s.split('{}').join('') 
    }
    if(!s)
        return true;
    return false;
};