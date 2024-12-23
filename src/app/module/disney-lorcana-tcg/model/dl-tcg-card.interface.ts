export interface DlTcgCard {  
    Artist: string; // Nombre del artista
    Set_Name: string; // Nombre del set al que pertenece la carta
    Classifications: string; // Clasificaciones de la carta (separadas por comas)
    Date_Added: string; // Fecha en que se añadió la carta (formato ISO 8601)
    Set_Num: number; // Número del set
    Color: string; // Color de la carta
    Franchise: string; // Franquicia a la que pertenece
    Image: string; // URL de la imagen de la carta
    Cost: number; // Costo de la carta
    Inkable: boolean; // Indica si la carta es "inkable"
    Name: string; // Nombre completo de la carta
    Type: string; // Tipo de carta (e.g., Character)
    Lore: number; // Cantidad de "Lore" que genera la carta
    Rarity: string; // Rareza de la carta
    Unique_ID: string; // Identificador único de la carta
    Card_Num: number; // Número de carta dentro del set
    Body_Text: string; // Texto del cuerpo de la carta (habilidades)
    Willpower: number; // Valor de "Willpower" de la carta
    Date_Modified: string; // Fecha de última modificación (formato ISO 8601 o con decimales)
    Strength: number; // Valor de "Strength" de la carta
    Set_ID: string; // Identificador del set
}
