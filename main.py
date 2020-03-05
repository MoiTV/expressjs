while True:
    try:
        age = int(input('enter a number '))
        print(10/age)
        raise Exception('cut it out')
    except ZeroDivisionError:
        print('cant do zero')
    else:
        print('thank you')
        break
    finally:
        print('i always run')
    print('i was an idiot')
