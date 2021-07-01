# Uses python3
import sys
import random

def partition3(a, l, r):
    #write your code here
    pass

def partition2(a, l, r):
    x = a[l]
    j = l
    for i in range(l + 1, r + 1):
        if a[i] <= x:
            j += 1
            a[i], a[j] = a[j], a[i]
    a[l], a[j] = a[j], a[l]
    return j

def swap(a, l, r):
    temp = a[l]
    a[l] = a[r]
    a[r] = temp


def partition3(a, lo, hi):
    l = lo
    r = lo
    u = hi
    pivot = a[hi]

    while r <= u:
        if a[r] < pivot:
            swap(a, l, r)
            l += 1
            r += 1
        elif a[r] > pivot:
            swap(a, r, u)
            u -=1
        else:
            r += 1

    return l - 1, r

def randomized_quick_sort(a, l, r):
    if l >= r:
        return
    k = random.randint(l, r)
    a[r], a[k] = a[k], a[r]

    m, n = partition3(a, l, r)

    randomized_quick_sort(a, l, m);
    randomized_quick_sort(a, n, r);


if __name__ == '__main__':
    input = input()
    n, a = 5, [2, 3, 9, 2, 2]
    randomized_quick_sort(a, 0, n - 1)
    for x in a:
        print(x, end=' ')
