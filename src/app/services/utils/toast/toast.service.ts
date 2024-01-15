import { Injectable } from '@angular/core';
import { Toast } from '../../../models/common/toast/Toast';

@Injectable({ 
    providedIn: 'root' 
})
export class ToastService {
	toasts: Toast[] = [];

	info(message: string) {
		this.toasts.push(new Toast(
			"Information",
			"bg-primary text-white",
			message
		));
	}

	success(message: string) {
		this.toasts.push(new Toast(
			"Success",
			"bg-success text-white",
			message
		));
	}

	error(message: string) {
		this.toasts.push(new Toast(
			"Error",
			"bg-danger text-white",
			message
		));
	}

	warning(message: string) {
		this.toasts.push(new Toast(
			"Warning",
			"bg-warning",
			message
		));
	}

	remove(toast: Toast) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}