//console.log("roshan")
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.rigth=null;
    }
}
//var show=new Node();
//console.log(show)
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
 makeTree(value){
    let newNode=new Node(value);
   if(this.root==null){
    this.root=newNode;
   }
   else{
    this.insertNode(this.root,newNode)
   }
 } 
 insertNode(root,newNode){
    if(root.value>newNode.value){
        if(root.left==null){
            root.left=newNode;
        }
        else{
            this.insertNode(root.left,newNode);
        }
    }
    else{
       
            if(root.right==null){
                root.right=newNode;
            }
            else{
                this.insertNode(root.right,newNode);
            }
        
    }


 }
 search(root,data){
    if(root==null){
        return false;
    }
    else if(root.value==data){
        return true;
    }
    else if(root.value>data){
        return this.search(root.left,data)
    }
    else {
        return this.search(root.right,data)
    }

 }
}
var bst=new BinarySearchTree();
bst.makeTree(20)
//console.log(bst.makeTree(10))
bst.makeTree(10)
bst.makeTree(5)
bst.makeTree(30)
bst.makeTree(50)


  console.log(bst.root)
  console.log(bst.search(bst.root,50))