// Data arrays
const institutions = [
    "Aerodynamische Versuchsanstalt (AVA)",
    "Agusta Westland (Leonardo)",
    "Airbus",
    "Alp Aviation",
    "Aselsan",
    "ATR",
    "Baykar",
    "Boeing",
    "Curtiss Aeroplane and Motor Company",
    "De Havilland",
    "Eskişehir Aircraft Factory",
    "Etimesgut Aircraft Factory",
    "Gothaer Wagonfabrik A.G.",
    "Havelsan",
    "Istanbul Technical University (ITÜ)",
    "Junkers",
    "Kayseri Aircraft Factory",
    "Lockheed Martin",
    "Nuri Demirağ Aircraft Factory",
    "Nuri Demirağ Sky School",
    "Panstwowe Zaklady Lotnicze",
    "Philips and Powis Aircraft Ltd.",
    "Sikorsky",
    "TAI",
    "TCI",
    "TEI",
    "TOMTAŞ",
    "TUSAŞ",
    "Turkish Aeronautical Association",
    "Turkish Air Force",
    "TÜBİTAK",
    "Vecihi Civil Aviation School",
    "Roketsan",
    "TCG Anadolu",
    "Turkish Navy",
    "Ukraine",
    "Azerbaijan",
    "Qatar",
    "EASA (European Aviation Safety Agency)",
    "GE Aerospace",
    "Spain",
    "Meteksan",
    "TRMOTOR",
    "Turkish Airlines",
];

const people = [
    "Emrullah Ali Yıldız",
    "Fevzi Çakmak",
    "Haluk Bayraktar",
    "Hami Özger",
    "İsmet İnönü",
    "Mansur Azak",
    "Mehmet Kum",
    "Mustafa Kemal Atatürk",
    "Nuri Demirağ",
    "Ömer İnönü",
    "Selahattin Reşit Alan",
    "Selçuk Bayraktar",
    "Vecihi Hürkuş",
    "Murat Özpala",
    "Ercan Çelik",
    "Ord.Prof.Dr. Ali Yar",
];

const projects = [
    "Akıncı",
    "Aksungur",
    "Anka",
    "Anka-3",
    "Bayraktar Akıncı",
    "Bayraktar Kızılelma",
    "Bayraktar TB-2",
    "Bayraktar TB-3",
    "Boeing 737 AEW&C",
    "C130",
    "CN-235",
    "F-16",
    "Hürjet",
    "Hürkuş",
    "Kaan",
    "Nu.D 36",
    "Nu.D 38",
    "Nu.D 40",
    "T-38",
    "T129 ATAK",
    "T625 GÖKBEY",
    "T70",
    "T.H.K - 1",
    "T.H.K - 2",
    "T.H.K - 3",
    "T.H.K - 4",
    "T.H.K - 5",
    "T.H.K - 7",
    "T.H.K - 9",
    "T.H.K - 10",
    "T.H.K - 11",
    "T.H.K - 12",
    "T.H.K - 13",
    "T.H.K - 14",
    "T.H.K - 15",
    "T.H.K - 16",
    "Vecihi K-VI",
    "Vecihi XIV"
];

// const itemDetails = {
//     // Institutions
//     "Aerodynamische Versuchsanstalt (AVA)": {
//         category: "Institution",
//         description: "A German aeronautical research institute...",
//         location: "Göttingen, Germany",
//         yearEstablished: "1925",
//         significance: "Pioneering research in aerodynamics and wind tunnel testing..."
//     },
//     // Add details for other institutions...

