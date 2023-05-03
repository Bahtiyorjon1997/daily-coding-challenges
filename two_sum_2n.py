def twoSum(nums, target):
    temp_dic = {}
    
    for i in nums:
        temp_dic[i] = target - i

    list_of_values = list(temp_dic.values())

    for i in list_of_values:
        if i in nums and temp_dic[i] in nums:
            return [nums.index(temp_dic[i]), nums.index(i)]
        
print(twoSum([2, 5, 4, 7, 8], 6))
