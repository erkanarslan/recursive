import { Component, Input } from '@angular/core';
import { TreeNode } from '../tree';

const unitWidth = 120;

@Component({
	selector: 'app-hierarchy-horizontal',
	templateUrl: './hierarchy-horizontal.component.html',
	styleUrls: ['./hierarchy-horizontal.component.scss']
})
export class HierarchyHorizontalComponent {
	@Input() node!: TreeNode;
	left = 0;

	hLine = { left: 0, width: 0 };
	vLineLeft = 0;

	ngOnInit() {
		this.left = this.getInternalNodePos(this.node) - unitWidth / 2 + 10;

		if (this.node.children.length) {
			// Horizontal line styles
			let firstChildPos = this.getNodePosition(this.node, this.node.children[0]);
			this.hLine.left = firstChildPos

			let lastChildPos = this.getNodePosition(this.node, this.node.children.at(-1)!);
			this.hLine.width = lastChildPos - firstChildPos;
		}

		// To-Parent line styles
		this.vLineLeft = this.getInternalNodePos(this.node);
	}

	getWidthOfNode(node: TreeNode): number {
		if (!node.children.length) return unitWidth;

		let total = 0;
		for (let child of node.children) {
			total += this.getWidthOfNode(child);
		}

		return total;
	}

	getInternalNodePos(node: TreeNode): number {
		if (!node.children.length) return unitWidth / 2;

		let firstChildPosition = this.getInternalNodePos(node.children[0]);
		let lastChildPosition = this.getNodePosition(node, node.children.at(-1)!);

		return (firstChildPosition + lastChildPosition) / 2;
	}

	/**
	 * Gets the position of a node relative to its parent's box
	 * @param parent
	 * @param node
	 * @returns
	 */
	getNodePosition(parent: TreeNode, node: TreeNode): number {
		let internalPos = this.getInternalNodePos(node);
		let prevSiblingsWidth = 0;
		for (let sibling of parent.children) {
			if (sibling == node) break;
			prevSiblingsWidth += this.getWidthOfNode(sibling);
		}

		return prevSiblingsWidth + internalPos;
	}
}
