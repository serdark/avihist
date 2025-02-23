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

// Draw arcs function
function drawArcs() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height;
    
    const arcs = [
        { radius: canvas.width * 0.09, segments: 20, lineWidth: 3.5, angleOffset: Math.PI * 0.025 },
        { radius: canvas.width * 0.18, segments: 30, lineWidth: 3.5, angleOffset: Math.PI * 0.017, year: "1900" },
        { radius: canvas.width * 0.31, segments: 50, lineWidth: 3.5, angleOffset: Math.PI * 0.009,  year: "1925" },
        { radius: canvas.width * 0.44, segments: 70, lineWidth: 3.5, angleOffset: Math.PI * 0.007, year: "1950" },
        { radius: canvas.width * 0.57, segments: 90, lineWidth: 3.5, angleOffset: Math.PI * 0.025, year: "1975" },
        { radius: canvas.width * 0.7, segments: 110, lineWidth: 3.5, angleOffset: Math.PI * 0.025, year: "2000" }
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
            
            if (i % 2 === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    });
    
    ctx.setLineDash([]); // Reset line dash

    // // Draw the year labels
    // ctx.font = '18px B612';
    // ctx.fillStyle = '#1FC2C2';
    // ctx.textAlign = 'top';
    // ctx.textBaseline = 'middle';

    arcs.forEach(arc => {
        // Only draw year labels if the arc has a year property
        if (arc.year) {
            // Calculate positions for left and right year labels
            const leftAngle = -Math.PI + (arc.angleOffset || 0);
            const rightAngle = 0 + (arc.angleOffset || 0);

            // Adjust offset based on the year
            let radiusOffset = 80;
            if (arc.year === "2000") {
                radiusOffset = 2500; // Increased significantly to move it inward
            } else if (arc.year === "1975") {
                radiusOffset = 180; // Increased to move it inward
            }

            // Left year position with adjusted offset
            const leftX = centerX + Math.cos(leftAngle) * (arc.radius - radiusOffset);
            const leftY = centerY + Math.sin(leftAngle) * (arc.radius - radiusOffset);

            // Right year position with adjusted offset
            const rightX = centerX + Math.cos(rightAngle) * (arc.radius - radiusOffset);
            const rightY = centerY + Math.sin(rightAngle) * (arc.radius - radiusOffset);

            // Save current context
            ctx.save();
            
            // Draw left year label vertically
            ctx.translate(leftX - 50, leftY);
            ctx.rotate(-Math.PI/2);
            ctx.fillText(arc.year, 0, 0);
            
            // Restore and save again for right label
            ctx.restore();
            ctx.save();
            
            // Draw right year label vertically
            ctx.translate(rightX + 50, rightY);
            ctx.rotate(-Math.PI/2);
            ctx.fillText(arc.year, 0, 0);
            
            // Restore context
            ctx.restore();
        }
    });
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

function getRandomPosition(maxWidth, maxHeight, iconWidth, iconHeight, existingRects) {
    const padding = 100;
    const maxAttempts = 100;
    let attempts = 0;

    while (attempts < maxAttempts) {
        const x = padding + Math.random() * (maxWidth - 2 * padding);
        const y = padding + Math.random() * (maxHeight - 2 * padding);

        const newRect = {
            left: x,
            top: y,
            right: x + iconWidth,
            bottom: y + iconHeight
        };

        // Check for overlap with title and search bar
        if (isPositionValid(newRect, existingRects) && !doRectanglesOverlap(newRect, getTitleRect()) && !doRectanglesOverlap(newRect, getSearchBarRect())) {
            return { x, y, rect: newRect };
        }

        attempts++;
    }

    // If we couldn't find a non-overlapping position after max attempts,
    // return null to handle this case
    return null;
}

// Function to get rectangle for the search bar
function getSearchBarRect() {
    const searchContainer = document.querySelector('.search-container');
    const rect = searchContainer.getBoundingClientRect();
    return {
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom
    };
}

