arr1 = [4, 10, 6, 9, 15, 18]

def FizzBuzz(arr):
    counter = []
    counter1 = []
    for elem in arr:
        for i in range(1, elem + 1):
            if i%3 == 0 and i % 5 == 0:
                counter.append("FizzBuzz")
            elif i % 3 == 0:
                counter.append("Fizz")
            elif i % 5 == 0:
                counter.append("Buzz")
            else:
                counter.append(i)
        counter1.append(counter)
        counter = []

    return counter1


print(FizzBuzz(arr1))