//     // People
//     "Vecihi Hürkuş": {
//         category: "Person",
//         description: "A pioneering Turkish aviator and aircraft designer...",
//         birthDeath: "1896-1969",
//         achievements: [
//             "First Turkish aircraft designer",
//             "Built the first Turkish civil aircraft",
//             "Founded first Turkish private flight school"
//         ],
//         significance: "Made significant contributions to Turkish aviation history..."
//     },
//     "Nuri Demirağ": {
//         category: "Person",
//         description: "Turkish entrepreneur, businessman, and politician who made significant contributions to Turkey's industrial development, particularly in aviation and railway construction.",
//         birthDeath: "1886 Sivas - 1957 Istanbul",
//         achievements: [
//             "Successful railway contractor, earning surname 'Demirağ' from Atatürk",
//             "Built major industrial facilities including Karabük Iron and Steel Works",
//             "Established Nu.D Aircraft Factory in 1936",
//             "Founded Sky School in Divriği",
//             "Designed Istanbul Strait bridge project in 1931"
//         ],
//         significance: "A pioneering industrialist who contributed to Turkey's early aviation industry and infrastructure development.",
//         career: [
//             {
//                 period: "Until 1918",
//                 role: "Civil service positions"
//             },
//             {
//                 period: "1918",
//                 role: "Started local cigarette paper production"
//             },
//             {
//                 period: "Early Republic",
//                 role: "Sivas-Samsun railway project"
//             }
//         ],
//         projects: [
//             "Karabük Iron and Steel Works",
//             "İzmit Pulp and Paper",
//             "Sivas Cement",
//             "Bursa Merinos factories",
//             "Eceabat Airport",
//             "Istanbul Market Hall"
//         ],
//         aviation: {
//             factory: "Nu.D Aircraft Factory (1936)",
//             location: "Beşiktaş Maritime Museum (former location)",
//             products: ["Gliders", "Planned parachute production using Bursa silk"],
//             education: ["Sky School in Divriği", "Sky School in Istanbul"]
//         }
//     },
//     // Add details for other people...

//     // Projects
//     "Nu.D 36": {
//         category: "Project",
//         description: "An aircraft design project...",
//         year: "1936",
//         specifications: {
//             type: "Training Aircraft",
//             engine: "150 HP",
//             wingspan: "10.5 meters"
//         },
//         significance: "One of the first indigenous Turkish aircraft designs..."
//     }
//     // Add details for other projects...
// };

// Canvas setup
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '1';
    canvas.style.pointerEvents = 'none';
    drawArcs(); // Redraw arcs whenever canvas is resized
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Update the drawArcs function to add year labels on both sides
function drawArcs() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height;
    // Update the arc definitions with more precise positioning
    const arcs = [
        { radius: canvas.width * 0.000, segments: 20, lineWidth: 3.5, angleOffset: Math.PI * 0.015, year: "1900" },
        { radius: canvas.width * 0.09, segments: 20, lineWidth: 3.5, angleOffset: Math.PI * 0.015, year: "1925" },
        { radius: canvas.width * 0.18, segments: 30, lineWidth: 3.5, angleOffset: Math.PI * 0.012, year: "1950" },
        { radius: canvas.width * 0.31, segments: 50, lineWidth: 3.5, angleOffset: Math.PI * 0.008, year: "1975" },
        { radius: canvas.width * 0.44, segments: 70, lineWidth: 3.5, angleOffset: Math.PI * 0.006, year: "2000" },
        { radius: canvas.width * 0.57, segments: 90, lineWidth: 3.5, angleOffset: Math.PI * 0.004, year: "2025" }
    ];

    // Draw the arcs
    ctx.strokeStyle = '#494949';
    ctx.lineCap = 'round';
    ctx.setLineDash([40, 1]);

    arcs.forEach(arc => {
        ctx.beginPath();
        ctx.lineWidth = arc.lineWidth;

        for (let i = 0; i <= arc.segments; i++) {
            const angle = (Math.PI * i) / arc.segments - Math.PI + (arc.angleOffset || 0);
            const x = centerX + Math.cos(angle) * arc.radius;
            const y = centerY + Math.sin(angle) * arc.radius;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();

        if (arc.radius > 0) {
            ctx.font = '16px B612';
            ctx.fillStyle = '#1FC2C2';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';

            // Increase vertical offset for more space
            const verticalOffset = 25; // Changed from 20 to 40

            if (arc.year !== "1900") {
                // Left label
                const leftLabelX = centerX + Math.cos(-Math.PI) * arc.radius;
                const leftLabelY = centerY + Math.sin(-Math.PI) * arc.radius - verticalOffset;

                // Save current context state
                ctx.save();
                // Rotate text for left label
                ctx.translate(leftLabelX - 10, leftLabelY);
                ctx.rotate(-Math.PI / 2);
                ctx.fillText(arc.year, 0, 0);
                // Restore context state
                ctx.restore();

                // Right label
                const rightLabelX = centerX + Math.cos(0) * arc.radius;
                const rightLabelY = centerY + Math.sin(0) * arc.radius - verticalOffset;

                // Save current context state
                ctx.save();
                // Rotate text for right label
                ctx.translate(rightLabelX + 10, rightLabelY);
                ctx.rotate(Math.PI / 2);
                ctx.fillText(arc.year, 0, 0);
                // Restore context state
                ctx.restore();
            } else {
                const leftLabelX = centerX + Math.cos(-Math.PI) * arc.radius;
                const leftLabelY = centerY + Math.sin(-Math.PI) * arc.radius - verticalOffset;

                // Save current context state
                ctx.save();
                // Rotate text for center label
                ctx.translate(leftLabelX, leftLabelY);
                ctx.rotate(-Math.PI / 2);
                ctx.fillText(arc.year, 0, 0);
                // Restore context state
                ctx.restore();
            }
        }
    });

    ctx.setLineDash([]); // Reset line dash
}

