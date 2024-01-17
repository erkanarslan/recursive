let node1: TreeNode = { label: 1, children: [], parent: null }
let node2: TreeNode = { label: 2, children: [], parent: null }
let node3: TreeNode = { label: 3, children: [], parent: null }
let node4: TreeNode = { label: 4, children: [], parent: null }
let node5: TreeNode = { label: 5, children: [], parent: null }
let node6: TreeNode = { label: 6, children: [], parent: null }
let node7: TreeNode = { label: 7, children: [], parent: null }
let node8: TreeNode = { label: 8, children: [], parent: null }
let node9: TreeNode = { label: 9, children: [], parent: null }

node1.children.push(node3, node9);
node2.parent = node3;
node3.parent = node1;
node3.children.push(node2);
node2.children.push(node4, node5);
node4.parent = node2;
node5.parent = node2;
node5.children.push(node6, node7, node8);
node6.parent = node5;
node7.parent = node5;
node8.parent = node5;
node9.parent = node1;

export const root = node1;

export type TreeNode = {
	label: number;
	children: TreeNode[];
	parent: TreeNode | null;
}
