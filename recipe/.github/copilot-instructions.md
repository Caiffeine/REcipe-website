## Agent behavior / file generation policy

- Do NOT create new Markdown documentation files (e.g., `.md`, `.markdown`) automatically after giving a response. Only generate or add documentation files when explicitly instructed to do so by a human reviewer. You may update or edit existing docs if asked, but avoid creating standalone docs as part of routine code edits or example responses.
- Do NOT run formatting or linting commands automatically (e.g., `npm run format`, `npm run lint`, `vendor\\bin\\pint`). Only run these if explicitly requested by the user.
- Do NOT add emojis in generated comments, commit messages, PR descriptions, or inline code comments produced by the AI. Use plain, professional text only.

## Frontend development conventions

### UI design principles

Apply these principles consistently when building or modifying interfaces:

- **Hierarchy:** Use font size, weight, color contrast, and spacing to guide user attention toward important information and primary actions. Create logical, intuitive navigation patterns.
- **Progressive Disclosure:** Present information step-by-step to avoid overwhelming users. Use accordions, tabs, or multi-step forms to break complex interfaces into manageable sections.
- **Consistency:** Maintain uniform design patterns throughout the app — consistent colors, typography, button styles, spacing, and interaction behaviors. Similar elements should look and behave the same way to reduce cognitive load.
- **Simplicity:** Prioritize ease of use and straightforward navigation. Remove unnecessary elements and avoid visual clutter that doesn't serve user goals.
- **Visibility:** Make critical tasks, options, and system feedback immediately visible. Ensure success/error messages, loading states, and confirmation dialogs are clear and timely.
- **Feedback:** Provide immediate, clear responses to user actions through visual cues, animations, loading indicators, button state changes, and toast notifications.
- **Accessibility:** Design for all users, including those with disabilities. Implement keyboard navigation, ARIA labels, sufficient color contrast, and screen reader compatibility.
- **Clarity:** Favor clear communication over decorative elements. Use plain language, intuitive icons, and straightforward layouts that help users complete tasks without confusion.

### UX design principles

Follow these user experience principles when making design decisions:

- **User-Centered Design:** Base decisions on real user needs, behaviors, and feedback. Involve users in testing and iterate based on their experiences.
- **Efficiency:** Optimize navigation flows and page performance. Minimize steps, reduce loading times, and streamline common workflows so users complete tasks quickly.
- **Error Prevention and Recovery:** Design interfaces that minimize mistakes (e.g., confirmation dialogs for destructive actions). When errors occur, provide helpful, actionable guidance for recovery.
- **Match System to Real World:** Use familiar language, metaphors, and interaction patterns that align with users' mental models. Avoid technical jargon in user-facing interfaces.
- **Recognition Over Recall:** Make options, information, and next steps visible rather than requiring users to remember details. Use tooltips, placeholders, and contextual help to reduce memory burden.
- **Aesthetic and Minimalist Design:** Focus on essential elements that support user goals. Remove or hide secondary information to keep interfaces clean and focused.

### Modern UI/UX trends and standards (2025)

Modern design in 2025 emphasizes immersive, adaptive, AI-integrated, and user-centric experiences that balance aesthetics with functionality.

**Key trends to incorporate:**

- **AI-Integrated Design:** Adapt interfaces in real-time to user behavior and preferences. Enable voice and gesture interactions where appropriate.
- **Immersive 3D and Spatial Design:** Use interactive 3D elements and spatial layouts to bring depth and realism, enhancing engagement especially in AR/VR contexts.
- **Cross-Platform and Responsive UX:** Ensure seamless experiences across all devices including larger screens. Consider location-based personalization to improve relevance.
- **Emotionally Intelligent Design:** Focus on empathy, user emotions, and inclusivity to create supportive, adaptable, and ethical user experiences.
- **Minimalism and Clean Interfaces:** Maintain clean interfaces with minimal visual clutter. Reduce reliance on traditional screen elements through intuitive interactions.
- **Modern Skeuomorphism:** Blend subtle skeuomorphic details with flat design principles to add visual interest without overwhelming simplicity.
- **Accessibility and Inclusivity:** Create accessible designs that serve diverse user needs. Make inclusive UX a core standard, not an afterthought.

**Standards emphasized:**

