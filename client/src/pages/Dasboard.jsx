import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { 
  FaThLarge, FaList, FaCog, FaSignOutAlt, 
  FaPlus, FaTrash, FaEdit, FaSearch, FaBell,
  FaRegCalendarAlt, FaUserFriends, FaFolderOpen, FaChartPie, 
  FaQuestionCircle, FaStickyNote, FaMapMarkerAlt, FaEnvelope, 
  FaCheckDouble, FaArrowUp, FaFilePdf, FaFileImage, FaFileAlt, 
  FaCloudDownloadAlt, FaToggleOn, FaToggleOff
} from "react-icons/fa";

export default function Dasboard() {
  const navigate = useNavigate();
  
  // --- Estados Generales ---
  const [activeSidebar, setActiveSidebar] = useState('notes'); // Controla la sección activa
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban' | 'table'
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]); // Para checkboxes
  const [dragOverCol, setDragOverCol] = useState(""); // Estado visual Drag & Drop
  
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
  const openModal = (task = null) => {
    if (task) {
      setCurrentTaskId(task.id);
      setFormData(task);
    } else {
      setCurrentTaskId(null);
      setFormData(initialForm);
    }
    setIsModalOpen(true);
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

  // --- Renderizado de Componentes ---

  return (
    <div className="dashboard-layout">
      
      {/* 1. SIDEBAR PRO */}
      <aside className="db-sidebar">
        <div className="db-logo">
          <FaCheckDouble size={26} /> System24
        </div>
        
        <div style={{flex: 1, overflowY: 'auto'}}>
          <p style={{fontSize: 12, color: '#aaa', fontWeight: 600, paddingLeft: 16, marginBottom: 10}}>MENU PRINCIPAL</p>
          {sidebarItems.map(item => (
            <div 
              key={item.id}
              className={`db-nav-item ${activeSidebar === item.id ? 'active' : ''}`} 
              onClick={() => setActiveSidebar(item.id)}
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
        <header className="db-header">
          <div className="db-welcome">
            <h1>Panel de Control</h1>
            <p>Gestiona tus tareas y notas con estilo.</p>
          </div>
          
          <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
            <div style={{position: 'relative'}}>
                <FaSearch style={{position: 'absolute', left: 15, top: 12, color: '#aaa'}} />
                <input 
                    type="text" 
                    className="apple-search" 
                    placeholder="Buscar por nombre, ciudad..." 
                    style={{paddingLeft: 40, width: 250, border: 'none', background: 'white', borderRadius: 20, height: 40}}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="db-profile">
                <FaBell color="#555" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" alt="User" style={{width: 32, height: 32, borderRadius: '50%'}} />
                <span style={{fontSize: 14, fontWeight: 500}}>Carlos</span>
            </div>
          </div>
        </header>

        {/* Action Toolbar */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
            <div style={{display: 'flex', background: '#e0e0e0', padding: 4, borderRadius: 10}}>
                <button 
                    onClick={() => setViewMode('kanban')}
                    style={{
                        background: viewMode === 'kanban' ? 'white' : 'transparent', 
                        border: 'none', padding: '6px 12px', borderRadius: 8, cursor: 'pointer',
                        boxShadow: viewMode === 'kanban' ? '0 2px 5px rgba(0,0,0,0.1)' : 'none'
                    }}
                >
                    <FaThLarge /> Tablero
                </button>
                <button 
                    onClick={() => setViewMode('table')}
                    style={{
                        background: viewMode === 'table' ? 'white' : 'transparent', 
                        border: 'none', padding: '6px 12px', borderRadius: 8, cursor: 'pointer',
                        boxShadow: viewMode === 'table' ? '0 2px 5px rgba(0,0,0,0.1)' : 'none'
                    }}
                >
                    <FaList /> Lista
                </button>
            </div>
            
            <button className="auth-button" style={{width: 'auto', padding: '0 30px', height: 44}} onClick={() => openModal()}>
                <FaPlus style={{marginRight: 8}}/> Nueva Nota
            </button>
        </div>

        {/* 3. CONTENT VIEWS (SWITCHER) */}
        
        {/* --- VISTA: DASHBOARD (HOME) --- */}
        {activeSidebar === 'dashboard' && (
           <div style={{marginTop: 20, animation: 'fadeIn 0.5s ease'}}>
              {/* Widgets de Estadísticas */}
              <div className="dashboard-grid">
                  <div className="stat-card">
                      <div className="stat-icon-wrapper" style={{background: '#eaf4ff', color: '#007aff'}}><FaStickyNote /></div>
                      <div className="stat-value">{tasks.length}</div>
                      <div className="stat-label">Total Notas</div>
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
                  <div className="stat-card">
                      <div className="stat-icon-wrapper" style={{background: '#ffebeb', color: '#ff3b30'}}><FaArrowUp /></div>
                      <div className="stat-value">+24%</div>
                      <div className="stat-label">Productividad</div>
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
                                <h3 style={{
                                    color: status === 'todo' ? '#ff3b30' : status === 'inprogress' ? '#007aff' : '#34c759',
                                    display: 'flex', justifyContent: 'space-between'
                                }}>
                                    {status === 'todo' ? 'POR HACER' : status === 'inprogress' ? 'EN PROGRESO' : 'COMPLETADO'}
                                    <span style={{background: 'rgba(0,0,0,0.05)', padding: '2px 8px', borderRadius: 10}}>{filteredTasks.filter(t => t.status === status).length}</span>
                                </h3>
                                
                                {filteredTasks.filter(t => t.status === status).map(task => (
                                    <div 
                                        key={task.id} 
                                        className="kanban-card"
                                        draggable
                                        onDragStart={(e) => onDragStart(e, task.id)}
                                    >
                                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
                                            <span style={{fontSize: 11, background: '#f0f0f0', padding: '2px 6px', borderRadius: 4, color: '#666'}}>{task.type}</span>
                                            <span style={{fontSize: 11, color: '#999'}}>{task.schedule}</span>
                                        </div>
                                        
                                        {task.images.length > 0 && (
                                            <img src={task.images[0]} alt="preview" className="card-image" />
                                        )}

                                        <h4 style={{fontSize: 16, margin: '5px 0'}}>{task.title}</h4>
                                        <p style={{fontSize: 13, color: '#888', display: 'flex', alignItems: 'center', gap: 5}}>
                                            <FaMapMarkerAlt size={10}/> {task.city}, {task.country}
                                        </p>

                                        <div className="card-actions">
                                            <button onClick={() => openModal(task)} title="Modificar"><FaEdit /></button>
                                            <button onClick={() => handleDelete(task.id)} title="Eliminar"><FaTrash /></button>
                                        </div>
                                    </div>
                                ))}
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
            <div className="reports-layout" style={{marginTop: 20, animation: 'fadeIn 0.5s ease'}}>
                <div className="chart-container">
                    <h3 className="chart-title" style={{marginBottom: 20}}>Distribución de Tareas</h3>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height: 200}}>
                        {/* Simulación Gráfica Circular con CSS Conic Gradient */}
                        <div style={{
                            width: 180, height: 180, borderRadius: '50%',
                            background: 'conic-gradient(#007aff 0% 35%, #ff3b30 35% 60%, #34c759 60% 100%)',
                            position: 'relative'
                        }}>
                            <div style={{position:'absolute', inset: 40, background:'white', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                                <span style={{fontSize: 24, fontWeight:700}}>100%</span>
                                <span style={{fontSize: 12, color:'#888'}}>Total</span>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', gap: 20, marginTop: 20}}>
                         <div style={{display:'flex', alignItems:'center', gap:5, fontSize:12}}><span style={{width:10, height:10, background:'#007aff', borderRadius:'50%'}}></span> Trabajo</div>
                         <div style={{display:'flex', alignItems:'center', gap:5, fontSize:12}}><span style={{width:10, height:10, background:'#ff3b30', borderRadius:'50%'}}></span> Urgente</div>
                         <div style={{display:'flex', alignItems:'center', gap:5, fontSize:12}}><span style={{width:10, height:10, background:'#34c759', borderRadius:'50%'}}></span> Personal</div>
                    </div>
                </div>
                
                <div className="chart-container">
                    <h3 className="chart-title">Rendimiento</h3>
                    <p style={{color: '#888', marginTop: 10}}>Esta sección muestra métricas avanzadas de usuario.</p>
                </div>
            </div>
        )}

        {/* --- VISTA: ARCHIVOS (Finder Style) --- */}
        {activeSidebar === 'files' && (
            <div style={{marginTop: 20}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                    <h3 style={{fontSize: 24, fontWeight: 700, color: '#1d1d1f'}}>Mis Archivos</h3>
                    <button className="auth-button" style={{width: 'auto', padding: '0 20px', height: 40, fontSize: 14}}>
                        <FaCloudDownloadAlt style={{marginRight: 8}}/> Subir Archivo
                    </button>
                </div>
                <div className="files-grid">
                    {[
                        { name: "Contrato_Final.pdf", type: "pdf", size: "2.4 MB" },
                        { name: "Logo_Vector.svg", type: "img", size: "1.1 MB" },
                        { name: "Notas_Reunion.txt", type: "doc", size: "12 KB" },
                        { name: "Presupuesto_2024.pdf", type: "pdf", size: "4.5 MB" },
                        { name: "Banner_Marketing.png", type: "img", size: "3.2 MB" },
                        { name: "Manual_Usuario.pdf", type: "pdf", size: "8.1 MB" },
                    ].map((file, i) => (
                        <div key={i} className="file-card">
                            <div className="file-icon">
                                {file.type === 'pdf' ? <FaFilePdf color="#ff3b30" /> : 
                                 file.type === 'img' ? <FaFileImage color="#007aff" /> : <FaFileAlt color="#86868b" />}
                            </div>
                            <div className="file-name">{file.name}</div>
                            <div className="file-meta">{file.size} • Editado hoy</div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* --- VISTA: AJUSTES (iOS Style) --- */}
        {activeSidebar === 'settings' && (
            <div style={{marginTop: 20, maxWidth: 600}}>
                <div className="settings-panel">
                    <h3 style={{marginBottom: 25, fontSize: 20}}>Preferencias del Sistema</h3>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #eee'}}>
                        <div>
                            <div style={{fontWeight: 600}}>Modo Oscuro</div>
                            <div style={{fontSize: 13, color: '#888'}}>Cambiar la apariencia del dashboard.</div>
                        </div>
                        <FaToggleOff size={28} color="#d1d1d6" style={{cursor: 'pointer'}} />
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #eee'}}>
                        <div>
                            <div style={{fontWeight: 600}}>Notificaciones</div>
                            <div style={{fontSize: 13, color: '#888'}}>Recibir alertas de tareas.</div>
                        </div>
                        <FaToggleOn size={28} color="#34c759" style={{cursor: 'pointer'}} />
                    </div>
                </div>
            </div>
        )}

        {/* --- VISTAS VACÍAS (Placeholder) --- */}
        {!['dashboard', 'notes', 'reports', 'files', 'settings'].includes(activeSidebar) && (
            <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#aaa'}}>
                <FaCog size={60} style={{marginBottom: 20, opacity: 0.2}} />
                <h2>Función en desarrollo</h2>
                <p>Explora las secciones Panel, Mis Notas o Reportes.</p>
            </div>
        )}

      </main>

      {/* 4. MODAL CRUD COMPLEJO */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content-large">
            <h2 style={{marginBottom: 25, fontSize: 24}}>{currentTaskId ? 'Modificar Nota' : 'Agregar Nueva Nota'}</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div>
                        <label className="apple-label">Nombre de Nota</label>
                        <input className="apple-field" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Ej: Proyecto X" />
                    </div>
                    <div>
                        <label className="apple-label">Tipo</label>
                        <select className="apple-field" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                            <option>Trabajo</option>
                            <option>Personal</option>
                            <option>Reunión</option>
                            <option>Idea</option>
                        </select>
                    </div>

                    <div>
                        <label className="apple-label">Horario</label>
                        <input className="apple-field" type="time" value={formData.schedule} onChange={e => setFormData({...formData, schedule: e.target.value})} />
                    </div>
                    <div>
                        <label className="apple-label">Email de Contacto</label>
                        <input className="apple-field" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="contacto@mail.com"/>
                    </div>

                    <div>
                        <label className="apple-label">País</label>
                        <input className="apple-field" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} placeholder="País"/>
                    </div>
                    <div>
                        <label className="apple-label">Ciudad</label>
                        <input className="apple-field" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} placeholder="Ciudad"/>
                    </div>
                    
                    <div className="form-full">
                        <label className="apple-label">Descripción</label>
                        <textarea className="apple-field" rows="3" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} placeholder="Detalles de la nota..."></textarea>
                    </div>

                    <div className="form-full">
                         <label className="apple-label">Estado</label>
                         <div style={{display: 'flex', gap: 20}}>
                             <label style={{display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
                                 <input type="radio" name="status" checked={formData.status === 'todo'} onChange={() => setFormData({...formData, status: 'todo'})} /> Por Hacer
                             </label>
                             <label style={{display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
                                 <input type="radio" name="status" checked={formData.status === 'inprogress'} onChange={() => setFormData({...formData, status: 'inprogress'})} /> En Progreso
                             </label>
                             <label style={{display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
                                 <input type="radio" name="status" checked={formData.status === 'done'} onChange={() => setFormData({...formData, status: 'done'})} /> Completado
                             </label>
                         </div>
                    </div>

                    <div className="form-full">
                        <label className="apple-label">Galería de Imágenes</label>
                        <div style={{display: 'flex', gap: 10, marginBottom: 10}}>
                            <input 
                                className="apple-field" 
                                placeholder="Pegar URL de imagen..." 
                                value={tempImageUrl} 
                                onChange={e => setTempImageUrl(e.target.value)}
                            />
                            <button type="button" onClick={handleAddImage} className="auth-button" style={{width: 100, marginTop: 0}}>
                                <FaPlus />
                            </button>
                        </div>
                        
                        <div className="image-gallery-preview">
                            {formData.images.length === 0 && <span style={{fontSize: 12, color: '#aaa'}}>Sin imágenes</span>}
                            {formData.images.map((img, idx) => (
                                <div key={idx} className="gallery-thumb-container">
                                    <img src={img} className="gallery-thumb" alt="thumb" />
                                    <button type="button" className="remove-img-btn" onClick={() => handleRemoveImage(idx)}>X</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{display: 'flex', gap: 15, justifyContent: 'flex-end', marginTop: 30}}>
                    <button type="button" onClick={closeModal} className="auth-button" style={{background: '#f5f5f7', color: '#1d1d1f', width: 'auto', padding: '0 30px'}}>Cancelar</button>
                    <button type="submit" className="auth-button" style={{width: 'auto', padding: '0 40px'}}>
                        {currentTaskId ? 'Guardar Cambios' : 'Crear Nota'}
                    </button>
                </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}