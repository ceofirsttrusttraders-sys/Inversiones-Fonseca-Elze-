// Datos de ejemplo de documentos - PERSONALIZA CON TUS PDFS
const documents = [
    {
        id: 1,
        name: "Reporte Trimestral Q1 2026",
        category: "reportes",
        icon: "fas fa-file-pdf",
        size: "2.4 MB",
        date: "15 Mar 2026",
        url: "documentos/reporte_q1_2026.pdf"
    },
    {
        id: 2,
        name: "Reporte Trimestral Q2 2026",
        category: "reportes",
        icon: "fas fa-file-pdf",
        size: "2.8 MB",
        date: "15 Jun 2026",
        url: "documentos/reporte_q2_2026.pdf"
    },
    {
        id: 3,
        name: "Reporte Trimestral Q3 2026",
        category: "reportes",
        icon: "fas fa-file-pdf",
        size: "2.6 MB",
        date: "15 Sep 2026",
        url: "documentos/reporte_q3_2026.pdf"
    },
    {
        id: 4,
        name: "Estado Financiero Enero 2026",
        category: "financieros",
        icon: "fas fa-file-pdf",
        size: "1.8 MB",
        date: "31 Ene 2026",
        url: "documentos/estado_financiero_enero_2026.pdf"
    },
    {
        id: 5,
        name: "Estado Financiero Febrero 2026",
        category: "financieros",
        icon: "fas fa-file-pdf",
        size: "1.9 MB",
        date: "28 Feb 2026",
        url: "documentos/estado_financiero_febrero_2026.pdf"
    },
    {
        id: 6,
        name: "Estado Financiero Marzo 2026",
        category: "financieros",
        icon: "fas fa-file-pdf",
        size: "2.0 MB",
        date: "31 Mar 2026",
        url: "documentos/estado_financiero_marzo_2026.pdf"
    },
    {
        id: 7,
        name: "Análisis de Cartera Mercados Emergentes",
        category: "analisis",
        icon: "fas fa-file-pdf",
        size: "3.2 MB",
        date: "10 Jul 2026",
        url: "documentos/analisis_mercados_emergentes.pdf"
    },
    {
        id: 8,
        name: "Análisis de Riesgo Crediticio",
        category: "analisis",
        icon: "fas fa-file-pdf",
        size: "2.7 MB",
        date: "05 Jul 2026",
        url: "documentos/analisis_riesgo_crediticio.pdf"
    },
    {
        id: 9,
        name: "Análisis Técnico Forex",
        category: "analisis",
        icon: "fas fa-file-pdf",
        size: "2.5 MB",
        date: "01 Jul 2026",
        url: "documentos/analisis_tecnico_forex.pdf"
    },
    {
        id: 10,
        name: "Política de Gobierno Corporativo",
        category: "corporativos",
        icon: "fas fa-file-pdf",
        size: "1.5 MB",
        date: "20 Ene 2026",
        url: "documentos/politica_gobierno_corporativo.pdf"
    },
    {
        id: 11,
        name: "Código de Conducta Empresarial",
        category: "corporativos",
        icon: "fas fa-file-pdf",
        size: "1.2 MB",
        date: "15 Ene 2026",
        url: "documentos/codigo_conducta_empresarial.pdf"
    },
    {
        id: 12,
        name: "Acta Junta Directiva Enero 2026",
        category: "corporativos",
        icon: "fas fa-file-pdf",
        size: "0.8 MB",
        date: "25 Ene 2026",
        url: "documentos/acta_junta_enero_2026.pdf"
    },
    {
        id: 13,
        name: "Proyección Financiera 2026-2030",
        category: "proyecciones",
        icon: "fas fa-file-pdf",
        size: "4.1 MB",
        date: "01 Mar 2026",
        url: "documentos/proyeccion_financiera_2026_2030.pdf"
    },
    {
        id: 14,
        name: "Estrategia de Inversión 2026",
        category: "proyecciones",
        icon: "fas fa-file-pdf",
        size: "3.5 MB",
        date: "15 Feb 2026",
        url: "documentos/estrategia_inversion_2026.pdf"
    },
    {
        id: 15,
        name: "Plan Desarrollo Corporativo 2026",
        category: "proyecciones",
        icon: "fas fa-file-pdf",
        size: "2.9 MB",
        date: "01 Feb 2026",
        url: "documentos/plan_desarrollo_corporativo_2026.pdf"
    }
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

// Obtener etiqueta de categoría
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
    
    // Fallback si el archivo no existe
    if (!url.includes('http')) {
        alert(`📁 El archivo "${name}" está listo para descargar.\n\nÚbica el PDF en la carpeta "documentos" del repositorio.`);
    } else {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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