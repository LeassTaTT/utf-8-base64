function encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

// Usage:
encode('Encode me with UTF-8 char: ∑ßåœ ≈ ∆c') // "RW5jb2RlIG1lIHdpdGggVVRGLTggY2hhcjog4oiRw5/DpcWTIOKJiCDiiIZj"
decode("RW5jb2RlIG1lIHdpdGggVVRGLTggY2hhcjog4oiRw5/DpcWTIOKJiCDiiIZj") //'Encode me with UTF-8 char: ∑ßåœ ≈ ∆c'
