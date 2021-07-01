# Uses python3
import sys
import math



def merge(array, p, q, r):
    leftLeaf = array[p:q+1]
    rightLeaf = array[q + 1 :r+1]

    i = 0 # leftLeaf
    j = 0 # rightLeaf
    k = p
    numInversions = 0

    while(i < len(leftLeaf) and j < len(rightLeaf)):

        if(leftLeaf[i] >= rightLeaf[j]):
            array[k] = rightLeaf[j]
            numInversions +=1
            j += 1
        else:
            array[k] = leftLeaf[i]
            i += 1
        k +=1



    while(i < len(leftLeaf)):
        array[k] = leftLeaf[i]
        k += 1
        i += 1

    while(j < len(rightLeaf)):
        array[k] = rightLeaf[j]
        j += 1
        k +=1


    return numInversions

def mergeSort(array, p, r):
    if ((r-p) > 0):
        half = math.floor((p + r) / 2)
        print('half', half)
        numA = mergeSort(array, p, half)
        numB = mergeSort(array, half + 1, r)
        nInversions = merge(array, p, half, r)
        return nInversions + numA + numB
    else:
        return 0


def get_number_of_inversions(a, b, left, right):
    number_of_inversions = 0
    if right - left <= 1:
        return number_of_inversions
    ave = (left + right) // 2
    number_of_inversions += get_number_of_inversions(a, b, left, ave)
    number_of_inversions += get_number_of_inversions(a, b, ave, right)
    #write your code here
    return number_of_inversions

if __name__ == '__main__':
    input = input()
    n, *a = list(map(int, input.split()))
    b = n * [0]
    #print(get_number_of_inversions(a, b, 0, len(a)))
    print(mergeSort([2,3,9,2,9], 0 , 4))



