# Uses python3
import sys
import time


def get_change(i):
    #write your code here
    r = i
    coins = [10, 5, 1]
    nc, counter, pivot = 0, 0, 0

    while(r != 0 and counter != len(coins)):
        c = coins[counter]
        if(r >= c):
            nc += r//c
            r = r%c
            counter += 1
        elif (counter == len(coins) -1) and (r > 0) and (pivot < counter) :
            r = i
            nc = 0
            pivot = pivot+1
            counter = pivot
        else:
            counter +=1

    return nc

if __name__ == '__main__':
    i = int(input())
    start = time.time()
    end = time.time()
    print(f"time taken, {end - start}")
    start = time.time()
    print('result', get_change(i))
    end = time.time()
    print(f"time taken, {end - start}")
