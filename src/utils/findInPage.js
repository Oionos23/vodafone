var n = 0;
const findInPage = (str) => {
    console.log("leqwd");
    var txt, i, found;
    if (str === "") {
        return false;
    }
    // Find next occurance of the given string on the page, wrap around to the
    // start of the page if necessary.
    if (window.find) {
        // Look for match starting at the current point. If not found, rewind
        // back to the first match.
        if (!window.find(str)) {
            while (window.find(str, false, true)) {
                n++;
            }
        } else {
            n++;
        }
    } else if (window.document.body.createTextRange) {
        txt = window.document.body.createTextRange();
        // Find the nth match from the top of the page.
        found = true;
        i = 0;
        while (found === true && i <= n) {
            found = txt.findText(str);
            if (found) {
                txt.moveStart("character", 1);
                txt.moveEnd("textedit");
            }
            i += 1;
        }
        // If found, mark it and scroll it into view.
        if (found) {
            txt.moveStart("character", -1);
            txt.findText(str);
            txt.select();
            txt.scrollIntoView();
            n++;
        } else {
            // Otherwise, start over at the top of the page and find first match.
            if (n > 0) {
                n = 0;
                findInPage(str);
            }
        }
    }
    return false;
};

export default findInPage;
