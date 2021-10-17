Part 1:
1. values added: 20
2. final result: 20
3. values added: 20
4. There will be an error because result uses a let, which means it is not accessible outside of the block it was defined in. 
5. There will be an error because you assigned result, a const, to 0 in line 5 and a const cannot be reassigned.
6. There will be an error because you assigned result, a const, to 0 in line 5 and a const cannot be reassigned.

Part 2:
1. It will print 3 since that is what i is assigned to in the for loop and makes the for loop stop. It will not have an error since i is a var. 
2. discountedPrice is a var, so we can access it outside of the block and line 13 will print 150, since that was what was assigned to discountedPrice on the last iteration of the for loop. 
3. finalPrice is also a var, so we can access it outside of the block. Line 14 will print 150 since that was what was assigned to finalPrice on the last iteration of the block. 
4. The function will return an array with the contents [50,100,150]. These are all numbers finalPrice was assigned.
5. There will be an error because i uses a let, which means it is not accessible outside of the block it was defined in.
6. There will be an error because discountedPrice uses a let, which means it is not accessible outside of the block it was defined in.
7. There will be an error because finalPrice uses a let, which means it is not accessible outside of the block it was defined in.
8. The function will return an array with the contents [50,100,150]. These are all numbers finalPrice was assigned. Even though discounted uses a let, it is still accessible because it was defined outside of the for loop. 
9. There will be an error because i uses a let, which means it is not accessible outside of the block it was defined in.
10. It will return 3. It is a const that is not redefined and is within the same block. 
11. This will return [50,100,150], even though discounted is a const, you are not reassigning the variable simply adding to it, which will not cause an error.