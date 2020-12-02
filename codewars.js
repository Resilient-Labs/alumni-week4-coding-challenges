var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
   for(let i=0; i<A.length; i++){
       if(A[i]%2===0){
           even.push(A[i]);
       }else{
           odd.push(A[i]);
       }
   }
   let result = even.concat(odd);
}

function nextHappyYear(year){
    let numSet = new Set();
    while(numSet.size!==4){
      //resetting Set to size=0 in order to prepare for next year++
      numSet = new Set();
      year++
      let newArr = year.toString().split('').map(Number);
      newArr.map(x=>numSet.add(x));
    }
    return parseInt([...numSet].join(''));
  }

      var maxPower = function(s) {   
        let counter = 0;
        let max = 0;      
        for(let i=0; i<s.length; i++){
            if(s[i]===(s[i-1] || s[0])){
                counter++;
            }else{
                max = Math.max(max, counter);
                counter = 1;
            }
        }
        return Math.max(counter, max);
    
    };

    var climbStairs = function(n) {
        let sqrt5=Math.sqrt(5);
        let fibn=Math.pow((1+sqrt5)/2,n+1)-Math.pow((1-sqrt5)/2,n+1);
        return (fibn/sqrt5);
    };

    var reverseString = function(s) {
   
        for(let i = 0, temp; i < s.length/2 ; i++){
            temp = s[i];
            s[i] = s[s.length-i-1];
            s[s.length-i-1] = temp;
        }
         return s;
        
    };

    var twoSum = function(nums, target) {
        for(let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++){
                if(nums[j] == target-nums[i]){
                    return [i, j]
                }
            }     
        }
        return [0,0];
    };

    var swapPairs = function(head) {
        if (!head || !head.next) {
            return head;
        }  
        const second = head;
        const first = head.next;
        const rest = head.next.next;
      
        // begin swap
        first.next = second;
        second.next = swapPairs(rest);  
        
        return first;
      };

