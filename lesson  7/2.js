function DeepClone(input) {
    var clone = (Array.isArray(input)) ? [] : {};
    for (var key in input) {
        if (typeof (input[key]) == 'object' && input[key] != null) {
            clone[key] = DeepClone(input[key])
        } else {
            clone[key] = input[key];
        }
    }
    return clone;
}
