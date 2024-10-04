type Proprietaire = {
  code: string;
}

type Equipe = {
  id: number;
  nom: string;
  nom_court: string;
  abreviation: string;
  code: string;
  logo: string;
  proprietaire: Proprietaire;
}

type Position = {
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

type Classement = {
  classement_id: number;
  positions: Position[];
}

export type ApiResponse = {
  data: Classement[];
}