import { useEffect, useRef, useState } from "react";

export default function LoginRegister({ onSuccess, onCancel, eventTitle }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const nameInput = useRef(null);

  const colors = {
    purple: "var(--primary-purple)",
    blue: "var(--primary-blue)",
    yellow: "var(--primary-yellow)",
    white: "#ffffff"
  };

  useEffect(() => {
    if (!isLogin && nameInput.current) {
      nameInput.current.focus();
    }
  }, [isLogin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError("Preencha todos os campos");
        return;
      }
      if (!validateEmail(formData.email)) {
        setError("Email inválido");
        return;
      }
    } else {
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setError("Preencha todos os campos");
        return;
      }
      if (!validateEmail(formData.email)) {
        setError("Email inválido");
        return;
      }
      if (formData.password.length < 6) {
        setError("Senha deve ter pelo menos 6 caracteres");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("As senhas não conferem");
        return;
      }
    }

    const userData = {
      email: formData.email,
      name: isLogin ? "Usuário" : formData.name,
      phone: formData.phone || "",
    };

    localStorage.setItem("user", JSON.stringify(userData));
    onSuccess(userData);
  };

  const handleKeyboardClose = (e) => {
    if (e.key === "Escape") {
      onCancel();
    }
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-title"
      onKeyDown={handleKeyboardClose}
    >
      <div className="modal-card">
        <h2 id="auth-title">{isLogin ? "🔓 Faça Login" : "✍️ Criar Conta"}</h2>
        <p className="modal-copy">
          Para participar de <strong>{eventTitle}</strong>
        </p>

        <form className="modal-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="field-group">
              <label htmlFor="name-field">Nome Completo</label>
              <input
                ref={nameInput}
                id="name-field"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="input-field"
              />
            </div>
          )}

          <div className="field-group">
            <label htmlFor="email-field">Email</label>
            <input
              id="email-field"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className="input-field"
            />
          </div>

          {!isLogin && (
            <div className="field-group">
              <label htmlFor="phone-field">Telefone</label>
              <input
                id="phone-field"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="input-field"
              />
            </div>
          )}

          <div className="field-group">
            <label htmlFor="password-field">Senha</label>
            <input
              id="password-field"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="input-field"
            />
          </div>

          {!isLogin && (
            <div className="field-group">
              <label htmlFor="confirm-password-field">Confirmar Senha</label>
              <input
                id="confirm-password-field"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="input-field"
              />
            </div>
          )}

          {error && <div className="error-box">{error}</div>}

          <button type="submit" className="primary-btn">
            {isLogin ? "Entrar" : "Criar Conta"}
          </button>
        </form>

        <p className="switch-copy">
          {isLogin ? "Não tem conta?" : "Já tem conta?"}
          <button
            type="button"
            className="text-btn"
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({
                email: "",
                password: "",
                confirmPassword: "",
                name: "",
                phone: "",
              });
              setError("");
            }}
          >
            {isLogin ? "Cadastre-se" : "Faça login"}
          </button>
        </p>

        <button type="button" className="secondary-btn" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
