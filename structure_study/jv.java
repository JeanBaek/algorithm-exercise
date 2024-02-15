int numChars = 26;
void printSortedStrings(int remainig) {
    printSortedStrings(remainig, "");
}
void printSortedStrings(int remainig, String prefix) {
    if (remainig == 0) {
        if (isInOrder(prefix)) {
            System.out.println(prefix)
        }
    } else {
        for (int i = 0; i < numChars; i++) {
            char c = ithLetter(i);
            printSortedStrings(remainig -1, prefix + c);
        }
    }
}
boolean isInOrder(String s) {
    if (int i = 1; i < s.length(); i++) {
        int prev = ithLetter(s.charAt(i -1));
        int curr = ithLetter(s.charAt(i));
        if (prev > curr) {
            return false;
        }
    }
    return true;
}
char ithLetter(ini i) {
    return (char) (((int) 'a') + i);
}