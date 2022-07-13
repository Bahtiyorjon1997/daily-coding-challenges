# Given a non-negative integer x,
# compute and return the square root of x.

# Since the return type is an integer, 
# the decimal digits are truncated, 
# and only the integer part of the result is returned.

# Note: You are not allowed to use any built-in 
# exponent function or operator, 
# such as pow(x, 0.5) or x ** 0.5.

# Repeated Subtraction Method used

def mySqrt(x: int) -> int:
        temp = 0
        if x == 1:
            temp = temp + 1
        else:    
            for i in range(1, x, 2):
                if x >= i:
                    x = x - i
                    temp = temp + 1
        return temp  

print(mySqrt(196))
print(mySqrt(4))
print(mySqrt(625))
