# Uses python3
import sys

def get_optimal_value(capacity, weights, values):

    # write your code here
    costs = [int(v) / int(w) for v, w in zip(values, weights)]

    listItems = sorted(zip(values, weights, costs),
                       key=lambda x: x[2], reverse=True)
    ## Indexes
    v, w, uv = 0, 1, 2

    residual = capacity
    pivot = 0
    fc = 0

    while residual > 0:
        weightAvailableItem = listItems[pivot][w]
        unitValueAvailableItem = listItems[pivot][uv]

        if residual >= weightAvailableItem:
            residual = residual - weightAvailableItem
            fc += unitValueAvailableItem * weightAvailableItem
            pivot = pivot + 1
        else:
            fc += residual * unitValueAvailableItem
            residual = 0

    return fc


if __name__ == "__main__":
    data = list(map(int, input().split()))
    n, capacity = 1, 10
    values = [500]
    weights = [30]
    opt_value = get_optimal_value(capacity, weights, values)
    print("{:.4f}".format(opt_value))
