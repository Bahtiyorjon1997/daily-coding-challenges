class Solution:
    def romanToInt(self, s: str) -> int:
        tr_dict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        sum = tr_dict[s[0]]
        counter = 1
        last_step_added = False

        for i in range(len(s)):
            if len(s) - i == 1 or counter >= len(s):
                break
            if tr_dict[s[i]] >= tr_dict[s[counter]]:
                sum = sum + tr_dict[s[counter]]
                counter += 1
                last_step_added = True
            elif tr_dict[s[i]] < tr_dict[s[counter]] and not last_step_added:
                sum = tr_dict[s[counter]] - tr_dict[s[i]]
                counter += 1
            elif tr_dict[s[i]] < tr_dict[s[counter]] and last_step_added:
                sum = sum + tr_dict[s[counter]] - tr_dict[s[i]] * 2
                last_step_added = False
                counter += 1
        return sum
