def concat(lst1, lst2):
    print(lst1+lst2)
    
concat([1, 3, 5], [2, 6, 8])#op:-[1, 3, 5, 2, 6, 8]

#Divisible by 5
def divisible_by_five(n):
    if n%5 ==0:
        return True
    else:
        return False
    
print(divisible_by_five(4))