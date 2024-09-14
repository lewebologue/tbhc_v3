interface Proprietaire {
  code: string;
}

interface Equipe {
  id: number;
  nom: string;
  nom_court: string;
  abreviation: string;
  code: string;
  logo: string;
  proprietaire: Proprietaire;
}

interface Position {
  position: number;
  participant_id: number;
  equipe: Equipe;
  logo: string;
  nombre_victoire: number;
  nombre_nul: number;
  nombre_defaite: number;
  nombre_point: number;
  nombre_rencontres_joues: number;
  dernier_resultats: any[];
  nombre_vprl: number;
  nombre_dprl: number;
  nombre_but_marque: number;
  nombre_but_concede: number;
  nombre_penalites: number;
}

interface Classement {
  classement_id: number;
  positions: Position[];
}

interface ApiResponse {
  data: Classement[];
}