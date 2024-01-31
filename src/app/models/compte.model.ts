export interface comptel{
    id: number;
    iban: String;
    type_compe: String;
    solde: number;
    
}

export interface compteForm{
    id:number;
    nom:String;
    prenom:String;
    dnaiss:Date;
    sexe:String;
    adresse:String;
    courriel:String;
    mot_de_passe:String;
    tel:Number;
    nationalite:String;
}