// Add a function to check if two rectangles overlap
function doRectanglesOverlap(rect1, rect2) {
    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);
}

// Function to get rectangle for the title
function getTitleRect() {
    return {
        left: 32,
        top: 32,
        right: 400, // Approximate width of the title
        bottom: 120 // Approximate height for two lines of text
    };
}

function isPositionValid(newRect, existingRects) {
    // Check overlap with title
    if (doRectanglesOverlap(newRect, getTitleRect())) {
        return false;
    }

    // Check overlap with other icons
    for (const rect of existingRects) {
        if (doRectanglesOverlap(newRect, rect)) {
            return false;
        }
    }

    return true;
}

// Update the arc segments definition for better precision
const arcSegments = [
    { startYear: 1900, endYear: 1925, innerRadius: 0.001, outerRadius: 0.09 },
    { startYear: 1925, endYear: 1950, innerRadius: 0.09, outerRadius: 0.18 },
    { startYear: 1950, endYear: 1975, innerRadius: 0.18, outerRadius: 0.31 },
    { startYear: 1975, endYear: 2000, innerRadius: 0.31, outerRadius: 0.44 },
    { startYear: 2000, endYear: 2025, innerRadius: 0.44, outerRadius: 0.57 }
];

// Update helper function to determine which arc segment an item belongs to
function getItemSegment(item) {
    // Extract year from itemTexts
    const text = itemTexts[item];
    let year = null;

    if (text) {
        // Try to extract year from popup-year span
        const yearMatch = text.match(/<span class="popup-year">(\d{4})/);
        if (yearMatch) {
            year = parseInt(yearMatch[1]);
        } else {
            // Try to find any 4-digit year in the text
            const yearInText = text.match(/\b(18|19|20)\d{2}\b/);
            if (yearInText) {
                year = parseInt(yearInText[0]);
            }
        }
    }

    // If no year found, place in the most recent segment
    if (!year) {
        return arcSegments[arcSegments.length - 1];
    }

    // Handle edge cases first
    if (year < arcSegments[0].startYear) {
        return arcSegments[0];
    }

    if (year > arcSegments[arcSegments.length - 1].endYear) {
        return arcSegments[arcSegments.length - 1];
    }

    // Find the exact segment for the year
    for (const segment of arcSegments) {
        if (year >= segment.startYear && year <= segment.endYear) {
            // Calculate the position within the segment
            const segmentProgress = (year - segment.startYear) / (segment.endYear - segment.startYear);
            const radiusRange = segment.outerRadius - segment.innerRadius;
            const adjustedRadius = segment.innerRadius + (radiusRange * segmentProgress);

            return {
                ...segment,
                innerRadius: adjustedRadius - (radiusRange * 0.1),
                outerRadius: adjustedRadius + (radiusRange * 0.1)
            };
        }
    }

    // Eğer buraya kadar geldiyse, en yakın segmente yerleştir
    for (let i = 0; i < arcSegments.length - 1; i++) {
        if (year > arcSegments[i].endYear && year < arcSegments[i + 1].startYear) {
            // Hangi segmente daha yakınsa ona yerleştir
            const distToCurrentEnd = Math.abs(year - arcSegments[i].endYear);
            const distToNextStart = Math.abs(year - arcSegments[i + 1].startYear);
            return distToCurrentEnd < distToNextStart ? arcSegments[i] : arcSegments[i + 1];
        }
    }

    // Son çare olarak en son segmente yerleştir
    return arcSegments[arcSegments.length - 1];
}

