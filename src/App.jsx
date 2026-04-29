import { useEffect, useRef, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";
import LoginRegister from "./LoginRegister";

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const toastTimerRef = useRef(null);

  const [filters, setFilters] = useState({
    location: "",
    category: "",
    price: ""
  });

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = (message, type = "success") => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToastMessage(message);
    setToastType(type);
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage("");
    }, 3200);
  };

  const getToastIcon = (type) => {
    if (type === "info") return "ℹ️";
    if (type === "warning") return "⚠️";
    return "✅";
  };

  const colors = {
    purple: "#3B0B39",
    blue: "#0F52BA",
    yellow: "#DFFF00",
    lightBg: "#f8f7fc",
    white: "#ffffff",
    text: "#2d2d2d",
    textLight: "#666666",
    border: "#e0e0e0"
  };

  const events = [
    {
      id: 1,
      title: "Show Pop",
      location: "Teatro da Cidade",
      date: "12/10/24",
      price: "R$ 50",
      category: "Música",
      artist: "Os Viajantes",
      address: "Rua da Cultura, 123",
      time: "21:00",
      image: "https://images.sympla.com.br/69ee4347aa323-xs.jpg"
    },
    {
      id: 2,
      title: "Exposição de Arte",
      location: "Galeria Central",
      date: "14/10/24",
      price: "Grátis",
      category: "Arte",
      artist: "Artistas Locais",
      address: "Centro Cultural",
      time: "18:00",
      image: "https://www.itapeva.sp.gov.br/admin/globalarq/noticia/noticia/651_366/99affcd299d4c7a10204e39159c5f65d.jpeg"
    },
    {
      id: 3,
      title: "Show de Rock",
      location: "Estádio Municipal",
      date: "18/10/24",
      price: "R$ 80",
      category: "Música",
      artist: "The Electric Storm",
      address: "Avenida Principal, 500",
      time: "20:00",
      image: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2023/12/foto-stock-show-metal-jovens.jpg"
    },
    {
      id: 4,
      title: "Teatro: Romeu e Julieta",
      location: "Teatro Nacional",
      date: "20/10/24",
      price: "R$ 60",
      category: "Teatro",
      artist: "Companhia Dramática",
      address: "Praça das Artes, 200",
      time: "19:30",
      image: "https://www.liciafabio.com.br/wp-content/uploads/2018/03/WhatsApp-Image-2018-03-09-at-10.54.36.jpeg"
    },
    {
      id: 5,
      title: "Festa Junina 2024",
      location: "Parque Central",
      date: "25/10/24",
      price: "Grátis",
      category: "Festividades",
      artist: "Diversos",
      address: "Parque Central - Zona Verde",
      time: "18:00",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 6,
      title: "Apresentação de Dança Contemporânea",
      location: "Centro de Artes",
      date: "22/10/24",
      price: "R$ 40",
      category: "Dança",
      artist: "Coletivo Movimento",
      address: "Rua das Flores, 345",
      time: "20:00",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 7,
      title: "Cinema ao Ar Livre",
      location: "Praça do Cinema",
      date: "26/10/24",
      price: "Grátis",
      category: "Cinema",
      artist: "Sessão Especial",
      address: "Praça Central - Projeção Aberta",
      time: "19:00",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 8,
      title: "Workshop de Fotografia",
      location: "Estúdio Criativo",
      date: "28/10/24",
      price: "R$ 35",
      category: "Workshop",
      artist: "Prof. Carlos Silva",
      address: "Rua do Comércio, 789",
      time: "14:00",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 9,
      title: "Carnaval Antecipado",
      location: "Avenida Paulista",
      date: "30/10/24",
      price: "Grátis",
      category: "Festividades",
      artist: "Escolas de Samba",
      address: "Avenida Paulista - Bloco Grande",
      time: "17:00",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 10,
      title: "Concerto de Clássica",
      location: "Sala de Concertos",
      date: "05/11/24",
      price: "R$ 75",
      category: "Música",
      artist: "Orquestra Sinfônica",
      address: "Avenida das Artes, 1000",
      time: "19:00",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 11,
      title: "Teatro: A Comédia do Amor",
      location: "Teatro Pequeno",
      date: "08/11/24",
      price: "R$ 45",
      category: "Teatro",
      artist: "Grupo de Comédia",
      address: "Rua Alegre, 456",
      time: "20:00",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 12,
      title: "Stand-up Comedy",
      location: "Casa das Gargalhadas",
      date: "10/11/24",
      price: "R$ 30",
      category: "Humor",
      artist: "Humoristas Locais",
      address: "Rua da Diversão, 321",
      time: "21:00",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 13,
      title: "Festival de Gastronomia",
      location: "Praça da Alimentação",
      date: "15/11/24",
      price: "Grátis",
      category: "Festividades",
      artist: "Chefs Renomados",
      address: "Praça Central - Gastronomia",
      time: "11:00",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 14,
      title: "Dança: Ballet Clássico",
      location: "Auditório Principal",
      date: "12/11/24",
      price: "R$ 65",
      category: "Dança",
      artist: "Academia de Ballet",
      address: "Avenida Real, 2000",
      time: "19:30",
      image: "https://via.placeholder.com/400"
    },
    {
      id: 15,
      title: "Show Sertanejo",
      location: "Arena Eventos",
      date: "20/11/24",
      price: "R$ 55",
      category: "Música",
      artist: "Dupla Sertaneja",
      address: "Zona Leste - Complexo",
      time: "22:00",
      image: "https://via.placeholder.com/400"
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const isFavorite = prev.includes(id);
      const next = isFavorite ? prev.filter((f) => f !== id) : [...prev, id];
      showToast(isFavorite ? "Evento removido dos favoritos." : "Evento salvo nos favoritos.");
      return next;
    });
  };

  const isPaidEvent = (price) => {
    return price && price !== "Grátis" && price.includes("R$");
  };

  const handleParticipate = (event) => {
    if (isPaidEvent(event.price) && !user) {
      setShowLoginModal(true);
      showToast("Acesse sua conta para finalizar a inscrição.", "info");
    } else {
      showToast(`Inscrição confirmada: ${event.title}.`, "success");
    }
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowLoginModal(false);
    showToast(`Bem-vindo, ${userData.name}! Você já pode confirmar sua presença.`, "success");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    showToast("Você saiu com segurança.", "info");
  };

  const filteredEvents = events.filter((e) => {
    return (
      (!filters.location || e.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.category || e.category === filters.category) &&
      (!filters.price || e.price.includes(filters.price))
    );
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: colors.lightBg }}>
      {/* SIDEBAR LATERAL */}
      <div style={{
        width: "320px",
        background: colors.white,
        padding: "25px 20px",
        borderRight: `2px solid ${colors.purple}`,
        overflowY: "auto",
        boxShadow: "0 0 20px rgba(59, 11, 57, 0.1)"
      }}>
        {/* LOGO */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.blue} 100%)`,
          color: colors.white,
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "25px",
          textAlign: "center"
        }}>
          <h2 style={{ margin: "0", fontSize: "20px", fontWeight: "bold" }}>🎭 Cultura-IA</h2>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", opacity: 0.9 }}>Eventos Locais</p>
        </div>

        {/* USUÁRIO */}
        {user && (
          <div style={{
            background: colors.purple,
            color: colors.white,
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "20px"
          }}>
            <p style={{ margin: "0 0 8px 0", fontSize: "12px" }}>👤 Conectado como</p>
            <p style={{ margin: "0 0 10px 0", fontWeight: "bold", fontSize: "14px" }}>{user.name}</p>
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "6px",
                background: colors.yellow,
                color: colors.purple,
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "bold"
              }}
            >
              Sair
            </button>
          </div>
        )}

        {/* FILTROS */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            fontSize: "12px",
            fontWeight: "bold",
            color: colors.purple,
            marginBottom: "6px",
            textTransform: "uppercase"
          }}>🔍 Localização</label>
          <input
            placeholder="Buscar local..."
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              border: `1px solid ${colors.border}`,
              borderRadius: "6px",
              fontSize: "12px",
              boxSizing: "border-box",
              marginBottom: "15px"
            }}
          />

          <label style={{
            display: "block",
            fontSize: "12px",
            fontWeight: "bold",
            color: colors.purple,
            marginBottom: "6px",
            textTransform: "uppercase"
          }}>🎨 Categoria</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              border: `1px solid ${colors.border}`,
              borderRadius: "6px",
              fontSize: "12px",
              boxSizing: "border-box",
              marginBottom: "15px",
              cursor: "pointer"
            }}
          >
            <option value="">Todas as categorias</option>
            <option>Música</option>
            <option>Arte</option>
            <option>Teatro</option>
            <option>Festividades</option>
            <option>Dança</option>
            <option>Cinema</option>
            <option>Workshop</option>
            <option>Humor</option>
          </select>

          <label style={{
            display: "block",
            fontSize: "12px",
            fontWeight: "bold",
            color: colors.purple,
            marginBottom: "6px",
            textTransform: "uppercase"
          }}>💰 Preço</label>
          <select
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              border: `1px solid ${colors.border}`,
              borderRadius: "6px",
              fontSize: "12px",
              boxSizing: "border-box",
              cursor: "pointer"
            }}
          >
            <option value="">Todos os preços</option>
            <option>Grátis</option>
            <option>R$</option>
          </select>
        </div>

        {/* EVENTOS */}
        <div style={{
          borderTop: `2px solid ${colors.purple}`,
          paddingTop: "15px"
        }}>
          <h3 style={{
            margin: "0 0 12px 0",
            fontSize: "13px",
            color: colors.purple,
            fontWeight: "bold",
            textTransform: "uppercase"
          }}>
            📋 Eventos ({filteredEvents.length})
          </h3>
          <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
            {filteredEvents.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setSelectedEvent(e)}
                aria-pressed={selectedEvent?.id === e.id}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "10px",
                  marginBottom: "8px",
                  border: selectedEvent?.id === e.id ? `2px solid ${colors.yellow}` : `1px solid ${colors.border}`,
                  borderRadius: "6px",
                  cursor: "pointer",
                  background: selectedEvent?.id === e.id ? colors.purple : colors.white,
                  color: selectedEvent?.id === e.id ? colors.white : colors.text,
                  transition: "all 0.2s",
                  boxShadow: selectedEvent?.id === e.id ? `0 0 10px rgba(59, 11, 57, 0.2)` : "none"
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}>
                  {e.title}
                </div>
                <div style={{
                  fontSize: "11px",
                  opacity: 0.8,
                  marginBottom: "2px"
                }}>
                  📍 {e.location}
                </div>
                <div style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: isPaidEvent(e.price) ? "#dc3545" : "#28a745"
                }}>
                  {e.price}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div style={{
        flex: 1,
        padding: "30px",
        overflowY: "auto"
      }}>
        {selectedEvent ? (
          <div>
            {/* HEADER DO EVENTO */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "25px",
              paddingBottom: "15px",
              borderBottom: `2px solid ${colors.yellow}`
            }}>
              <div>
                <h1 style={{
                  margin: "0 0 8px 0",
                  color: colors.purple,
                  fontSize: "32px"
                }}>
                  {selectedEvent.title}
                </h1>
                <p style={{
                  margin: 0,
                  color: colors.textLight,
                  fontSize: "14px"
                }}>
                  Categoria: {selectedEvent.category}
                </p>
              </div>
              <button
                onClick={() => toggleFavorite(selectedEvent.id)}
                style={{
                  fontSize: "36px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "transform 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              >
                {favorites.includes(selectedEvent.id) ? "❤️" : "🤍"}
              </button>
            </div>

            {/* ALERTA DE EVENTO PAGO */}
            {isPaidEvent(selectedEvent.price) && (
              <div style={{
                background: `${colors.yellow}20`,
                border: `2px solid ${colors.yellow}`,
                padding: "12px 16px",
                borderRadius: "8px",
                marginBottom: "25px",
                color: colors.purple,
                fontSize: "14px",
                fontWeight: "bold"
              }}>
                💳 Evento pago. {!user ? "Faça login para participar." : ""}
              </div>
            )}

            {/* IMAGEM */}
            <img
              src={selectedEvent.image}
              alt={`Banner do evento ${selectedEvent.title}`}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "25px",
                border: `2px solid ${colors.purple}`
              }}
            />

            {/* INFORMAÇÕES EM GRID */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              marginBottom: "25px"
            }}>
              {[
                { icon: "📍", title: "Localização", value: selectedEvent.address },
                { icon: "🎤", title: "Artista", value: selectedEvent.artist },
                { icon: "📅", title: "Data", value: selectedEvent.date },
                { icon: "⏰", title: "Horário", value: selectedEvent.time }
              ].map((info, idx) => (
                <div key={idx} style={{
                  background: colors.white,
                  padding: "15px",
                  borderRadius: "8px",
                  border: `1px solid ${colors.border}`,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
                }}>
                  <h3 style={{
                    margin: "0 0 8px 0",
                    color: colors.purple,
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}>
                    {info.icon} {info.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: colors.text,
                    fontSize: "14px"
                  }}>
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* DESCRIÇÃO */}
            <div style={{
              background: colors.white,
              padding: "20px",
              borderRadius: "8px",
              border: `1px solid ${colors.border}`,
              marginBottom: "25px"
            }}>
              <h3 style={{
                margin: "0 0 12px 0",
                color: colors.purple,
                fontSize: "16px",
                fontWeight: "bold"
              }}>
                📝 Descrição
              </h3>
              <p style={{
                margin: 0,
                color: colors.text,
                lineHeight: "1.6"
              }}>
                Evento incrível ao vivo com todas as atrações e entretenimento. Venha aproveitar uma experiência cultural única e memorável com a comunidade local. Não perca!
              </p>
            </div>

            {/* BOTÃO DE PARTICIPAÇÃO */}
            <button
              onClick={() => handleParticipate(selectedEvent)}
              style={{
                width: "100%",
                background: isPaidEvent(selectedEvent.price) && !user
                  ? colors.blue
                  : colors.purple,
                color: colors.white,
                padding: "18px",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: `0 4px 12px rgba(59, 11, 57, 0.3)`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 6px 16px rgba(59, 11, 57, 0.4)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = `0 4px 12px rgba(59, 11, 57, 0.3)`;
              }}
            >
              {isPaidEvent(selectedEvent.price) && !user ? "🔐 LOGIN PARA PARTICIPAR" : "✅ PARTICIPAR DO EVENTO"}
            </button>

            {showLoginModal && (
              <LoginRegister
                onSuccess={handleLoginSuccess}
                onCancel={() => setShowLoginModal(false)}
                eventTitle={selectedEvent.title}
              />
            )}
          </div>
        ) : (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            flexDirection: "column",
            color: colors.textLight
          }}>
            <div style={{ fontSize: "64px", marginBottom: "20px" }}>🎬</div>
            <p style={{ fontSize: "18px", margin: "0 0 8px 0" }}>Bem-vindo ao Cultura-IA</p>
            <p style={{ fontSize: "14px", margin: 0 }}>Selecione um evento na lista para ver os detalhes</p>
          </div>
        )}
      </div>
      {toastMessage && (
        <div className={`notification notification--${toastType}`} role="status" aria-live="polite" aria-atomic="true">
          <span className="notification__icon">{getToastIcon(toastType)}</span>
          <span>{toastMessage}</span>
        </div>
      )}
      <SpeedInsights />
    </div>
  );
}