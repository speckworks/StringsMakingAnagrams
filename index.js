function makeAnagram(a, b) {
        const aLen = a.length;
    const bLen = b.length;
    let deletions = 0;
    let repeats = 0;
    for (let i = 0; i < Math.max(aLen, bLen); i++) {
        if (a.includes(a[i]) && b.includes(a[i])) {
            b = b.replace(a[i], '');
            repeats++;
        }
    }
    deletions = (aLen - repeats) + (bLen - repeats);
    return deletions;
}
makeAnagram("cde", "abc");