// Update distributeIcons to handle all items together
function distributeIcons() {
    const existingRects = [];
    const container = document.getElementById('icons-container') || document.body;
    container.innerHTML = ''; // Clear existing icons

    // Combine all items and sort by year
    const allItems = [
        ...institutions.map(item => ({ name: item, type: 'institution' })),
        ...people.map(item => ({ name: item, type: 'person' })),
        ...projects.map(item => ({ name: item, type: 'project' }))
    ];

    // Sort items by their years (extracted from itemTexts)
    allItems.sort((a, b) => {
        const yearA = getItemSegment(a.name).startYear;
        const yearB = getItemSegment(b.name).startYear;
        return yearA - yearB;
    });

    // Create icons for all items
    allItems.forEach(({ name, type }) => {
        const segment = getItemSegment(name);
        const icon = createIcon(name, type, existingRects, segment);
        if (icon) container.appendChild(icon);
    });
}

// Update getRandomPositionInArc function to prevent icons from going below screen
function getRandomPositionInArc(segment, iconWidth, iconHeight, existingRects) {
    const maxAttempts = 200;
    let attempts = 0;
    const padding = 15;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight;

    // Calculate segment dimensions
    const minRadius = segment.innerRadius * viewportWidth;
    const maxRadius = segment.outerRadius * viewportWidth;
    const radiusRange = maxRadius - minRadius;

    // Add bottom margin to prevent icons from touching the bottom
    const bottomMargin = 50; // Adjust this value as needed

    while (attempts < maxAttempts) {
        const section = attempts % 4;
        const sectionAngle = Math.PI / 4;
        const baseAngle = -Math.PI + (section * sectionAngle);
        const angle = baseAngle + (Math.random() * sectionAngle);

        const radiusOffset = (attempts % 5) / 5;
        const radius = minRadius + (radiusOffset * radiusRange);

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        // Add stricter boundary checking, especially for bottom of screen
        if (y < centerY && // Ensure icon is above the center point
            x >= padding &&
            x <= viewportWidth - (iconWidth + padding) &&
            y >= padding &&
            y <= viewportHeight - (iconHeight + padding + bottomMargin)) { // Added bottomMargin

            const newRect = {
                left: x - padding,
                top: y - padding,
                right: x + iconWidth + padding,
                bottom: y + iconHeight + padding
            };

            if (isPositionValid(newRect, existingRects)) {
                return { x, y, rect: newRect };
            }
        }

        attempts++;
    }

    return getFallbackPosition(segment, iconWidth, iconHeight, existingRects);
}

// Update getFallbackPosition to respect the same bottom margin
function getFallbackPosition(segment, iconWidth, iconHeight, existingRects) {
    const padding = 10;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight;
    const bottomMargin = 50; // Same bottom margin as in getRandomPositionInArc

    const minRadius = segment.innerRadius * viewportWidth;
    const maxRadius = segment.outerRadius * viewportWidth;

    // Try more angles and smaller radius steps
    for (let angle = -Math.PI; angle <= 0; angle += Math.PI / 32) {
        for (let radius = minRadius; radius <= maxRadius; radius += (iconHeight + padding) / 2) {
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            if (y < centerY &&
                x >= padding &&
                x <= viewportWidth - (iconWidth + padding) &&
                y >= padding &&
                y <= viewportHeight - (iconHeight + padding + bottomMargin)) { // Added bottomMargin

                const newRect = {
                    left: x - padding,
                    top: y - padding,
                    right: x + iconWidth + padding,
                    bottom: y + iconHeight + padding
                };

                if (isPositionValid(newRect, existingRects)) {
                    return { x, y, rect: newRect };
                }
            }
        }
    }

    // Last resort with minimal padding
    const minPadding = 5;
    for (let angle = -Math.PI; angle <= 0; angle += Math.PI / 48) {
        for (let radius = minRadius; radius <= maxRadius; radius += iconHeight / 2) {
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            if (y < centerY &&
                x >= minPadding &&
                x <= viewportWidth - (iconWidth + minPadding) &&
                y >= minPadding &&
                y <= viewportHeight - (iconHeight + minPadding + bottomMargin)) { // Added bottomMargin

                const newRect = {
                    left: x - minPadding,
                    top: y - minPadding,
                    right: x + iconWidth + minPadding,
                    bottom: y + iconHeight + minPadding
                };

                if (isPositionValid(newRect, existingRects)) {
                    return { x, y, rect: newRect };
                }
            }
        }
    }

    return null;
}

