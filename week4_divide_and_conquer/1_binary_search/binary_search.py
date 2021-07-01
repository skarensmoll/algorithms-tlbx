# Uses python3
import sys
import math

def binary_search(a, x):
    lenArray = len(a) - 1

    if(lenArray == 0 and a[0] != x):
        return - 1
    middleIndex = math.floor(lenArray / 2)
    middlePoint = a[middleIndex]

    if(middlePoint == x):
        return middleIndex

    newArray = []

    if(x < middlePoint):
        newArray = a[0: middleIndex]
    else:
        newArray = a[middleIndex + 1: -1]

    return binary_search(newArray, x)

def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

if __name__ == '__main__':
    input = input()
    data = list(map(int, input.split()))
    n = data[0]
    m = data[n + 1]
    a = data[1 : n + 1]
    for x in data[n + 2:]:
        # replace with the call to binary_search when implemented
        print(binary_search(a, x), end = ' ')
