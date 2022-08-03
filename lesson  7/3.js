function DeepEqual(a, b) {
    if (a.length === b.length) {
        for (var i in a) {
            if (typeof (a[i]) == 'object' && a[i] != null) {
                if (a[i] instanceof Array && b[i] instanceof Array) {
                    DeepEqual(a, b);
                }
                return false;
            }
            ;
            if (typeof a[i] === 'function' && typeof b[i] === 'function') {
                if (toString(a[i]) !== toString(b[i])) return false;
            }
            ;
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    return false;
}