function createIcon(item, type, existingRects, segment) {
    // Calculate total connections (both incoming and outgoing)
    let connectionCount = 0;

    // Count outgoing connections
    if (connections[item] && connections[item].connections) {
        connectionCount += connections[item].connections.length;
    }

    // Count incoming connections
    Object.entries(connections).forEach(([source, data]) => {
        if (data.connections) {
            data.connections.forEach(connection => {
                if (connection.target === item) {
                    connectionCount++;
                }
            });
        }
    });

    const wrapper = document.createElement('div');
    wrapper.className = 'icon-wrapper';

    const icon = document.createElement('img');
    icon.className = 'icon';

    // Calculate scale dynamically based on connection count
    const maxConnections = 10; // Adjust this based on your typical max connections
    const minScale = 0.6;
    const maxScale = 1.2;
    const scaleRange = maxScale - minScale;

    // Calculate scale linearly between min and max based on connection count
    let scale = minScale + (scaleRange * Math.min(connectionCount / maxConnections, 1));

    // Ensure scale stays within bounds
    scale = Math.max(minScale, Math.min(maxScale, scale));

    icon.style.transform = `scale(${scale})`;

    // Add data attribute for connection count
    wrapper.dataset.connections = connectionCount;

    // Add specific classes based on icon name/type
    if (item.includes('Vecihi')) {
        if (type === 'project') {
            icon.classList.add('icon-vecihi-project');
        } else {
            icon.classList.add('icon-vecihi');
        }
    } else if (item.includes('Nuri')) {
        icon.classList.add('icon-nuri');
    } else if (item.startsWith('T.H.K')) {
        icon.classList.add('icon-thk-project');
    } else if (item.includes('Factory')) {
        icon.classList.add('icon-factory');
    } else if (item.includes('Nu.D')) {
        icon.classList.add('icon-nud');
    } else if (item === 'TUSAŞ') {
        icon.classList.add('icon-tusas');
    } else if (item === 'Istanbul Technical University (ITÜ)') {
        icon.classList.add('icon-itu');
    } else if (item === 'TÜBİTAK') {
        icon.classList.add('icon-tubitak');
    } else if (item === 'Turkish Air Force') {
        icon.classList.add('icon-airforce');
    } else if (item === 'Aerodynamische Versuchsanstalt (AVA)') {
        icon.classList.add('icon-ava');
    } else if (item.includes('Curtiss')) {
        icon.classList.add('icon-curtiss');
    } else if (item.includes('De Havilland')) {
        icon.classList.add('icon-dehavilland');
    } else if (item.includes('Gotha')) {
        icon.classList.add('icon-gotha');
    } else if (item === 'Junkers') {
        icon.classList.add('icon-junkers');
    } else if (item.includes('Panstwowe')) {
        icon.classList.add('icon-pzl');
    } else if (item.includes('Philips')) {
        icon.classList.add('icon-philips');
    } else if (item === 'İsmet İnönü') {
        icon.classList.add('icon-ismet');
    } else if (item === 'Mustafa Kemal Atatürk') {
        icon.classList.add('icon-ataturk');
    } else if (item === 'Fevzi Çakmak') {
        icon.classList.add('icon-fevzi');
    } else if (item === 'Hami Özger') {
        icon.classList.add('icon-hami');
    } else if (item === 'Mansur Azak') {
        icon.classList.add('icon-mansur');
    } else if (item === 'Mehmet Kum') {
        icon.classList.add('icon-mehmet');
    } else if (item === 'Ömer İnönü') {
        icon.classList.add('icon-omer');
    } else if (item === 'Selahattin Reşit Alan') {
        icon.classList.add('icon-selahattin');
    } else if (item === 'Emrullah Ali Yıldız') {
        icon.classList.add('icon-emrullah');
    } else if (item === 'TEI') {
        icon.classList.add('icon-tei');
    } else if (item === 'TCI') {
        icon.classList.add('icon-tci');
    } else if (item === 'Baykar') {
        icon.classList.add('icon-baykar');
    } else if (item === 'Aselsan') {
        icon.classList.add('icon-aselsan');
    } else if (item === 'Alp Aviation') {
        icon.classList.add('icon-alp');
    } else if (item === 'Airbus') {
        icon.classList.add('icon-airbus');
    } else if (item === 'Sikorsky') {
        icon.classList.add('icon-sikorsky');
    } else if (item === 'Lockheed Martin') {
        icon.classList.add('icon-lockheed');
    } else if (item === 'Boeing') {
        icon.classList.add('icon-boeing');
    } else if (item === 'ATR') {
        icon.classList.add('icon-atr');
    } else if (item === 'Hürkuş') {
        icon.classList.add('icon-hurkus');
    } else if (item === 'Hürjet') {
        icon.classList.add('icon-hurjet');
    } else if (item === 'Kaan') {
        icon.classList.add('icon-kaan');
    } else if (item === 'Anka') {
        icon.classList.add('icon-anka');
    } else if (item === 'Akıncı') {
        icon.classList.add('icon-akinci');
    } else if (item === 'Aksungur') {
        icon.classList.add('icon-aksungur');
    } else if (item === 'T625 GÖKBEY') {
        icon.classList.add('icon-gokbey');
    } else if (item === 'T129 ATAK') {
        icon.classList.add('icon-atak');
    } else if (item === 'T70') {
        icon.classList.add('icon-t70');
    } else if (item.includes('Bayraktar')) {
        icon.classList.add('icon-bayraktar');
    } else if (item === 'Selçuk Bayraktar') {
        icon.classList.add('icon-selcuk');
    } else if (item === 'Haluk Bayraktar') {
        icon.classList.add('icon-haluk');
    }

    switch (type) {
        case 'institution':
            icon.src = 'assets/inst.svg';
            break;
        case 'person':
            icon.src = 'assets/ppl.svg';
            break;
        case 'project':
            icon.src = 'assets/prjct.svg';
            break;
    }

    icon.alt = item;

    const name = document.createElement('div');
    name.className = 'icon-name';
    name.textContent = item;

    // Adjust name font size based on connection count
    if (connectionCount > 8) {
        name.style.fontSize = '14px';
        name.style.fontWeight = '600';
    } else if (connectionCount > 4) {
        name.style.fontSize = '13px';
        name.style.fontWeight = '500';
    }

    wrapper.appendChild(icon);
    wrapper.appendChild(name);

    // Adjust icon dimensions based on scale
    const iconWidth = 60 * scale;
    const iconHeight = 80 * scale;

    // Get position within the correct arc segment
    const position = getRandomPositionInArc(segment, iconWidth, iconHeight, existingRects);

    if (position) {
        wrapper.style.left = `${position.x}px`;
        wrapper.style.top = `${position.y}px`;
        existingRects.push(position.rect);

        // Add click handler for popup
        wrapper.addEventListener('click', () => {
            createPopup(item, itemTexts[item]);
        });

        // Add hover handlers for connections
        wrapper.addEventListener('mouseenter', () => {
            showConnections(item);
        });

        wrapper.addEventListener('mouseleave', (event) => {
            // Check if we're hovering over a connection line
            const toElement = event.relatedTarget;
            if (toElement && toElement.classList.contains('connection-line')) {
                return; // Don't remove connections if hovering over a line
            }

            // Check if mouse is over any connection line
            const isOverConnection = document.elementFromPoint(event.clientX, event.clientY)?.classList.contains('connection-line');
            if (isOverConnection) {
                return;
            }

            resetConnections();
        });

        return wrapper;
    }

    return null;
}

