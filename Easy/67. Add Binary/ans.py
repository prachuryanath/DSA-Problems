class Solution(object):
    def addBinary(self, a: str, b: str) -> str:
    # Convert the given strings to int and add them. Then return bin value of result.
            return bin(int(a,2)+int(b,2))[2:]
