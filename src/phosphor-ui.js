/*
 * PhosphorUI - Explore the retro futuism
 * v1.0.0
 * Concept: Light, Pragmatic, Retro-Future
 * Author: Robert Y. Stanford(gh@RYSF13)
 * License: MIT
 */

(function(global) {
	var PhosphorUI = {
		// Initialization entry point
		init: function() {
			this.initAnimations();
			this.initSidebar();
			this.initDismissibles();
			this.initTabs();
			this.initModals();
			console.log("[PhosphorUI] System Online");
		},

		initAnimations: function() {
			const observerOptions = {
				threshold: 0.05, // Lower threshold to trigger sooner
				rootMargin: "0px 0px 100px 0px" // Pre-load elements 100px before they appear
			};

			const observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target); // Animate only once
					}
				});
			}, observerOptions);

			// Target core structural elements
			const targets = document.querySelectorAll('.ph-block, .ph-heading, .ph-columns, .ph-banner, .ph-datatable, .ph-timeline-item');
			targets.forEach(el => {
				el.classList.add('ph-animate-scroll');
				observer.observe(el);
			});

			// Navbar fades in separately
			const header = document.querySelector('.ph-pageheader');
			if (header) {
				header.classList.add('ph-animate-fade');
				// Small delay to ensure CSS is ready
				setTimeout(() => header.classList.add('visible'), 100);
			}
		},

		// Mobile Sidebar Interaction
		initSidebar: function() {
			const toggle = document.querySelector('.ph-mobile-toggle');
			const sidebar = document.querySelector('.ph-sidebar');

			if (toggle && sidebar) {
				toggle.addEventListener('click', (e) => {
					e.stopPropagation(); // Prevent immediate close
					sidebar.classList.toggle('active');

					// Toggle Icon
					const icon = toggle.querySelector('i');
					if (sidebar.classList.contains('active')) {
						icon.classList.replace('ri-menu-line', 'ri-close-fill');
					} else {
						icon.classList.replace('ri-close-fill', 'ri-menu-line');
					}
				});

				// Close sidebar when clicking outside on mobile
				document.addEventListener('click', (e) => {
					if (window.innerWidth < 768 &&
						sidebar.classList.contains('active') &&
						!sidebar.contains(e.target) &&
						e.target !== toggle) {
						sidebar.classList.remove('active');
						const icon = toggle.querySelector('i');
						icon.classList.replace('ri-close-fill', 'ri-menu-line');
					}
				});
			}
		},

		// Dismissible elements (e.g., Banners)
		initDismissibles: function() {
			document.querySelectorAll('.ph-banner-close').forEach(btn => {
				btn.addEventListener('click', function() {
					const banner = this.closest('.ph-banner');
					if (banner) banner.style.display = 'none';
				});
			});
		},

		// Tab / Segmented Control Logic
		initTabs: function() {
			document.querySelectorAll('.ph-segmentedcontrol').forEach(control => {
				const btns = control.querySelectorAll('.ph-segment-btn');
				btns.forEach(btn => {
					btn.addEventListener('click', function() {
						btns.forEach(b => b.classList.remove('active'));
						this.classList.add('active');
					});
				});
			});
		},

		// Modal / Overlay Logic
		initModals: function() {
			// Open Triggers
			document.querySelectorAll('[data-ph-toggle="modal"]').forEach(trigger => {
				trigger.addEventListener('click', function() {
					const targetId = this.getAttribute('data-ph-target');
					const modal = document.getElementById(targetId);
					if (modal) Phosphor.openModal(modal);
				});
			});

			// Close logic
			document.querySelectorAll('.ph-overlay').forEach(overlay => {
				overlay.addEventListener('click', function(e) {
					if (e.target === this) Phosphor.closeModal(this);
				});
			});

			document.querySelectorAll('[data-ph-dismiss="modal"]').forEach(btn => {
				btn.addEventListener('click', function() {
					const modal = this.closest('.ph-overlay');
					Phosphor.closeModal(modal);
				});
			});
		},

		// Open Modal
		openModal: function(modalElement) {
			if (modalElement) {
				modalElement.classList.add('active');
				document.body.style.overflow = 'hidden'; // Lock background scroll
			}
		},

		// Close Modal
		closeModal: function(modalElement) {
			if (modalElement) {
				modalElement.classList.remove('active');
				document.body.style.overflow = ''; // Restore background scroll
			}
		},

		// Toggle Switch Programmatically
		toggleSwitch: function(switchId) {
			const el = document.getElementById(switchId);
			if (el) el.checked = !el.checked;
		}
	};

	window.phui = window.PhosphorUI = PhosphorUI;

})(typeof window !== "undefined" ? window : this)

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
	PhosphorUI.init();
});