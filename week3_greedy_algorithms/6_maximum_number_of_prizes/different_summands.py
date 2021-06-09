# Uses python3
import sys

def optimal_summands(n):
    summatory = 0
    currentHighestPrize = 1
    highestPrizeFound = False
    listPrizes = []

    while not highestPrizeFound :
        futurePrize = n - currentHighestPrize - summatory

        if futurePrize > currentHighestPrize :
            listPrizes.append(currentHighestPrize)
            summatory += currentHighestPrize
            currentHighestPrize += 1
        else :
            listPrizes.append(n - summatory)
            highestPrizeFound = True

    return listPrizes

if __name__ == '__main__':
    input = input()
    n = int(input)
    summands = optimal_summands(n)
    print(len(summands))
    for x in summands:
        print(x, end=' ')
