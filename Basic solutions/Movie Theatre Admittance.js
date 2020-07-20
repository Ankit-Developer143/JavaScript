/* Write a function that checks whether a person can watch an MA15+ rated movie.
 One of the following two conditions is required for admittance:
 The person is at least 15 years old.
 They have parental supervision. */

function acceptIntoMovie(age, isSupervised) {
    if (age >= 14 && isSupervised == true) {
        return true;
    } else if (age >= 15) {
        return true;
    } else {
        return false;
    }

}
console.log(acceptIntoMovie(14, true));
