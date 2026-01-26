# Professional Portfolio Template

A clean, modern, and open-source portfolio template designed for professionals. Built with semantic HTML5, modern CSS3, and vanilla JavaScript. No frameworks, no build steps required—just fork and go.

![Portfolio Preview](https://api.dicebear.com/9.x/avataaars/svg?seed=Professional)

## Features

-   **Responsive Design**: Flawless experience on Mobile, Tablet, and Desktop.
-   **Dark/Light Mode**: Automatic system detection with a user-controlled toggle.
-   **SEO Optimized**: Pre-configured meta tags for search engines and social media.
-   **No Dependencies**: Pure HTML/CSS/JS. fast loading and easy to host.
-   **Privacy Focused**: No tracking scripts included.

## Quick Start

1.  **Fork this repository.**
2.  **Clone it locally:**
    ```bash
    git clone https://github.com/LehlohonoloHope/OnlineProfile.git
    ```
3.  **Open `index.html`** in your browser to preview.

## Customization Guide

### 1. Personal Information
Open `index.html` and look for the comments. You should update:
-   The `<title>` tag.
-   The `<h1>` (Name) and `<h2>` (Job Title).
-   The `.bio` paragraph.
-   The social links in `.social-links`.

### 2. Profile Image
We use [Dicebear](https://dicebear.com) for the placeholder avatar. To use your own image:
1.  Place your photo (e.g., `me.jpg`) in `assets/images/`.
2.  Update the `<img>` tag in `index.html`:
    ```html
    <img src="assets/images/me.jpg" alt="Your Name">
    ```

### 3. SEO Configuration
Edit the `<head>` section in `index.html` to ensure your portfolio looks great when shared:
```html
<meta name="description" content="Your custom description here.">
<meta property="og:title" content="Your Name - Portfolio">
<!-- Update the URL to your deployed site -->
<meta property="og:url" content="https://yourusername.github.io/">
```

### 4. Skills & Awards
Modify the HTML content inside the `<section id="skills">` and `<section id="awards">` blocks. The CSS will automatically handle the grid layout for any number of items.

## Deployment

This template is ready for **GitHub Pages**.
1.  Go to your repository **Settings**.
2.  Navigate to **Pages**.
3.  Select `main` branch as the source.
4.  Save!

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

-   Template maintained by [@LehlohonoloHope](https://github.com/LehlohonoloHope).
-   Icons by [Font Awesome](https://fontawesome.com).
-   Avatars by [Dicebear](https://dicebear.com).
