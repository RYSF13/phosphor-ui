/*
 * PhosphorUI - Explore the retro futurism
 * v1.2.0
 * Concept: Light, Pragmatic, Retro-Future
 * Author: Robert Y. Stanford (gh@RYSF13)
 * License: MIT
 */

(function(global) {
	'use strict';

	const PhosphorUI = {
		// Boot sequence
		init: function() {
			this.initSidebar();
			this.initDropdowns();
			this.initModals();
			this.initFileInputs();
			this.setupToastContainer();
			console.log("[PhosphorUI v1.2.0] System Online. Awaiting inputs...");
		},

		// Mobile Navigation Toggle
		initSidebar: function() {
			const toggle = document.querySelector('.ph-mobile-toggle');
			const sidebar = document.querySelector('.ph-sidebar');

			if (toggle && sidebar) {
				toggle.addEventListener('click', (e) => {
					e.stopPropagation();
					sidebar.classList.toggle('active');
					const icon = toggle.querySelector('i');
					if(icon) {
						icon.classList.toggle('ri-menu-line');
						icon.classList.toggle('ri-close-fill');
					}
				});

				// Click outside to close drawer
				document.addEventListener('click', (e) => {
					if (window.innerWidth <= 768 && sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== toggle) {
						sidebar.classList.remove('active');
						const icon = toggle.querySelector('i');
						if(icon) {
							icon.classList.replace('ri-close-fill', 'ri-menu-line');
						}
					}
				});
			}
		},

		// Dropdown magic. Because native selects are boring sometimes.
		initDropdowns: function() {
			document.querySelectorAll('.ph-dropdown-wrapper .ph-button').forEach(btn => {
				btn.addEventListener('click', function(e) {
					e.stopPropagation();
					const wrapper = this.parentElement;
					// Close others
					document.querySelectorAll('.ph-dropdown-wrapper.active').forEach(d => {
						if(d !== wrapper) d.classList.remove('active');
					});
					wrapper.classList.toggle('active');
				});
			});

			document.addEventListener('click', () => {
				document.querySelectorAll('.ph-dropdown-wrapper').forEach(d => d.classList.remove('active'));
			});
		},

		// Modal overlay with Focus Trap mechanism
		initModals: function() {
			document.querySelectorAll('[data-ph-toggle="modal"]').forEach(trigger => {
				trigger.addEventListener('click', function() {
					const targetId = this.getAttribute('data-ph-target');
					const modal = document.getElementById(targetId);
					if (modal) PhosphorUI.openModal(modal);
				});
			});

			document.querySelectorAll('.ph-overlay').forEach(overlay => {
				overlay.addEventListener('click', function(e) {
					// Close only if clicked exactly on the backdrop
					if (e.target === this) PhosphorUI.closeModal(this);
				});
			});

			document.querySelectorAll('[data-ph-dismiss="modal"]').forEach(btn => {
				btn.addEventListener('click', function() {
					const modal = this.closest('.ph-overlay');
					PhosphorUI.closeModal(modal);
				});
			});

			// Escape key listener for the hacker inside you
			document.addEventListener('keydown', (e) => {
				if(e.key === 'Escape') {
					const activeModal = document.querySelector('.ph-overlay.active');
					if(activeModal) PhosphorUI.closeModal(activeModal);
				}
			});
		},

		openModal: function(modalElement) {
			modalElement.classList.add('active');
			document.body.style.overflow = 'hidden'; // Lock background scroll
			
			// The notorious focus trap. Keep your keyboard users happy.
			const focusableElements = modalElement.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select');
			if(focusableElements.length > 0) {
				focusableElements[0].focus();
			}
		},

		closeModal: function(modalElement) {
			modalElement.classList.remove('active');
			document.body.style.overflow = '';
		},

		// Sync native file input name to UI
		initFileInputs: function() {
			document.querySelectorAll('input[type="file"].ph-input').forEach(input => {
				input.addEventListener('change', function(e) {
					const fileName = e.target.files[0] ? e.target.files[0].name : "NO_FILE_SELECTED";
					this.setAttribute('data-tooltip', fileName);
				});
			});
		},

		// --- Dynamic Utilities ---

		// Toast Notification System
		setupToastContainer: function() {
			if (!document.getElementById('ph-toast-container')) {
				const container = document.createElement('div');
				container.id = 'ph-toast-container';
				document.body.appendChild(container);
			}
		},

		toast: function(message, type = 'info', duration = 3000) {
			const container = document.getElementById('ph-toast-container');
			if(!container) return;

			const toast = document.createElement('div');
			toast.className = 'ph-toast';
			
			// Color mapping
			let color = 'var(--ph-cyan)';
			if(type === 'error') color = 'var(--ph-red)';
			if(type === 'warn' || type === 'warning') color = 'var(--ph-amber)';
			if(type === 'success') color = 'var(--ph-green)';
			
			toast.style.borderColor = color;
			toast.innerHTML = `<span style="color:${color}; font-weight:bold;">[${type.toUpperCase()}]</span> <span style="margin-left:10px;">${message}</span>`;
			
			container.appendChild(toast);

			// Self-destruct sequence
			setTimeout(() => {
				toast.style.opacity = '0';
				toast.style.transform = 'translateX(100%)';
				toast.style.transition = 'all 0.3s';
				setTimeout(() => toast.remove(), 300);
			}, duration);
		}
	};

	global.phui = global.PhosphorUI = PhosphorUI;

})(typeof window !== "undefined" ? window : this);

// Fire on DOM ready
document.addEventListener('DOMContentLoaded', () => {
	PhosphorUI.init();
});

/*
	    ____  __                     __               __  ______
	   / __ \/ /_  ____  _________  / /_  ____  _____/ / / /  _/
	  / /_/ / __ \/ __ \/ ___/ __ \/ __ \/ __ \/ ___/ / / // /  
	 / ____/ / / / /_/ (__  ) /_/ / / / / /_/ / /  / /_/ // /   
	/_/   /_/ /_/\____/____/ .___/_/ /_/\____/_/   \____/___/   
	                      /_/                 Robert Y. Stanford
*/