// Animation loop
function animate() {
    drawArcs();
    requestAnimationFrame(animate);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    resizeCanvas();
    initializeSearch();
    drawArcs(); // Draw immediately

    setTimeout(() => {
        distributeIcons();
        animate();
    }, 100);
});

// Handle resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        resizeCanvas();
        distributeIcons();
    }, 250);
});

// Add these functions after your existing code but before the event listeners

function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    const chevronIcon = document.querySelector('.chevron-icon');

    // Combine all items into one array with their types
    const allItems = [
        ...institutions.map(item => ({ name: item, type: 'institution' })),
        ...people.map(item => ({ name: item, type: 'person' })),
        ...projects.map(item => ({ name: item, type: 'project' }))
    ].sort((a, b) => a.name.localeCompare(b.name));

    // Toggle dropdown when clicking the chevron
    chevronIcon.addEventListener('click', () => {
        if (searchResults.classList.contains('show')) {
            searchResults.classList.remove('show');
            chevronIcon.style.transform = 'rotate(0deg)';
        } else {
            displayResults(allItems, searchResults);
            searchResults.classList.add('show');
            chevronIcon.style.transform = 'rotate(180deg)';
        }
    });

    // Show results when focusing on search input
    searchInput.addEventListener('focus', () => {
        displayResults(allItems, searchResults);
        searchResults.classList.add('show');
        chevronIcon.style.transform = 'rotate(180deg)';
    });

    // Handle search input
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredItems = allItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.type.toLowerCase().includes(searchTerm)
        );
        displayResults(filteredItems, searchResults);
    });

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) &&
            !searchResults.contains(e.target) &&
            !chevronIcon.contains(e.target)) {
            searchResults.classList.remove('show');
            chevronIcon.style.transform = 'rotate(0deg)';
        }
    });
}

