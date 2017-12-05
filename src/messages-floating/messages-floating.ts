import { Component, Input } from "@angular/core";

@Component({
	'selector': 'messages-floating',
	template:'<div>{{text}}</div>'
})
export class MessagesFloating {
	
	@Input() text: string;	
	
	constructor() {}
}