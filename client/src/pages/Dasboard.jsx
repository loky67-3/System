import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { 
  FaThLarge, FaList, FaCog, FaSignOutAlt, FaBars, FaTimes,
  FaPlus, FaTrash, FaEdit, FaSearch, FaBell,
  FaRegCalendarAlt, FaUserFriends, FaFolderOpen, FaChartPie, 
  FaQuestionCircle, FaStickyNote, FaMapMarkerAlt, FaEnvelope, 
  FaCheckDouble, FaArrowUp, FaFilePdf, FaFileImage, FaFileAlt, 
  FaCloudDownloadAlt, FaToggleOn, FaToggleOff, FaChevronLeft, FaChevronRight,
  FaAlignLeft, FaImage, FaExchangeAlt, FaPhone, FaStar, FaUserPlus,
  FaSlidersH, FaPalette, FaKeyboard, FaShieldAlt, FaCheck, FaUndo,
  FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileCode, FaFileArchive, FaFileVideo, FaFileAudio, FaFileCsv
} from "react-icons/fa";

export default function Dasboard() {
  const navigate = useNavigate();
  
  // --- Estados Generales ---
  const [activeSidebar, setActiveSidebar] = useState('notes'); // Controla la sección activa
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban' | 'table'
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('info'); // 'info' | 'desc' | 'image' | 'status' | 'delete'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Menú móvil
  const [selectedTasks, setSelectedTasks] = useState([]); // Para checkboxes
  const [dragOverCol, setDragOverCol] = useState(""); // Estado visual Drag & Drop
  const [currentDate, setCurrentDate] = useState(new Date()); // Estado del Calendario
  const [contacts, setContacts] = useState([
    { id: 1, name: "Ana López", role: "Diseñadora UX", phone: "55 1234 5678", email: "ana@design.com", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80", isFavorite: true },
    { id: 2, name: "David Miller", role: "Full Stack Dev", phone: "55 9876 5432", email: "david@code.com", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&auto=format&fit=crop&q=80", isFavorite: false },
    { id: 3, name: "Sarah Connor", role: "Project Manager", phone: "55 5678 1234", email: "sarah@skynet.com", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80", isFavorite: true },
    { id: 4, name: "James Bond", role: "Seguridad", phone: "00 0000 0007", email: "james@mi6.uk", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80", isFavorite: false },
  ]);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", role: "", phone: "", email: "", image: "" });
  const [editingContactId, setEditingContactId] = useState(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [activeSettingTab, setActiveSettingTab] = useState('general');
  
  // --- Estado de Archivos (File Explorer) ---
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([
      { name: "Reporte_Q1.pdf", type: "pdf", size: "2.4 MB", date: "Hoy" },
      { name: "Analisis_Ventas.xlsx", type: "excel", size: "1.1 MB", date: "Ayer" },
      { name: "Presentacion.pptx", type: "ppt", size: "12 MB", date: "Ayer" },
      { name: "Logo_Vector.svg", type: "img", size: "800 KB", date: "Semana pasada" },
      { name: "index.html", type: "code", size: "4 KB", date: "Hoy" },
      { name: "Backup_BD.zip", type: "zip", size: "1.2 GB", date: "Mes pasado" },
      { name: "Promo_Reel.mp4", type: "video", size: "450 MB", date: "Hoy" },
      { name: "Entrevista.mp3", type: "audio", size: "45 MB", date: "Ayer" },
      { name: "Clientes_2024.csv", type: "csv", size: "150 KB", date: "Ayer" },
      { name: "Contrato_Borrador.docx", type: "word", size: "24 KB", date: "Hoy" },
      { name: "styles.css", type: "code", size: "12 KB", date: "Semana pasada" },
      { name: "app.js", type: "code", size: "28 KB", date: "Hoy" },
      { name: "Notas_Rapidas.txt", type: "text", size: "2 KB", date: "Hace un mes" },
      { name: "Foto_Perfil.jpg", type: "img", size: "5.6 MB", date: "Ayer" },
      { name: "Banner_Web.png", type: "img", size: "3.2 MB", date: "Semana pasada" },
      { name: "Podcast_Intro.wav", type: "audio", size: "120 MB", date: "Hoy" },
      { name: "Meme_Team.gif", type: "img", size: "12 MB", date: "Ayer" },
      { name: "config.json", type: "code", size: "1 KB", date: "Hoy" },
      { name: "Proyecto_Final.rar", type: "zip", size: "3.4 GB", date: "Ayer" },
      { name: "Instrucciones.rtf", type: "text", size: "5 KB", date: "Hoy" }
  ]);

  // --- Estado de Datos (Simulando Base de Datos Compleja) ---
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: "Revisión de Diseño UI", 
      type: "Trabajo",
      schedule: "09:00 AM",
      email: "design@apple.com",
      country: "USA",
      city: "Cupertino",
      status: "todo", 
      images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&auto=format&fit=crop&q=80"], 
      desc: "Validar sombras y bordes." 
    },
    { 
      id: 2, 
      title: "Lanzamiento Beta", 
      type: "Dev",
      schedule: "14:00 PM",
      email: "dev@system24.com",
      country: "México",
      city: "CDMX",
      status: "inprogress", 
      images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&auto=format&fit=crop&q=80"], 
      desc: "Deploy en servidor de pruebas." 
    },
    { 
      id: 3, 
      title: "Reunión de Marketing", 
      type: "Reunión",
      schedule: "11:00 AM",
      email: "marketing@agency.com",
      country: "España",
      city: "Madrid",
      status: "done", 
      images: ["https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&auto=format&fit=crop&q=80"], 
      desc: "Revisar campañas Q4." 
    },
  ]);

  // --- Estado del Formulario CRUD ---
  const initialForm = { 
    title: "", type: "Personal", schedule: "", email: "", 
    country: "", city: "", desc: "", status: "todo", images: [] 
  };
  const [formData, setFormData] = useState(initialForm);
  const [currentTaskId, setCurrentTaskId] = useState(null); // null = crear, ID = editar
  const [tempImageUrl, setTempImageUrl] = useState(""); // Input para agregar imagen

  // --- Lógica del Sidebar (10 Funciones) ---
  const sidebarItems = [
    { id: 'dashboard', icon: <FaThLarge />, label: 'Panel' },
    { id: 'notes', icon: <FaStickyNote />, label: 'Mis Notas' },
    { id: 'calendar', icon: <FaRegCalendarAlt />, label: 'Calendario' },
    { id: 'contacts', icon: <FaUserFriends />, label: 'Contactos' },
    { id: 'files', icon: <FaFolderOpen />, label: 'Archivos' },
    { id: 'reports', icon: <FaChartPie />, label: 'Reportes' },
    { id: 'settings', icon: <FaCog />, label: 'Ajustes' },
    { id: 'help', icon: <FaQuestionCircle />, label: 'Ayuda' },
  ];

  // --- Funciones de Filtrado ---
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- Funciones CRUD ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return toast.error("El nombre es obligatorio");

    if (currentTaskId) {
      // Modificar
      setTasks(tasks.map(t => t.id === currentTaskId ? { ...t, ...formData } : t));
      toast.success("Nota modificada correctamente");
    } else {
      // Agregar
      const newTask = { ...formData, id: Date.now() };
      setTasks([...tasks, newTask]);
      toast.success("Nota agregada al sistema");
    }
    closeModal();
  };

  // --- CRUD Contactos ---
  const handleSaveContact = (e) => {
      e.preventDefault();
      if(!contactForm.name) return toast.error("El nombre es requerido");
      
      if(editingContactId) {
          setContacts(contacts.map(c => c.id === editingContactId ? {...c, ...contactForm} : c));
          toast.success("Contacto actualizado");
      } else {
          setContacts([...contacts, {...contactForm, id: Date.now(), isFavorite: false}]);
          toast.success("Contacto guardado");
      }
      setIsContactModalOpen(false);
  };

  const handleDeleteContact = (id) => {
      if(window.confirm("¿Eliminar contacto de tu lista?")) {
          setContacts(contacts.filter(c => c.id !== id));
          toast.success("Contacto eliminado");
      }
  };

  const handleDelete = (id) => {
    if(window.confirm("¿Eliminar esta nota permanentemente?")) {
      setTasks(tasks.filter(t => t.id !== id));
      toast.success("Nota eliminada");
    }
  };

  const handleAddImage = () => {
    if (!tempImageUrl) return;
    setFormData({ ...formData, images: [...formData.images, tempImageUrl] });
    setTempImageUrl("");
  };

  const handleRemoveImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
  };

  const toggleSelectTask = (id) => {
    if (selectedTasks.includes(id)) {
      setSelectedTasks(selectedTasks.filter(tid => tid !== id));
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  // --- Modal Helpers ---
  const openModal = (task = null, type = 'info') => {
    setModalType(type);
    if (task) {
      setCurrentTaskId(task.id);
      setFormData(task);
    } else {
      setCurrentTaskId(null);
      setFormData(initialForm);
    }
    setIsModalOpen(true);
  };

  // --- Lógica de Archivos (Upload & Icons) ---
  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const newFiles = uploadedFiles.map(file => {
        let type = 'text';
        const ext = file.name.split('.').pop().toLowerCase();
        
        if (['pdf'].includes(ext)) type = 'pdf';
        else if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(ext)) type = 'img';
        else if (['doc', 'docx'].includes(ext)) type = 'word';
        else if (['xls', 'xlsx'].includes(ext)) type = 'excel';
        else if (['ppt', 'pptx'].includes(ext)) type = 'ppt';
        else if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) type = 'zip';
        else if (['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(ext)) type = 'video';
        else if (['mp3', 'wav', 'ogg', 'm4a'].includes(ext)) type = 'audio';
        else if (['js', 'html', 'css', 'json', 'py', 'java', 'c', 'cpp'].includes(ext)) type = 'code';
        else if (['csv'].includes(ext)) type = 'csv';

        return {
            name: file.name,
            type: type,
            size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
            date: 'Ahora'
        };
    });
    setFiles([...newFiles, ...files]);
    toast.success(`${uploadedFiles.length} archivo(s) agregado(s)`);
  };

  const getFileIcon = (type) => {
    switch(type) {
        case 'pdf': return <FaFilePdf color="#ff3b30" />;
        case 'word': return <FaFileWord color="#007aff" />;
        case 'excel': return <FaFileExcel color="#34c759" />;
        case 'ppt': return <FaFilePowerpoint color="#ff9500" />;
        case 'code': return <FaFileCode color="#5856d6" />;
        case 'zip': return <FaFileArchive color="#ffcc00" />;
        case 'video': return <FaFileVideo color="#5ac8fa" />;
        case 'audio': return <FaFileAudio color="#ff2d55" />;
        case 'csv': return <FaFileCsv color="#34c759" />;
        case 'img': return <FaFileImage color="#af52de" />;
        default: return <FaFileAlt color="#86868b" />;
    }
  }

  const openContactModal = (contact = null) => {
      if(contact) {
          setEditingContactId(contact.id);
          setContactForm(contact);
      } else {
          setEditingContactId(null);
          setContactForm({ name: "", role: "", phone: "", email: "", image: "" });
      }
      setIsContactModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // --- Drag and Drop Nativo ---
  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onDragOver = (e, status) => {
    e.preventDefault();
  };

  const onDragEnter = (e, status) => {
    e.preventDefault();
    setDragOverCol(status);
  };

  const onDrop = (e, newStatus) => {
    let id = e.dataTransfer.getData("id");
    let updatedTasks = tasks.map((task) => {
      // Comparación laxa por si id es string/number
      if (task.id == id) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setDragOverCol(""); // Reset visual
    setTasks(updatedTasks);
    toast.success(`Movido a ${newStatus === 'todo' ? 'Por Hacer' : newStatus === 'inprogress' ? 'En Progreso' : 'Completado'}`);
  };

  // --- Lógica del Calendario ---
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];


  // --- Renderizado de Componentes ---

  return (
    <div className="dashboard-layout">
      
      {/* Overlay para móvil cuando el menú está abierto */}
      {isSidebarOpen && <div className="db-sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}

      {/* 1. SIDEBAR PRO */}
      <aside className={`db-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="db-header-mobile">
             <div className="db-logo"><FaCheckDouble size={22} /> System24</div>
             <button className="db-close-btn" onClick={() => setIsSidebarOpen(false)}><FaTimes /></button>
        </div>

        <div className="db-logo desktop-only-logo">
          <FaCheckDouble size={26} /> System24
        </div>
        
        <div style={{flex: 1, overflowY: 'auto'}}>
          <p style={{fontSize: 12, color: '#aaa', fontWeight: 600, paddingLeft: 16, marginBottom: 10}}>MENU PRINCIPAL</p>
          {sidebarItems.map(item => (
            <div 
              key={item.id}
              className={`db-nav-item ${activeSidebar === item.id ? 'active' : ''}`} 
              onClick={() => { setActiveSidebar(item.id); setIsSidebarOpen(false); }}
            >
              {item.icon} {item.label}
            </div>
          ))}
        </div>

        <div className="db-nav-item db-logout" onClick={() => { toast.success("¡Hasta luego!"); navigate('/login'); }}>
          <FaSignOutAlt /> Cerrar sesión
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="db-content">
        
        {/* Top Header */}
        <header className="db-header" style={{marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid #e5e5ea'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <button className="db-mobile-toggle" onClick={() => setIsSidebarOpen(true)} style={{marginRight: 5}}>
                <FaBars size={22} color="#1d1d1f" />
            </button>
            <div className="db-welcome">
                <h1 style={{fontSize: 24, fontWeight: 700, margin: 0, color: '#1d1d1f'}}>Panel</h1>
            </div>

            {/* View Switcher Integrated */}
            <div style={{display: 'flex', background: '#e5e5ea', padding: 2, borderRadius: 8, marginLeft: 10}}>
                <button 
                    onClick={() => setViewMode('kanban')}
                    style={{
                        background: viewMode === 'kanban' ? 'white' : 'transparent', 
                        border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer',
                        boxShadow: viewMode === 'kanban' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', display: 'flex'
                    }}
                >
                    <FaThLarge size={14} />
                </button>
                <button 
                    onClick={() => setViewMode('table')}
                    style={{
                        background: viewMode === 'table' ? 'white' : 'transparent', 
                        border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer',
                        boxShadow: viewMode === 'table' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', display: 'flex'
                    }}
                >
                    <FaList size={14} />
                </button>
            </div>
          </div>

          <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
            <div className="db-search-container" style={{position: 'relative'}}>
                <FaSearch style={{position: 'absolute', left: 12, top: 10, color: '#86868b', fontSize: 14}} />
                <input 
                    type="text" 
                    className="apple-search" 
                    placeholder="Buscar..." 
                    style={{paddingLeft: 34, width: 200, border: '1px solid #d2d2d7', background: '#fff', borderRadius: 8, height: 36, fontSize: 14}}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            
            <button className="auth-button" style={{width: 'auto', padding: '0 16px', height: 36, fontSize: 13, marginTop: 0}} onClick={() => openModal()}>
                <FaPlus style={{marginRight: 4}}/> Crear
            </button>

            <div className="db-profile" style={{padding: '4px 8px', gap: 8, height: 36}}>
                <FaBell color="#555" size={16} />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" alt="User" style={{width: 28, height: 28, borderRadius: '50%'}} />
            </div>
          </div>
        </header>

        {/* 3. CONTENT VIEWS (SWITCHER) */}
        
        {/* --- VISTA: DASHBOARD (HOME) --- */}
        {activeSidebar === 'dashboard' && (
           <div style={{marginTop: 20, animation: 'fadeIn 0.5s ease'}}>
              {/* Widgets de Estadísticas */}
              <div className="dashboard-grid">
                  <div className="stat-card modern-widget" style={{backgroundImage: 'linear-gradient(135deg, #007aff 0%, #005ecb 100%)', color: 'white'}}>
                      <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                          <div className="stat-icon-wrapper" style={{background: 'rgba(255,255,255,0.2)', color: '#fff'}}><FaStickyNote /></div>
                          <span style={{fontSize: 12, opacity: 0.8}}>Actualizado hoy</span>
                      </div>
                      <div style={{marginTop: 15}}>
                        <div className="stat-value" style={{color: 'white'}}>{tasks.length}</div>
                        <div className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Notas Activas</div>
                      </div>
                  </div>

                  <div className="stat-card">
                      <div className="stat-icon-wrapper" style={{background: '#fff4e5', color: '#ff9500'}}><FaList /></div>
                      <div className="stat-value">{tasks.filter(t => t.status === 'todo').length}</div>
                      <div className="stat-label">Pendientes</div>
                  </div>
                  <div className="stat-card">
                      <div className="stat-icon-wrapper" style={{background: '#e6fffa', color: '#00c7be'}}><FaCheckDouble /></div>
                      <div className="stat-value">{tasks.filter(t => t.status === 'done').length}</div>
                      <div className="stat-label">Completadas</div>
                  </div>
                  <div className="stat-card modern-widget" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=400&q=80)', backgroundSize: 'cover'}}>
                      <div style={{background: 'rgba(0,0,0,0.5)', position:'absolute', inset:0, borderRadius: 20}}></div>
                      <div style={{position: 'relative', zIndex: 1, color: 'white'}}>
                        <div className="stat-icon-wrapper" style={{background: 'rgba(255,255,255,0.2)', color: '#fff'}}><FaArrowUp /></div>
                        <div className="stat-value" style={{color: 'white'}}>+24%</div>
                        <div className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Productividad</div>
                      </div>
                  </div>
              </div>

              {/* Gráfica de Barras (CSS Puro) */}
              <div className="chart-container">
                  <div className="chart-header">
                      <span className="chart-title">Actividad Semanal</span>
                      <select className="apple-field" style={{width: 'auto', padding: '5px 10px'}}><option>Esta Semana</option></select>
                  </div>
                  <div className="bar-chart">
                      {[40, 70, 30, 85, 50, 90, 60].map((h, i) => (
                          <div key={i} className="bar-group">
                              <div className="bar" style={{height: `${h}%`}}>
                                 <div className="bar-tooltip">{h}%</div>
                              </div>
                              <span className="bar-label">{['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'][i]}</span>
                          </div>
                      ))}
                  </div>
              </div>
              
              {/* Actividad Reciente (Reutilizamos tabla simple) */}
              <h3 style={{fontSize: 18, marginBottom: 15, color: '#1d1d1f'}}>Actividad Reciente</h3>
              <div className="apple-table-wrapper">
                  <table className="apple-table">
                      <tbody>
                          {tasks.slice(0, 3).map(t => <tr key={t.id}><td><b>{t.title}</b> se actualizó</td><td style={{color:'#888', textAlign:'right'}}>Hace 2h</td></tr>)}
                      </tbody>
                  </table>
              </div>
           </div>
        )}

        {/* --- VISTA: MIS NOTAS --- */}
        {activeSidebar === 'notes' && (
            <div style={{flex: 1, marginTop: 20}}>
                
                {viewMode === 'kanban' ? (
                    /* VISTA KANBAN (DRAG AND DROP) */
                    <div className="kanban-board">
                        {['todo', 'inprogress', 'done'].map(status => (
                            <div 
                                key={status} 
                                className={`kanban-column ${dragOverCol === status ? 'drag-active' : ''}`}
                                onDragOver={(e) => onDragOver(e, status)}
                                onDragEnter={(e) => onDragEnter(e, status)}
                                onDrop={(e) => onDrop(e, status)}
                            >
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, padding: '0 5px'}}>
                                    <h3 style={{
                                        fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5,
                                        color: status === 'todo' ? '#ff3b30' : status === 'inprogress' ? '#007aff' : '#34c759',
                                        display: 'flex', alignItems: 'center', gap: 8
                                    }}>
                                        <span style={{width: 8, height: 8, borderRadius: '50%', background: status === 'todo' ? '#ff3b30' : status === 'inprogress' ? '#007aff' : '#34c759'}}></span>
                                        {status === 'todo' ? 'Por Hacer' : status === 'inprogress' ? 'En Progreso' : 'Completado'}
                                    </h3>
                                    <span style={{background: 'rgba(0,0,0,0.04)', padding: '2px 8px', borderRadius: 12, fontSize: 12, fontWeight: 600, color: '#86868b'}}>
                                        {filteredTasks.filter(t => t.status === status).length}
                                    </span>
                                </div>
                                
                                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                                    {filteredTasks.filter(t => t.status === status).map(task => (
                                        <div 
                                            key={task.id} 
                                            className="kanban-card"
                                            draggable
                                            onDragStart={(e) => onDragStart(e, task.id)}
                                            style={{border: '1px solid #e5e5ea', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'all 0.2s', padding: 0, overflow: 'hidden'}}
                                        >
                                            {/* 1. Imagen Completa Arriba */}
                                            {task.images.length > 0 ? (
                                                <div style={{width: '100%', height: 140, overflow: 'hidden'}}>
                                                    <img src={task.images[0]} alt="cover" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                                </div>
                                            ) : (
                                                <div style={{width: '100%', height: 6, background: task.status === 'todo' ? '#ff3b30' : task.status === 'inprogress' ? '#007aff' : '#34c759'}}></div>
                                            )}

                                            {/* 2. Contenido */}
                                            <div style={{padding: 15}}>
                                                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                                                    <span style={{fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>{task.type}</span>
                                                    <span style={{fontSize: 10, color: '#86868b'}}>{task.schedule}</span>
                                                </div>

                                                <h4 style={{fontSize: 16, fontWeight: 700, margin: '0 0 6px 0', color: '#1d1d1f'}}>{task.title}</h4>
                                                
                                                <p style={{fontSize: 13, color: '#86868b', margin: '0 0 15px 0', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                                                    {task.desc || "Sin descripción detallada..."}
                                                </p>
                                                
                                                {/* 3. Barra de 5 Botones */}
                                                <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f5f5f7', paddingTop: 12}}>
                                                    <button onClick={() => openModal(task, 'info')} title="Editar Info" style={{background:'none', border:'none', cursor:'pointer', color:'#86868b', transition:'color 0.2s'}}>
                                                        <FaEdit size={14} onMouseOver={e => e.currentTarget.style.color = '#007aff'} onMouseOut={e => e.currentTarget.style.color = '#86868b'} />
                                                    </button>
                                                    
                                                    <button onClick={() => openModal(task, 'desc')} title="Descripción" style={{background:'none', border:'none', cursor:'pointer', color:'#86868b', transition:'color 0.2s'}}>
                                                        <FaAlignLeft size={14} onMouseOver={e => e.currentTarget.style.color = '#007aff'} onMouseOut={e => e.currentTarget.style.color = '#86868b'} />
                                                    </button>
                                                    
                                                    <button onClick={() => openModal(task, 'image')} title="Galería" style={{background:'none', border:'none', cursor:'pointer', color:'#86868b', transition:'color 0.2s'}}>
                                                        <FaImage size={14} onMouseOver={e => e.currentTarget.style.color = '#007aff'} onMouseOut={e => e.currentTarget.style.color = '#86868b'} />
                                                    </button>
                                                    
                                                    <button onClick={() => openModal(task, 'status')} title="Mover" style={{background:'none', border:'none', cursor:'pointer', color:'#86868b', transition:'color 0.2s'}}>
                                                        <FaExchangeAlt size={14} onMouseOver={e => e.currentTarget.style.color = '#007aff'} onMouseOut={e => e.currentTarget.style.color = '#86868b'} />
                                                    </button>
                                                    
                                                    <button onClick={() => openModal(task, 'delete')} title="Eliminar" style={{background:'none', border:'none', cursor:'pointer', color:'#86868b', transition:'color 0.2s'}}>
                                                        <FaTrash size={14} onMouseOver={e => e.currentTarget.style.color = '#ff3b30'} onMouseOut={e => e.currentTarget.style.color = '#86868b'} />
                                                    </button>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    ))}
                                    
                                    {/* Botón rápido para agregar */}
                                    <button 
                                        onClick={() => { setFormData({...initialForm, status: status}); setCurrentTaskId(null); setIsModalOpen(true); }}
                                        style={{
                                            width: '100%', padding: '10px', borderRadius: 10, border: '1px dashed #d2d2d7', 
                                            background: 'transparent', color: '#86868b', fontSize: 13, cursor: 'pointer',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
                                        }}
                                    >
                                        <FaPlus size={10} /> Agregar tarea
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* VISTA TABLA (APPLE STYLE) */
                    <div className="apple-table-wrapper">
                        <table className="apple-table">
                            <thead>
                                <tr>
                                    <th style={{width: 40}}>#</th>
                                    <th>Estado</th>
                                    <th>Nombre de Nota</th>
                                    <th>Tipo</th>
                                    <th>Horario</th>
                                    <th>Ubicación</th>
                                    <th>Email Contacto</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTasks.map(task => (
                                    <tr key={task.id}>
                                        <td>
                                            <input 
                                                type="checkbox" 
                                                className="apple-checkbox"
                                                checked={selectedTasks.includes(task.id)}
                                                onChange={() => toggleSelectTask(task.id)}
                                            />
                                        </td>
                                        <td>
                                            <span style={{
                                                padding: '4px 10px', borderRadius: 12, fontSize: 11, fontWeight: 700,
                                                background: task.status === 'todo' ? '#ffebeb' : task.status === 'inprogress' ? '#eaf4ff' : '#eaffea',
                                                color: task.status === 'todo' ? '#ff3b30' : task.status === 'inprogress' ? '#007aff' : '#34c759'
                                            }}>
                                                {task.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td style={{fontWeight: 600}}>{task.title}</td>
                                        <td>{task.type}</td>
                                        <td>{task.schedule}</td>
                                        <td>{task.city}, {task.country}</td>
                                        <td>{task.email}</td>
                                        <td>
                                            <div style={{display: 'flex', gap: 10}}>
                                                <button onClick={() => openModal(task)} style={{border:'none', background:'transparent', cursor:'pointer', color: '#007aff'}}><FaEdit /></button>
                                                <button onClick={() => handleDelete(task.id)} style={{border:'none', background:'transparent', cursor:'pointer', color: '#ff3b30'}}><FaTrash /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredTasks.length === 0 && <div style={{padding: 40, textAlign: 'center', color: '#999'}}>No se encontraron notas.</div>}
                    </div>
                )}

            </div>
        )}

        {/* --- VISTA: REPORTES --- */}
        {activeSidebar === 'reports' && (
            <div className="reports-layout" style={{marginTop: 20, animation: 'fadeIn 0.5s ease', display: 'flex', flexDirection: 'column', gap: 30}}>
                
                {/* 1. LARGE AREA CHART (Ingresos / Actividad) */}
                <div className="chart-container" style={{padding: 30, borderRadius: 20, border: '1px solid #e5e5ea', background: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.05)'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 20}}>
                        <div>
                            <h3 className="chart-title" style={{fontSize: 22}}>Rendimiento Anual</h3>
                            <p style={{color:'#86868b', marginTop: 5}}>Ingresos vs Gastos (2024)</p>
                        </div>
                        <div style={{textAlign:'right'}}>
                            <span style={{fontSize: 32, fontWeight: 700, color: '#1d1d1f'}}>$128,430</span>
                            <span style={{display:'block', color:'#34c759', fontSize: 14, fontWeight: 600}}>+12.5% vs año pasado</span>
                        </div>
                    </div>
                    
                    {/* SVG Chart */}
                    <div style={{height: 300, width: '100%', position: 'relative'}}>
                        <svg viewBox="0 0 1000 300" style={{width: '100%', height: '100%', overflow: 'visible'}}>
                            <defs>
                                <linearGradient id="gradientFill" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#007aff" stopOpacity="0.2"/>
                                    <stop offset="100%" stopColor="#007aff" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                            {/* Grid Lines */}
                            <line x1="0" y1="225" x2="1000" y2="225" stroke="#eee" strokeWidth="1" />
                            <line x1="0" y1="150" x2="1000" y2="150" stroke="#eee" strokeWidth="1" />
                            <line x1="0" y1="75" x2="1000" y2="75" stroke="#eee" strokeWidth="1" />
                            
                            {/* The Line */}
                            <path 
                                d="M0,250 C100,200 200,280 300,150 C400,50 500,180 600,120 C700,60 800,100 900,50 L1000,80" 
                                fill="none" 
                                stroke="#007aff" 
                                strokeWidth="4" 
                                strokeLinecap="round"
                            />
                            {/* The Area */}
                            <path 
                                d="M0,250 C100,200 200,280 300,150 C400,50 500,180 600,120 C700,60 800,100 900,50 L1000,80 L1000,300 L0,300 Z" 
                                fill="url(#gradientFill)" 
                            />
                            
                            {/* Data Points */}
                            {[
                                {cx: 300, cy: 150, val: '$45k'}, 
                                {cx: 600, cy: 120, val: '$62k'}, 
                                {cx: 900, cy: 50, val: '$89k'}
                            ].map((p, i) => (
                                <g key={i}>
                                    <circle cx={p.cx} cy={p.cy} r="6" fill="#fff" stroke="#007aff" strokeWidth="3" />
                                    <text x={p.cx} y={p.cy - 15} textAnchor="middle" fill="#1d1d1f" fontSize="12" fontWeight="600">{p.val}</text>
                                </g>
                            ))}
                        </svg>
                        
                        {/* X Axis Labels */}
                        <div style={{display:'flex', justifyContent:'space-between', marginTop: 10, color: '#86868b', fontSize: 12}}>
                            <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
                        </div>
                    </div>
                </div>

                <div className="reports-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 30}}>
                    
                    {/* 2. ADVANCED DONUT (Distribución) */}
                    <div className="chart-container" style={{background:'white', padding:30, borderRadius:20, border:'1px solid #e5e5ea'}}>
                        <h3 className="chart-title">Distribución de Proyectos</h3>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', marginTop: 20}}>
                            <div style={{position: 'relative', width: 200, height: 200}}>
                                <svg viewBox="0 0 36 36" style={{width: '100%', height: '100%', transform: 'rotate(-90deg)'}}>
                                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f5f5f7" strokeWidth="3.8" />
                                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#007aff" strokeWidth="3.8" strokeDasharray="70 30" strokeDashoffset="0" />
                                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#ff3b30" strokeWidth="3.8" strokeDasharray="20 80" strokeDashoffset="-70" />
                                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#34c759" strokeWidth="3.8" strokeDasharray="10 90" strokeDashoffset="-90" />
                                </svg>
                                <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                    <span style={{fontSize: 32, fontWeight: 700}}>142</span>
                                    <span style={{fontSize: 12, color:'#86868b'}}>Total</span>
                                </div>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', gap: 15}}>
                                <div style={{display:'flex', alignItems:'center', gap:10}}>
                                    <span style={{width:12, height:12, borderRadius:4, background:'#007aff'}}></span>
                                    <div><div style={{fontSize:14, fontWeight:600}}>Desarrollo</div><div style={{fontSize:12, color:'#888'}}>70%</div></div>
                                </div>
                                <div style={{display:'flex', alignItems:'center', gap:10}}>
                                    <span style={{width:12, height:12, borderRadius:4, background:'#ff3b30'}}></span>
                                    <div><div style={{fontSize:14, fontWeight:600}}>Diseño</div><div style={{fontSize:12, color:'#888'}}>20%</div></div>
                                </div>
                                <div style={{display:'flex', alignItems:'center', gap:10}}>
                                    <span style={{width:12, height:12, borderRadius:4, background:'#34c759'}}></span>
                                    <div><div style={{fontSize:14, fontWeight:600}}>Marketing</div><div style={{fontSize:12, color:'#888'}}>10%</div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. PROGRESS BARS (Objetivos) */}
                    <div className="chart-container" style={{background:'white', padding:30, borderRadius:20, border:'1px solid #e5e5ea'}}>
                        <h3 className="chart-title" style={{marginBottom: 20}}>Objetivos Trimestrales</h3>
                        <div style={{display:'flex', flexDirection:'column', gap: 25}}>
                            {[
                                {label: 'Ventas Q3', val: 78, color: '#5856d6'},
                                {label: 'Nuevos Clientes', val: 45, color: '#ff9500'},
                                {label: 'Retención', val: 92, color: '#30b0c7'},
                                {label: 'Satisfacción', val: 88, color: '#ff2d55'}
                            ].map((item, i) => (
                                <div key={i}>
                                    <div style={{display:'flex', justifyContent:'space-between', marginBottom: 8, fontSize: 14, fontWeight: 500}}>
                                        <span>{item.label}</span>
                                        <span style={{color: item.color}}>{item.val}%</span>
                                    </div>
                                    <div style={{width:'100%', height: 10, background: '#f5f5f7', borderRadius: 5, overflow:'hidden'}}>
                                        <div style={{width: `${item.val}%`, height:'100%', background: item.color, borderRadius: 5}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        )}

        {/* --- VISTA: ARCHIVOS (Finder Style) --- */}
        {activeSidebar === 'files' && (
            <div style={{marginTop: 20}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                    <h3 style={{fontSize: 24, fontWeight: 700, color: '#1d1d1f'}}>Mis Archivos</h3>
                    
                    {/* Input Oculto para Carga Real */}
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        style={{display: 'none'}} 
                        multiple 
                        onChange={handleFileUpload} 
                    />
                    <button className="auth-button" style={{width: 'auto', padding: '0 20px', height: 40, fontSize: 14}} onClick={() => fileInputRef.current.click()}>
                        <FaCloudDownloadAlt style={{marginRight: 8}}/> Subir Archivo
                    </button>
                </div>
                <div className="files-grid">
                    {files.map((file, i) => (
                        <div key={i} className="file-card">
                            <div className="file-icon" style={{fontSize: 42, marginBottom: 12}}>
                                {getFileIcon(file.type)}
                            </div>
                            <div className="file-name">{file.name}</div>
                            <div className="file-meta">{file.size} • {file.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* --- VISTA: AJUSTES (iOS Style) --- */}
        {activeSidebar === 'settings' && (
            <div style={{marginTop: 20}}>
                <h2 style={{fontSize: 28, fontWeight: 700, marginBottom: 10, color: '#1d1d1f'}}>Ajustes</h2>
                <p style={{color: '#86868b', marginBottom: 30}}>Personaliza tu experiencia en System24.</p>

                <div className="settings-grid">
                    <div className="setting-card" onClick={() => { setActiveSettingTab('general'); setIsSettingsModalOpen(true); }}>
                        <div className="setting-icon"><FaSlidersH /></div>
                        <div className="setting-info">
                            <h4 style={{fontSize: 16, fontWeight: 600, marginBottom: 4, color:'#1d1d1f'}}>General</h4>
                            <p style={{fontSize: 13, color:'#86868b'}}>Idioma, notificaciones y sincronización.</p>
                        </div>
                    </div>
                    
                    <div className="setting-card" onClick={() => { setActiveSettingTab('appearance'); setIsSettingsModalOpen(true); }}>
                        <div className="setting-icon"><FaPalette /></div>
                        <div className="setting-info">
                            <h4 style={{fontSize: 16, fontWeight: 600, marginBottom: 4, color:'#1d1d1f'}}>Apariencia</h4>
                            <p style={{fontSize: 13, color:'#86868b'}}>Temas, colores y densidad.</p>
                        </div>
                    </div>

                    <div className="setting-card" onClick={() => { setActiveSettingTab('shortcuts'); setIsSettingsModalOpen(true); }}>
                        <div className="setting-icon"><FaKeyboard /></div>
                        <div className="setting-info">
                            <h4 style={{fontSize: 16, fontWeight: 600, marginBottom: 4, color:'#1d1d1f'}}>Atajos de Teclado</h4>
                            <p style={{fontSize: 13, color:'#86868b'}}>Teclas rápidas y productividad.</p>
                        </div>
                    </div>

                    <div className="setting-card">
                        <div className="setting-icon"><FaShieldAlt /></div>
                        <div className="setting-info">
                            <h4 style={{fontSize: 16, fontWeight: 600, marginBottom: 4, color:'#1d1d1f'}}>Seguridad</h4>
                            <p style={{fontSize: 13, color:'#86868b'}}>Contraseña y sesiones.</p>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* --- VISTAS VACÍAS (Placeholder) --- */}
        {activeSidebar === 'calendar' && (
            <div style={{marginTop: 20, animation: 'fadeIn 0.5s ease', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className="calendar-header-pro">
                    <div style={{display:'flex', alignItems:'center', gap: 20}}>
                        <h2 style={{fontSize: 28, fontWeight: 700, margin: 0, color: '#1d1d1f'}}>
                            {monthNames[currentDate.getMonth()]} <span style={{color: '#86868b'}}>{currentDate.getFullYear()}</span>
                        </h2>
                        <div className="calendar-nav-buttons">
                            <button onClick={() => changeMonth(-1)}><FaChevronLeft /></button>
                            <button onClick={() => setCurrentDate(new Date())}>Hoy</button>
                            <button onClick={() => changeMonth(1)}><FaChevronRight /></button>
                        </div>
                    </div>
                    <button className="auth-button" style={{width: 'auto', height: 40, fontSize: 14, padding: '0 20px'}}>
                        <FaPlus style={{marginRight: 8}}/> Nuevo Evento
                    </button>
                </div>

                <div className="calendar-container-pro">
                    {/* Encabezados de días */}
                    <div className="calendar-week-header">
                        {dayNames.map(day => <div key={day} className="day-name">{day}</div>)}
                    </div>
                    
                    {/* Grid de días */}
                    <div className="calendar-grid-pro">
                        {Array.from({ length: getFirstDayOfMonth(currentDate) }).map((_, i) => (
                            <div key={`empty-${i}`} className="calendar-day empty"></div>
                        ))}
                        {Array.from({ length: getDaysInMonth(currentDate) }).map((_, i) => {
                            const day = i + 1;
                            const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();
                            return (
                                <div key={day} className={`calendar-day ${isToday ? 'today' : ''}`}>
                                    <div className="day-number">{day}</div>
                                    {/* Simulación de eventos aleatorios para que se vea lleno */}
                                    {day % 6 === 0 && <div className="cal-event blue">Revisión Q3</div>}
                                    {day % 15 === 0 && <div className="cal-event red">Entrega Final</div>}
                                    {day % 8 === 0 && day % 6 !== 0 && <div className="cal-event green">Gym</div>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )}

        {/* --- VISTA: CONTACTOS (Nueva) --- */}
        {activeSidebar === 'contacts' && (
            <div style={{marginTop: 20, animation: 'fadeIn 0.5s ease'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25}}>
                    <div>
                        <h3 style={{fontSize: 24, fontWeight: 700, color: '#1d1d1f', margin: 0}}>Contactos</h3>
                        <p style={{color: '#86868b', fontSize: 14, marginTop: 4}}>{contacts.length} personas en tu lista</p>
                    </div>
                    <button className="auth-button" style={{width: 'auto', padding: '0 20px', height: 40, fontSize: 14, display:'flex', alignItems:'center', gap: 8}} onClick={() => openContactModal()}>
                        <FaUserPlus /> Agregar
                    </button>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20}}>
                    {contacts.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).map(contact => (
                        <div key={contact.id} style={{
                            background: 'white', borderRadius: 16, border: '1px solid #e5e5ea', padding: 25,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                            position: 'relative', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', transition: 'transform 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {/* Favorite Badge */}
                            {contact.isFavorite && (
                                <div style={{position: 'absolute', top: 15, right: 15, color: '#ffcc00'}}>
                                    <FaStar />
                                </div>
                            )}

                            {/* Avatar */}
                            <div style={{width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', marginBottom: 15, border: '3px solid #f5f5f7'}}>
                                <img src={contact.image || "https://via.placeholder.com/150"} alt={contact.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                            </div>

                            {/* Info */}
                            <h4 style={{fontSize: 18, fontWeight: 700, color: '#1d1d1f', margin: '0 0 5px 0'}}>{contact.name}</h4>
                            <span style={{fontSize: 13, color: '#007aff', background: 'rgba(0,122,255,0.1)', padding: '2px 10px', borderRadius: 10, fontWeight: 600, marginBottom: 15}}>
                                {contact.role}
                            </span>

                            <div style={{width: '100%', borderTop: '1px solid #f5f5f7', paddingTop: 15, marginTop: 'auto'}}>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: '#86868b', fontSize: 14, marginBottom: 5}}>
                                    <FaPhone size={12} /> {contact.phone}
                                </div>
                                <div style={{fontSize: 13, color: '#aaa', marginBottom: 15}}>{contact.email}</div>
                                
                                <div style={{display: 'flex', justifyContent: 'center', gap: 12}}>
                                    <button onClick={() => openContactModal(contact)} style={{
                                        padding: '8px 16px', borderRadius: 8, border: '1px solid #e5e5ea', background: 'white', 
                                        color: '#1d1d1f', cursor: 'pointer', fontSize: 13, fontWeight: 500, transition: 'all 0.2s'
                                    }}>
                                        Editar
                                    </button>
                                    <button onClick={() => handleDeleteContact(contact.id)} style={{
                                        padding: '8px', borderRadius: 8, border: '1px solid #ffebeb', background: '#fff5f5', 
                                        color: '#ff3b30', cursor: 'pointer', display:'flex', alignItems:'center'
                                    }}>
                                        <FaTrash size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

      </main>

      {/* 4. MODAL CRUD COMPLEJO */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className={modalType === 'delete' ? "modal-content" : "modal-content-compact"}>
            
            {/* Header del Modal */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <div>
                    <h2 style={{fontSize: 20, fontWeight: 700, margin: 0, color: '#1d1d1f'}}>
                        {modalType === 'info' && 'Editar Información'}
                        {modalType === 'desc' && 'Editar Descripción'}
                        {modalType === 'image' && 'Galería de Imágenes'}
                        {modalType === 'status' && 'Cambiar Estado'}
                        {modalType === 'delete' && '¿Eliminar Nota?'}
                    </h2>
                </div>
                <button onClick={closeModal} style={{background:'none', border:'none', cursor:'pointer', color:'#86868b'}}><FaTimes size={20}/></button>
            </div>
            
            <form onSubmit={handleSubmit}>
                {/* --- 1. MODAL INFO --- */}
                {modalType === 'info' && (
                   <div style={{display:'flex', flexDirection:'column', gap: 15}}>
                       <div>
                           <label className="apple-label">Título</label>
                           <input className="apple-field" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} autoFocus />
                       </div>
                    <div>
                        <label className="apple-label">Categoría</label>
                        <select className="apple-field" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                            <option>Trabajo</option>
                            <option>Personal</option>
                            <option>Reunión</option>
                            <option>Idea</option>
                            <option>Urgente</option>
                        </select>
                    </div>
                       <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 15}}>
                           <div>
                               <label className="apple-label">Horario</label>
                               <input className="apple-field" type="time" value={formData.schedule} onChange={e => setFormData({...formData, schedule: e.target.value})} />
                           </div>
                           <div>
                               <label className="apple-label">Ciudad</label>
                               <input className="apple-field" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                           </div>
                       </div>
                   </div>
                )}

                {/* --- 2. MODAL DESCRIPCIÓN --- */}
                {modalType === 'desc' && (
                   <div>
                        <label className="apple-label">Descripción</label>
                        <textarea className="apple-field" rows="8" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} placeholder="Escribe aquí los detalles..." style={{resize:'none'}} autoFocus></textarea>
                   </div>
                )}

                {/* --- 3. MODAL ESTADO (STATUS) --- */}
                {modalType === 'status' && (
                    <div>
                         <label className="apple-label">Estado de la Tarea</label>
                         <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                             {['todo', 'inprogress', 'done'].map(st => (
                                 <div 
                                    key={st}
                                    onClick={() => setFormData({...formData, status: st})}
                                    style={{
                                        padding: '15px', borderRadius: 12, cursor: 'pointer', fontSize: 14, fontWeight: 600,
                                        border: formData.status === st ? '2px solid #007aff' : '1px solid #e5e5ea',
                                        background: formData.status === st ? 'white' : 'transparent',
                                        color: formData.status === st ? '#1d1d1f' : '#86868b',
                                        display: 'flex', alignItems: 'center', gap: 10,
                                        transition: 'all 0.2s'
                                    }}
                                 >
                                     <div style={{width: 12, height: 12, borderRadius: '50%', background: st === 'todo' ? '#ff3b30' : st === 'inprogress' ? '#007aff' : '#34c759'}}></div>
                                     {st === 'todo' ? 'Por Hacer (To Do)' : st === 'inprogress' ? 'En Progreso (Doing)' : 'Completado (Done)'}
                                 </div>
                             ))}
                         </div>
                    </div>
                )}

                {/* --- 4. MODAL GALERÍA (IMAGES) --- */}
                {modalType === 'image' && (
                    <div>
                        <label className="apple-label">Galería de Imágenes</label>
                        <div style={{display: 'flex', gap: 10, marginBottom: 10}}>
                            <input 
                                className="apple-field" 
                                placeholder="Pegar URL de imagen..." 
                                value={tempImageUrl} 
                                onChange={e => setTempImageUrl(e.target.value)}
                                autoFocus
                            />
                            <button type="button" onClick={handleAddImage} className="auth-button" style={{width: 100, marginTop: 0}}>
                                <FaPlus />
                            </button>
                        </div>
                        
                        <div className="image-gallery-preview" style={{maxHeight: 200, overflowY: 'auto'}}>
                                {formData.images.length === 0 && <span style={{fontSize: 13, color: '#aaa', padding: 10}}>No hay imágenes adjuntas.</span>}
                                {formData.images.map((img, idx) => (
                                    <div key={idx} className="gallery-thumb-container">
                                        <img src={img} className="gallery-thumb" alt="thumb" />
                                        <button type="button" className="remove-img-btn" onClick={() => handleRemoveImage(idx)} style={{background: '#ff3b30', width: 20, height: 20, borderRadius: '50%', top: -5, right: -5}}>
                                            <FaTimes size={10} />
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {/* --- 5. MODAL ELIMINAR (DELETE) --- */}
                {modalType === 'delete' && (
                    <div style={{textAlign: 'center'}}>
                        <FaTrash size={40} color="#ff3b30" style={{marginBottom: 15}} />
                        <p style={{fontSize: 16, color: '#1d1d1f', marginBottom: 20}}>
                            ¿Estás seguro de que quieres eliminar esta nota? Esta acción no se puede deshacer.
                        </p>
                        <div style={{display: 'flex', gap: 10, justifyContent: 'center'}}>
                            <button type="button" onClick={closeModal} className="auth-button" style={{background: '#f5f5f7', color: '#1d1d1f', boxShadow:'none'}}>Cancelar</button>
                            <button type="button" onClick={() => { handleDelete(currentTaskId); closeModal(); }} className="auth-button" style={{background: '#ff3b30'}}>Eliminar</button>
                        </div>
                    </div>
                )}

                {/* Footer del Modal (Botón Guardar - excepto en Delete) */}
                {modalType !== 'delete' && (
                    <div style={{display: 'flex', gap: 15, justifyContent: 'flex-end', marginTop: 30, paddingTop: 20, borderTop: '1px solid #e5e5ea'}}>
                        <button type="button" onClick={closeModal} className="auth-button" style={{background: '#f5f5f7', color: '#1d1d1f', width: 'auto', padding: '0 20px', boxShadow:'none', height: 40, fontSize: 14}}>Cancelar</button>
                        <button type="submit" className="auth-button" style={{width: 'auto', padding: '0 25px', background: '#007aff', height: 40, fontSize: 14}}>
                            Guardar
                        </button>
                    </div>
                )}
                
                {modalType === 'delete' && (
                   /* El botón de eliminar se maneja arriba en la sección delete */
                   null
                )}
                
            </form>
          </div>
        </div>
      )}

      {/* 5. MODAL DE CONTACTOS (NUEVO) */}
      {isContactModalOpen && (
          <div className="modal-overlay">
              <div className="modal-content-compact">
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                      <h2 style={{fontSize: 20, fontWeight: 700, color: '#1d1d1f', margin: 0}}>
                          {editingContactId ? 'Editar Contacto' : 'Nuevo Contacto'}
                      </h2>
                      <button onClick={() => setIsContactModalOpen(false)} style={{background:'none', border:'none', cursor:'pointer', color:'#86868b'}}><FaTimes size={20}/></button>
                  </div>
                  
                  <form onSubmit={handleSaveContact}>
                      <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
                          <div style={{display: 'flex', justifyContent: 'center', marginBottom: 10}}>
                              <div style={{width: 80, height: 80, borderRadius: '50%', background: '#f5f5f7', overflow: 'hidden', border: '1px dashed #d2d2d7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                  {contactForm.image ? <img src={contactForm.image} alt="preview" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> : <FaImage size={24} color="#ccc" />}
                              </div>
                          </div>
                          
                          <div><label className="apple-label">Nombre Completo</label><input className="apple-field" value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})} placeholder="Ej: Ana López" autoFocus /></div>
                          <div><label className="apple-label">Puesto / Rol</label><input className="apple-field" value={contactForm.role} onChange={e => setContactForm({...contactForm, role: e.target.value})} placeholder="Ej: Diseñadora" /></div>
                          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15}}>
                              <div><label className="apple-label">Teléfono</label><input className="apple-field" value={contactForm.phone} onChange={e => setContactForm({...contactForm, phone: e.target.value})} placeholder="55..." /></div>
                              <div><label className="apple-label">Foto (URL)</label><input className="apple-field" value={contactForm.image} onChange={e => setContactForm({...contactForm, image: e.target.value})} placeholder="https://..." /></div>
                          </div>
                          <div><label className="apple-label">Email</label><input className="apple-field" type="email" value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} placeholder="correo@ejemplo.com" /></div>
                      </div>

                      <div style={{display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 25, paddingTop: 20, borderTop: '1px solid #e5e5ea'}}>
                          <button type="button" onClick={() => setIsContactModalOpen(false)} className="auth-button" style={{background: '#f5f5f7', color: '#1d1d1f', width: 'auto', padding: '0 20px', boxShadow:'none', height: 40, fontSize: 14}}>Cancelar</button>
                          <button type="submit" className="auth-button" style={{width: 'auto', padding: '0 25px', background: '#007aff', height: 40, fontSize: 14}}>Guardar Contacto</button>
                      </div>
                  </form>
              </div>
          </div>
      )}

      {/* 6. MODAL DE AJUSTES AVANZADO (PRO) */}
      {isSettingsModalOpen && (
        <div className="modal-overlay">
            <div className="modal-content-large" style={{width: 800, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
                
                {/* Header Modal */}
                <div style={{padding: '25px 30px', borderBottom: '1px solid #e5e5ea', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                        <h2 style={{fontSize: 22, fontWeight: 700, margin: 0}}>Configuración del Sistema</h2>
                        <p style={{color: '#86868b', fontSize: 14, margin: '5px 0 0'}}>Ajusta el comportamiento avanzado del dashboard.</p>
                    </div>
                    <button onClick={() => setIsSettingsModalOpen(false)} style={{background:'none', border:'none', cursor:'pointer', color:'#86868b'}}><FaTimes size={24}/></button>
                </div>

                <div style={{display: 'flex', flex: 1, minHeight: 450}}>
                    {/* Sidebar Tabs */}
                    <div style={{width: 220, background: '#fbfbfd', borderRight: '1px solid #e5e5ea', padding: '20px 15px'}}>
                        {[
                            {id: 'general', label: 'General', icon: <FaSlidersH size={14}/>},
                            {id: 'appearance', label: 'Apariencia', icon: <FaPalette size={14}/>},
                            {id: 'shortcuts', label: 'Atajos (Teclado)', icon: <FaKeyboard size={14}/>},
                        ].map(tab => (
                            <div 
                                key={tab.id}
                                onClick={() => setActiveSettingTab(tab.id)}
                                style={{
                                    padding: '12px 15px', borderRadius: 10, cursor: 'pointer', marginBottom: 5, fontSize: 14,
                                    background: activeSettingTab === tab.id ? 'white' : 'transparent',
                                    color: activeSettingTab === tab.id ? '#1d1d1f' : '#86868b',
                                    fontWeight: activeSettingTab === tab.id ? 600 : 500,
                                    boxShadow: activeSettingTab === tab.id ? '0 2px 5px rgba(0,0,0,0.05)' : 'none',
                                    display: 'flex', alignItems: 'center', gap: 10
                                }}
                            >
                                {tab.icon} {tab.label}
                            </div>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div style={{flex: 1, padding: 30, overflowY: 'auto', maxHeight: 500}}>
                        
                        {activeSettingTab === 'general' && (
                            <div>
                                <div className="settings-row">
                                    <div>
                                        <h5 style={{fontSize: 15, fontWeight: 600, marginBottom: 5, color: '#1d1d1f'}}>Historial de Versiones (Control Z)</h5>
                                        <p style={{fontSize: 13, color: '#86868b', maxWidth: 350}}>Permitir deshacer acciones en notas y kanban hasta 50 pasos atrás.</p>
                                    </div>
                                    <FaToggleOn size={32} color="#34c759" style={{cursor:'pointer'}}/>
                                </div>
                                <div className="settings-row">
                                    <div>
                                        <h5 style={{fontSize: 15, fontWeight: 600, marginBottom: 5, color: '#1d1d1f'}}>Autoguardado Inteligente</h5>
                                        <p style={{fontSize: 13, color: '#86868b', maxWidth: 350}}>Guardar cambios en segundo plano mientras escribes.</p>
                                    </div>
                                    <FaToggleOn size={32} color="#34c759" style={{cursor:'pointer'}}/>
                                </div>
                                <div className="settings-row">
                                    <div>
                                        <h5 style={{fontSize: 15, fontWeight: 600, marginBottom: 5, color: '#1d1d1f'}}>Notificaciones de Escritorio</h5>
                                        <p style={{fontSize: 13, color: '#86868b', maxWidth: 350}}>Recibir alertas flotantes cuando la app está minimizada.</p>
                                    </div>
                                    <FaToggleOff size={32} color="#d1d1d6" style={{cursor:'pointer'}}/>
                                </div>
                            </div>
                        )}

                        {activeSettingTab === 'shortcuts' && (
                            <div>
                                <div style={{background: '#f5faff', padding: 15, borderRadius: 10, fontSize: 13, color: '#007aff', marginBottom: 25, display: 'flex', alignItems: 'center', gap: 10}}>
                                    <FaCheck /> Todas las funciones de teclado están activas.
                                </div>

                                {[
                                    {label: 'Deshacer acción', keys: ['Ctrl', 'Z']},
                                    {label: 'Rehacer acción', keys: ['Ctrl', 'Y']},
                                    {label: 'Nueva Nota', keys: ['Ctrl', 'N']},
                                    {label: 'Buscar en Dashboard', keys: ['Ctrl', 'K']},
                                    {label: 'Cerrar Ventana', keys: ['Esc']},
                                ].map((sc, i) => (
                                    <div key={i} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f9f9f9'}}>
                                        <span style={{fontSize: 14, fontWeight: 500, color: '#1d1d1f'}}>{sc.label}</span>
                                        <div style={{display: 'flex', gap: 5}}>
                                            {sc.keys.map((k, j) => (
                                                <span key={j} className="kbd">{k}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeSettingTab === 'appearance' && (
                            <div style={{textAlign: 'center', color: '#86868b', paddingTop: 40}}>
                                <FaPalette size={40} style={{marginBottom: 10, opacity: 0.3}} />
                                <p>Próximamente más temas visuales.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Modal */}
                <div style={{padding: '20px 30px', borderTop: '1px solid #e5e5ea', display: 'flex', justifyContent: 'flex-end', gap: 15, background: '#fbfbfd'}}>
                    <button className="auth-button" style={{width: 'auto', padding: '0 25px', height: 40, fontSize: 14, background: 'white', color: '#1d1d1f', border: '1px solid #d2d2d7', boxShadow:'none'}} onClick={() => setIsSettingsModalOpen(false)}>Cancelar</button>
                    <button className="auth-button" style={{width: 'auto', padding: '0 30px', height: 40, fontSize: 14, background: '#007aff'}} onClick={() => { toast.success("Preferencias guardadas"); setIsSettingsModalOpen(false); }}>Guardar Cambios</button>
                </div>
            </div>
        </div>
      )}

    </div>
  )
}