function displayResults(items, container) {
    container.innerHTML = '';

    // Calculate the height based on number of items (max 6 items)
    const itemHeight = 13 + 12 * 2; // font-size + padding
    const numItems = Math.min(items.length, 6); // Cap at 6 items
    const height = numItems * itemHeight;

    // Set the container height
    container.style.height = items.length > 0 ? `${height}px` : `${itemHeight}px`;

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'search-item';
        div.textContent = item.name;

        // Hover effect
        div.addEventListener('mouseenter', () => highlightIcon(item.name));
        div.addEventListener('mouseleave', () => resetIcons());

        // Click effect
        div.addEventListener('click', () => {
            selectIcon(item.name);
        });

        container.appendChild(div);
    });
}

function highlightIcon(itemName) {
    const icons = document.querySelectorAll('.icon-wrapper');
    icons.forEach(icon => {
        if (icon.querySelector('.icon-name').textContent === itemName) {
            icon.classList.add('highlighted');
        }
    });
}

function selectIcon(itemName) {
    const icons = document.querySelectorAll('.icon-wrapper');
    icons.forEach(icon => {
        if (icon.querySelector('.icon-name').textContent === itemName) {
            icon.classList.add('highlighted');
            icon.classList.remove('dimmed');
        } else {
            icon.classList.add('dimmed');
            icon.classList.remove('highlighted');
        }
    });
}

function resetIcons() {
    const icons = document.querySelectorAll('.icon-wrapper');
    icons.forEach(icon => {
        icon.classList.remove('highlighted');
        icon.classList.remove('dimmed');
    });
}

// Add these functions to handle pop-ups
function createPopup(title, content) {
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';

    // Check if content exists; if not, use the default message
    const displayContent = content ? content : "Pretend nothing happened, proceed to touch and go to the other icons.🛫";

    popupContent.innerHTML = `
        <div class="popup-header">
            <div class="popup-title">${title}</div>
            <button class="popup-close">×</button>
        </div>
        <div class="popup-body">
            ${displayContent.split('\n').map(para =>
        para ? `<p>${para}</p>` : '<br>'
    ).join('')}
        </div>
    `;

    overlay.appendChild(popupContent);
    document.body.appendChild(overlay);

    // Add event listeners
    const closeBtn = popupContent.querySelector('.popup-close');
    closeBtn.addEventListener('click', () => closePopup(overlay));

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closePopup(overlay);
        }
    });

    // Show popup with animation
    requestAnimationFrame(() => {
        overlay.classList.add('show');
    });
}

function closePopup(overlay) {
    overlay.classList.remove('show');
    setTimeout(() => {
        overlay.remove();
    }, 300); // Match this with the CSS transition duration
}

// Add these functions to handle connections

function drawConnection(source, target, color = '#3CDE00') {
    const sourceIcon = document.querySelector(`.icon-wrapper:has([alt="${source}"])`);
    const targetIcon = document.querySelector(`.icon-wrapper:has([alt="${target}"])`);

    if (!sourceIcon || !targetIcon) return null;

    const sourceRect = sourceIcon.getBoundingClientRect();
    const targetRect = targetIcon.getBoundingClientRect();

    const line = document.createElement('div');
    line.className = 'connection-line';

    // Set the line height to 1px for all connections
    line.style.height = '3px'; // Changed from 2px to 1px

    line.style.backgroundColor = color;
    line.style.zIndex = '1000';

    // Calculate line position and length from center of icons
    const sourceX = sourceRect.left + sourceRect.width / 2;
    const sourceY = sourceRect.top + sourceRect.height / 2;
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;

    const length = Math.sqrt(Math.pow(targetX - sourceX, 2) + Math.pow(targetY - sourceY, 2));
    const angle = Math.atan2(targetY - sourceY, targetX - sourceX);

    // Set line position and dimensions
    line.style.width = `${length}px`;
    line.style.left = `${sourceX}px`;
    line.style.top = `${sourceY}px`;
    line.style.transform = `rotate(${angle}rad)`;
    line.style.transformOrigin = 'left center';

    // Create a wrapper for better click handling
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.pointerEvents = 'none';
    wrapper.style.zIndex = '999';

    line.style.pointerEvents = 'auto';
    wrapper.appendChild(line);

    // Add click handler for connection information
    line.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        createPopup(`${source} - ${target}`, connections[source].connections.find(c => c.target === target).description);
    };

    document.body.appendChild(wrapper);
    return line;
}