function createIcon(item, type, existingRects) {
    const wrapper = document.createElement('div');
    wrapper.className = 'icon-wrapper';

    const icon = document.createElement('img');
    icon.className = 'icon';
    
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
    
    switch(type) {
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

    wrapper.appendChild(icon);
    wrapper.appendChild(name);

    // Estimate the space needed for the icon and name
    const iconWidth = 50; // Icon width from CSS
    const iconHeight = 100; // Icon height + space for name

    const position = getRandomPosition(
        window.innerWidth,
        window.innerHeight,
        iconWidth,
        iconHeight,
        existingRects
    );

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

// Add this function to handle special positioning for Vecihi-related icons
function createVecihiGroup(existingRects) {
    const vecihiItems = [
        { item: "Vecihi K-VI", type: "project" },
        { item: "Vecihi XIV", type: "project" },
        { item: "Vecihi Civil Aviation School", type: "institution" },
        { item: "Vecihi Hürkuş", type: "person" }
    ];

    // Find a position for the group
    const centerPosition = getRandomPosition(
        window.innerWidth,
        window.innerHeight,
        100,  // Width for group
        100,  // Height for group
        existingRects
    );

    if (!centerPosition) return [];

    const groupIcons = [];
    const radius = 50; // Increased from 40 to 50 for more spacing
    
    // First create the three surrounding icons in a circle
    for (let i = 0; i < 3; i++) {
        const angle = ((2 * Math.PI) / 3) * i; // Distribute evenly in a circle
        const x = centerPosition.x + radius * Math.cos(angle);
        const y = centerPosition.y + radius * Math.sin(angle);

        const rect = {
            left: x,
            top: y,
            right: x + 40,
            bottom: y + 55
        };

        if (isPositionValid(rect, existingRects)) {
            const icon = createIcon(vecihiItems[i].item, vecihiItems[i].type, existingRects);
            if (icon) {
                icon.style.left = `${x}px`;
                icon.style.top = `${y}px`;
                // Make surrounding icons slightly bigger
                icon.querySelector('.icon').style.width = '35px';   // Adjust width
                icon.querySelector('.icon').style.height = '35px';  // Adjust height
                icon.querySelector('.icon-name').style.fontSize = '10px';  // Adjust text size
                icon.querySelector('.icon-name').style.maxWidth = '100px'; // Adjust text width
                groupIcons.push(icon);
                existingRects.push(rect);
            }
        }
    }

    // Then create Vecihi Hürkuş icon at the center
    const centerIcon = createIcon(vecihiItems[3].item, vecihiItems[3].type, existingRects);
    if (centerIcon) {
        centerIcon.style.left = `${centerPosition.x}px`;
        centerIcon.style.top = `${centerPosition.y}px`;
        groupIcons.push(centerIcon);
        existingRects.push({
            left: centerPosition.x,
            top: centerPosition.y,
            right: centerPosition.x + 50,
            bottom: centerPosition.y + 100
        });
    }

    return groupIcons;
}

function createNuriGroup(existingRects) {
    const nuriItems = [
        { item: "Nu.D 36", type: "project" },
        { item: "Nu.D 38", type: "project" },
        { item: "Nu.D 40", type: "project" },
        { item: "Nuri Demirağ Aircraft Factory", type: "institution" },
        { item: "Nuri Demirağ Sky School", type: "institution" },
        { item: "Mansur Azak", type: "person" },
        { item: "Mehmet Kum", type: "person" },
        { item: "Hami Özger", type: "person" },
        { item: "Nuri Demirağ", type: "person" } // Center icon
    ];

    // Find a position for the group
    const centerPosition = getRandomPosition(
        window.innerWidth,
        window.innerHeight,
        200,  // Width for group
        200,  // Height for group
        existingRects
    );

    if (!centerPosition) return [];

    const groupIcons = [];
    const radius = 100; // Increased from 85 to 100 for more spacing
    
    // First create the eight surrounding icons in a circle
    for (let i = 0; i < 8; i++) {
        const angle = ((2 * Math.PI) / 8) * i + (Math.PI / 8); // Offset for better distribution
        const x = centerPosition.x + radius * Math.cos(angle) - 12.5; // Adjust for icon width (25/2)
        const y = centerPosition.y + radius * Math.sin(angle) - 12.5; // Adjust for icon height (25/2)

        const rect = {
            left: x,
            top: y,
            right: x + 40,
            bottom: y + 55
        };

        if (isPositionValid(rect, existingRects)) {
            const icon = createIcon(nuriItems[i].item, nuriItems[i].type, existingRects);
            if (icon) {
                icon.style.left = `${x}px`;
                icon.style.top = `${y}px`;
                // Make surrounding icons slightly bigger
                icon.querySelector('.icon').style.width = '35px';  // Increased from 25px
                icon.querySelector('.icon').style.height = '35px'; // Increased from 25px
                icon.querySelector('.icon-name').style.fontSize = '10px'; // Increased from 8px
                icon.querySelector('.icon-name').style.maxWidth = '100px'; // Increased from 80px
                groupIcons.push(icon);
                existingRects.push(rect);
            }
        }
    }

    // Then create Nuri Demirağ icon at the center
    const centerIcon = createIcon(nuriItems[8].item, nuriItems[8].type, existingRects);
    if (centerIcon) {
        // Adjust center position to account for icon dimensions
        centerIcon.style.left = `${centerPosition.x - 25}px`; // Center horizontally (50/2)
        centerIcon.style.top = `${centerPosition.y - 25}px`;  // Center vertically (50/2)
        groupIcons.push(centerIcon);
        existingRects.push({
            left: centerPosition.x - 25,
            top: centerPosition.y - 25,
            right: centerPosition.x + 25,
            bottom: centerPosition.y + 75
        });
    }

    return groupIcons;
}

function createTHKGroup(existingRects) {
    const thkItems = [
        { item: "T.H.K - 1", type: "project" },
        { item: "T.H.K - 2", type: "project" },
        { item: "T.H.K - 3", type: "project" },
        { item: "T.H.K - 4", type: "project" },
        { item: "T.H.K - 5", type: "project" },
        { item: "T.H.K - 7", type: "project" },
        { item: "T.H.K - 9", type: "project" },
        { item: "T.H.K - 10", type: "project" },
        { item: "T.H.K - 11", type: "project" },
        { item: "T.H.K - 12", type: "project" },
        { item: "T.H.K - 13", type: "project" },
        { item: "T.H.K - 14", type: "project" },
        { item: "T.H.K - 15", type: "project" },
        { item: "T.H.K - 16", type: "project" },
        { item: "Turkish Aeronautical Association", type: "institution" },
        { item: "Etimesgut Aircraft Factory", type: "institution" }
    ];

    // Find a position for the group
    const centerPosition = getRandomPosition(
        window.innerWidth,
        window.innerHeight,
        250,
        250,
        existingRects
    );

    if (!centerPosition) return [];

    const groupIcons = [];
    const radius = 130; // Increased from 110 to 130 for more spacing
    
    // First create the surrounding project icons in a circle
    for (let i = 0; i < 14; i++) {
        const angle = ((2 * Math.PI) / 14) * i;
        const x = centerPosition.x + radius * Math.cos(angle) - 12.5;
        const y = centerPosition.y + radius * Math.sin(angle) - 12.5;

        const rect = {
            left: x,
            top: y,
            right: x + 40,
            bottom: y + 55
        };

        if (isPositionValid(rect, existingRects)) {
            const icon = createIcon(thkItems[i].item, thkItems[i].type, existingRects);
            if (icon) {
                icon.style.left = `${x}px`;
                icon.style.top = `${y}px`;
                // Make surrounding icons slightly bigger
                icon.querySelector('.icon').style.width = '35px';  // Increased from 25px
                icon.querySelector('.icon').style.height = '35px'; // Increased from 25px
                icon.querySelector('.icon-name').style.fontSize = '10px'; // Increased from 8px
                icon.querySelector('.icon-name').style.maxWidth = '100px'; // Increased from 80px
                groupIcons.push(icon);
                existingRects.push(rect);
            }
        }
    }

    // Create the two center icons side by side
    const centerSpacing = 40; // Space between center icons
    
    // Turkish Aeronautical Association (left of center)
    const centerIcon1 = createIcon(thkItems[14].item, thkItems[14].type, existingRects);
    if (centerIcon1) {
        centerIcon1.style.left = `${centerPosition.x - 25 - centerSpacing}px`;
        centerIcon1.style.top = `${centerPosition.y - 25}px`;
        groupIcons.push(centerIcon1);
        existingRects.push({
            left: centerPosition.x - 25 - centerSpacing,
            top: centerPosition.y - 25,
            right: centerPosition.x + 25 - centerSpacing,
            bottom: centerPosition.y + 75
        });
    }

    // Etimesgut Aircraft Factory (right of center)
    const centerIcon2 = createIcon(thkItems[15].item, thkItems[15].type, existingRects);
    if (centerIcon2) {
        centerIcon2.style.left = `${centerPosition.x - 25 + centerSpacing}px`;
        centerIcon2.style.top = `${centerPosition.y - 25}px`;
        groupIcons.push(centerIcon2);
        existingRects.push({
            left: centerPosition.x - 25 + centerSpacing,
            top: centerPosition.y - 25,
            right: centerPosition.x + 25 + centerSpacing,
            bottom: centerPosition.y + 75
        });
    }

    return groupIcons;
}

function createKayseriGroup(existingRects) {
    const kayseriItems = [
        { item: "Curtiss Aeroplane and Motor Company", type: "institution" },
        { item: "Gothaer Wagonfabrik A.G.", type: "institution" },
        { item: "Panstwowe Zaklady Lotnicze", type: "institution" },
        { item: "Philips and Powis Aircraft Ltd.", type: "institution" },
        { item: "Kayseri Aircraft Factory", type: "institution" } // Center icon
    ];

    // Find a position for the group
    const centerPosition = getRandomPosition(
        window.innerWidth,
        window.innerHeight,
        200,  // Width for group
        200,  // Height for group
        existingRects
    );

    if (!centerPosition) return [];

    const groupIcons = [];
    const radius = 85; // Increased from 70 to 85 for more spacing
    
    // First create the four surrounding icons in a circle
    for (let i = 0; i < 4; i++) {
        const angle = ((2 * Math.PI) / 4) * i + (Math.PI / 4); // Start from 45 degrees
        const x = centerPosition.x + radius * Math.cos(angle) - 12.5;
        const y = centerPosition.y + radius * Math.sin(angle) - 12.5;

        const rect = {
            left: x,
            top: y,
            right: x + 40,
            bottom: y + 55
        };

        if (isPositionValid(rect, existingRects)) {
            const icon = createIcon(kayseriItems[i].item, kayseriItems[i].type, existingRects);
            if (icon) {
                icon.style.left = `${x}px`;
                icon.style.top = `${y}px`;
                // Make surrounding icons slightly bigger
                icon.querySelector('.icon').style.width = '35px';  // Increased from 25px
                icon.querySelector('.icon').style.height = '35px'; // Increased from 25px
                icon.querySelector('.icon-name').style.fontSize = '10px'; // Increased from 8px
                icon.querySelector('.icon-name').style.maxWidth = '100px'; // Increased from 80px
                groupIcons.push(icon);
                existingRects.push(rect);
            }
        }
    }

    // Then create Kayseri Aircraft Factory icon at the center
    const centerIcon = createIcon(kayseriItems[4].item, kayseriItems[4].type, existingRects);
    if (centerIcon) {
        centerIcon.style.left = `${centerPosition.x - 25}px`;
        centerIcon.style.top = `${centerPosition.y - 25}px`;
        groupIcons.push(centerIcon);
        existingRects.push({
            left: centerPosition.x - 25,
            top: centerPosition.y - 25,
            right: centerPosition.x + 25,
            bottom: centerPosition.y + 75
        });
    }

    return groupIcons;
}

// Update the initializeIcons function
function initializeIcons() {
    const container = document.getElementById('icons-container');
    container.innerHTML = '';
    
    const existingRects = [];

    // Combine all items into one array
    const allItems = [
        ...institutions.map(item => ({ item, type: 'institution' })),
        ...people.map(item => ({ item, type: 'person' })),
        ...projects.map(item => ({ item, type: 'project' }))
    ];

    // Shuffle the array for random placement
    for (let i = allItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
    }

    // Place all icons randomly
    allItems.forEach(({ item, type }) => {
        const iconElement = createIcon(item, type, existingRects);
        if (iconElement) {
            container.appendChild(iconElement);
        }
    });
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
        initializeIcons();
        animate();
    }, 100);
});

// Handle resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        resizeCanvas();
        initializeIcons();
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

function distributeIconsRandomly() {
    const icons = document.querySelectorAll('.icon-wrapper');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    icons.forEach(icon => {
        // Generate random positions within the screen bounds
        const randomX = Math.random() * (screenWidth - icon.offsetWidth);
        const randomY = Math.random() * (screenHeight - icon.offsetHeight);

        // Set the new position
        icon.style.position = 'absolute';
        icon.style.left = `${randomX}px`;
        icon.style.top = `${randomY}px`;
    });
}

// Call this function when you want to distribute the icons
distributeIconsRandomly();

document.querySelectorAll('.connection-line').forEach(line => {
    line.addEventListener('mouseenter', function() {
        // Show the label for the connected icon
        document.getElementById('labelIsmet').style.display = 'block';
    });

    line.addEventListener('mouseleave', function() {
        // Hide the label for the connected icon
        document.getElementById('labelIsmet').style.display = 'none';
    });
});

document.querySelectorAll('.search-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
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

    item.addEventListener('mouseleave', function() {
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