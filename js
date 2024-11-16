#include<stdio.h>
#include<stdlib.h>

struct node
{
int data;
struct node*next;
};
struct node *start=NULL;
void insertAtB(int);
void insertAtE(int);
void showAll();
int ispalindrome(int);

void main()
{
insertAtE(2);
insertAtE(5);
insertAtE(2);
showAll();
}
 struct node*cn(int x)
{
 struct node*temp=malloc(sizeof (struct node));
 temp->data=x;
 return temp;
}
 void insertAtB(int x)
{
 struct node*temp=cn(x);
   if (temp==NULL)
 {
 printf("no space\n");
 }
 temp->next=NULL;
 start=temp;
 }
 void insertAtE(int x)
 {
 if (start==NULL)
 {
 insertAtB(x);
 return;
 }
 struct node*temp1=start;
 
 while(temp1->next!=NULL)
 {
 temp1=temp1->next;
 }
 struct node*temp=cn(x);
 temp->next=NULL;
 temp1->next=temp;
 }
 void showAll()
 {
 int n=0;
 struct node*temp1=start;
 while(temp1!=NULL)
 {
 n=n*10+temp1->data;
 temp1=temp1->next;
 }
 if (ispalindrome(n))
 {
 printf("list is palindrome\n");
 }
 else
 {
 printf("lisr is not palindrome\n");
 }
 }
 int ispalindrome(int n)
 {
 int n1=n;
 int a,s=0;
 while(n!=0)
 {
 a=n%10;
 s=s*10+a;
 n=n/10;
 }
 if (n1==s)return 1;
 return 0;
 }