function showConnections(item) {
    // Remove any existing connection lines and reset states
    document.querySelectorAll('.connection-line').forEach(line => line.remove());
    resetConnections();

    const connectedIcons = new Set();

    // Add the source icon to connected set
    const sourceIcon = document.querySelector(`.icon-wrapper:has([alt="${item}"])`);
    if (sourceIcon) {
        sourceIcon.classList.add('highlighted');
        connectedIcons.add(sourceIcon);
    }

    // Check outgoing connections
    if (connections[item]) {
        connections[item].connections.forEach(connection => {
            drawConnection(item, connection.target);
            const targetIcon = document.querySelector(`.icon-wrapper:has([alt="${connection.target}"])`);
            if (targetIcon) {
                targetIcon.classList.add('highlighted');
                connectedIcons.add(targetIcon);
            }
        });
    }

    // Check incoming connections
    Object.entries(connections).forEach(([source, data]) => {
        data.connections.forEach(connection => {
            if (connection.target === item) {
                drawConnection(source, item);
                const sourceIconElement = document.querySelector(`.icon-wrapper:has([alt="${source}"])`);
                if (sourceIconElement) {
                    sourceIconElement.classList.add('highlighted');
                    connectedIcons.add(sourceIconElement);
                }
            }
        });
    });

    // Dim all unconnected icons
    document.querySelectorAll('.icon-wrapper').forEach(icon => {
        if (!connectedIcons.has(icon)) {
            icon.classList.add('dimmed');
        }
    });
}

// Call this function when you want to distribute the icons
// distributeIconsRandomly();

document.querySelectorAll('.connection-line').forEach(line => {
    line.addEventListener('mouseenter', function () {
        // Show the label for the connected icon
        document.getElementById('labelIsmet').style.display = 'block';
    });

    line.addEventListener('mouseleave', function () {
        // Hide the label for the connected icon
        document.getElementById('labelIsmet').style.display = 'none';
    });
});

document.querySelectorAll('.search-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const iconName = this.textContent.trim();
        const icon = document.querySelector(`.icon-wrapper:has([alt="${iconName}"])`);

        if (icon) {
            // Highlight the hovered icon
            icon.classList.add('icon-highlighted');

            // Dim all other icons
            document.querySelectorAll('.icon-wrapper').forEach(otherIcon => {
                if (otherIcon !== icon) {
                    otherIcon.classList.add('icon-dimmed');
                }
            });
        }
    });

    item.addEventListener('mouseleave', function () {
        // Remove highlight and dim classes
        document.querySelectorAll('.icon-wrapper').forEach(icon => {
            icon.classList.remove('icon-highlighted');
            icon.classList.remove('icon-dimmed');
        });
    });
});

// Popup açma/kapama fonksiyonları
function showInfoPopup() {
    document.getElementById('infoPopup').classList.add('show');
}

function closeInfoPopup() {
    document.getElementById('infoPopup').classList.remove('show');
}

// Info butonuna tıklama dinleyicisi
document.querySelector('.info-button').addEventListener('click', showInfoPopup);


// Update the icon wrapper mouseleave event
function resetConnections() {
    document.querySelectorAll('.connection-line').forEach(line => line.remove());
    document.querySelectorAll('.icon-wrapper').forEach(icon => {
        icon.classList.remove('highlighted');
        icon.classList.remove('dimmed');
    });
}

// Add this at the beginning of your script.js
function checkMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    const mobileMessage = document.getElementById('mobileMessage');
    const mainContent = document.getElementById('mainContent');

    if (isMobileDevice) {
        mobileMessage.style.display = 'block';
        mainContent.style.display = 'none';
    } else {
        mobileMessage.style.display = 'none';
        mainContent.style.display = 'block';
    }
}

// Call checkMobile when the page loads
window.addEventListener('load', checkMobile);

// Optional: Check again if window is resized
window.addEventListener('resize', checkMobile);