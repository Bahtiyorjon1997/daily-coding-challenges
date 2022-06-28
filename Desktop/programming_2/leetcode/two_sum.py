class Solution:
    def twoSum(self, nums, target):
        num = 0
        len_of_list = len(nums)
        while num < len(nums):
            for j in range(num+1, len_of_list):
                if nums[num] + nums[j] == target:
                    return [num, j]
            num=+1

# ---- test cases ----
# 1
instance1 = Solution()
print(instance1.twoSum([1, 2, 3, 4], 4))
# 2
instance1 = Solution()
print(instance1.twoSum([4, 5, 6, 7], 12))
