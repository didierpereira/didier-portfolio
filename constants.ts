export const SCROLL_POSITIONS = {
  inicio: 0,
  sobreMi: 500,
  servicios: 1300,
  proyectos: 2000,
  contacto: 2300
};

export const SECTIONS = {
  inicio: { label: "INICIO", position: SCROLL_POSITIONS.inicio },
  sobreMi: { label: "SOBRE MI", position: SCROLL_POSITIONS.sobreMi },
  servicios: { label: "SERVICIOS", position: SCROLL_POSITIONS.servicios },
  proyectos: { label: "PROYECTOS", position: SCROLL_POSITIONS.proyectos },
  contacto: { label: "CONTACTO", position: SCROLL_POSITIONS.contacto },
};

export const SCROLL_POSITIONS_MOBILE = {
  inicio: 0,
  sobreMi: 500,
  servicios: 1500,
  proyectos: 3000,
  contacto: 4000
};

export const SECTIONS_MOBILES = {
  inicio: { label: "INICIO", position: SCROLL_POSITIONS_MOBILE.inicio },
  sobreMi: { label: "SOBRE MI", position: SCROLL_POSITIONS_MOBILE.sobreMi },
  servicios: { label: "SERVICIOS", position: SCROLL_POSITIONS_MOBILE.servicios },
  proyectos: { label: "PROYECTOS", position: SCROLL_POSITIONS_MOBILE.proyectos },
  contacto: { label: "CONTACTO", position: SCROLL_POSITIONS_MOBILE.contacto },
};

// Sistema de scroll basado en ids (robusto y responsive)
export const NAV_SECTIONS = [
  { key: 'inicio',    label: 'INICIO',    id: 'inicio'    },
  { key: 'sobreMi',  label: 'SOBRE MI',  id: 'sobre-mi'  },
  { key: 'servicios',label: 'SERVICIOS', id: 'servicios' },
  { key: 'proyectos',label: 'PROYECTOS', id: 'proyectos' },
  { key: 'contacto', label: 'CONTACTO',  id: 'contacto'  },
] as const;