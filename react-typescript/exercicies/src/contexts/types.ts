interface Preferences {
  playback: number;
  volume: number;
  qualidade: string;
}

export interface User {
  aulas: number;
  cursos: number;
  id: number;
  idade: number;
  nome: string;
  preferencias: Preferences;
}

export interface UserContextProps {
  data: User | null;
  loading: boolean;
  error: string | null;
}
