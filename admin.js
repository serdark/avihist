// Load the existing item details
let itemDetails = JSON.parse(localStorage.getItem('itemDetails')) || {};

// Initialize categories
const categories = {
    institution: [],
    person: [],
    project: []
};

// // Populate categories
// for (const [name, details] of Object.entries(itemDetails)) {
//     if (details.category) {
//         const category = details.category.toLowerCase();
//         categories[category].push(name);
//     }
// }

function createItemCard(name, details) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.dataset.category = details.category.toLowerCase();

    card.innerHTML = `
        <div class="item-header">
            <div class="item-title">${name}</div>
            <div class="item-category">${details.category}</div>
        </div>
        <form class="edit-form" data-item="${name}">
            <div class="form-group">
                <label class="form-label">Description</label>
                <textarea name="description" class="description-input">${details.description || ''}</textarea>
            </div>
            ${details.category === 'Person' ? `
                <div class="form-group">
                    <label class="form-label">Life Span</label>
                    <input type="text" name="birthDeath" value="${details.birthDeath || ''}">
                </div>
            ` : ''}
            <div class="form-group">
                <label class="form-label">Historical Significance</label>
                <textarea name="significance">${details.significance || ''}</textarea>
            </div>
            <button type="submit" class="save-btn">Save Changes</button>
            <div class="success-message">Changes saved successfully!</div>
        </form>
    `;

    // Handle form submission
    const form = card.querySelector('.edit-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        
        // Update itemDetails
        itemDetails[name] = {
            ...itemDetails[name],
            description: formData.get('description'),
            significance: formData.get('significance')
        };

        if (details.category === 'Person') {
            itemDetails[name].birthDeath = formData.get('birthDeath');
        }

        // Save to localStorage
        localStorage.setItem('itemDetails', JSON.stringify(itemDetails));

        // Show success message
        const successMessage = form.querySelector('.success-message');
        successMessage.classList.add('show');
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 2000);
    });

    return card;
}

function initializeAdmin() {
    const container = document.getElementById('items-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Create cards for all items
    for (const [name, details] of Object.entries(itemDetails)) {
        const card = createItemCard(name, details);
        container.appendChild(card);
    }

    // Handle filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            const category = btn.dataset.category;
            const cards = container.querySelectorAll('.item-card');
            
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Initialize when the page loads
window.addEventListener('load', initializeAdmin); 