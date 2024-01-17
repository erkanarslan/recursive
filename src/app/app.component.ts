import { Component } from '@angular/core';
import { TreeNode, root } from './tree';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'recursive';
	root = root;
}
