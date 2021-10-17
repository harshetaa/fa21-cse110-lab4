12. 
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. 
    A. '32' since integers map to their exact string conversion. The 2 would append to the '3'. 
    B. '1' since integers map to their exact string conversion. The 2 would subtract from '3'.
    C.  3 since null is a 0.
    D. '3null' since integers map to their exact string conversion. The null would append to the '3'.
    E. 4 since true maps to 1. So, 1 + 3 = 4. 
    F. 0 since null is 0 and false is also 0.  So, 0 + 0 = 0.
    G. '3undefined' since integers map to their exact string conversion. The undefined will become a string and append to the '3'.
    H. NaN since you cannot subtract undefined from '3'.
14. 
    A. true, since integers map to their exact string conversion, so '2' would become 2 making it true.
    B. false, since they are strings and they are compared character by character and '2' is not less than '1'.
    C. true, since integers map to their exact string conversion, so '2' would become 2 making it true.
    D. false, since '2' and 2 are two different types. 
    E. false, since true is considered 1 so 1 and 2 are not equal. 
    F. true, since Boolean(2) will be considered true making the whole statement true. 
15. The difference between == and === is that === does not convert the type when checking the equality.
16. [here](part2-question16.js)
17. The result will be [2,4,6]. The foor loop will iterate through the array passed to the modifyArray function. In every iteration, the function will call callback, in this case doSomething, and send it what is at that array index. The doSomethign function will return the original array's number doubled and that is pushed to the new array. In the end, the new array is returned. 
18. [here](part2-question18.js)
19. 1 
    4
    3
    2
    This will be the output of the above code. 
