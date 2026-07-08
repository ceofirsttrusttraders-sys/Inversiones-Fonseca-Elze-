// Datos de documentos - INVERSIONES FONSECA ELZE
// Actualizado: 08 Jul 2026
// Total: 12 documentos subidos

const documents = [
    // ==================== ANÁLISIS DE INVERSIONES ====================
    {
        id: 1,
        name: "Capital Engineering Blueprint",
        category: "analisis",
        icon: "fas fa-file-pdf",
        size: "16.6 MB",
        date: "08 Jul 2026",
        url: "Capital_Engineering_Blueprint%20(1).pdf"
    },
    {
        id: 2,
        name: "Structured Finance Blueprint",
        category: "analisis",
        icon: "fas fa-file-pdf",
        size: "13.6 MB",
        date: "08 Jul 2026",
        url: "Structured_Finance_Blueprint%20(1).pdf"
    },
    {
        id: 3,
        name: "PPT Arquitectura",
        category: "analisis",
        icon: "fas fa-file-pdf",
        size: "11.8 MB",
        date: "08 Jul 2026",
        url: "PPT%20ARQUITETURA%20.pdf"
    },

    // ==================== ESTADOS FINANCIEROS ====================
    {
        id: 4,
        name: "Modelo Financiero Consolidado 4 Hojas",
        category: "financieros",
        icon: "fas fa-file-excel",
        size: "20 KB",
        date: "08 Jul 2026",
        url: "Modelo_Financiero_Consolidado_4Hojas%20(1).xlsx"
    },
    {
        id: 5,
        name: "Consolidated Financial Model USD",
        category: "financieros",
        icon: "fas fa-file-excel",
        size: "20 KB",
        date: "08 Jul 2026",
        url: "Consolidated_Financial_Model_USD%20(1)%20(2).xlsx"
    },
    {
        id: 6,
        name: "Informe de Gestión Financiera 118",
        category: "financieros",
        icon: "fas fa-file-pdf",
        size: "549 KB",
        date: "08 Jul 2026",
        url: "Informe%20de%20Gestio%CC%81n%20Financiera%20118%20.pdf"
    },
    {
        id: 7,
        name: "Dashboard Cifras de Ventas",
        category: "financieros",
        icon: "fas fa-file-pdf",
        size: "55 KB",
        date: "08 Jul 2026",
        url: "DASHBOARD%20CIFRAS%20DE%20VENTAS%20.pdf"
    },

    // ==================== DOCUMENTOS CORPORATIVOS ====================
    {
        id: 8,
        name: "Memorandum Financiero Fonseca Elze Dubai 2026",
        category: "corporativos",
        icon: "fas fa-file-pdf",
        size: "72 KB",
        date: "08 Jul 2026",
        url: "Memorandum_Financiero_Fonseca_Elze_Dubai_2026_USD20M_v3%20(1).pdf"
    },
    {
        id: 9,
        name: "Santa Bárbara 118 Institutional Memorandum",
        category: "corporativos",
        icon: "fas fa-file-pdf",
        size: "13.6 MB",
        date: "08 Jul 2026",
        url: "2Santa_Ba%CC%81rbara_118_Institutional_Memorandum.pdf"
    },

    // ==================== PROYECCIONES Y ESTRATEGIA ====================
    {
        id: 10,
        name: "PTT Inglés Santa Bárbara 118",
        category: "proyecciones",
        icon: "fas fa-file-pdf",
        size: "15.1 MB",
        date: "08 Jul 2026",
        url: "PTT%20INGLES%20SANTA%20BARBARA%20118.pdf"
    },
    {
        id: 11,
        name: "Teaser Inglés",
        category: "proyecciones",
        icon: "fas fa-file-pdf",
        size: "16.6 MB",
        date: "08 Jul 2026",
        url: "TEASER%20INGLES%20.pdf"
    },

    // ==================== OTROS DOCUMENTOS ====================
    {
        id: 12,
        name: "Cerros del Himalaya - Informe",
        category: "otros",
        icon: "fas fa-file-pdf",
        size: "103 KB",
        date: "08 Jul 2026",
        url: "Cerros_del_Himalaya_INFORME.pdf"
    },

    // ==================== AGREGAR MÁS DOCUMENTOS AQUÍ ====================
    // Estructura para agregar nuevos documentos:
    // {
    //     id: 13,
    //     name: "Nombre del Documento",
    //     category: "reportes", // o: financieros, analisis, corporativos, proyecciones, otros
    //     icon: "fas fa-file-pdf", // o: fas fa-file-excel, fas fa-file-word
    //     size: "X MB",
    //     date: "DD Mon YYYY",
    //     url: "nombre_archivo.pdf"
    // },
];

// Filtro actual
let currentFilter = 'todos';

// Renderizar documentos
function renderDocuments(docsToRender = documents) {
    const grid = document.getElementById('documentsGrid');
    const noResults = document.getElementById('noResults');
    
    if (docsToRender.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    grid.innerHTML = docsToRender.map(doc => `
        <div class="document-card" data-category="${doc.category}">
            <div class="document-icon">
                <i class="${doc.icon}"></i>
            </div>
            <span class="document-category">${getCategoryLabel(doc.category)}</span>
            <h3 class="document-name">${doc.name}</h3>
            <div class="document-meta">
                <span class="document-size">${doc.size}</span>
                <span class="document-date">${doc.date}</span>
            </div>
            <button class="download-btn" onclick="downloadDocument('${doc.url}', '${doc.name}')">
                <i class="fas fa-download"></i> Descargar
            </button>
        </div>
    `).join('');
}

// Obtener etiqueta de categor��a
function getCategoryLabel(category) {
    const labels = {
        'reportes': 'Reportes Trimestrales',
        'financieros': 'Estados Financieros',
        'analisis': 'Análisis de Inversiones',
        'corporativos': 'Documentos Corporativos',
        'proyecciones': 'Proyecciones y Estrategia',
        'otros': 'Otros Documentos'
    };
    return labels[category] || category;
}

// Filtrar documentos
function filterDocuments(category) {
    currentFilter = category;
    let filtered = documents;
    
    if (category !== 'todos') {
        filtered = documents.filter(doc => doc.category === category);
    }
    
    renderDocuments(filtered);
}

// Buscar documentos
function searchDocuments(query) {
    const searchTerm = query.toLowerCase();
    
    let filtered = documents.filter(doc => 
        doc.name.toLowerCase().includes(searchTerm) ||
        getCategoryLabel(doc.category).toLowerCase().includes(searchTerm)
    );
    
    // Aplicar filtro actual si no es "todos"
    if (currentFilter !== 'todos') {
        filtered = filtered.filter(doc => doc.category === currentFilter);
    }
    
    renderDocuments(filtered);
}

// Descargar documento
function downloadDocument(url, name) {
    // Crear elemento temporal
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar documentos iniciales
    renderDocuments();
    
    // Botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterDocuments(btn.dataset.filter);
        });
    });
    
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        if (e.target.value.trim() === '') {
            filterDocuments(currentFilter);
        } else {
            searchDocuments(e.target.value);
        }
    });
});

// Animación de carga
window.addEventListener('load', () => {
    document.querySelectorAll('.document-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`;
    });
});

// Agregar animación CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);