class Solution(object):
    def romanToInt(self, s):
            pair={"I":1,"IV":4,"V":5,"IX":9,"X":10,"XL":40,"L":50,"XC":90,"C":100,"CD":400,"D":500,"CM":900,"M":1000}
            if s in pair.keys():
                return(pair[s])
            else:
                res = 0
                for i in range(len(s)-1):
                    if pair[s[i]] >= pair[s[i+1]]:  #If element at curr loc is larg than elem at next loc
                        res += pair[s[i]]           #String concat
                    else:
                        res -= pair[s[i]]
                res += pair[s[-1]]                  #for last element concat
                return res