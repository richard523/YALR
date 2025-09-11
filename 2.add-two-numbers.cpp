/*
 * @lc app=leetcode id=2 lang=cpp
 *
 * [2] Add Two Numbers
 */
#include <iostream>
#include <vector>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode(0);
        ListNode* curr = dummy;
        int carry = 0;
        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int sum = carry;
            if (l1 != nullptr) {
                sum += l1->val;
                l1 = l1->next;
            }
            if (l2 != nullptr) {
                sum += l2->val;
                l2 = l2->next;
            }
            carry = sum / 10;
            curr->next = new ListNode(sum % 10);
            curr = curr->next;
        }
        return dummy->next;
    }
};
// @lc code=end


// Helper function to create a linked list from a vector
ListNode* createList(const std::vector<int>& nums) {
    if (nums.empty()) {
        return nullptr;
    }
    ListNode* dummy = new ListNode(0);
    ListNode* curr = dummy;
    for (int num : nums) {
        curr->next = new ListNode(num);
        curr = curr->next;
    }
    return dummy->next;
}

// Helper function to print a linked list
void printList(ListNode* head) {
    ListNode* curr = head;
    while (curr != nullptr) {
        std::cout << curr->val;
        if (curr->next != nullptr) {
            std::cout << " -> ";
        }
        curr = curr->next;
    }
    std::cout << std::endl;
}

int main() {
    Solution sol;

    // Test Case 1: Basic addition with no carry
    std::cout << "--- Test Case 1: Basic Addition ---" << std::endl;
    std::vector<int> nums1_1 = {2, 4, 3};
    std::vector<int> nums1_2 = {5, 6, 4};
    ListNode* l1_1 = createList(nums1_1);
    ListNode* l1_2 = createList(nums1_2);
    ListNode* result1 = sol.addTwoNumbers(l1_1, l1_2);
    std::cout << "Input 1: ";
    printList(l1_1);
    std::cout << "Input 2: ";
    printList(l1_2);
    std::cout << "Result:  ";
    printList(result1);
    std::cout << std::endl;

    // Test Case 2: Lists of different lengths
    std::cout << "--- Test Case 2: Different Lengths ---" << std::endl;
    std::vector<int> nums2_1 = {9, 9, 9, 9};
    std::vector<int> nums2_2 = {9, 9};
    ListNode* l2_1 = createList(nums2_1);
    ListNode* l2_2 = createList(nums2_2);
    ListNode* result2 = sol.addTwoNumbers(l2_1, l2_2);
    std::cout << "Input 1: ";
    printList(l2_1);
    std::cout << "Input 2: ";
    printList(l2_2);
    std::cout << "Result:  ";
    printList(result2);
    std::cout << std::endl;

    // Test Case 3: Addition with a final carry
    std::cout << "--- Test Case 3: Final Carry ---" << std::endl;
    std::vector<int> nums3_1 = {9, 9, 9, 9};
    std::vector<int> nums3_2 = {1};
    ListNode* l3_1 = createList(nums3_1);
    ListNode* l3_2 = createList(nums3_2);
    ListNode* result3 = sol.addTwoNumbers(l3_1, l3_2);
    std::cout << "Input 1: ";
    printList(l3_1);
    std::cout << "Input 2: ";
    printList(l3_2);
    std::cout << "Result:  ";
    printList(result3);
    std::cout << std::endl;

    // Test Case 4: Zeroes as input
    std::cout << "--- Test Case 4: Zeroes ---" << std::endl;
    std::vector<int> nums4_1 = {0};
    std::vector<int> nums4_2 = {0};
    ListNode* l4_1 = createList(nums4_1);
    ListNode* l4_2 = createList(nums4_2);
    ListNode* result4 = sol.addTwoNumbers(l4_1, l4_2);
    std::cout << "Input 1: ";
    printList(l4_1);
    std::cout << "Input 2: ";
    printList(l4_2);
    std::cout << "Result:  ";
    printList(result4);
    std::cout << std::endl;
    
    // Test Case 5: One empty list (if the problem allowed it)
    // Note: LeetCode's constraints typically ensure lists are non-empty,
    // but testing this case is good practice.
    std::cout << "--- Test Case 5: One Empty List ---" << std::endl;
    std::vector<int> nums5_1 = {1, 8};
    std::vector<int> nums5_2 = {}; // Empty list
    ListNode* l5_1 = createList(nums5_1);
    ListNode* l5_2 = createList(nums5_2);
    ListNode* result5 = sol.addTwoNumbers(l5_1, l5_2);
    std::cout << "Input 1: ";
    printList(l5_1);
    std::cout << "Input 2: (empty list)" << std::endl;
    std::cout << "Result:  ";
    printList(result5);
    std::cout << std::endl;

    return 0;
}