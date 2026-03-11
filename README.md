# Portfolio: Christian Buchholz - Fullstack-Entwickler

Die offizielle Landingpage und Portfolio-Website von Christian Buchholz. Ein Schaufenster für technisches Handwerk, kreatives Design und interaktive Web-Erlebnisse.

## Features

- **Personal Branding**: Vorstellung der Vision ("Wo Logik auf kreatives CSS trifft") und der professionellen Stärken.
- **Interaktive Skill-Ansicht**: 
  - Dynamische Info-Platten, die bei Mouseover Details zu verschiedenen Fachbereichen (z.B. "Clean Code", "Mobile First", "Animation Enthusiast") einblenden.
  - Horizontales Mausrad-Scrolling für den Technologie-Container.
- **Projekt-Galerie (Code in Action)**: 
  - Showcase aktueller Projekte (LoginCard, Taschenrechner, ToDo-Liste usw.).
  - Detail-Overlays mit Informationen zur technischen Umsetzung (CSS/JS Fokus) via Info-Icons.
  - Direkte Verknüpfung zu GitHub-Repositories.
- **Hochwertige Animationen**:
  - **Intersection Observer**: Elemente werden beim Scrollen animiert eingeblendet.
  - **Keyframe-Effekte**: Komplexe Skalierungs- und Unschärfe-Effekte (`popup`, `scale`, `runin`).
  - **Parallax-ähnliche Hintergründe**: Verwendung von `radial-gradient` und fixierten Hintergründen.
- **Snap-Scrolling**: Vertikale Sektionen rasten beim Scrollen ein für eine fokussierte Führung durch die Seite.

## Technologien

- **Frontend**:
  - **HTML5**: Semantische Struktur für SEO und Barrierefreiheit.
  - **CSS3 Professional**:
    - **Grid & Flexbox**: Komplexe Layouts für die Skill-Matrix und Galerie.
    - **Custom Properties (Variables)**: Zentrales Farb- und Design-Management.
    - **Mobile First & Clamp**: Fluide Schriftgrößen und Container-Breiten.
- **Logik**:
  - **Vanilla JavaScript (ES6+)**:
    - Intersection Observer API für Performance-optimierte Scroll-Trigger.
    - DOM-Manipulation für dynamische Inhalte und die Galerie-Steuerung.
    - Konvertierung von vertikalem zu horizontalem Scrollen.
- **Assets**: SVG-Vektoren für Logos und grafische Elemente (Blobs).

## Projektstruktur

- `index.html`: Das Haupt-Layout der Landingpage.
- `style.css`: Umfassendes Design-System mit über 600 Zeilen CSS, spezialisiert auf Animationen und Layout-Grids.
- `script.js`: Die gesamte Interaktionslogik, unterteilt in Observer, Info-Platten und Galerie-Navigation.
- `Img/`: Sammlung aller Bild-Ressourcen und SVG-Icons.
- `.git/`: Versionsverwaltung.

## Installation & Vorschau

1. Klone das Repository oder lade die Dateien herunter.
2. Öffne die `index.html` in einem modernen Webbrowser.
3. Scrolle durch die Sektionen, um das Snap-Scrolling und die Einblende-Animationen zu erleben.
4. Interagiere mit der Skill-Matrix und der Projekt-Galerie für detaillierte Einblicke.

---
*Persönliches Portfolio von Christian Buchholz.*