- **User-Centered and Personalized:** Designs adapted to individual users for intuitive, frictionless experiences.
- **Consistency and Usability:** Maintain familiar patterns and clear feedback for efficient, predictable interactions.
- **Ethical Responsibility:** Ensure transparency around data use and privacy. Avoid manipulative dark patterns.
- **Performance and Responsiveness:** Fast, smooth interfaces optimized for multiple devices and network conditions.

### GSAP scroll animations: Best practices

GSAP (GreenSock Animation Platform) with ScrollTrigger is the industry standard for creating smooth, performant scroll-based animations in 2025.

**Key GSAP scroll techniques:**

- **Hero Section Cinematic Reveals:** Create layered text animations, masking effects, multi-object parallax, and coordinated scroll reveals for powerful first impressions. Use SplitText plugin to animate titles character-by-character or word-by-word.
- **Scroll-Linked Storytelling:** Pin sections in place while animating elements within them. Scrub animations based on scroll position and orchestrate background color transitions, chart reveals, and parallax effects for immersive narratives.
- **Smooth Enter/Exit Effects:** Trigger animations when elements enter or leave the viewport with natural easing curves and staggered timing for multiple items.

**GSAP implementation standards:**

- Apply `scrub` option to sync animations with scroll position for interactive control.
- Use `pin` to hold sections while animations play through.
- Set `toggleActions` to control animation behavior on scroll direction changes.
- Create reusable custom hooks (`useGsapAnimation`, `useScrollAnimate`) for React projects.
- Use `matchMedia` for responsive animations that adapt to different screen sizes.

**Performance optimization:**

- Use hardware-accelerated properties (transforms, opacity) only.
- Avoid mixing CSS transitions with GSAP animations.
- Set `will-change` in CSS for elements being animated.
- Profile animations in Chrome DevTools and optimize for mobile performance.
- Test to maintain 60fps on mobile devices.

**Accessibility compliance:**

- Respect `prefers-reduced-motion` user preferences.
- Use GSAP callbacks to automatically disable or simplify animations for users who prefer reduced motion.

### Micro-interactions and animations

Micro-interactions are subtle, functional animations that provide feedback, guide users, and add personality to interfaces. They transform routine tasks into enjoyable moments.

**Types of effective micro-interactions:**

- **Button Animations:** Press effects, loading spinners, success confirmations, and hover state transitions that provide immediate feedback.
- **Gestural Feedback:** Visual responses to swipes, pinches, drags, and touches that mimic real-world physics.
- **Interactive Visual Feedback:** Hover effects, toggle switches, form validation messages, and real-time data visualization responses.
- **Celebratory Moments:** Confetti animations, success badges, or playful elements when users complete goals.
- **Pull-to-Refresh and Loading States:** Smooth, engaging transitions that communicate system status clearly.

**Design principles for micro-interactions:**

- **Purposeful, Not Decorative:** Every animation must serve a functional purpose—provide feedback, guide attention, or communicate status.
- **Subtle and Quick:** Keep animations under 300ms for interactions, up to 500ms for transitions. They should feel instant, not sluggish.
- **Natural Motion:** Use easing curves that mimic real-world physics (ease-out for entries, ease-in for exits).
- **Consistent Language:** Maintain uniform animation styles, timing, and behavior across the entire interface.
- **Performance-First:** Use CSS transforms and opacity. Avoid animating layout properties like width, height, top, left, or margin.

**Implementation guidelines:**

- Use GSAP for complex, coordinated micro-interactions requiring precise timing and control.
- Leverage CSS transitions for simple hover states and toggles.
- Combine GSAP timelines with state management in React for interactive UI components.
- Test on mobile devices to ensure smooth 60fps performance across all interactions.
- Keep animation logic organized in custom hooks or utility functions for reusability.

Together, GSAP scroll animations create dramatic, scroll-driven storytelling moments, while micro-interactions polish every touchpoint with responsive, delightful feedback—both essential for award-winning websites in 2025.

### Redundancy check

Summary of overlaps with the existing instructions in this document:

- The file already included a concise "Frontend structure (resources/js/)" section and guidance to keep business logic in services and use `resources/js/types/` for types — the new content expands these principles with concrete UI/UX, animation and tooling standards rather than replacing them.
- There is no modification of existing text; the new section is appended and explicitly complements existing guidance (adds design patterns, GSAP best practices, animation/accessibility standards, and UX principles).

No existing instructions were altered; this addition is intentionally additive and references the same directories and conventions already described earlier to avoid contradiction.

