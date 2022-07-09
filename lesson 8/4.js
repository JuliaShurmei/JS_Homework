function areAnagrams(s1, s2) {
    return s1.toLowerCase().split('').sort().join('') === s2.toLowerCase().split('').sort().join('');
}

areAnagrams('кот', 'Отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');