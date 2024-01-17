import { Component, Input } from '@angular/core';
import { TreeNode } from '../tree';

@Component({
	selector: 'app-hierarchy',
	templateUrl: './hierarchy.component.html',
	styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent {
	@Input() node!: TreeNode;
}
