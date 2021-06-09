#Uses python3

import sys

def greatestNum(a, b):
    fa, fb = str(a)[0], str(b)[0]
    la, lb = str(a)[-1], str(b)[-1]

    if fa == fb:
        return la > lb

    return fa > fb

def largest_number(digits):
    print(digits)
    maxDigit = 0
    salaryNum = ""

    while len(digits) > 0:
        maxDigit = 0
        for d in digits:
            if greatestNum(d,maxDigit):
                maxDigit = d

        print(maxDigit)
        digits.remove(maxDigit)
        salaryNum += str(maxDigit)

    return salaryNum

if __name__ == '__main__':
    #input = "5 9 4 6 1 9"
    input = "3 23 39 92"

    data = input.split()
    a = data[1:]
    print(largest_number([ int(d) for d in a] ))

